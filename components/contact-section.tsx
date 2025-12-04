"use client";

import type React from "react";

import { useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { SocialLinks } from "@/components/social-links";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "nvhan166@gmail.com",
        href: "mailto:nvhan166@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+84 0357516001",
        href: "tel:+840357516001",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Hà Nội, Vietnam",
        href: "#",
    },
];

export function ContactSection() {
    const { ref, isInView } = useInView({ threshold: 0.2 });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setFormData({ name: "", email: "", message: "" });
        alert("Message sent successfully!");
    };

    return (
        <section id="contact" className="py-20 lg:py-32" ref={ref}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-sm text-primary font-medium uppercase tracking-wider mb-2">
                        Contact
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-balance">
                        Get In Touch
                    </h3>
                    <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                        If you would like to discuss a project or just say hi,
                        I&apos;m always down to chat.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div
                        className={cn(
                            "transition-all duration-700",
                            isInView
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-10"
                        )}
                    >
                        <h4 className="text-xl font-semibold mb-6">
                            Contact Information
                        </h4>
                        <div className="space-y-4 mb-8">
                            {contactInfo.map((item, index) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-4 p-4 glass rounded-xl hover:scale-[1.02] transition-all duration-300 group",
                                        isInView
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-10"
                                    )}
                                    style={{
                                        transitionDelay: `${index * 100}ms`,
                                    }}
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <item.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">
                                            {item.label}
                                        </p>
                                        <p className="font-medium">
                                            {item.value}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h5 className="text-sm font-semibold mb-4">
                                Follow Me
                            </h5>
                            <SocialLinks />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div
                        className={cn(
                            "transition-all duration-700 delay-200",
                            isInView
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-10"
                        )}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="glass rounded-xl p-6 space-y-6"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Name
                                </label>
                                <Input
                                    id="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    required
                                    className="bg-secondary/50"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    required
                                    className="bg-secondary/50"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    placeholder="Your message..."
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
                                        })
                                    }
                                    required
                                    className="bg-secondary/50 resize-none"
                                />
                            </div>
                            <Button
                                type="submit"
                                size="lg"
                                className="w-full gap-2"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
