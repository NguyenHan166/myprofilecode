"use client";

import { useInView } from "@/hooks/use-in-view";
import { GraduationCap, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const education = [
    {
        school: "Posts and Telecommunications Institute of Technology",
        degree: "Information Technology Engineer",
        year: "2021 - 2026",
        description:
            "Dean's List, GPA 3.9/4.0. Focus on web technologies and algorithms.",
    },
    {
        school: "Trường Trung Học Phổ Thông A Hải Hậu",
        // degree: "Bachelor of Science in Software Engineering",
        year: "2018 - 2021",
        description: "Complete the high school program with excellent grades",
    },
];

export function EducationSection() {
    const { ref, isInView } = useInView({ threshold: 0.2 });

    return (
        <section
            id="education"
            className="py-20 lg:py-32 bg-secondary/20"
            ref={ref}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-sm text-primary font-medium uppercase tracking-wider mb-2">
                        Education
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-balance">
                        My Academic Journey
                    </h3>
                </div>

                {/* Timeline */}
                <div className="max-w-3xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

                    {education.map((item, index) => (
                        <div
                            key={item.school}
                            className={cn(
                                "relative pl-12 md:pl-0 mb-12 last:mb-0 transition-all duration-700",
                                isInView
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10",
                                index % 2 === 0
                                    ? "md:pr-[calc(50%+2rem)] md:text-right"
                                    : "md:pl-[calc(50%+2rem)]"
                            )}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            {/* Timeline Dot */}
                            <div
                                className={cn(
                                    "absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-primary flex items-center justify-center md:-translate-x-1/2 z-10"
                                )}
                            >
                                <GraduationCap className="w-4 h-4 text-primary-foreground" />
                            </div>

                            {/* Card */}
                            <div className="glass rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300">
                                <div
                                    className={cn(
                                        "flex items-center gap-2 text-sm text-primary mb-2",
                                        index % 2 === 0 && "md:justify-end"
                                    )}
                                >
                                    <Calendar className="w-4 h-4" />
                                    {item.year}
                                </div>
                                <h4 className="text-lg font-semibold mb-1">
                                    {item.degree}
                                </h4>
                                <p className="text-muted-foreground font-medium mb-2">
                                    {item.school}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
