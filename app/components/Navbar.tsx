import Link from 'next/link';

export default function Navbar() {
    return (
        <nav
            className='
            fixed w-full top-0 z-50
            bg-black/10 
            backdrop-blur-sm 
            shadow-lg shadow-black/20
            border-b border-white/20
            text-white
        '
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    {/* Logo */}
                    <Link href='/' className='flex items-center space-x-2'>
                        <span className='font-bold text-xl'>Enjoy Trip</span>
                    </Link>

                    {/* Navigation Links */}
                    <div className='flex items-center space-x-6'>
                        <Link
                            href='/'
                            className='hover:text-blue-400 transition-colors font-medium'
                        >
                            Beranda
                        </Link>
                        <Link
                            href='/trips'
                            className='hover:text-blue-400 transition-colors font-medium'
                        >
                            Trip
                        </Link>
                        <Link
                            href='/gallery'
                            className='hover:text-blue-400 transition-colors font-medium'
                        >
                            Gallery
                        </Link>
                        <Link
                            href='/contact'
                            className='hover:text-blue-400 transition-colors font-medium'
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
