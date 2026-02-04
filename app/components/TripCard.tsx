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
}: TripCardProps) {
    const formattedPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(price);

    return (
        <Link href={`/trips/${slug}/${id}`}>
            <motion.div
                className='group cursor-pointer h-full'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
                <div className='bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-slate-100 group-hover:border-primary/20'>
                    {/* Image Container */}
                    <div className='relative h-64 w-full overflow-hidden bg-muted'>
                        <Image
                            src={image || '/images/default-island.jpg'}
                            alt={name}
                            fill
                            className='object-cover group-hover:scale-105 transition-transform duration-700'
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        />
                        <div className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300' />

                        {/* Duration Badge */}
                        <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-bold shadow-sm flex items-center gap-1'>
                            <span>🕒</span> {duration}
                        </div>
                    </div>

                    {/* Content Container */}
                    <div className='p-6 flex flex-col grow'>
                        <div className='mb-4'>
                            <h3 className='text-xl font-heading font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1'>
                                {name}
                            </h3>
                            <p className='text-sm text-gray-500 line-clamp-2 leading-relaxed'>
                                {description}
                            </p>
                        </div>

                        {/* Price and CTA */}
                        <div className='flex items-center justify-between mt-auto pt-4 border-t border-gray-100'>
                            <div>
                                <p className='text-xs text-gray-400 font-medium mb-0.5'>
                                    Mulai dari
                                </p>
                                <p className='text-lg font-bold text-teal-900'>
                                    {formattedPrice}
                                </p>
                            </div>
                            <span className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-teal-900 group-hover:bg-primary group-hover:text-white transition-all duration-300'>
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
        </Link>
    );
}
