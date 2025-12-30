'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
    getAllIslands,
    getUniqueIslandNames,
    getMaxPrice,
    searchAndFilterTrips,
} from '@/lib/trips';
import SearchBar from './components/SearchBar';
import TripCard from './components/TripCard';
import WhatsAppButtons from './components/WhatsAppButtons';
export default function Home() {
    useEffect(() => {
        document.title = 'Beranda - Seribu Island Tours';
    }, []);

    const islands = getAllIslands();
    const islandNames = getUniqueIslandNames();
    const maxPrice = getMaxPrice();

    const [searchQuery, setSearchQuery] = useState('');
    const [duration, setDuration] = useState('');

    // Filter featured trips (one package per island - cheapest option)
    const featuredTrips = useMemo(() => {
        return islands.map((island) => {
            const cheapestPackage = island.packages.reduce((prev, curr) =>
                prev.price < curr.price ? prev : curr
            );
            return {
                id: cheapestPackage.id,
                name: island.name,
                slug: island.slug,
                duration: cheapestPackage.duration,
                durationCode: cheapestPackage.durationCode,
                price: cheapestPackage.price,
                image: island.image,
                description: island.description,
            };
        });
    }, [islands]);

    return (
        <>
            {/* Hero Section */}
            <div className='relative w-full h-screen min-h-[600px]  flex items-center justify-center overflow-hidden'>
                {/* Background Image */}
                <div
                    className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                    style={{
                        backgroundImage:
                            'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBphBX5Wb4ygCd6LOm-y82tMJdzQS8Qt3hIZVNWgQSSgaUGqSYzKDk6Sj_n09be4X-CGz6mBP0vOqdu8Id4NiMNQbHgD5QRkbYzp4vh_r7H-mSiPuWb-303W2PC36kCZjcxAKRvOS5EoqvPj4hNsljVatx5rFuuYVDNgKgOWSi47nSK31YRnqcwnmgHYFsBy2nQhPeOvZHPJ9LSoMdMGWgbYra1nrIga-QrA1RG_h7KBYgVNcPG9KDd49Kvi9Wfs5ty--d4E7KTtQ)',
                    }}
                ></div>

                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-b from-black/50 to-black/30'></div>

                {/* Content */}
                <main className='relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center max-w-5xl'>
                    {/* <div className='inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-1 mb-6'>
                        <span className='text-xs font-semibold uppercase tracking-wide text-white'>
                            OPEN TRIP + MOST SELLER
                        </span>
                    </div> */}

                    <h1 className='text-white text-3xl md:text-5xl  font-bold leading-tight mb-6'>
                        Open Trip Seru Bareng{' '}
                        <span className='text-cyan-400'>Jelana Explore</span>
                        <br />
                        Jelajah Alam, Nikmati Perjalanan
                    </h1>

                    <p className='max-w-2xl text-base md:text-lg text-white/90 leading-relaxed mb-8'>
                        Liburan santai ke laut, gunung, dan alam Indonesia
                        bareng temen seperjalanan. Semua kami siapkan dengan
                        rapi, kamu tinggal berangkat dan menikmati momen.
                    </p>

                    {/* Rating and Price */}
                    <div className='flex flex-wrap items-center justify-center gap-6 mb-10 text-white'>
                        <div className='flex items-center gap-2'>
                            <span className='text-yellow-400'>★</span>
                            <span className='font-bold'>4.9/5.0</span>
                            <span className='text-white/70'>(2k Reviews)</span>
                        </div>
                        <div className='text-white/50'>•</div>
                        <div>
                            <span className='text-white/70'>Mulai dari </span>
                            <span className='font-bold text-cyan-400'>
                                Rp 350.000
                            </span>
                            <span className='text-white/70'>/org</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
                        <Link
                            href='/trips'
                            className='bg-cyan-400 hover:bg-cyan-500 text-white px-8 py-3 rounded-full font-semibold transition-colors'
                        >
                            Pesan Sekarang
                        </Link>
                        <Link
                            href='/trips'
                            className='bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-all'
                        >
                            Lihat Paket Trip
                        </Link>
                    </div>

                    {/* Simple Feature Icons */}
                    <div className='flex flex-wrap items-center justify-center gap-8 text-white text-sm'>
                        <div className='flex items-center gap-2'>
                            <span>7/24</span>
                            <span className='text-white/70'>Traveler Pass</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span>✓</span>
                            <span className='text-white/70'>
                                Fasilitas Lengkap
                            </span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span>✓</span>
                            <span className='text-white/70'>
                                Jaminan Keberangkatan
                            </span>
                        </div>
                    </div>
                </main>
            </div>
            {/* Search Bar Section */}
            <div className='relative bg-linear-to-b from-gray-50 to-white px-4 pb-16 pt-8'>
                <div className='relative z-20'>
                    <SearchBar
                        onSearch={(query, dur) => {
                            setSearchQuery(query);
                            setDuration(dur);
                        }}
                    />
                </div>
            </div>

            {/* Featured Trips Section */}
            <section className='max-w-7xl mx-auto px-4 py-20'>
                <div className='text-center mb-12'>
                    <span className='inline-block px-4 py-1 bg-cyan-100 text-cyan-600 rounded-full text-sm font-semibold mb-4'>
                        PAKET TRIP PILIHAN
                    </span>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                        Pilih Petualanganmu
                    </h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        Temukan paket wisata Pulau Pramuka yang sesuai dengan
                        gaya liburanmu. Dari one-day trip hingga menginap di
                        cottage eksklusif, semua ada di sini.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {featuredTrips.map((trip) => (
                        <TripCard key={trip.id} {...trip} />
                    ))}
                </div>

                <div className='text-center mt-12'>
                    <Link
                        href='/trips'
                        className='inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all'
                    >
                        Lihat Semua Paket
                    </Link>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className='bg-gradient-to-r from-gray-50 to-cyan-50/30 py-20'>
                <div className='max-w-7xl mx-auto px-4'>
                    <div className='text-center mb-12'>
                        <span className='inline-block px-4 py-1 bg-cyan-100 text-cyan-600 rounded-full text-sm font-semibold mb-4'>
                            CERITA TRAVELLER
                        </span>
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                            Apa Kata Mereka?
                        </h2>
                        <p className='text-gray-600 max-w-2xl mx-auto'>
                            Dengarkan pengalaman seru dari para traveler yang
                            telah menjelajahi keindahan Pulau Pramuka bersama
                            kami.
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {[
                            {
                                name: 'Sarah Wijaya',
                                location: 'Traveler dari Jakarta',
                                rating: 5,
                                text: 'Trip paling seru tahun ini! Guide-nya ramah banget, makananya enak. Gak nyesel ambil paket 2 hari 1 malam. Pasti balik lagi!',
                                image: '/images/avatar-1.jpg',
                            },
                            {
                                name: 'Budi Santoso',
                                location: 'Traveler dari Bandung',
                                rating: 5,
                                text: 'Pelayanannya top banget. Fasilitasnya komplit, dan spot snorkeling-nya keren abis. Sunset di dermaga Pramuka juga cantik banget!',
                                image: '/images/avatar-2.jpg',
                            },
                            {
                                name: 'Lisa',
                                location: 'Traveler dari Surabaya',
                                rating: 5,
                                text: 'Puas banget sama cottage-nya. Bersih, nyaman, dan pemandangannya laut terus. Makanannya juga enak. Highly recommended!',
                                image: '/images/avatar-3.jpg',
                            },
                        ].map((testimonial, idx) => (
                            <div
                                key={idx}
                                className='bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300'
                            >
                                <div className='flex items-center gap-1 mb-4 text-yellow-400'>
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <span key={i}>★</span>
                                        )
                                    )}
                                </div>
                                <p className='text-gray-700 mb-6 leading-relaxed'>
                                    "{testimonial.text}"
                                </p>
                                <div className='flex items-center gap-3'>
                                    <div className='w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold'>
                                        {testimonial.name[0]}
                                    </div>
                                    <div>
                                        <p className='font-semibold text-gray-900'>
                                            {testimonial.name}
                                        </p>
                                        <p className='text-sm text-gray-500'>
                                            {testimonial.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className='py-20'>
                <div className='max-w-7xl mx-auto px-4'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                            Mengapa Memilih Kami?
                        </h2>
                        <p className='text-gray-600 max-w-2xl mx-auto'>
                            Komitmen kami memberikan pengalaman wisata terbaik
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {[
                            {
                                title: 'Kapal Private',
                                description:
                                    'Armada kapal modern berkualitas tinggi dan terawat sempurna',
                            },
                            {
                                title: 'Pemandu Berpengalaman',
                                description:
                                    'Guide profesional berlisensi resmi dengan pengalaman 10+ tahun',
                            },
                            {
                                title: 'Dokumentasi Profesional',
                                description:
                                    'Tim fotografi profesional siap abadikan momen spesial Anda',
                            },
                            {
                                title: 'Harga Transparan',
                                description:
                                    'Tidak ada biaya tersembunyi, semua sudah termasuk',
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className='bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100'
                            >
                                <h3 className='font-bold text-gray-900 mb-2 text-lg'>
                                    {item.title}
                                </h3>
                                <p className='text-sm text-gray-600 leading-relaxed'>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='bg-gradient-to-r from-blue-600 to-cyan-400 py-16 text-white'>
                <div className='max-w-4xl mx-auto px-4 text-center'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                        Siap untuk Petualangan?
                    </h2>
                    <p className='text-lg mb-8 text-blue-100'>
                        Hubungi kami sekarang untuk booking dan informasi lebih
                        lanjut
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                        <Link
                            href='/trips'
                            className='bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all'
                        >
                            Jelajahi Paket
                        </Link>
                        <WhatsAppButtons />
                    </div>
                </div>
            </section>
        </>
    );
}
