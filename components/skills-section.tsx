"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const hardSkills = [
    { name: "Node.js", level: 85 },
    { name: "React / Next.js", level: 80 },
    { name: "TypeScript", level: 80 },
    { name: "GraphQL", level: 80 },
    { name: "PostgreSQL", level: 75 },
];

const softSkills = [
    "Problem Solving",
    "Communication",
    "Team Leadership",
    "Time Management",
    "Creativity",
    "Adaptability",
    "Critical Thinking",
    "Attention to Detail",
];

export function SkillsSection() {
    const { ref, isInView } = useInView({ threshold: 0.2 });

    return (
        <section
            id="skills"
            className="py-20 lg:py-32 bg-secondary/20"
            ref={ref}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-sm text-primary font-medium uppercase tracking-wider mb-2">
                        Skills
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-balance">
                        What I&apos;m Good At
                    </h3>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Hard Skills */}
                    <div
                        className={cn(
                            "transition-all duration-700",
                            isInView
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        )}
                    >
                        <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            Technical Skills
                        </h4>
                        <div className="space-y-5">
                            {hardSkills.map((skill, index) => (
                                <div
                                    key={skill.name}
                                    className={cn(
                                        "transition-all duration-500",
                                        isInView
                                            ? "opacity-100 translate-x-0"
                                            : "opacity-0 -translate-x-10"
                                    )}
                                    style={{
                                        transitionDelay: `${index * 100}ms`,
                                    }}
                                >
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm font-medium">
                                            {skill.name}
                                        </span>
                                        <span className="text-sm text-primary">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                                            style={{
                                                width: isInView
                                                    ? `${skill.level}%`
                                                    : "0%",
                                                transitionDelay: `${
                                                    index * 100 + 300
                                                }ms`,
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div
                        className={cn(
                            "transition-all duration-700 delay-200",
                            isInView
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        )}
                    >
                        <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            Soft Skills
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {softSkills.map((skill, index) => (
                                <span
                                    key={skill}
                                    className={cn(
                                        "px-4 py-2 glass rounded-full text-sm font-medium hover:scale-105 hover:text-primary transition-all duration-300",
                                        isInView
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-10"
                                    )}
                                    style={{
                                        transitionDelay: `${
                                            index * 50 + 400
                                        }ms`,
                                    }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Additional Visual - Skill Radar */}
                        <div className="mt-8 p-6 glass rounded-xl">
                            <h5 className="text-sm font-semibold mb-4">
                                Core Competencies
                            </h5>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Frontend", value: 80 },
                                    { label: "Backend", value: 85 },
                                    { label: "Design", value: 60 },
                                    { label: "DevOps", value: 70 },
                                ].map((item) => (
                                    <div
                                        key={item.label}
                                        className="text-center"
                                    >
                                        <div className="relative w-20 h-20 mx-auto">
                                            <svg className="w-20 h-20 transform -rotate-90">
                                                <circle
                                                    cx="40"
                                                    cy="40"
                                                    r="35"
                                                    stroke="currentColor"
                                                    strokeWidth="6"
                                                    fill="none"
                                                    className="text-secondary"
                                                />
                                                <circle
                                                    cx="40"
                                                    cy="40"
                                                    r="35"
                                                    stroke="currentColor"
                                                    strokeWidth="6"
                                                    fill="none"
                                                    strokeDasharray={220}
                                                    strokeDashoffset={
                                                        isInView
                                                            ? 220 -
                                                              (220 *
                                                                  item.value) /
                                                                  100
                                                            : 220
                                                    }
                                                    className="text-primary transition-all duration-1000 ease-out"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                            <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                                                {item.value}%
                                            </span>
                                        </div>
                                        <span className="text-xs text-muted-foreground mt-2 block">
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
