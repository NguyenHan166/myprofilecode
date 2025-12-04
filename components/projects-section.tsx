"use client";

import { useState } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "Uy Tín Mạng",
        description:
            "A Scammer Checking Platform helping users identify and avoid online scams effectively.",
        image: "/uytinmang.png",
        tags: ["Node.js", "React", "PostgreSQL"],
        demo: "https://uytinmang.vn",
        github: "https://uytinmang.vn",
    },
    {
        title: "Web AI Photo Editor",
        description:
            "An AI-powered photo editing web application that allows users to enhance and transform images using advanced AI algorithms.",
        image: "/webphoto.png",
        tags: ["React", "Firebase", "Tailwind"],
        demo: "https://web-ai-photo-production.up.railway.app",
        github: "https://github.com/NguyenHan166/web-ai-photo",
    },
    {
        title: "Health Care System",
        description:
            "A comprehensive health care management system for clinics and hospitals to streamline patient care and administrative tasks.",
        image: "/ai-chatbot-interface-modern-dark-theme.jpg",
        tags: ["React", "OpenAI", "Django"],
        demo: "https://github.com/NguyenHan166/healthcare-django",
        github: "https://github.com/NguyenHan166/healthcare-django",
    },
    // {
    //     title: "Portfolio Website",
    //     description:
    //         "A beautiful, responsive portfolio template for developers and designers.",
    //     image: "/portfolio-website-template-dark-minimal.jpg",
    //     tags: ["React", "Framer Motion", "Tailwind"],
    //     demo: "https://nguyenhanprofile.vercel.app",
    //     github: "https://nguyenhanprofile.vercel.app",
    // },
    // {
    //     title: "Weather Dashboard",
    //     description:
    //         "Real-time weather dashboard with location detection and 7-day forecast.",
    //     image: "/weather-dashboard-app-interface-dark-theme.jpg",
    //     tags: ["Vue.js", "Weather API", "Chart.js"],
    //     demo: "https://demo.example.com",
    //     github: "https://github.com/example/weather",
    // },
    // {
    //     title: "Social Media Dashboard",
    //     description:
    //         "Unified dashboard for managing multiple social media accounts with analytics.",
    //     image: "/social-media-analytics-dashboard-dark.png",
    //     tags: ["Next.js", "OAuth", "Recharts"],
    //     demo: "https://demo.example.com",
    //     github: "https://github.com/example/social",
    // },
];

export function ProjectsSection() {
    const { ref, isInView } = useInView({ threshold: 0.1 });
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="projects" className="py-20 lg:py-32" ref={ref}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-sm text-primary font-medium uppercase tracking-wider mb-2">
                        Projects
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-balance">
                        Featured Work
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className={cn(
                                "group glass rounded-xl overflow-hidden transition-all duration-500",
                                isInView
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10",
                                hoveredIndex !== null &&
                                    hoveredIndex !== index &&
                                    "opacity-50"
                            )}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <Button
                                        size="sm"
                                        variant="secondary"
                                        asChild
                                    >
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Demo
                                        </a>
                                    </Button>
                                    <Button size="sm" variant="outline" asChild>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github className="w-4 h-4 mr-2" />
                                            Code
                                        </a>
                                    </Button>
                                </div>
                            </div>
                            <div className="p-5">
                                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
