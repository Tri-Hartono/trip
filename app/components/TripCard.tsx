'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface TripCardProps {
    id: string;
    name: string;
    slug: string;
    duration: string;
    durationCode: string;
    price: number;
    image: string;
    description: string;
    status?: 'available' | 'coming-soon';
    minPeople?: number;
}

export default function TripCard({
    id,
    name,
    slug,
    duration,
    durationCode,
    price,
    image,
    description,
    status = 'available',
    minPeople,
}: TripCardProps) {
    const isComingSoon = status === 'coming-soon';
    const formattedPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(price);

    const CardContent = (
        <motion.div
            className={`group h-full ${isComingSoon ? 'cursor-default' : 'cursor-pointer'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={
                isComingSoon ? {} : { y: -8, transition: { duration: 0.3 } }
            }
        >
            <div
                className={`bg-white rounded-3xl overflow-hidden shadow-sm transition-all duration-300 h-full flex flex-col border border-slate-100 ${isComingSoon ? 'grayscale-50 opacity-80' : 'hover:shadow-xl group-hover:border-primary/20'}`}
            >
                {/* Image Container */}
                <div className='relative h-64 w-full overflow-hidden bg-muted'>
                    <Image
                        src={image || '/images/default-island.jpg'}
                        alt={name}
                        fill
                        className={`object-cover transition-transform duration-700 ${!isComingSoon && 'group-hover:scale-105'}`}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    />
                    <div className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300' />

                    {/* Status Badge */}
                    {isComingSoon ? (
                        <div className='absolute top-4 left-4 bg-amber-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 z-10 sparkle-animation'>
                            <span className='w-2 h-2 bg-white rounded-full animate-pulse' />
                            COMING SOON
                        </div>
                    ) : (
                        <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1'>
                            <span>🕒</span> {duration}
                        </div>
                    )}
                </div>

                {/* Content Container */}
                <div className='p-6 flex flex-col grow'>
                    <div className='mb-4'>
                        <h3
                            className={`text-xl font-heading font-bold text-gray-900 mb-2 transition-colors duration-300 line-clamp-1 ${!isComingSoon && 'group-hover:text-primary'}`}
                        >
                            {name}
                        </h3>
                        <p className='text-sm text-gray-500 line-clamp-2 leading-relaxed'>
                            {description}
                        </p>
                    </div>

                    {/* Price and CTA */}
                    <div className='flex items-center justify-between mt-auto pt-4 border-t border-gray-100'>
                        <div className='flex flex-col gap-1'>
                            <div>
                                <p className='text-xs text-gray-400 font-medium mb-0.5'>
                                    Mulai dari
                                </p>
                                <p
                                    className={`text-lg font-bold ${isComingSoon ? 'text-gray-400' : 'text-teal-900'}`}
                                >
                                    {isComingSoon ? 'TBA' : formattedPrice}
                                </p>
                            </div>
                        </div>
                        <span
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isComingSoon ? 'bg-gray-100 text-gray-300' : 'bg-primary/10 text-teal-900 group-hover:bg-primary group-hover:text-white'}`}
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={2}
                                stroke='currentColor'
                                className='w-5 h-5'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );

    if (isComingSoon) {
        return CardContent;
    }

    return <Link href={`/trips/${slug}/${id}`}>{CardContent}</Link>;
}
