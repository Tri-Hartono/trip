'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faFacebook,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navTextColor =
        isScrolled || isMobileMenuOpen ? 'text-slate-800' : 'text-white';
    const navBg = isScrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-teal-50 shadow-sm'
        : 'bg-transparent';

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${navBg}`}
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-20'>
                    {/* Logo */}
                    <Link
                        href='/'
                        className='flex items-center space-x-2 group'
                    >
                        {/* Placeholder for actual logo usage, ensuring it works on both backgrounds if it's an image. 
                             Assuming logo.webp is versatile. If not, might need filter invert. 
                             For now, keeping as is. 
                         */}
                        <Image
                            src='/logo.webp'
                            alt='Jelana Explore Logo'
                            width={60}
                            height={60}
                            className='group-hover:scale-105 transition-transform'
                        />
                        <div
                            className={`font-heading font-bold text-xl tracking-tight transition-colors ${navTextColor}`}
                        >
                            Jelana Explore
                        </div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className='hidden md:flex items-center space-x-8'>
                        {[
                            { name: 'Beranda', href: '/' },
                            { name: 'Trip', href: '/trips' },
                            { name: 'Galeri', href: '/gallery' },
                            { name: 'Kontak', href: '/contact' },
                        ].map((item, idx) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`font-medium text-sm transition-all duration-300 relative ${
                                    isActive(item.href)
                                        ? 'text-primary font-bold'
                                        : `${navTextColor} hover:text-primary`
                                }`}
                            >
                                {item.name}
                                {isActive(item.href) && (
                                    <motion.div
                                        layoutId='desktop-navbar-underline'
                                        className='absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full'
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </Link>
                        ))}

                        {/* Social Media Icons */}
                        <div
                            className={`flex items-center space-x-4 ml-6 border-l pl-6 ${isScrolled ? 'border-gray-200' : 'border-white/20'}`}
                        >
                            <SocialIcon
                                icon={faInstagram}
                                href='https://instagram.com/jelanaexplore'
                                colorClass='hover:text-pink-500'
                                textColor={navTextColor}
                            />
                            <SocialIcon
                                icon={faFacebook}
                                href='https://facebook.com/jelanaexplore'
                                colorClass='hover:text-teal-900'
                                textColor={navTextColor}
                            />
                            <SocialIcon
                                icon={faWhatsapp}
                                href='https://wa.me/6285121379822'
                                colorClass='hover:text-green-500'
                                textColor={navTextColor}
                            />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden flex items-center justify-center w-10 h-10 ${navTextColor}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label='Toggle menu'
                    >
                        <div className='space-y-1.5 w-6'>
                            <span
                                className={`block w-full h-0.5 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-gray-900' : 'bg-white'} ${
                                    isMobileMenuOpen
                                        ? 'rotate-45 translate-y-2'
                                        : ''
                                }`}
                            />
                            <span
                                className={`block w-full h-0.5 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-gray-900' : 'bg-white'} ${
                                    isMobileMenuOpen ? 'opacity-0' : ''
                                }`}
                            />
                            <span
                                className={`block w-full h-0.5 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-gray-900' : 'bg-white'} ${
                                    isMobileMenuOpen
                                        ? '-rotate-45 -translate-y-2'
                                        : ''
                                }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className='md:hidden fixed inset-0 top-0 bg-white z-40 pt-24 px-6 overflow-hidden'
                    >
                        <div className='flex flex-col space-y-6'>
                            {[
                                { name: 'Beranda', href: '/' },
                                { name: 'Trip', href: '/trips' },
                                { name: 'Galeri', href: '/gallery' },
                                { name: 'Kontak', href: '/contact' },
                            ].map((item, idx) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        className={`text-2xl font-bold transition-colors ${
                                            isActive(item.href)
                                                ? 'text-primary'
                                                : 'text-gray-900 hover:text-primary'
                                        }`}
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className='pt-8 border-t border-gray-100 flex items-center space-x-8'
                            >
                                <SocialIcon
                                    icon={faInstagram}
                                    href='https://instagram.com/jelanaexplore'
                                    colorClass='text-gray-400 hover:text-pink-500'
                                    iconSize='w-6 h-6'
                                />
                                <SocialIcon
                                    icon={faFacebook}
                                    href='https://facebook.com/jelanaexplore'
                                    colorClass='text-gray-400 hover:text-teal-900'
                                    iconSize='w-6 h-6'
                                />
                                <SocialIcon
                                    icon={faWhatsapp}
                                    href='https://wa.me/6285121379822'
                                    colorClass='text-gray-400 hover:text-green-500'
                                    iconSize='w-6 h-6'
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

function SocialIcon({
    icon,
    href,
    colorClass,
    textColor = '',
    iconSize = 'w-4 h-4',
}: {
    icon: any;
    href: string;
    colorClass: string;
    textColor?: string;
    iconSize?: string;
}) {
    return (
        <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className={`transition-colors ${textColor} ${colorClass}`}
        >
            <FontAwesomeIcon icon={icon} className={iconSize} />
        </a>
    );
}
