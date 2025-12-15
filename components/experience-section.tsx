"use client";

import { useInView } from "@/hooks/use-in-view";
import { Briefcase, ExternalLink, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const experiences = [
    {
        company: "Công ty TNHH Tạ Thanh An Group",
        role: "Fullstack Engineer",
        period: "05/2025 - 12/2025",
        description:
            "Participate in developing and publishing anti-phishing tools with more than 10,000 users. Participate in CRM development for companies and commercial versions",
        skills: ["React", "TypeScript", "NodeJS", "GraphQL"],
        link: "https://uytinmang.vn",
    },
    {
        company: "FPT Software",
        role: "Full Stack Developer",
        period: "04/2024 - 07/2024",
        description: "Lead backend development for intern-level applications. ",
        skills: ["Springboot", "Node.js", "PostgreSQL", "AWS"],
        link: "https://startupxyz.example.com",
    },
    // {
    //     company: "Digital Agency Co",
    //     role: "Junior Developer",
    //     period: "2018 - 2020",
    //     description:
    //         "Developed responsive websites for various clients across different industries. Gained extensive experience in modern CSS and JavaScript.",
    //     skills: ["JavaScript", "CSS", "WordPress", "PHP"],
    //     link: "https://digitalagency.example.com",
    // },
];

export function ExperienceSection() {
    const { ref, isInView } = useInView({ threshold: 0.2 });

    return (
        <section id="experience" className="py-20 lg:py-32" ref={ref}>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-sm text-primary font-medium uppercase tracking-wider mb-2">
                        Experience
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-balance">
                        My Professional Journey
                    </h3>
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

                    {experiences.map((exp, index) => (
                        <div
                            key={exp.company}
                            className={cn(
                                "relative pl-12 mb-12 last:mb-0 transition-all duration-700",
                                isInView
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 -translate-x-10"
                            )}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10">
                                <Briefcase className="w-4 h-4 text-primary-foreground" />
                            </div>

                            {/* Card */}
                            <div className="glass rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300 group">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <h4 className="text-lg font-semibold">
                                            {exp.role}
                                        </h4>
                                        <a
                                            href={exp.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-primary">
                                        <Calendar className="w-4 h-4" />
                                        {exp.period}
                                    </div>
                                </div>
                                <p className="text-muted-foreground font-medium mb-3">
                                    {exp.company}
                                </p>
                                <p className="text-sm text-muted-foreground mb-4">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className="text-xs"
                                        >
                                            {skill}
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
