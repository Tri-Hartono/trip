'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactClient() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        tripPackage: '',
        numberOfPeople: '1',
        tripDate: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const message = `
Halo, saya ingin melakukan booking dengan detail:

Nama: ${formData.name}
Email: ${formData.email}
No. HP: ${formData.phone}
Paket Wisata: ${formData.tripPackage}
Jumlah Orang: ${formData.numberOfPeople}
Tanggal Trip: ${formData.tripDate}

Catatan Tambahan:
${formData.message}

Terima kasih!
    `.trim();

        const whatsappUrl = `https://wa.me/6285121379822?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');

        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                tripPackage: '',
                numberOfPeople: '1',
                tripDate: '',
                message: '',
            });
        }, 2000);
    };

    const tripPackageOptions = [
        {
            group: '🏝️ Pulau Pramuka',
            packages: [
                {
                    value: 'Pulau Pramuka - 2 Days 1 Night (Rp450.000/orang)',
                    label: '2 Days 1 Night — Rp 450.000/orang',
                },
                {
                    value: 'Pulau Pramuka - 3 Days 2 Nights (Rp600.000/orang)',
                    label: '3 Days 2 Nights — Rp 600.000/orang',
                },
            ],
        },
        {
            group: '🌴 Pulau Kelapa (Coming Soon)',
            packages: [
                {
                    value: 'Pulau Kelapa - 2 Days 1 Night (Rp450.000/orang)',
                    label: '2 Days 1 Night — Rp 450.000/orang',
                },
                {
                    value: 'Pulau Kelapa - 3 Days 2 Nights (Rp600.000/orang)',
                    label: '3 Days 2 Nights — Rp 600.000/orang',
                },
            ],
        },
        {
            group: '🌊 Pulau Harapan (Coming Soon)',
            packages: [
                {
                    value: 'Pulau Harapan - 2 Days 1 Night (Rp550.000/orang)',
                    label: '2 Days 1 Night — Rp 550.000/orang',
                },
                {
                    value: 'Pulau Harapan - 3 Days 2 Nights (Rp600.000/orang)',
                    label: '3 Days 2 Nights — Rp 600.000/orang',
                },
            ],
        },
        {
            group: '🐠 Pulau Tidung (Coming Soon)',
            packages: [
                {
                    value: 'Pulau Tidung - 2 Days 1 Night (Rp500.000/orang)',
                    label: '2 Days 1 Night — Rp 500.000/orang',
                },
                {
                    value: 'Pulau Tidung - 3 Days 2 Nights (Rp750.000/orang)',
                    label: '3 Days 2 Nights — Rp 750.000/orang',
                },
            ],
        },
    ];

    return (
        <>
            {/* Page Header */}
            <div
                className='text-white py-40 relative overflow-hidden bg-cover bg-center'
                style={{
                    backgroundImage:
                        'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBphBX5Wb4ygCd6LOm-y82tMJdzQS8Qt3hIZVNWgQSSgaUGqSYzKDk6Sj_n09be4X-CGz6mBP0vOqdu8Id4NiMNQbHgD5QRkbYzp4vh_r7H-mSiPuWb-303W2PC36kCZjcxAKRvOS5EoqvPj4hNsljVatx5rFuuYVDNgKgOWSi47nSK31YRnqcwnmgHYFsBy2nQhPeOvZHPJ9LSoMdMGWgbYra1nrIga-QrA1RG_h7KBYgVNcPG9KDd49Kvi9Wfs5ty--d4E7KTtQ)',
                    backgroundBlendMode: 'overlay',
                }}
            >
                <div className='absolute inset-0 opacity-10'>
                    <div className='absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
                    <div className='absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
                </div>
                <div className='max-w-7xl mx-auto px-4 relative z-10'>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='text-4xl md:text-6xl font-black mb-4 drop-shadow-2xl'
                    >
                        Hubungi Kami
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className='text-lg md:text-xl text-blue-100 font-semibold'
                    >
                        Kami siap membantu Anda melakukan booking dan menjawab
                        pertanyaan apapun
                    </motion.p>
                </div>
            </div>

            <div className='max-w-7xl mx-auto px-4 py-16'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className='lg:col-span-1'
                    >
                        <h2 className='text-3xl font-bold text-gray-800 mb-8'>
                            Informasi Kontak
                        </h2>

                        <div className='space-y-8'>
                            <div>
                                <h3 className='font-bold text-gray-800 mb-2 flex items-center gap-2'>
                                    <span className='text-2xl'>📞</span> Telepon
                                </h3>
                                <p className='text-gray-600'>
                                    +62 851-2137-9822
                                </p>
                            </div>

                            <div>
                                <h3 className='font-bold text-gray-800 mb-2 flex items-center gap-2'>
                                    <span className='text-2xl'>💬</span>{' '}
                                    WhatsApp
                                </h3>
                                <p className='text-gray-600'>
                                    +62 851-2137-9822 / +62 877-8059-8981
                                </p>
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href='https://wa.me/6285121379822'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-green-600 hover:text-green-700 font-semibold mt-2 inline-block'
                                >
                                    Chat dengan kami →
                                </motion.a>
                            </div>

                            <div>
                                <h3 className='font-bold text-gray-800 mb-2 flex items-center gap-2'>
                                    <span className='text-2xl'>📧</span> Email
                                </h3>
                                <p className='text-gray-600'>
                                    jelanaexplore@gmail.com
                                </p>
                            </div>

                            <div>
                                <h3 className='font-bold text-gray-800 mb-2 flex items-center gap-2'>
                                    <span className='text-2xl'>🏢</span> Kantor
                                </h3>
                                <p className='text-gray-600'>
                                    Jl M Kahfi II, Gg Bek Misar, RT 006 RW 003,
                                    No.33
                                    <br />
                                    Kel. Cipedak, Kec. Jagakarsa, Jakarta
                                    Selatan
                                </p>
                            </div>

                            <div>
                                <h3 className='font-bold text-gray-800 mb-2 flex items-center gap-2'>
                                    <span className='text-2xl'>🕐</span> Jam
                                    Operasional
                                </h3>
                                <p className='text-gray-600'>
                                    Senin - Minggu
                                    <br />
                                    06:00 - 18:00 WIB
                                </p>
                            </div>
                        </div>

                        <div className='mt-12 space-y-3'>
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href='https://wa.me/6285121379822'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='block w-full bg-teal-700 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors'
                            >
                                💬 WhatsApp Chat
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href='tel:+6285121379822'
                                className='block w-full bg-teal-700 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors'
                            >
                                📞 Call Us
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Booking Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className='lg:col-span-2'
                    >
                        <h2 className='text-3xl font-bold text-gray-800 mb-8'>
                            Form Booking
                        </h2>

                        {submitted && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className='mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg'
                            >
                                ✓ Terima kasih! Anda akan diarahkan ke WhatsApp.
                                Silakan kirim pesan booking Anda.
                            </motion.div>
                        )}

                        <form
                            onSubmit={handleSubmit}
                            className='space-y-6 bg-white rounded-2xl shadow-lg p-8'
                        >
                            <div>
                                <label className='block text-gray-700 font-semibold mb-2'>
                                    Nama Lengkap
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    placeholder='Masukkan nama Anda'
                                />
                            </div>

                            <div>
                                <label className='block text-gray-700 font-semibold mb-2'>
                                    Email
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    placeholder='email@example.com'
                                />
                            </div>

                            <div>
                                <label className='block text-gray-700 font-semibold mb-2'>
                                    No. Telepon
                                </label>
                                <input
                                    type='tel'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    placeholder='+62 812 3456 7890'
                                />
                            </div>

                            <div>
                                <label className='block text-gray-700 font-semibold mb-2'>
                                    Paket Wisata
                                </label>
                                <select
                                    name='tripPackage'
                                    value={formData.tripPackage}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white cursor-pointer'
                                >
                                    <option value=''>Pilih Paket Wisata</option>
                                    {tripPackageOptions.map((group) => (
                                        <optgroup
                                            key={group.group}
                                            label={group.group}
                                        >
                                            {group.packages.map((pkg) => (
                                                <option
                                                    key={pkg.value}
                                                    value={pkg.value}
                                                >
                                                    {pkg.label}
                                                </option>
                                            ))}
                                        </optgroup>
                                    ))}
                                </select>
                                <p className='text-xs text-gray-500 mt-1'>
                                    * Harga per orang, minimum 10 peserta
                                </p>
                            </div>

                            <div>
                                <label className='block text-gray-700 font-semibold mb-2'>
                                    Jumlah Peserta
                                </label>
                                <input
                                    type='number'
                                    name='numberOfPeople'
                                    value={formData.numberOfPeople}
                                    onChange={handleChange}
                                    min='1'
                                    max='100'
                                    required
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    placeholder='10'
                                />
                            </div>

                            <div>
                                <label className='block text-gray-700 font-semibold mb-2'>
                                    Tanggal Keberangkatan (Rencana)
                                </label>
                                <input
                                    type='date'
                                    name='tripDate'
                                    value={formData.tripDate}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                            </div>

                            <div>
                                <label className='block text-gray-700 font-semibold mb-2'>
                                    Pesan / Pertanyaan Tambahan
                                </label>
                                <textarea
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none'
                                    placeholder='Tulis pesan atau pertanyaan Anda di sini...'
                                ></textarea>
                            </div>

                            <motion.button
                                type='submit'
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className='w-full bg-linear-to-r from-teal-700 to-teal-600 hover:from-teal-800 hover:to-teal-600 text-white font-bold py-4 rounded-lg transition-all text-lg'
                            >
                                📨 Kirim Booking ke WhatsApp
                            </motion.button>

                            <p className='text-sm text-gray-600 text-center'>
                                Dengan mengklik tombol di atas, Anda akan
                                diarahkan ke WhatsApp untuk menyelesaikan
                                booking
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* FAQ Section */}
            <section className='bg-linear-to-r from-blue-50 to-cyan-50 py-16'>
                <div className='max-w-6xl mx-auto px-4'>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className='text-4xl font-bold text-gray-800 text-center mb-12'
                    >
                        Pertanyaan Umum
                    </motion.h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {[
                            {
                                question:
                                    'Berapa lama waktu respon customer service?',
                                answer: 'Tim kami merespons dalam waktu kurang dari 30 menit selama jam operasional (06:00-18:00 WIB).',
                            },
                            {
                                question:
                                    'Apakah bisa membatalkan atau mengubah jadwal?',
                                answer: 'Ya, pembatalan dapat dilakukan hingga 7 hari sebelum tanggal keberangkatan dengan potongan maksimal 50%.',
                            },
                            {
                                question:
                                    'Apakah sudah termasuk asuransi perjalanan?',
                                answer: 'Ya, semua paket sudah termasuk asuransi perjalanan standar. Asuransi extended juga tersedia.',
                            },
                            {
                                question:
                                    'Bagaimana jika cuaca tidak mendukung?',
                                answer: 'Kami memiliki prosedur safety yang ketat. Jika cuaca tidak memungkinkan, kami akan menunda atau mengganti jadwal.',
                            },
                            {
                                question:
                                    'Apakah bisa custom paket sesuai kebutuhan?',
                                answer: 'Tentu! Hubungi tim kami untuk mendiskusikan paket custom yang sesuai dengan kebutuhan Anda.',
                            },
                            {
                                question:
                                    'Bagaimana dengan pembayaran dan metode pembayaran?',
                                answer: 'Kami menerima transfer bank, e-wallet, dan kartu kredit. Down payment 30%, sisanya 3 hari sebelum trip.',
                            },
                        ].map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className='bg-white rounded-xl shadow-md p-6'
                            >
                                <h3 className='font-bold text-gray-800 mb-3 text-lg'>
                                    {faq.question}
                                </h3>
                                <p className='text-gray-600'>{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
