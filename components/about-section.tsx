"use client";

import { useInView } from "@/hooks/use-in-view";
import { User, Target, Zap, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const strengths = [
    {
        icon: Zap,
        title: "Problem Solver",
        description:
            "I love tackling complex challenges and finding elegant solutions.",
    },
    {
        icon: Heart,
        title: "Passionate",
        description:
            "Deeply committed to creating meaningful digital experiences.",
    },
    {
        icon: Target,
        title: "Goal-Oriented",
        description: "Focused on delivering results that exceed expectations.",
    },
    {
        icon: User,
        title: "Team Player",
        description:
            "Collaborative mindset with excellent communication skills.",
    },
];

export function AboutSection() {
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
                            About Me
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
                            Back-end Engineer building reliable systems — with a
                            front-end eye for UX and accessibility.
                        </h3>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                I&apos;m a software engineer focused primarily
                                on back-end development, building scalable,
                                reliable services and APIs with a strong
                                emphasis on performance, security, and
                                maintainability. I enjoy designing clean
                                architectures, data models, and integrations
                                that help products ship faster and run smoother.
                            </p>
                            <p>
                                Alongside back-end work, I bring a front-end
                                sensibility—accessibility, responsive UI, and
                                pixel-level polish—so the systems I build don't
                                just work well, they feel great to use.
                            </p>
                            <p>
                                Outside of work, I explore new technologies,
                                contribute to open source, and spend time
                                outdoors with friends and family.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="mt-8 p-6 glass rounded-xl">
                            <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                                <Target className="w-5 h-5 text-primary" />
                                My Vision
                            </h4>
                            <p className="text-muted-foreground text-sm">
                                Become a back-end specialist who builds
                                high-impact products, bringing engineering rigor
                                and user-centered thinking together.
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
                            My Strengths
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {strengths.map((strength, index) => (
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
