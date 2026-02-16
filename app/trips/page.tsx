'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    getAllIslands,
    getUniqueIslandNames,
    getMaxPrice,
    searchAndFilterTrips,
    getFlattenedTrips,
} from '@/lib/trips';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import TripCard from '../components/TripCard';

type SortOption = 'default' | 'price-asc' | 'price-desc';

export default function TripsPage() {
    useEffect(() => {
        document.title = 'Semua Paket Wisata - Seribu Island Tours';
    }, []);

    const islands = getAllIslands();
    const islandNames = getUniqueIslandNames();
    const maxPrice = getMaxPrice();

    const [searchQuery, setSearchQuery] = useState('');
    const [duration, setDuration] = useState('');
    const [sortBy, setSortBy] = useState<SortOption>('default');
    const [filters, setFilters] = useState({
        islands: [] as string[],
        minPrice: 0,
        maxPrice: maxPrice,
        durations: [] as string[],
    });

    // Flatten all trips for easier display
    const flattenedTrips = useMemo(() => {
        return getFlattenedTrips();
    }, []);

    // Search and filter logic
    const filteredTrips = useMemo(() => {
        let trips = flattenedTrips;

        // Search by query
        if (searchQuery) {
            trips = trips.filter(
                (trip) =>
                    trip.islandName
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    trip.description
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    trip.duration
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()),
            );
        }

        // Filter by duration from SearchBar
        if (duration) {
            trips = trips.filter((trip) => trip.durationCode === duration);
        }

        // Island filter
        if (filters.islands.length > 0) {
            trips = trips.filter((trip) =>
                filters.islands.includes(trip.islandName),
            );
        }

        // Price filter
        trips = trips.filter(
            (trip) =>
                trip.price >= filters.minPrice &&
                trip.price <= filters.maxPrice,
        );

        // Duration filter from FilterPanel
        if (filters.durations.length > 0) {
            trips = trips.filter((trip) =>
                filters.durations.includes(trip.durationCode),
            );
        }

        return trips;
    }, [flattenedTrips, searchQuery, duration, filters]);

    // Sort logic
    const sortedTrips = useMemo(() => {
        const sorted = [...filteredTrips];
        switch (sortBy) {
            case 'price-asc':
                return sorted.sort((a, b) => a.price - b.price);
            case 'price-desc':
                return sorted.sort((a, b) => b.price - a.price);
            default:
                return sorted;
        }
    }, [filteredTrips, sortBy]);

    const handleFilterChange = useCallback((newFilters: typeof filters) => {
        setFilters(newFilters);
    }, []);

    return (
        <>
            {/* Page Header */}
            <div
                className='text-white py-40 relative overflow-hidden bg-cover bg-center'
                style={{
                    backgroundImage:
                        'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBphBX5Wb4ygCd6LOm-y82tMJdzQS8Qt3hIZVNWgQSSgaUGqSYzKDk6Sj_n09be4X-CGz6mBP0vOqdu8Id4NiMNQbHgD5QRkbYzp4vh_r7H-mSiPuWb-303W2PC36kCZjcxAKRvOS5EoqvPj4hNsljVatx5rFuuYVDNgKgOWSi47nSK31YRnqcwnmgHYFsBy2nQhPeOvZHPJ9LSoMdMGWgbYra1nrIga-QrA1RG_h7KBYgVNcPG9KDd49Kvi9Wfs5ty--d4E7KTtQ)',

                    backgroundBlendMode: 'overlay',
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
                        Paket Wisata Kami
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className='text-lg md:text-xl text-blue-100 font-semibold'
                    >
                        Jelajahi semua paket wisata ke Kepulauan Seribu pilihan
                        kami
                    </motion.p>
                </div>
            </div>

            {/* Search Bar */}
            <div className='relative bg-linear-to-b from-gray-50 to-white px-4 pb-10 pt-10'>
                <SearchBar
                    onSearch={(query, dur) => {
                        setSearchQuery(query);
                        setDuration(dur);
                    }}
                    placeholder='Cari pulau, paket, atau jenis wisata...'
                />
            </div>

            <div className='max-w-7xl mx-auto px-4 py-8'>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
                    {/* Sidebar - Filter Panel */}
                    <div className='lg:col-span-1'>
                        <FilterPanel
                            islands={islandNames}
                            maxPrice={maxPrice}
                            onFilterChange={handleFilterChange}
                        />
                    </div>

                    {/* Main Content */}
                    <div className='lg:col-span-3'>
                        {/* Sorting and Results Info */}
                        <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-6 pb-6 border-b border-gray-200'>
                            <div>
                                <p className='text-gray-700 font-semibold'>
                                    Menampilkan{' '}
                                    <span className='text-teal-900'>
                                        {sortedTrips.length}
                                    </span>{' '}
                                    paket wisata
                                </p>
                            </div>
                            <div className='mt-4 md:mt-0'>
                                <label className='text-gray-700 font-semibold mr-3'>
                                    Urutkan:
                                </label>
                                <select
                                    value={sortBy}
                                    onChange={(e) =>
                                        setSortBy(e.target.value as SortOption)
                                    }
                                    className='px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white cursor-pointer'
                                >
                                    <option value='default'>Default</option>
                                    <option value='price-asc'>
                                        Harga (Terendah)
                                    </option>
                                    <option value='price-desc'>
                                        Harga (Tertinggi)
                                    </option>
                                </select>
                            </div>
                        </div>

                        {/* No Results State */}
                        {sortedTrips.length === 0 ? (
                            <div className='bg-gray-50 rounded-2xl p-12 text-center'>
                                <p className='text-xl text-gray-600 mb-2'>
                                    Tidak ada paket yang sesuai
                                </p>
                                <p className='text-gray-500'>
                                    Coba ubah filter atau cari dengan kata kunci
                                    yang berbeda
                                </p>
                            </div>
                        ) : (
                            /* Trip Cards Grid */
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {sortedTrips.map((trip) => (
                                    <TripCard
                                        key={trip.id}
                                        id={trip.id}
                                        name={trip.islandName}
                                        slug={trip.islandSlug}
                                        duration={trip.duration}
                                        durationCode={trip.durationCode}
                                        price={trip.price}
                                        minPeople={trip.minPeople}
                                        image={trip.islandImage}
                                        description={trip.description}
                                        status={trip.islandStatus}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
