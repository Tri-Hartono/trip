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
    placeholder = 'Cari destinasi impianmu...',
}: SearchBarProps) {
    const [query, setQuery] = useState('');
    const [duration, setDuration] = useState('');

    useEffect(() => {
        onSearch(query, duration);
    }, [query, duration, onSearch]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='w-full max-w-4xl mx-auto -mt-10 relative z-10 px-4'
        >
            <div className='bg-white rounded-2xl shadow-xl shadow-teal-900/5 border border-teal-100/50 p-4 flex flex-col md:flex-row gap-3 items-center'>
                {/* Search Input */}
                <div className='flex-1 w-full relative group'>
                    <div className='absolute inset-y-0 left-4 flex items-center pointer-events-none'>
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className='w-5 h-5 text-slate-400 group-focus-within:text-primary transition-colors'
                        />
                    </div>
                    <input
                        type='text'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={placeholder}
                        className='w-full pl-12 pr-4 py-3 bg-slate-50 border border-transparent focus:border-primary/20 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all font-medium text-slate-700 placeholder-slate-400'
                    />
                </div>

                {/* Vertical Divider (Desktop) */}
                <div className='hidden md:block w-px h-10 bg-slate-100'></div>

                {/* Duration Filter */}
                <div className='w-full md:w-64 relative'>
                    <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className='w-full px-4 py-3 bg-slate-50 border border-transparent focus:border-primary/20 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer font-medium text-slate-700'
                    >
                        <option value=''>Durasi (Semua)</option>
                        <option value='1day'>1 Hari</option>
                        <option value='2d1n'>2 Hari 1 Malam</option>
                        <option value='3d2n'>3 Hari 2 Malam</option>
                    </select>
                    <div className='absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400'>
                        <svg
                            className='w-4 h-4'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M19 9l-7 7-7-7'
                            ></path>
                        </svg>
                    </div>
                </div>

                {/* Reset Button */}
                {(query || duration) && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            setQuery('');
                            setDuration('');
                        }}
                        className='p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all'
                        title='Reset Filters'
                    >
                        <FontAwesomeIcon
                            icon={faRotateLeft}
                            className='w-5 h-5'
                        />
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
}
