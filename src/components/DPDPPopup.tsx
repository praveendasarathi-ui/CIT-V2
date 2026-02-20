import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X, Sparkles, ArrowRight, ShieldAlert, Lock, Fingerprint } from 'lucide-react';
import { Button } from './ui/button';
import {
    Dialog,
    DialogContent,
} from './ui/dialog';

const DPDPPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if user has already seen the popup in this session
        const hasSeen = sessionStorage.getItem('dpdp_popup_seen');
        const cookieConsent = localStorage.getItem('cookie-consent');

        if (!hasSeen) {
            // Show after 10 seconds, but wait for cookie consent to be settled if possible
            const delay = cookieConsent ? 5000 : 10000;
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, delay);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem('dpdp_popup_seen', 'true');
    };

    const handleContact = () => {
        setIsOpen(false);
        sessionStorage.setItem('dpdp_popup_seen', 'true');
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden border-0 shadow-2xl bg-transparent">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900 text-white"
                >
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                        <ShieldCheck className="w-64 h-64 rotate-12" />
                    </div>

                    <div className="relative p-6 md:p-12">
                        <button
                            onClick={handleClose}
                            aria-label="Close"
                            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-lg">
                                <Sparkles className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm">Priority Advisory</span>
                        </div>

                        <h2 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 leading-tight">
                            India's DPDP Act is <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">NOW ACTIVE.</span>
                        </h2>

                        <p className="text-base md:text-lg text-blue-100 mb-6 md:mb-8 leading-relaxed">
                            organisations are now legally obligated to protect personal data. Is your business safe from penalties and reputational risk?
                        </p>

                        <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                            {[
                                { icon: ShieldAlert, text: "Comprehensive Gap Analysis & Compliance Roadmaps" },
                                { icon: Lock, text: "End-to-End Data Encryption & Access Governance" },
                                { icon: Fingerprint, text: "Privacy-by-Design Architecture & Data Mapping" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 md:gap-4 bg-white/5 p-3 md:p-4 rounded-xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-colors">
                                    <div className="p-2 bg-white/10 rounded-lg group-hover:scale-110 transition-transform">
                                        <item.icon className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
                                    </div>
                                    <span className="text-sm md:font-medium text-blue-50">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                onClick={handleContact}
                                className="flex-1 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-black text-lg shadow-xl hover:shadow-yellow-500/20 transition-all group"
                            >
                                SECURE YOUR CONSULTATION
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>

                        <p className="text-center mt-6 text-sm text-blue-300 font-medium">
                            Join leading enterprises securing their future with CenturianIT
                        </p>
                    </div>
                </motion.div>
            </DialogContent>
        </Dialog>
    );
};

export default DPDPPopup;
