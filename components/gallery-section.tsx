"use client";

import { useState } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/use-in-view";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const photos = [
    {
        src: "/profile.jpg",
        alt: "Outdoor portrait",
    },
    {
        src: "/profile2.jpg",
        alt: "Working in office",
    },
    {
        src: "/3.jpg",
        alt: "Speaking at conference",
    },
    {
        src: "/24.jpg",
        alt: "Team collaboration",
    },
    {
        src: "/5.jpg",
        alt: "Hiking adventure",
    },
    {
        src: "/6.jpg",
        alt: "Coffee shop moment",
    },
];

export function GallerySection() {
    const { ref, isInView } = useInView({ threshold: 0.1 });
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setSelectedIndex(index);
    const closeLightbox = () => setSelectedIndex(null);
    const goToPrevious = () => {
        if (selectedIndex !== null) {
            setSelectedIndex(
                selectedIndex === 0 ? photos.length - 1 : selectedIndex - 1
            );
        }
    };
    const goToNext = () => {
        if (selectedIndex !== null) {
            setSelectedIndex(
                selectedIndex === photos.length - 1 ? 0 : selectedIndex + 1
            );
        }
    };

    return (
        <section
            id="gallery"
            className="py-20 lg:py-32 bg-secondary/20"
            ref={ref}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-sm text-primary font-medium uppercase tracking-wider mb-2">
                        Gallery
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-balance">
                        Moments & Memories
                    </h3>
                </div>

                {/* Photo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
                    {photos.map((photo, index) => (
                        <div
                            key={photo.alt}
                            className={cn(
                                "relative aspect-square overflow-hidden rounded-xl cursor-pointer group transition-all duration-500",
                                isInView
                                    ? "opacity-100 scale-100"
                                    : "opacity-0 scale-95",
                                index === 1 || index === 3 || index === 5
                                    ? "md:col-span-1"
                                    : ""
                            )}
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onClick={() => openLightbox(index)}
                        >
                            <Image
                                src={photo.src || "/placeholder.svg"}
                                alt={photo.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedIndex !== null && (
                <div className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center animate-in fade-in duration-300">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 z-10"
                        onClick={closeLightbox}
                    >
                        <X className="w-6 h-6" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-4 z-10"
                        onClick={goToPrevious}
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 z-10"
                        onClick={goToNext}
                    >
                        <ChevronRight className="w-8 h-8" />
                    </Button>
                    <div className="relative w-full max-w-4xl aspect-video mx-4">
                        <Image
                            src={
                                photos[selectedIndex].src || "/placeholder.svg"
                            }
                            alt={photos[selectedIndex].alt}
                            fill
                            className="object-contain animate-in zoom-in-95 duration-300"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
