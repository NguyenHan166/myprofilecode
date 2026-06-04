"use client";

import { useInView } from "@/hooks/use-in-view";
import type { LucideIcon } from "lucide-react";
import { Target } from "lucide-react";
import { cn } from "@/lib/utils";

type AboutContent = {
    eyebrow: string;
    title: string;
    paragraphs: ReadonlyArray<string>;
    visionTitle: string;
    vision: string;
    strengthsTitle: string;
    strengths: ReadonlyArray<{
        icon: LucideIcon;
        title: string;
        description: string;
    }>;
};

type AboutSectionProps = {
    content: AboutContent;
};

export function AboutSection({ content }: AboutSectionProps) {
    const { ref, isInView } = useInView({ threshold: 0.2 });

    return (
        <section id="about" className="py-20 lg:py-32 relative" ref={ref}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Left Column - Bio */}
                    <div
                        className={cn(
                            "lg:w-1/2 transition-all duration-700",
                            isInView
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-10"
                        )}
                    >
                        <h2 className="text-sm text-primary font-medium uppercase tracking-wider mb-2">
                            {content.eyebrow}
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                            {content.title}
                        </h3>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            {content.paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>

                        {/* Vision */}
                        <div className="mt-8 p-6 glass rounded-xl">
                            <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                                <Target className="w-5 h-5 text-primary" />
                                {content.visionTitle}
                            </h4>
                            <p className="text-muted-foreground text-sm">
                                {content.vision}
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Strengths */}
                    <div
                        className={cn(
                            "lg:w-1/2 transition-all duration-700 delay-200",
                            isInView
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 translate-x-10"
                        )}
                    >
                        <h4 className="text-lg font-semibold mb-6">
                            {content.strengthsTitle}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {content.strengths.map((strength, index) => (
                                <div
                                    key={strength.title}
                                    className={cn(
                                        "p-6 glass rounded-xl hover:scale-105 transition-all duration-300 group",
                                        isInView
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-10"
                                    )}
                                    style={{
                                        transitionDelay: `${
                                            index * 100 + 300
                                        }ms`,
                                    }}
                                >
                                    <strength.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                                    <h5 className="font-semibold mb-1">
                                        {strength.title}
                                    </h5>
                                    <p className="text-sm text-muted-foreground">
                                        {strength.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
