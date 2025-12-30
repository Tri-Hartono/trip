'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`
            fixed w-full top-0 z-50
            transition-all duration-300
            ${
                isScrolled
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-400 shadow-lg'
                    : 'bg-transparent'
            }
            text-white
        `}
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    {/* Logo */}
                    <Link href='/' className='flex items-center space-x-2'>
                        <Image
                            src='/logo.png'
                            alt='Jelana Explore Logo'
                            width={40}
                            height={40}
                        />
                        <div className='font-bold text-xl'>Jelana Explore</div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className='hidden md:flex items-center space-x-6'>
                        <Link
                            href='/'
                            className='hover:text-blue-200 transition-colors font-medium'
                        >
                            Beranda
                        </Link>
                        <Link
                            href='/trips'
                            className='hover:text-blue-200 transition-colors font-medium'
                        >
                            Trip
                        </Link>
                        <Link
                            href='/gallery'
                            className='hover:text-blue-200 transition-colors font-medium'
                        >
                            Gallery
                        </Link>
                        <Link
                            href='/contact'
                            className='hover:text-blue-200 transition-colors font-medium'
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className='md:hidden flex items-center justify-center w-10 h-10'
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label='Toggle menu'
                    >
                        <div className='space-y-1.5'>
                            <span
                                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                                    isMobileMenuOpen
                                        ? 'rotate-45 translate-y-2'
                                        : ''
                                }`}
                            ></span>
                            <span
                                className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                                    isMobileMenuOpen ? 'opacity-0' : ''
                                }`}
                            ></span>
                            <span
                                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                                    isMobileMenuOpen
                                        ? '-rotate-45 -translate-y-2'
                                        : ''
                                }`}
                            ></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${
                    isMobileMenuOpen ? 'max-h-64' : 'max-h-0'
                } ${
                    isScrolled
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-400'
                        : 'bg-blue-600/95 backdrop-blur-md'
                }`}
            >
                <div className='px-4 py-4 space-y-3'>
                    <Link
                        href='/'
                        className='block py-2 hover:text-blue-200 transition-colors font-medium'
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Beranda
                    </Link>
                    <Link
                        href='/trips'
                        className='block py-2 hover:text-blue-200 transition-colors font-medium'
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Trip
                    </Link>
                    <Link
                        href='/gallery'
                        className='block py-2 hover:text-blue-200 transition-colors font-medium'
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Gallery
                    </Link>
                    <Link
                        href='/contact'
                        className='block py-2 hover:text-blue-200 transition-colors font-medium'
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
