import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faFacebook,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className='bg-teal-950 text-white font-sans border-t border-teal-900'>
            <div className='max-w-7xl mx-auto px-4 py-16'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-12'>
                    {/* Company Info */}
                    <div className='space-y-4'>
                        <h3 className='font-heading font-bold text-2xl text-white'>
                            Jelana Explore
                        </h3>
                        <p className='text-teal-100/80 text-sm leading-relaxed max-w-xs'>
                            Jelajahi keindahan Indonesia dengan paket wisata
                            premium. Aman, nyaman, dan tak terlupakan.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className='font-bold text-white mb-6'>Menu</h4>
                        <ul className='space-y-3 text-sm font-medium'>
                            {['Beranda', 'Paket Trip', 'Galeri', 'Kontak'].map(
                                (item) => (
                                    <li key={item}>
                                        <Link
                                            href={
                                                item === 'Beranda'
                                                    ? '/'
                                                    : `/${item.toLowerCase().replace(' ', '-')}`
                                            }
                                            className='text-teal-100/70 hover:text-white transition-colors'
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className='font-bold text-white mb-6'>Kontak</h4>
                        <ul className='space-y-3 text-sm text-teal-100/70'>
                            <li>
                                <a
                                    href='https://wa.me/6285121379822'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='hover:text-white transition-colors flex items-center gap-2'
                                >
                                    <span>Support 1:</span>
                                    <span className='font-semibold text-white'>
                                        +62 851-2137-9822
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://wa.me/6287780598981'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='hover:text-white transition-colors flex items-center gap-2'
                                >
                                    <span>Support 2:</span>
                                    <span className='font-semibold text-white'>
                                        +62 877-8059-8981
                                    </span>
                                </a>
                            </li>
                            <li className='pt-2'>jelanaexplore@gmail.com</li>
                            <li>Jakarta, Indonesia</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className='font-bold text-white mb-6'>
                            Ikuti Kami
                        </h4>
                        <div className='flex gap-4'>
                            {[
                                {
                                    icon: faInstagram,
                                    href: 'https://instagram.com/jelanaexplore',
                                },
                                {
                                    icon: faFacebook,
                                    href: 'https://facebook.com/jelanaexplore',
                                },
                                {
                                    icon: faWhatsapp,
                                    href: 'https://wa.me/6285121379822',
                                },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='w-10 h-10 bg-teal-900 border border-teal-800 hover:border-white hover:bg-white hover:text-teal-950 text-teal-100 rounded-full flex items-center justify-center transition-all duration-300'
                                >
                                    <FontAwesomeIcon
                                        icon={social.icon}
                                        className='w-5 h-5'
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='border-t border-teal-900 mt-16 pt-8 text-center text-sm text-teal-100/50'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                        <p>
                            &copy; {new Date().getFullYear()} Jelana Explore.
                            All rights reserved.
                        </p>
                        <div className='flex gap-6'>
                            <Link
                                href='#'
                                className='hover:text-white transition-colors'
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href='#'
                                className='hover:text-white transition-colors'
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
