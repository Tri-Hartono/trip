'use client';

import Link from 'next/link';
import Image from 'next/image';

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
            <div className='group cursor-pointer h-full'>
                <div className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col'>
                    {/* Image Container */}
                    <div className='relative h-56 w-full overflow-hidden bg-gray-200'>
                        <Image
                            src={image || '/images/default-island.jpg'}
                            alt={name}
                            fill
                            className='object-cover group-hover:scale-105 transition-transform duration-500'
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        />
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/20 group-hover:to-black/30 transition-all duration-300'></div>
                        {/* Duration Badge */}
                        <div className='absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg'>
                            {duration}
                        </div>
                    </div>

                    {/* Content Container */}
                    <div className='p-6 flex flex-col flex-grow'>
                        {/* Island Name */}
                        <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300'>
                            {name}
                        </h3>

                        {/* Description */}
                        <p className='text-sm text-gray-600 mb-4 line-clamp-2 flex-grow leading-relaxed'>
                            {description}
                        </p>

                        {/* Price and CTA */}
                        <div className='flex items-center justify-between mt-auto pt-5 border-t border-gray-100'>
                            <div>
                                <p className='text-xs text-gray-500 font-medium'>
                                    Mulai dari
                                </p>
                                <p className='text-2xl font-bold text-blue-600'>
                                    {formattedPrice}
                                </p>
                            </div>
                            <button className='bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-300'>
                                Detail
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
