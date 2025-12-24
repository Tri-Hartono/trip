'use client';

import { useState, useEffect } from 'react';

export interface SearchBarProps {
    onSearch: (query: string, duration: string) => void;
    placeholder?: string;
}

export default function SearchBar({
    onSearch,
    placeholder = 'Cari pulau, paket, atau durasi...',
}: SearchBarProps) {
    const [query, setQuery] = useState('');
    const [duration, setDuration] = useState('');

    useEffect(() => {
        onSearch(query, duration);
    }, [query, duration, onSearch]);

    return (
        <div className='w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 -mt-20 relative z-10 border border-blue-50'>
            <div className='flex flex-col md:flex-row gap-4'>
                {/* Search Input */}
                <div className='flex-1'>
                    <div className='relative'>
                        <svg
                            className='absolute left-4 top-4 w-5 h-5 text-blue-400'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                            />
                        </svg>
                        <input
                            type='text'
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder={placeholder}
                            className='w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg placeholder-gray-400'
                        />
                    </div>
                </div>

                {/* Duration Filter */}
                <div className='md:w-56'>
                    <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className='w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none bg-white cursor-pointer text-lg font-medium'
                    >
                        <option value=''>⏱️ Semua Durasi</option>
                        <option value='1day'>1 Day Trip</option>
                        <option value='2d1n'>2 Days 1 Night</option>
                        <option value='3d2n'>3 Days 2 Nights</option>
                    </select>
                </div>

                {/* Clear Button */}
                {(query || duration) && (
                    <button
                        onClick={() => {
                            setQuery('');
                            setDuration('');
                        }}
                        className='md:w-auto px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-all shadow-md hover:shadow-lg'
                    >
                        🔄 Reset
                    </button>
                )}
            </div>
        </div>
    );
}
