'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faFacebook,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

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
                isScrolled || isMobileMenuOpen
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
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                        >
                            <Link
                                href='/'
                                className='hover:text-blue-200 transition-colors font-medium'
                            >
                                Beranda
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >
                            <Link
                                href='/trips'
                                className='hover:text-blue-200 transition-colors font-medium'
                            >
                                Trip
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <Link
                                href='/gallery'
                                className='hover:text-blue-200 transition-colors font-medium'
                            >
                                Galeri
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <Link
                                href='/contact'
                                className='hover:text-blue-200 transition-colors font-medium'
                            >
                                Kontak
                            </Link>
                        </motion.div>

                        {/* Social Media Icons */}
                        <div className='flex items-center space-x-3 ml-4 border-l border-white/30 pl-4'>
                            <motion.a
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                href='https://instagram.com/jelanaexplore'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='hover:text-pink-300 transition-colors'
                                aria-label='Instagram'
                            >
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className='w-5 h-5'
                                />
                            </motion.a>
                            <motion.a
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                href='https://facebook.com/jelanaexplore'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='hover:text-blue-300 transition-colors'
                                aria-label='Facebook'
                            >
                                <FontAwesomeIcon
                                    icon={faFacebook}
                                    className='w-5 h-5'
                                />
                            </motion.a>
                            <motion.a
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                href='https://wa.me/6285121379822'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='hover:text-green-300 transition-colors'
                                aria-label='WhatsApp'
                            >
                                <FontAwesomeIcon
                                    icon={faWhatsapp}
                                    className='w-5 h-5'
                                />
                            </motion.a>
                        </div>
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
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className={`md:hidden fixed inset-0 top-16 w-screen h-screen bg-gradient-to-r from-blue-600 to-cyan-400 ${
                    isMobileMenuOpen ? 'visible' : 'invisible'
                }`}
            >
                <div className='flex flex-col items-center justify-center h-full space-y-8'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={
                            isMobileMenuOpen
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -50 }
                        }
                        transition={{ delay: 0.1, duration: 0.4 }}
                    >
                        <Link
                            href='/'
                            className='text-3xl font-bold text-white hover:text-blue-100 transition-colors'
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Beranda
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={
                            isMobileMenuOpen
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -50 }
                        }
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        <Link
                            href='/trips'
                            className='text-3xl font-bold text-white hover:text-blue-100 transition-colors'
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Trip
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={
                            isMobileMenuOpen
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -50 }
                        }
                        transition={{ delay: 0.3, duration: 0.4 }}
                    >
                        <Link
                            href='/gallery'
                            className='text-3xl font-bold text-white hover:text-blue-100 transition-colors'
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Galeri
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={
                            isMobileMenuOpen
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -50 }
                        }
                        transition={{ delay: 0.4, duration: 0.4 }}
                    >
                        <Link
                            href='/contact'
                            className='text-3xl font-bold text-white hover:text-blue-100 transition-colors'
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Kontak
                        </Link>
                    </motion.div>

                    {/* Social Media Icons - Mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={
                            isMobileMenuOpen
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 20 }
                        }
                        transition={{ delay: 0.5, duration: 0.4 }}
                        className='flex items-center space-x-6 mt-8 pt-8 border-t border-white/30'
                    >
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            href='https://instagram.com/jelanaexplore'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-pink-300 transition-colors'
                            aria-label='Instagram'
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className='w-8 h-8'
                            />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            href='https://facebook.com/jelanaexplore'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-blue-300 transition-colors'
                            aria-label='Facebook'
                        >
                            <FontAwesomeIcon
                                icon={faFacebook}
                                className='w-8 h-8'
                            />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            href='https://wa.me/6285121379822'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-green-300 transition-colors'
                            aria-label='WhatsApp'
                        >
                            <FontAwesomeIcon
                                icon={faWhatsapp}
                                className='w-8 h-8'
                            />
                        </motion.a>
                    </motion.div>
                </div>
            </motion.div>
        </nav>
    );
}
