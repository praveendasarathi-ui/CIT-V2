import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Shield, X, Settings2, Check, ExternalLink } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from './ui/dialog';
import { Switch } from './ui/switch';
import { Label } from './ui/label';

const COOKIE_CONSENT_KEY = 'centurianit_cookie_consent';

interface ConsentSettings {
    essential: boolean;
    analytics: boolean;
    marketing: boolean;
}

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showManage, setShowManage] = useState(false);
    const [settings, setSettings] = useState<ConsentSettings>({
        essential: true,
        analytics: true,
        marketing: true,
    });

    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const recordConsent = async (type: 'accept' | 'reject' | 'manage', data: ConsentSettings) => {
        try {
            await supabase.from('cookie_consents').insert([
                {
                    consent_type: type,
                    consent_data: data,
                    user_agent: window.navigator.userAgent,
                },
            ]);
        } catch (error) {
            console.error('Failed to log consent audit:', error);
        }
    };

    const handleAcceptAll = async () => {
        const finalSettings = { essential: true, analytics: true, marketing: true };
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(finalSettings));
        await recordConsent('accept', finalSettings);
        setIsVisible(false);
    };

    const handleRejectAll = async () => {
        const finalSettings = { essential: true, analytics: false, marketing: false };
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(finalSettings));
        await recordConsent('reject', finalSettings);
        setIsVisible(false);
    };

    const handleSavePreferences = async () => {
        localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(settings));
        await recordConsent('manage', settings);
        setIsVisible(false);
        setShowManage(false);
    };

    if (!isVisible) return null;

    return (
        <>
            <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 animate-in fade-in slide-in-from-bottom-10 duration-500">
                <Card className="max-w-7xl mx-auto border-0 shadow-2xl bg-white/95 backdrop-blur-md border-t border-gray-100 overflow-hidden">
                    <CardContent className="p-4 md:p-8">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
                            <div className="hidden md:flex flex-shrink-0 w-12 h-12 bg-blue-50 rounded-2xl items-center justify-center">
                                <Shield className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="flex-1">
                                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
                                    <Shield className="h-5 w-5 text-blue-600 md:hidden" />
                                    Cookie Consent & Privacy
                                </h2>
                                <p className="text-[13px] md:text-sm text-gray-600 leading-relaxed">
                                    We respect your privacy. By continuing to use this website, you consent to the collection and processing of your personal data by CenturianIT for specified and lawful purposes such as responding to inquiries, providing services, improving website performance, and ensuring security.
                                </p>
                                <p className="mt-2 text-[13px] md:text-sm text-gray-600 leading-relaxed">
                                    For users located in India, personal data is processed in accordance with the Digital Personal Data Protection Act, 2023, based on your explicit and informed consent. For users in New Zealand and other regions, processing follows the New Zealand Privacy Act 2020.
                                </p>
                                <div className="flex items-center gap-4 text-xs font-medium text-blue-600 mt-4">
                                    <a href="/privacy-policy" className="hover:underline flex items-center gap-1">
                                        Privacy Policy <ExternalLink className="h-3 w-3" />
                                    </a>
                                    <a href="/cookie-policy" className="hover:underline flex items-center gap-1">
                                        Cookie Policy <ExternalLink className="h-3 w-3" />
                                    </a>
                                    <a href="/ai-disclosure" className="hover:underline flex items-center gap-1">
                                        AI Disclosure <ExternalLink className="h-3 w-3" />
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-6 md:mt-0 w-full md:w-auto shrink-0">
                                <Button
                                    onClick={handleAcceptAll}
                                    className="w-full sm:flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-bold h-10 md:h-12"
                                >
                                    Accept All
                                </Button>
                                <div className="flex gap-2 sm:gap-4 w-full sm:w-auto">
                                    <Button
                                        variant="outline"
                                        onClick={() => setShowManage(true)}
                                        className="flex-1 sm:flex-none border-gray-200 hover:bg-gray-50 h-10 md:h-12 text-xs md:text-sm"
                                    >
                                        <Settings2 className="mr-2 h-4 w-4" />
                                        Manage
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        onClick={handleRejectAll}
                                        className="flex-1 sm:flex-none text-gray-500 hover:text-gray-700 hover:bg-gray-100 h-10 md:h-12 text-xs md:text-sm"
                                    >
                                        Reject All
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Dialog open={showManage} onOpenChange={setShowManage}>
                <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-0 shadow-2xl">
                    <DialogHeader className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        <DialogTitle className="text-2xl font-bold">Manage Cookie Preferences</DialogTitle>
                        <DialogDescription className="text-blue-50">
                            Customize how your data is collected and used.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="p-6 space-y-6">
                        <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/50">
                            <div className="space-y-1">
                                <Label className="text-base font-bold text-gray-900">Essential Cookies</Label>
                                <p className="text-sm text-gray-500">Necessary for the website to function properly. Cannot be disabled.</p>
                            </div>
                            <Switch checked={true} disabled />
                        </div>

                        <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-gray-100">
                            <div className="space-y-1">
                                <Label className="text-base font-bold text-gray-900">Analytics & Performance</Label>
                                <p className="text-sm text-gray-500">Helps us understand how visitors interact with our website.</p>
                            </div>
                            <Switch
                                checked={settings.analytics}
                                onCheckedChange={(checked) => setSettings(s => ({ ...s, analytics: checked }))}
                            />
                        </div>

                        <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-gray-100">
                            <div className="space-y-1">
                                <Label className="text-base font-bold text-gray-900">Marketing & Personalization</Label>
                                <p className="text-sm text-gray-500">Used to deliver more relevant content and advertisements.</p>
                            </div>
                            <Switch
                                checked={settings.marketing}
                                onCheckedChange={(checked) => setSettings(s => ({ ...s, marketing: checked }))}
                            />
                        </div>
                    </div>

                    <DialogFooter className="p-6 bg-gray-50 flex-col sm:flex-row gap-3">
                        <Button variant="ghost" onClick={() => setShowManage(false)}>Cancel</Button>
                        <Button
                            onClick={handleSavePreferences}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8"
                        >
                            Save Preferences
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default CookieConsent;
