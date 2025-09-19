"use client";

import React, { useState, useEffect } from "react";
import { X, Cookie, Eye, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import posthog from "posthog-js";

const wittyMessages = [
    {
        title: "🍪 Cookie Monster's Confession Time!",
        subtitle: "We promise our cookies are less crumbly than the ones you eat",
        description:
            "We use cookies to make your budgeting experience sweeter (and to remember that you prefer dark mode at 2 AM).",
    },
    {
        title: "🕵️ We're Not Stalking You... Much",
        subtitle: "Just keeping tabs on how you use Mudget (in a totally non-creepy way)",
        description:
            "Our analytics help us understand which features make you go 'aha!' and which ones make you go 'argh!'",
    },
    {
        title: "🎭 The Great Cookie Consent Theatre",
        subtitle: "Where everyone's a critic and GDPR is the director",
        description:
            "Legally, we have to ask. Morally, we want to make your financial life easier. Win-win?",
    },
];

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [preferences, setPreferences] = useState({
        essential: true, // Always required
        analytics: false,
        personalization: false,
        marketing: false,
    });
    const [currentMessage, setCurrentMessage] = useState<{
        title: string;
        subtitle: string;
        description: string;
    } | null>(null);

    // Check if user has already made a choice
    useEffect(() => {
        const randomMessage = wittyMessages[Math.floor(Math.random() * wittyMessages.length)];
        
        const consent = localStorage.getItem("mudget-cookie-consent");
        if (!consent) {
            setIsVisible(true);
        } else {
            const savedPreferences = JSON.parse(consent);
            setPreferences(savedPreferences);
            // Initialize PostHog based on saved preferences
            if (savedPreferences.analytics && typeof window !== "undefined") {
                posthog.capture("gdpr_consent_loaded", { consent_given: true });
            }
        }

        setCurrentMessage(randomMessage);
    }, []);

    const savePreferences = (acceptAll = false) => {
        const finalPreferences = acceptAll
            ? { essential: true, analytics: true, personalization: true, marketing: true }
            : preferences;

        localStorage.setItem("mudget-cookie-consent", JSON.stringify(finalPreferences));

        // Configure PostHog based on preferences
        if (typeof window !== "undefined") {
            if (finalPreferences.analytics) {
                posthog.capture("gdpr_consent_given", {
                    type: acceptAll ? "accept_all" : "custom",
                    preferences: finalPreferences,
                });
            } else {
                // Disable PostHog if analytics not consented
                posthog.opt_out_capturing();
            }
        }

        setIsVisible(false);
    };

    const handleRejectAll = () => {
        const minimalPreferences = {
            essential: true,
            analytics: false,
            personalization: false,
            marketing: false,
        };
        setPreferences(minimalPreferences);
        localStorage.setItem("mudget-cookie-consent", JSON.stringify(minimalPreferences));
        
        // Disable PostHog tracking
        if (typeof window !== "undefined") {
            posthog.opt_out_capturing();
        }
        
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 w-96 max-w-[calc(100vw-2rem)]">
            <Card className="border-2 border-primary shadow-2xl animate-in slide-in-from-bottom-5 duration-300">
                <CardHeader className="relative pb-3">
                    <div className="flex items-start justify-between">
                        <div className="flex-1 pr-2">
                            <CardTitle className="text-lg font-bold flex items-center gap-2 leading-tight">
                                {currentMessage?.title}
                            </CardTitle>
                            <p className="text-xs text-muted-foreground mt-1 leading-snug">
                                {currentMessage?.subtitle}
                            </p>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsVisible(false)}
                            className="h-6 w-6 p-0 shrink-0"
                        >
                            <X className="h-3 w-3" />
                        </Button>
                    </div>
                </CardHeader>

                <CardContent className="space-y-3 pt-0">
                    <p className="text-xs leading-relaxed text-muted-foreground">
                        {currentMessage?.description}
                    </p>

                    {!showDetails ? (
                        <div className="space-y-2">
                            <Button
                                onClick={() => savePreferences(true)}
                                size="sm"
                                className="w-full h-8 bg-green-600 hover:bg-green-700 text-xs"
                            >
                                ✨ Accept All
                            </Button>
                            <div className="flex gap-2">
                                <Button
                                    onClick={() => setShowDetails(true)}
                                    variant="outline"
                                    size="sm"
                                    className="flex-1 h-7 text-xs"
                                >
                                    ⚙️ Customize
                                </Button>
                                <Button
                                    onClick={handleRejectAll}
                                    variant="ghost"
                                    size="sm"
                                    className="flex-1 h-7 text-xs text-muted-foreground"
                                >
                                    🚫 Reject
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            <div className="space-y-2 max-h-48 overflow-y-auto">
                                <div className="flex items-center justify-between p-2 bg-muted/50 rounded text-xs">
                                    <div className="flex items-center gap-2">
                                        <Shield className="h-3 w-3 text-green-600" />
                                        <div>
                                            <p className="font-medium">Essential</p>
                                            <p className="text-[10px] text-muted-foreground">
                                                Required for app to work
                                            </p>
                                        </div>
                                    </div>
                                    <Switch checked={true} disabled className="scale-75" />
                                </div>

                                <div className="flex items-center justify-between p-2 bg-muted/50 rounded text-xs">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp className="h-3 w-3 text-blue-600" />
                                        <div>
                                            <p className="font-medium">Analytics</p>
                                            <p className="text-[10px] text-muted-foreground">
                                                Usage patterns & performance
                                            </p>
                                        </div>
                                    </div>
                                    <Switch
                                        checked={preferences.analytics}
                                        onCheckedChange={(checked) =>
                                            setPreferences((prev) => ({
                                                ...prev,
                                                analytics: checked,
                                            }))
                                        }
                                        className="scale-75"
                                    />
                                </div>

                                <div className="flex items-center justify-between p-2 bg-muted/50 rounded text-xs">
                                    <div className="flex items-center gap-2">
                                        <Eye className="h-3 w-3 text-purple-600" />
                                        <div>
                                            <p className="font-medium">Personalization</p>
                                            <p className="text-[10px] text-muted-foreground">
                                                Remember your preferences
                                            </p>
                                        </div>
                                    </div>
                                    <Switch
                                        checked={preferences.personalization}
                                        onCheckedChange={(checked) =>
                                            setPreferences((prev) => ({
                                                ...prev,
                                                personalization: checked,
                                            }))
                                        }
                                        className="scale-75"
                                    />
                                </div>

                                <div className="flex items-center justify-between p-2 bg-muted/50 rounded text-xs">
                                    <div className="flex items-center gap-2">
                                        <Cookie className="h-3 w-3 text-orange-600" />
                                        <div>
                                            <p className="font-medium">Marketing</p>
                                            <p className="text-[10px] text-muted-foreground">
                                                Relevant content & features
                                            </p>
                                        </div>
                                    </div>
                                    <Switch
                                        checked={preferences.marketing}
                                        onCheckedChange={(checked) =>
                                            setPreferences((prev) => ({
                                                ...prev,
                                                marketing: checked,
                                            }))
                                        }
                                        className="scale-75"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-2 pt-1">
                                <Button
                                    onClick={() => savePreferences(false)}
                                    size="sm"
                                    className="flex-1 h-7 text-xs"
                                >
                                    💾 Save
                                </Button>
                                <Button
                                    onClick={() => setShowDetails(false)}
                                    variant="outline"
                                    size="sm"
                                    className="flex-1 h-7 text-xs"
                                >
                                    ⬅️ Back
                                </Button>
                            </div>
                        </div>
                    )}

                    <div className="border-t pt-2">
                        <p className="text-[10px] text-muted-foreground leading-tight">
                            <a href="/privacy" className="underline hover:text-foreground">
                                Privacy
                            </a>
                            {" • "}
                            <a href="/terms" className="underline hover:text-foreground">
                                Terms
                            </a>
                            {" • "}
                            Change anytime in settings 🤝
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default CookieConsent;