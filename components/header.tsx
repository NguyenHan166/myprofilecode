"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
];

export function Header() {
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
                    Home<span className="text-foreground">.</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <nav className="md:hidden glass mt-2 mx-4 rounded-lg p-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="block py-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
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
