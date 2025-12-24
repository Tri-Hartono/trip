import Link from 'next/link';

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <div className='bg-linear-to-r from-blue-600 via-blue-500 to-cyan-500 text-white py-24 relative overflow-hidden'>
                <div className='absolute inset-0 opacity-10'>
                    <div className='absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl'></div>
                    <div className='absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl'></div>
                </div>
                <div className='max-w-7xl mx-auto px-4 text-center relative z-10'>
                    <h1 className='text-5xl md:text-6xl font-black mb-6 drop-shadow-2xl'>
                        Tentang Kami
                    </h1>
                    <p className='text-xl md:text-2xl text-blue-100 font-semibold'>
                        Menciptakan pengalaman wisata tak terlupakan ke
                        Kepulauan Seribu
                    </p>
                </div>
            </div>

            {/* Story Section */}
            <section className='max-w-6xl mx-auto px-4 py-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
                    <div>
                        <h2 className='text-4xl md:text-5xl font-black text-gray-900 mb-8'>
                            Kisah Kami
                        </h2>
                        <p className='text-lg text-gray-700 leading-relaxed mb-6 font-medium'>
                            Kami adalah tim yang berdedikasi untuk memberikan
                            pengalaman wisata terbaik ke Kepulauan Seribu.
                            Dengan pengalaman lebih dari 10 tahun melayani
                            ribuan pelancong, kami memahami setiap detail yang
                            membuat perjalanan Anda berkesan.
                        </p>
                        <p className='text-lg text-gray-700 leading-relaxed mb-6 font-medium'>
                            Dimulai dari passion kecil untuk berbagi keindahan
                            alam Kepulauan Seribu, kami telah berkembang menjadi
                            operator wisata terpercaya yang melayani keluarga,
                            kelompok, dan perusahaan.
                        </p>
                        <p className='text-lg text-gray-700 leading-relaxed font-medium'>
                            Misi kami adalah memastikan setiap tamu pulang
                            dengan senyuman, kenangan indah, dan keinginan untuk
                            kembali lagi.
                        </p>
                    </div>
                    <div className='bg-linear-to-br from-blue-400 via-cyan-300 to-emerald-300 rounded-3xl h-96 shadow-2xl'></div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className='bg-linear-to-r from-blue-50 via-cyan-50 to-emerald-50 py-20'>
                <div className='max-w-6xl mx-auto px-4'>
                    <div className='text-center mb-16'>
                        <span className='inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-bold mb-4'>
                            Keunggulan Kami
                        </span>
                        <h2 className='text-4xl md:text-5xl font-black text-gray-900 mb-6'>
                            Mengapa Memilih Kami?
                        </h2>
                        <p className='text-xl text-gray-600 font-medium'>
                            Komitmen kami terhadap keunggulan dan kepuasan
                            pelanggan
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {[
                            {
                                icon: '⛵',
                                title: 'Kapal Private',
                                description:
                                    'Armada kapal modern dan terawat dengan baik, dilengkapi dengan safety equipment terlengkap.',
                            },
                            {
                                icon: '👨‍💼',
                                title: 'Pemandu Berpengalaman',
                                description:
                                    'Guide profesional berlisensi resmi yang menguasai area Kepulauan Seribu dengan baik.',
                            },
                            {
                                icon: '📸',
                                title: 'Dokumentasi Profesional',
                                description:
                                    'Tim fotografi profesional siap mengabadikan setiap momen spesial Anda selama perjalanan.',
                            },
                            {
                                icon: '💰',
                                title: 'Harga Transparan',
                                description:
                                    'Tidak ada biaya tersembunyi. Semua harga sudah termasuk semua layanan yang dijanjikan.',
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className='bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-blue-50'
                            >
                                <p className='text-6xl mb-4'>{item.icon}</p>
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                                    {item.title}
                                </h3>
                                <p className='text-gray-600 leading-relaxed'>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className='max-w-6xl mx-auto px-4 py-20'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-black text-gray-900 mb-6'>
                        Nilai-Nilai Kami
                    </h2>
                    <p className='text-xl text-gray-600 font-medium'>
                        Prinsip yang memandu setiap keputusan kami
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {[
                        {
                            title: 'Keamanan Pertama',
                            description:
                                'Keselamatan adalah prioritas utama kami. Semua prosedur dan peralatan telah memenuhi standar keselamatan internasional.',
                        },
                        {
                            title: 'Keberlanjutan Lingkungan',
                            description:
                                'Kami berkomitmen menjaga kelestarian alam Kepulauan Seribu melalui praktik wisata yang berkelanjutan dan ramah lingkungan.',
                        },
                        {
                            title: 'Kepuasan Pelanggan',
                            description:
                                'Kepuasan Anda adalah kesuksesan kami. Tim kami bekerja keras untuk melebihi ekspektasi Anda di setiap aspek.',
                        },
                        {
                            title: 'Profesionalisme',
                            description:
                                'Setiap anggota tim kami adalah profesional terlatih yang berkomitmen pada standar kualitas tertinggi.',
                        },
                        {
                            title: 'Inovasi Berkelanjutan',
                            description:
                                'Kami terus berinovasi untuk menawarkan paket dan layanan baru yang lebih menarik dan berkualitas.',
                        },
                        {
                            title: 'Tanggung Jawab Sosial',
                            description:
                                'Kami percaya dalam memberikan dampak positif kepada komunitas lokal melalui program CSR dan dukungan ekonomi lokal.',
                        },
                    ].map((value, idx) => (
                        <div
                            key={idx}
                            className='bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
                        >
                            <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                                {value.title}
                            </h3>
                            <p className='text-gray-600 leading-relaxed'>
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team Section */}
            <section className='bg-gray-50 py-16'>
                <div className='max-w-6xl mx-auto px-4'>
                    <div className='text-center mb-12'>
                        <h2 className='text-4xl font-bold text-gray-800 mb-4'>
                            Tim Kami
                        </h2>
                        <p className='text-xl text-gray-600'>
                            Profesional berdedikasi yang siap memberikan
                            pengalaman terbaik
                        </p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {[
                            {
                                name: 'Budi Santoso',
                                role: 'Manajer Operasional',
                                icon: '👨‍💼',
                            },
                            {
                                name: 'Siti Nurhaliza',
                                role: 'Koordinator Wisata',
                                icon: '👩‍💼',
                            },
                            {
                                name: 'Andi Wijaya',
                                role: 'Chief Guide',
                                icon: '🧭',
                            },
                            {
                                name: 'Lisa Andriyani',
                                role: 'Koordinator Customer',
                                icon: '📞',
                            },
                        ].map((member, idx) => (
                            <div
                                key={idx}
                                className='bg-white rounded-xl shadow-md overflow-hidden text-center p-6'
                            >
                                <p className='text-5xl mb-4'>{member.icon}</p>
                                <h3 className='text-lg font-bold text-gray-800 mb-1'>
                                    {member.name}
                                </h3>
                                <p className='text-gray-600'>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className='bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16'>
                <div className='max-w-6xl mx-auto px-4'>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
                        {[
                            { number: '10+', label: 'Tahun Pengalaman' },
                            { number: '1000+', label: 'Traveler Puas' },
                            { number: '5', label: 'Destinasi Pilihan' },
                            { number: '4.9/5', label: 'Rating Kami' },
                        ].map((stat, idx) => (
                            <div key={idx}>
                                <p className='text-5xl font-bold mb-2'>
                                    {stat.number}
                                </p>
                                <p className='text-blue-100'>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='max-w-6xl mx-auto px-4 py-16'>
                <div className='bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-12 text-center'>
                    <h2 className='text-4xl font-bold text-gray-800 mb-4'>
                        Siap untuk Petualangan?
                    </h2>
                    <p className='text-xl text-gray-600 mb-8'>
                        Bergabunglah dengan ribuan traveler yang telah merasakan
                        keindahan Kepulauan Seribu bersama kami
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <Link
                            href='/trips'
                            className='inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all'
                        >
                            Lihat Paket Wisata
                        </Link>
                        <Link
                            href='/contact'
                            className='inline-block border-2 border-blue-600 text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-blue-50 transition-all'
                        >
                            Hubungi Kami
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
