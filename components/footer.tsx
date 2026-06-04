import Link from "next/link";
import { SocialLinks } from "@/components/social-links";

type FooterContent = {
    logo: string;
    rights: string;
    quickLinks: ReadonlyArray<{ href: string; label: string }>;
};

type FooterProps = {
    content: FooterContent;
};

export function Footer({ content }: FooterProps) {
    return (
        <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <Link
                            href="#home"
                            className="text-2xl font-bold text-primary inline-block mb-2"
                        >
                            {content.logo}<span className="text-foreground">.</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Nguyễn Hân.{" "}
                            {content.rights}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {content.quickLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <SocialLinks iconSize={18} />
                </div>
            </div>
        </footer>
    );
}
