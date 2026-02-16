'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import galleryData from '@/data/gallery.json';

const categories = [
    'All Photos',
    'Snorkeling',
    'Island Hopping',
    'Drone Shots',
    'Accommodations',
];

export default function page() {
    useEffect(() => {
        document.title = 'Galeri - Seribu Island Tours';
    }, []);

    const [selectedCategory, setSelectedCategory] =
        useState<string>('All Photos');
    const [selectedImage, setSelectedImage] = useState<
        (typeof galleryData)[0] | null
    >(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredGallery =
        selectedCategory === 'All Photos'
            ? galleryData
            : galleryData.filter((item) => item.category === selectedCategory);

    const openModal = (item: (typeof galleryData)[0]) => {
        setSelectedImage(item);
        setCurrentIndex(filteredGallery.findIndex((img) => img.id === item.id));
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const goToNext = () => {
        const nextIndex = (currentIndex + 1) % filteredGallery.length;
        setCurrentIndex(nextIndex);
        setSelectedImage(filteredGallery[nextIndex]);
    };

    const goToPrev = () => {
        const prevIndex =
            (currentIndex - 1 + filteredGallery.length) %
            filteredGallery.length;
        setCurrentIndex(prevIndex);
        setSelectedImage(filteredGallery[prevIndex]);
    };

    // Close modal on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <div>
            {/* Page Header */}
            <div
                className='text-white py-40 relative overflow-hidden bg-cover bg-center'
                style={{
                    backgroundImage: 'url(/images/pramuka_1.webp)',
                }}
            >
                <div className='absolute inset-0 opacity-10'>
                    <div className='absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
                    <div className='absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
                </div>
                <div className='max-w-7xl mx-auto px-4 relative z-10'>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='text-4xl md:text-6xl font-black mb-4 drop-shadow-2xl'
                    >
                        Galeri Kami
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className='text-lg md:text-xl text-blue-100 font-semibold'
                    >
                        Jelajahi keindahan Kepulauan Seribu melalui setiap foto
                    </motion.p>
                </div>
            </div>

            <div className='relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden'>
                <main className='flex-1 w-full max-w-7xl mx-auto px-6 py-20'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className='flex flex-col items-center text-center max-w-200 mx-auto mb-12'
                    >
                        <div className='flex items-center gap-2 mb-3'>
                            <span className='h-px w-8 bg-primary/50'></span>
                            <span className='text-primary font-bold text-xs uppercase tracking-wider'>
                                Explore the Paradise
                            </span>
                            <span className='h-px w-8 bg-primary/50'></span>
                        </div>
                        <h1 className='text-4xl md:text-5xl font-extrabold text-[#111618] dark:text-white mb-6 leading-tight'>
                            Island Gallery
                        </h1>
                        <p className='text-[#617f89] dark:text-gray-400 text-lg leading-relaxed'>
                            Discover the hidden gem of the Thousand Islands.
                            Experience crystal clear waters, vibrant marine
                            life, and unforgettable sunsets through our lens.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className='flex justify-center mb-12'
                    >
                        <div className='flex flex-wrap justify-center gap-3'>
                            {categories.map((category) => (
                                <motion.button
                                    key={category}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() =>
                                        setSelectedCategory(category)
                                    }
                                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                                        selectedCategory === category
                                            ? 'bg-primary text-white dark:text-[#111618] shadow-lg shadow-primary/25'
                                            : 'bg-white dark:bg-[#1e2a30] text-[#617f89] dark:text-gray-300 border border-[#e5e7eb] dark:border-[#333] hover:border-primary hover:text-primary'
                                    }`}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        layout
                        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                    >
                        <AnimatePresence mode='wait'>
                            {filteredGallery.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.05,
                                    }}
                                    whileHover={{
                                        y: -8,
                                        transition: { duration: 0.3 },
                                    }}
                                    onClick={() => openModal(item)}
                                    className='group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 cursor-pointer aspect-4/3'
                                >
                                    <img
                                        alt={item.title}
                                        className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                                        src={item.image}
                                    />
                                    <div className='absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
                                        <span className='text-white text-xs font-bold uppercase tracking-wider mb-2 bg-primary px-3 py-1 rounded-full w-fit'>
                                            {item.category}
                                        </span>
                                        <h3 className='text-white font-bold text-xl mb-1'>
                                            {item.title}
                                        </h3>
                                        <div className='flex items-center gap-2 text-gray-200 text-sm'>
                                            <span>📍</span>
                                            <span>{item.island}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </main>
            </div>

            {/* Image Modal Popup */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4'
                        onClick={closeModal}
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.1 }}
                            onClick={closeModal}
                            className='absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white z-10 bg-black/50 rounded-full p-2 hover:bg-black/70 transition-all'
                        >
                            <svg
                                className='w-8 h-8'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        </motion.button>

                        {/* Previous Button */}
                        {filteredGallery.length > 1 && (
                            <motion.button
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ delay: 0.1 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToPrev();
                                }}
                                className='absolute left-4 text-white/70 hover:text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-all hidden md:block'
                            >
                                <svg
                                    className='w-8 h-8'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M15 19l-7-7 7-7'
                                    />
                                </svg>
                            </motion.button>
                        )}

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className='max-w-6xl w-full flex flex-col items-center'
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className='relative w-full'>
                                <img
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    className='w-full max-h-[80vh] object-contain rounded-lg shadow-2xl'
                                />
                            </div>

                            {/* Image Info */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className='mt-6 text-center'
                            >
                                <span className='inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3'>
                                    {selectedImage.category}
                                </span>
                                <h3 className='text-white text-2xl font-bold mb-2'>
                                    {selectedImage.title}
                                </h3>
                                <p className='text-white/70 flex items-center justify-center gap-2'>
                                    <span>📍</span>
                                    <span>{selectedImage.island}</span>
                                </p>
                                <p className='text-white/50 text-sm mt-2'>
                                    {currentIndex + 1} /{' '}
                                    {filteredGallery.length}
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Next Button */}
                        {filteredGallery.length > 1 && (
                            <motion.button
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ delay: 0.1 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goToNext();
                                }}
                                className='absolute right-4 text-white/70 hover:text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-all hidden md:block'
                            >
                                <svg
                                    className='w-8 h-8'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth={2}
                                        d='M9 5l7 7-7 7'
                                    />
                                </svg>
                            </motion.button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
