'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShip,
    faUserTie,
    faCamera,
    faTag,
    faStar,
    faQuoteLeft,
    faMapLocationDot,
    faUsers,
    faClock,
    faHeadset,
} from '@fortawesome/free-solid-svg-icons';
import { getAllIslands } from '@/lib/trips';
import SearchBar from './components/SearchBar';
import TripCard from './components/TripCard';
import WhatsAppButtons from './components/WhatsAppButtons';

export default function Home() {
    useEffect(() => {
        document.title = 'Beranda - Seribu Island Tours';
    }, []);

    const islands = getAllIslands();

    const [searchQuery, setSearchQuery] = useState('');
    const [duration, setDuration] = useState('');

    // Filter featured trips (one package per island - cheapest option)
    const featuredTrips = useMemo(() => {
        let trips = islands.map((island) => {
            const cheapestPackage = island.packages.reduce((prev, curr) =>
                prev.price < curr.price ? prev : curr,
            );
            return {
                id: cheapestPackage.id,
                name: island.name,
                slug: island.slug,
                duration: cheapestPackage.duration,
                durationCode: cheapestPackage.durationCode,
                price: cheapestPackage.price,
                minPeople: cheapestPackage.minPeople,
                image: island.image,
                description: island.description,
                status: island.status,
            };
        });

        // Apply search filter
        if (searchQuery || duration) {
            trips = trips.filter(
                (trip) =>
                    trip.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    trip.description
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    (duration && trip.durationCode === duration),
            );
        }

        return trips;
    }, [islands, searchQuery, duration]);

    return (
        <>
            {/* Hero Section */}
            <div className='relative w-full h-[85vh] min-h-150 flex items-center justify-center overflow-hidden'>
                {/* Background Image */}
                <div
                    className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                    style={{
                        backgroundImage:
                            'url(/images/resort-payung/resort-payung.webp)',
                    }}
                >
                    <div className='absolute inset-0 bg-teal-950/30 mix-blend-multiply' />
                    <div className='absolute inset-0 bg-linear-to-b from-teal-900/70 via-transparent to-teal-950/80' />
                </div>

                {/* Content */}
                <main className='relative z-10 flex flex-col items-center justify-center px-4 py-20 mt-16 text-center max-w-5xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='mb-8'
                    >
                        <span className='px-6 py-2 rounded-full bg-teal-950/40 backdrop-blur-md border border-white/10 text-white text-sm font-medium tracking-widest shadow-lg uppercase'>
                            ✨ Explore the Unexplored
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className='text-white font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight drop-shadow-2xl'
                    >
                        Temukan Surga Tersembunyi <br />
                        di{' '}
                        <span className='text-transparent bg-clip-text bg-linear-to-r from-teal-200 to-cyan-300 decoration-4 decoration-cyan-400/30 underline-offset-8'>
                            Kepulauan Seribu
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className='max-w-2xl text-lg md:text-xl text-teal-50 leading-relaxed mb-12 font-light tracking-wide'
                    >
                        Jelajahi keindahan laut, pantai pasir putih, dan
                        pengalaman tak terlupakan. Wujudkan liburan impianmu
                        sekarang.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className='flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto px-4'
                    >
                        <Link
                            href='/trips'
                            className='bg-teal-800 hover:bg-teal-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow shadow-white hover:shadow-teal-500/30 hover:scale-105 flex items-center justify-center gap-2'
                        >
                            <span>Mulai Petualangan</span>
                            <FontAwesomeIcon
                                icon={faMapLocationDot}
                                className='w-4 h-4'
                            />
                        </Link>
                        <Link
                            href='/contact'
                            className='bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-lg flex items-center justify-center'
                        >
                            Hubungi Kami
                        </Link>
                    </motion.div>
                </main>
            </div>

            {/* Search Bar Section */}
            <div className='relative px-4 pb-24'>
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
            <section className='max-w-7xl mx-auto px-4 py-12 md:py-24'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-center mb-16'
                >
                    <span className='text-primary font-bold tracking-widest text-xs uppercase mb-3 block'>
                        Destinasi Populer
                    </span>
                    <h2 className='text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6'>
                        Pilihan Paket Favorit
                    </h2>
                    <p className='text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed font-light'>
                        Pilih paket wisata terbaik yang kami kurasi khusus untuk
                        pengalaman liburan maksimal Anda.
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'>
                    {featuredTrips.map((trip) => (
                        <TripCard
                            key={trip.id}
                            {...trip}
                            status={trip.status}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-center mt-16'
                >
                    <Link
                        href='/trips'
                        className='group inline-flex items-center gap-2 text-primary font-bold hover:text-teal-700 transition-all text-lg'
                    >
                        Lihat Semua Paket{' '}
                        <span className='group-hover:translate-x-1 transition-transform'>
                            →
                        </span>
                    </Link>
                </motion.div>
            </section>

            {/* Why Choose Us Section */}
            <section className='py-24 bg-secondary border-y border-teal-50'>
                <div className='max-w-7xl mx-auto px-4'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className='text-center mb-20'
                    >
                        <span className='text-primary font-bold tracking-widest text-xs uppercase mb-3 block'>
                            Kenapa Kami?
                        </span>
                        <h2 className='text-3xl md:text-5xl font-heading font-bold text-slate-800 mb-6'>
                            Mengapa Memilih Jelana?
                        </h2>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {[
                            {
                                icon: faShip,
                                title: 'Kapal Modern',
                                description:
                                    'Armada standar internasional untuk keselamatan dan kenyamanan maksimal.',
                            },
                            {
                                icon: faUserTie,
                                title: 'Guide Profesional',
                                description:
                                    'Pemandu lokal berpengalaman yang ramah dan berpengetahuan luas.',
                            },
                            {
                                icon: faCamera,
                                title: 'Dokumentasi',
                                description:
                                    'Gratis dokumentasi foto & video kualitas HD untuk setiap momen seru.',
                            },
                            {
                                icon: faTag,
                                title: 'Harga Terbaik',
                                description:
                                    'Garansi harga transparan tanpa biaya tersembunyi. Value for money.',
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className='bg-white p-8 rounded-4xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group text-center hover:-translate-y-2'
                            >
                                <div className='w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:bg-primary group-hover:text-white transition-all duration-300 text-primary'>
                                    <FontAwesomeIcon
                                        icon={item.icon}
                                        className='w-7 h-7'
                                    />
                                </div>
                                <h3 className='font-heading font-bold text-xl text-slate-800 mb-3'>
                                    {item.title}
                                </h3>
                                <p className='text-slate-500 leading-relaxed text-sm'>
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className='py-24 relative overflow-hidden'>
                <div className='absolute inset-0 bg-teal-900'>
                    <div className='absolute inset-0 bg-linear-to-r from-teal-950/50 to-teal-800/50' />
                </div>
                <div className='max-w-7xl mx-auto px-4 relative z-10'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-center text-white'>
                        {[
                            {
                                stat: '2k+',
                                label: 'Happy Travelers',
                                icon: faUsers,
                            },
                            {
                                stat: '50+',
                                label: 'Destinasi',
                                icon: faMapLocationDot,
                            },
                            { stat: '4.9', label: 'Rating User', icon: faStar },
                            { stat: '24/7', label: 'Support', icon: faHeadset },
                        ].map((item, idx) => (
                            <div key={idx} className='group'>
                                <div className='mb-4 text-teal-200 group-hover:text-white transition-colors'>
                                    <FontAwesomeIcon
                                        icon={item.icon}
                                        className='w-8 h-8 opacity-80'
                                    />
                                </div>
                                <div className='text-4xl md:text-5xl font-bold font-heading mb-2 text-white'>
                                    {item.stat}
                                </div>
                                <div className='text-teal-100/80 font-medium text-sm tracking-wide uppercase'>
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className='py-24 bg-white'>
                <div className='max-w-7xl mx-auto px-4'>
                    <div className='text-center mb-16'>
                        <span className='text-primary font-bold tracking-widest text-xs uppercase mb-3 block'>
                            Testimoni
                        </span>
                        <h2 className='text-3xl md:text-5xl font-heading font-bold text-slate-800'>
                            Cerita Para Traveler
                        </h2>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {[
                            {
                                name: 'Sarah Wijaya',
                                role: 'Jakarta',
                                text: 'Trip paling seru! Guide-nya asik banget, spot fotonya keren-keren. Puas banget sama pelayanannya.',
                                rating: 5,
                            },
                            {
                                name: 'Budi Santoso',
                                role: 'Bandung',
                                text: 'Fasilitas lengkap, kapal nyaman, makanannya enak. Worth every penny! Pasti bakal repeat order.',
                                rating: 5,
                            },
                            {
                                name: 'Amanda L.',
                                role: 'Surabaya',
                                text: 'Recommended banget buat yang mau healing singkat. Booking gampang, admin fast respon. The best tour service!',
                                rating: 5,
                            },
                        ].map((testimonial, idx) => (
                            <div
                                key={idx}
                                className='bg-slate-50 p-10 rounded-4xl border border-slate-100 hover:border-primary/20 transition-all hover:shadow-lg relative'
                            >
                                <div className='absolute top-10 right-10 text-slate-200'>
                                    <FontAwesomeIcon
                                        icon={faQuoteLeft}
                                        className='w-8 h-8'
                                    />
                                </div>
                                <div className='flex text-amber-400 mb-6 gap-1'>
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <FontAwesomeIcon
                                                key={i}
                                                icon={faStar}
                                                className='w-4 h-4'
                                            />
                                        ),
                                    )}
                                </div>
                                <p className='text-slate-600 mb-8 leading-relaxed font-light text-lg relative z-10'>
                                    "{testimonial.text}"
                                </p>
                                <div>
                                    <p className='font-bold text-slate-900 font-heading text-lg'>
                                        {testimonial.name}
                                    </p>
                                    <p className='text-sm text-slate-400 font-medium'>
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-24 relative overflow-hidden'>
                <div className='absolute inset-0 bg-teal-950'>
                    {/* Clean dark background */}
                </div>
                <div className='max-w-4xl mx-auto px-4 text-center relative z-10'>
                    <h2 className='text-3xl md:text-5xl font-bold font-heading text-white mb-6 leading-tight'>
                        Siap Mulai Petualanganmu?
                    </h2>
                    <p className='text-lg md:text-xl text-teal-100 mb-12 max-w-2xl mx-auto font-light'>
                        Jangan lewatkan momen seru liburan di Kepulauan Seribu.
                        Booking sekarang dan dapatkan penawaran terbaik!
                    </p>
                    <div className='flex flex-col sm:flex-row gap-5 justify-center items-center'>
                        <WhatsAppButtons />
                        <Link
                            href='/trips'
                            className='bg-transparent border border-teal-700 text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-teal-900 transition-all w-full sm:w-auto hover:scale-105'
                        >
                            Lihat Paket Lainnya
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
