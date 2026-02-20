import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Send, RefreshCw, User } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

interface ChatSession {
  id: string;
  session_id: string;
  user_name: string;
  user_email: string;
  status: string;
  created_at: string;
  last_message?: string;
  unread_count?: number;
}

interface Message {
  id: string;
  session_id: string;
  sender_type: 'user' | 'admin' | 'system';
  message: string;
  created_at: string;
}

const AdminChat: React.FC = () => {
  const navigate = useNavigate();
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [selectedSession, setSelectedSession] = useState<ChatSession | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Check authentication
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('admin_authenticated');
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [navigate]);

  // Load sessions on mount
  useEffect(() => {
    loadSessions();
  }, []);

  // Poll for new sessions and messages every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      loadSessions();
      if (selectedSession) {
        loadMessages(selectedSession.session_id);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [selectedSession]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const loadSessions = async () => {
    try {
      const { data, error } = await supabase
        .from('chat_sessions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading sessions:', error);
        return;
      }

      if (data) {
        setSessions(data);
      }
    } catch (error) {
      console.error('Error loading sessions:', error);
    }
  };

  const loadMessages = async (sessionId: string) => {
    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('session_id', sessionId)
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error loading messages:', error);
        return;
      }

      if (data) {
        setMessages(data);
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || !selectedSession) return;

    try {
      const { error } = await supabase
        .from('chat_messages')
        .insert([{
          session_id: selectedSession.session_id,
          sender_type: 'admin',
          message: newMessage
        }]);

      if (error) {
        console.error('Error sending message:', error);
        return;
      }

      setNewMessage('');
      loadMessages(selectedSession.session_id);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleRefresh = () => {
    setIsLoading(true);
    loadSessions();
    if (selectedSession) {
      loadMessages(selectedSession.session_id);
    }
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Live Chat</h1>
            <p className="text-gray-600">Manage customer conversations</p>
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={handleRefresh}
              variant="outline"
              disabled={isLoading}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button
              onClick={() => navigate('/admin/dashboard')}
              variant="outline"
            >
              Back to Dashboard
            </Button>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="grid grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          {/* Sessions List */}
          <Card className="col-span-1 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardTitle>Chat Sessions ({sessions.length})</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-y-auto h-[calc(100vh-300px)]">
                {sessions.length === 0 ? (
                  <div className="p-4 text-center text-gray-500">
                    No chat sessions yet
                  </div>
                ) : (
                  sessions.map((session) => (
                    <div
                      key={session.id}
                      onClick={() => {
                        setSelectedSession(session);
                        loadMessages(session.session_id);
                      }}
                      className={`p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors ${selectedSession?.id === session.id ? 'bg-blue-50 border-l-4 border-l-blue-600' : ''
                        }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="h-5 w-5 text-gray-400" />
                          <div>
                            <p className="font-semibold text-sm">{session.user_name}</p>
                            <p className="text-xs text-gray-500">{session.user_email}</p>
                          </div>
                        </div>
                        <Badge
                          variant={session.status === 'active' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {session.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        {new Date(session.created_at).toLocaleString()}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          {/* Messages Area */}
          <Card className="col-span-2 overflow-hidden flex flex-col">
            {selectedSession ? (
              <>
                <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>{selectedSession.user_name}</CardTitle>
                      <p className="text-sm opacity-90">{selectedSession.user_email}</p>
                    </div>
                    <Badge variant="secondary">
                      {selectedSession.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col p-0">
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.sender_type === 'admin' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[75%] rounded-lg px-4 py-2 ${msg.sender_type === 'admin'
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                              : msg.sender_type === 'user'
                                ? 'bg-gray-200 text-gray-900'
                                : 'bg-yellow-100 text-gray-700 text-sm italic'
                            }`}
                        >
                          <p className="text-sm">{msg.message}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {new Date(msg.created_at).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input Area */}
                  <div className="p-4 border-t bg-white">
                    <div className="flex space-x-2">
                      <Input
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your message..."
                        className="flex-1"
                      />
                      <Button
                        onClick={sendMessage}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </>
            ) : (
              <CardContent className="flex-1 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <User className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Select a chat session to view messages</p>
                </div>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminChat;
