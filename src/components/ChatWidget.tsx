import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, X, Send } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://database.altan.ai';
const supabaseKey = 'tenant_ff53c350_6e41_46e8_84fc_daf5973056df';
const supabase = createClient(supabaseUrl, supabaseKey);

interface Message {
  id: string;
  session_id: string;
  sender_type: 'user' | 'admin';
  message: string;
  created_at: string;
}

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [sessionId, setSessionId] = useState<string>('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [hasStartedChat, setHasStartedChat] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existingSessionId = localStorage.getItem('chat_session_id');
    if (existingSessionId) {
      setSessionId(existingSessionId);
      setHasStartedChat(true);
      loadMessages(existingSessionId);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (!sessionId || !isOpen) return;
    const interval = setInterval(() => loadMessages(sessionId), 3000);
    return () => clearInterval(interval);
  }, [sessionId, isOpen]);

  const loadMessages = async (sid: string) => {
    try {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('session_id', sid)
        .order('created_at', { ascending: true });
      if (!error && data) setMessages(data);
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

  const startChat = async () => {
    if (!userName || !userEmail) {
      alert('Please enter your name and email');
      return;
    }
    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setSessionId(newSessionId);
    localStorage.setItem('chat_session_id', newSessionId);
    setHasStartedChat(true);
  };

  const sendMessage = async () => {
    if (!newMessage.trim()) return;
    setNewMessage('');
    loadMessages(sessionId);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <Button onClick={() => setIsOpen(true)} className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg z-50">
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Chat with Us</CardTitle>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20">
                <X className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col p-0">
            {!hasStartedChat ? (
              <div className="flex-1 p-4 flex flex-col justify-center space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <Input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your Email</label>
                  <Input type="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="john@example.com" />
                </div>
                <Button onClick={startChat} className="w-full bg-gradient-to-r from-blue-600 to-purple-600">Start Chat</Button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender_type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[75%] rounded-lg px-4 py-2 ${msg.sender_type === 'user' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-gray-200 text-gray-900'}`}>
                        <p className="text-sm">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
                <div className="p-4 border-t bg-white">
                  <div className="flex space-x-2">
                    <Input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyPress={handleKeyPress} placeholder="Type your message..." className="flex-1" />
                    <Button onClick={sendMessage} className="bg-gradient-to-r from-blue-600 to-purple-600">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
};
