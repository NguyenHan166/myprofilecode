import {
    Github,
    Linkedin,
    Facebook,
    Instagram,
    Mail,
    Dribbble,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const socialLinks = [
    { icon: Github, href: "https://github.com/NguyenHan166", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    {
        icon: Facebook,
        href: "https://www.facebook.com/han16062003",
        label: "Facebook",
    },
    {
        icon: Instagram,
        href: "https://www.instagram.com/nvhan166v3",
        label: "Instagram",
    },
    { icon: Mail, href: "mailto:nvhan166@gmail.com", label: "Email" },
];

interface SocialLinksProps {
    className?: string;
    iconSize?: number;
}

export function SocialLinks({ className, iconSize = 20 }: SocialLinksProps) {
    return (
        <div className={cn("flex items-center gap-4", className)}>
            {socialLinks.map((link) => (
                <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="p-2 rounded-full glass text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                >
                    <link.icon size={iconSize} />
                </Link>
            ))}
        </div>
    );
}
