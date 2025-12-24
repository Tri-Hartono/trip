'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getPackageBySlugAndId } from '@/lib/trips';

interface DetailPageProps {
    params: Promise<{
        slug: string;
        packageId: string;
    }>;
}

export default function TripDetailPage({ params }: DetailPageProps) {
    const [resolvedParams, setResolvedParams] = useState<{
        slug: string;
        packageId: string;
    } | null>(null);
    const [selectedMeal, setSelectedMeal] = useState<string>('');

    // Resolve params
    Promise.resolve(params).then(setResolvedParams);

    if (!resolvedParams) {
        return (
            <div className='min-h-screen flex items-center justify-center'>
                Loading...
            </div>
        );
    }

    const trip = getPackageBySlugAndId(
        resolvedParams.slug,
        resolvedParams.packageId
    );

    if (!trip) {
        return (
            <div className='min-h-screen flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold text-gray-800 mb-4'>
                    Paket tidak ditemukan
                </h1>
                <p className='text-gray-600 mb-6'>
                    Maaf, paket wisata yang Anda cari tidak tersedia.
                </p>
                <Link
                    href='/trips'
                    className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700'
                >
                    Kembali ke Paket Wisata
                </Link>
            </div>
        );
    }

    const whatsappMessage = encodeURIComponent(
        `Halo, saya tertarik dengan paket ${trip.duration} ke ${
            trip.islandName
        } dengan harga Rp ${trip.price.toLocaleString(
            'id-ID'
        )}. Apakah masih tersedia?`
    );

    return (
        <>
            {/* Hero Section with Image */}
            <div className='relative h-96 md:h-[500px] w-full'>
                <Image
                    src={trip.islandImage || '/images/default-island.jpg'}
                    alt={trip.islandName}
                    fill
                    className='object-cover'
                    priority
                />
                <div className='absolute inset-0 bg-gradient-to-b from-black/30 to-black/70'></div>

                {/* Breadcrumb */}
                <div className='absolute top-6 left-6 text-white'>
                    <Link
                        href='/trips'
                        className='hover:text-blue-300 transition-colors'
                    >
                        ← Kembali ke Paket Wisata
                    </Link>
                </div>

                {/* Title Overlay */}
                <div className='absolute bottom-0 left-0 right-0 p-8 text-white'>
                    <h1 className='text-4xl md:text-5xl font-bold mb-2'>
                        {trip.islandName}
                    </h1>
                    <p className='text-lg text-gray-200'>
                        {trip.duration} • Mulai dari Rp{' '}
                        {trip.price.toLocaleString('id-ID')}
                    </p>
                </div>
            </div>

            <div className='max-w-6xl mx-auto px-4 py-12'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    {/* Main Content */}
                    <div className='lg:col-span-2'>
                        {/* Description */}
                        <section className='mb-12'>
                            <h2 className='text-2xl font-bold text-gray-800 mb-4'>
                                Tentang Paket Ini
                            </h2>
                            <p className='text-gray-700 leading-relaxed text-lg'>
                                {trip.description}
                            </p>
                        </section>

                        {/* Highlights */}
                        <section className='mb-12'>
                            <h2 className='text-2xl font-bold text-gray-800 mb-6'>
                                Highlight Paket
                            </h2>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                {trip.highlights.map((highlight, idx) => (
                                    <div
                                        key={idx}
                                        className='flex items-start gap-3 p-4 bg-blue-50 rounded-lg'
                                    >
                                        <span className='text-2xl'>✓</span>
                                        <p className='text-gray-700'>
                                            {highlight}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Facilities */}
                        <section className='mb-12'>
                            <h2 className='text-2xl font-bold text-gray-800 mb-6'>
                                Fasilitas Included
                            </h2>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                {trip.facilities.map((facility, idx) => (
                                    <div
                                        key={idx}
                                        className='flex items-center gap-3 py-2'
                                    >
                                        <span className='text-blue-600 text-xl'>
                                            ✓
                                        </span>
                                        <p className='text-gray-700'>
                                            {facility}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Destinations */}
                        <section className='mb-12'>
                            <h2 className='text-2xl font-bold text-gray-800 mb-6'>
                                Destinasi
                            </h2>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                {trip.destinations.map((destination, idx) => (
                                    <div
                                        key={idx}
                                        className='p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200'
                                    >
                                        <p className='text-gray-800 font-semibold'>
                                            {destination}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Meal Options */}
                        {trip.meals.length > 0 && (
                            <section className='mb-12'>
                                <h2 className='text-2xl font-bold text-gray-800 mb-6'>
                                    Pilihan Makan
                                </h2>
                                <div className='space-y-3'>
                                    {trip.meals.map((meal, idx) => (
                                        <label
                                            key={idx}
                                            className='flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition-colors'
                                        >
                                            <input
                                                type='radio'
                                                name='meal'
                                                value={meal}
                                                checked={selectedMeal === meal}
                                                onChange={(e) =>
                                                    setSelectedMeal(
                                                        e.target.value
                                                    )
                                                }
                                                className='w-4 h-4 text-blue-600 cursor-pointer'
                                            />
                                            <span className='ml-3 text-gray-700 font-semibold'>
                                                {meal}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Sidebar - Booking Card */}
                    <div className='lg:col-span-1'>
                        <div className='sticky top-24 bg-white rounded-2xl shadow-lg p-8 border border-gray-200'>
                            {/* Price */}
                            <div className='mb-6 pb-6 border-b border-gray-200'>
                                <p className='text-gray-600 text-sm mb-2'>
                                    Harga Per Orang
                                </p>
                                <p className='text-4xl font-bold text-blue-600'>
                                    Rp {trip.price.toLocaleString('id-ID')}
                                </p>
                            </div>

                            {/* Trip Info */}
                            <div className='space-y-4 mb-6'>
                                <div>
                                    <p className='text-gray-600 text-sm'>
                                        Durasi
                                    </p>
                                    <p className='text-gray-800 font-semibold'>
                                        {trip.duration}
                                    </p>
                                </div>
                                <div>
                                    <p className='text-gray-600 text-sm'>
                                        Pulau
                                    </p>
                                    <p className='text-gray-800 font-semibold'>
                                        {trip.islandName}
                                    </p>
                                </div>
                                {selectedMeal && (
                                    <div>
                                        <p className='text-gray-600 text-sm'>
                                            Pilihan Makan
                                        </p>
                                        <p className='text-gray-800 font-semibold'>
                                            {selectedMeal}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* CTA Buttons */}
                            <div className='space-y-3'>
                                <a
                                    href={`https://wa.me/62812345678?text=${whatsappMessage}`}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='block w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 rounded-lg text-center transition-all transform hover:scale-105 shadow-lg'
                                >
                                    💬 Booking via WhatsApp
                                </a>
                                <Link
                                    href='/contact'
                                    className='block w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 rounded-lg text-center transition-all transform hover:scale-105 shadow-lg'
                                >
                                    📋 Formulir Booking
                                </Link>
                            </div>

                            {/* Info Text */}
                            <p className='text-xs text-gray-500 text-center mt-6'>
                                Tim kami akan merespons dalam 30 menit
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Trips Section */}
            <section className='bg-gradient-to-r from-blue-50 to-cyan-50 py-16 mt-12'>
                <div className='max-w-6xl mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-gray-800 mb-2'>
                        Paket Lainnya
                    </h2>
                    <p className='text-gray-600 mb-8'>
                        Cek paket wisata lainnya ke destinasi menarik
                    </p>
                    <Link
                        href='/trips'
                        className='inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors'
                    >
                        Lihat Semua Paket
                    </Link>
                </div>
            </section>
        </>
    );
}
