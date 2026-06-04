"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { EducationSection } from "@/components/education-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { GallerySection } from "@/components/gallery-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { content, type Language } from "@/lib/i18n";

export default function Home() {
    const [language, setLanguage] = useState<Language>("vi");
    const copy = content[language];

    const toggleLanguage = () => {
        setLanguage((current) => (current === "en" ? "vi" : "en"));
    };

    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);

    return (
        <main className="min-h-screen bg-background">
            <Header
                content={copy.header}
                language={language}
                onLanguageToggle={toggleLanguage}
            />
            <HeroSection content={copy.hero} />
            <AboutSection content={copy.about} />
            <ExperienceSection content={copy.experience} />
            <SkillsSection content={copy.skills} />
            <ProjectsSection content={copy.projects} />
            <EducationSection content={copy.education} />
            <GallerySection content={copy.gallery} />
            <ContactSection content={copy.contact} />
            <Footer content={copy.footer} />
        </main>
    );
}
