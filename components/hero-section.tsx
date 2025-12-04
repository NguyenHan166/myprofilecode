"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { SocialLinks } from "@/components/social-links";

export function HeroSection() {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!heroRef.current) return;
            const { clientX, clientY } = e;
            const { width, height } = heroRef.current.getBoundingClientRect();
            const x = (clientX / width - 0.5) * 20;
            const y = (clientY / height - 0.5) * 20;
            heroRef.current.style.setProperty("--mouse-x", `${x}px`);
            heroRef.current.style.setProperty("--mouse-y", `${y}px`);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section
            ref={heroRef}
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />

            {/* Animated Background Circles */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Profile Image */}
                    <div className="relative animate-float">
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass p-2 animate-pulse-glow">
                            <Image
                                src="/profile.jpg"
                                alt="Profile"
                                width={320}
                                height={320}
                                className="rounded-full object-cover w-full h-full"
                                priority
                            />
                        </div>
                        {/* Decorative Ring */}
                        <div
                            className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin"
                            style={{ animationDuration: "20s" }}
                        />
                    </div>

                    {/* Hero Content */}
                    <div className="text-center lg:text-left max-w-2xl">
                        <p className="text-primary font-medium mb-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            Hello, I&apos;m
                        </p>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 text-balance">
                            Hân <span className="text-primary">Nguyễn</span>
                        </h1>
                        <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                            Full Stack Developer
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 text-pretty">
                            Back-end engineer focused on building scalable
                            services and APIs. I also craft accessible,
                            pixel-perfect interfaces—so I can ship end-to-end
                            experiences with both solid engineering and
                            thoughtful UX.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
                            <Button size="lg" className="gap-2 group">
                                <Mail className="w-4 h-4 group-hover:animate-bounce" />
                                Contact Me
                            </Button>
                            {/* <Button
                                size="lg"
                                variant="outline"
                                className="gap-2 group bg-transparent"
                            >
                                <Download className="w-4 h-4 group-hover:animate-bounce" />
                                Download CV
                            </Button> */}
                        </div>

                        {/* Social Links */}
                        <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500">
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
