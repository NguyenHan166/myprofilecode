"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { languageLabels, type Language } from "@/lib/i18n";

type HeaderContent = {
    logo: string;
    navLinks: ReadonlyArray<{ href: string; label: string }>;
    languageToggleLabel: string;
};

type HeaderProps = {
    content: HeaderContent;
    language: Language;
    onLanguageToggle: () => void;
};

export function Header({ content, language, onLanguageToggle }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "glass py-3" : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="#home" className="text-xl font-bold text-primary">
                    {content.logo}<span className="text-foreground">.</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {content.navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="relative h-9 w-24 overflow-hidden rounded-full border border-border bg-background/50 p-1 text-xs font-semibold text-muted-foreground hover:bg-background/70"
                        onClick={onLanguageToggle}
                        aria-label={content.languageToggleLabel}
                        aria-pressed={language === "vi"}
                    >
                        <span
                            className={cn(
                                "absolute left-1 top-1 h-7 w-11 rounded-full bg-primary shadow-sm transition-transform duration-300 ease-out",
                                language === "vi"
                                    ? "translate-x-11"
                                    : "translate-x-0"
                            )}
                        />
                        <span className="relative z-10 grid w-full grid-cols-2">
                            <span
                                className={cn(
                                    "flex h-7 items-center justify-center transition-colors duration-300",
                                    language === "en"
                                        ? "text-primary-foreground"
                                        : "text-muted-foreground"
                                )}
                            >
                                {languageLabels.en}
                            </span>
                            <span
                                className={cn(
                                    "flex h-7 items-center justify-center transition-colors duration-300",
                                    language === "vi"
                                        ? "text-primary-foreground"
                                        : "text-muted-foreground"
                                )}
                            >
                                {languageLabels.vi}
                            </span>
                        </span>
                    </Button>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <nav className="md:hidden mx-4 mt-3 rounded-lg border border-primary/20 bg-background/95 p-2 shadow-2xl shadow-primary/10 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-300">
                    {content.navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="block rounded-md px-4 py-3.5 text-sm font-medium text-foreground/90 transition-colors duration-300 hover:bg-primary/10 hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}
