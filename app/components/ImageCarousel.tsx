'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface ImageCarouselProps {
    images: string[];
    alt: string;
    className?: string;
}

export default function ImageCarousel({
    images,
    alt,
    className = '',
}: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextStep = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevStep = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(nextStep, 5000);
        return () => clearInterval(timer);
    }, [images.length, nextStep]);

    if (!images || images.length === 0) {
        return (
            <div className={`relative bg-gray-200 flex items-center justify-center ${className}`}>
                <p className="text-gray-400">No images available</p>
            </div>
        );
    }

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
        }),
    };

    return (
        <div className={`relative overflow-hidden group ${className}`}>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`${alt} - ${currentIndex + 1}`}
                        fill
                        className="object-cover"
                        priority={currentIndex === 0}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/60 pointer-events-none" />

            {/* Navigation Arrows */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            prevStep();
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
                        aria-label="Previous image"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            nextStep();
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
                        aria-label="Next image"
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </>
            )}

            {/* Indicators */}
            {images.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={(e) => {
                                e.preventDefault();
                                setDirection(idx > currentIndex ? 1 : -1);
                                setCurrentIndex(idx);
                            }}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${
                                idx === currentIndex
                                    ? 'bg-white scale-125'
                                    : 'bg-white/50 hover:bg-white/80'
                            }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
