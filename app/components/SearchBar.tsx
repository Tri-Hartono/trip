'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faRotateLeft,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

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
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-8 -mt-20 relative z-10 border border-blue-50'
        >
            <div className='flex flex-col md:flex-row gap-4'>
                {/* Search Input */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className='flex-1 relative'
                >
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className='w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none'
                    />
                    <input
                        type='text'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={placeholder}
                        className='w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg placeholder-gray-400'
                    />
                </motion.div>

                {/* Duration Filter */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className='md:w-56'
                >
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
                </motion.div>

                {/* Reset Button */}
                {(query || duration) && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            setQuery('');
                            setDuration('');
                        }}
                        className='md:w-auto px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2'
                    >
                        <FontAwesomeIcon
                            icon={faRotateLeft}
                            className='w-5 h-5'
                        />
                        <span>Reset</span>
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
}
