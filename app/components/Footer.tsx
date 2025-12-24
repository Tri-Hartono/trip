import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='bg-gray-900 text-white'>
            <div className='max-w-7xl mx-auto px-4 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    {/* Company Info */}
                    <div>
                        <h3 className='font-bold text-lg mb-4'>Pramuka Trip</h3>
                        <p className='text-gray-400 text-sm leading-relaxed'>
                            Operator wisata terpercaya untuk pengalaman tak
                            terlupakan di Kepulauan Seribu.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className='font-semibold mb-4'>Menu</h4>
                        <ul className='space-y-2 text-sm'>
                            <li>
                                <Link
                                    href='/'
                                    className='text-gray-400 hover:text-white transition-colors'
                                >
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/trips'
                                    className='text-gray-400 hover:text-white transition-colors'
                                >
                                    Paket Trip
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/gallery'
                                    className='text-gray-400 hover:text-white transition-colors'
                                >
                                    Galeri
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/contact'
                                    className='text-gray-400 hover:text-white transition-colors'
                                >
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className='font-semibold mb-4'>Kontak</h4>
                        <ul className='space-y-2 text-sm text-gray-400'>
                            <li>
                                <a
                                    href='https://wa.me/6287780598981'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='hover:text-white transition-colors'
                                >
                                    Admin 1: +62 877-8059-8981
                                </a>
                            </li>
                            <li>
                                <a
                                    href='https://wa.me/6282211110898'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='hover:text-white transition-colors'
                                >
                                    Admin 2: +62 822-1111-0898
                                </a>
                            </li>
                            <li>Email: info@pramukatrip.com</li>
                            <li>Instagram: @pramukatrip</li>
                            <li>Jam Operasional: 08:00 - 20:00 WIB</li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className='font-semibold mb-4'>Ikuti Kami</h4>
                        <div className='flex gap-4'>
                            <a
                                href='https://instagram.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors'
                            >
                                <span className='text-sm'>IG</span>
                            </a>
                            <a
                                href='https://facebook.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors'
                            >
                                <span className='text-sm'>FB</span>
                            </a>
                            <a
                                href='https://wa.me/62812345678'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='w-10 h-10 bg-gray-800 hover:bg-cyan-500 rounded-full flex items-center justify-center transition-colors'
                            >
                                <span className='text-sm'>WA</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400'>
                    <p>&copy; 2024 Pramuka Trip. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
