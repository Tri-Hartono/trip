'use client';

import { useState, useEffect } from 'react';

export default function ContactPage() {
    useEffect(() => {
        document.title = 'Hubungi Kami - Seribu Island Tours';
    }, []);

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
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Create WhatsApp message
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

        const whatsappUrl = `https://wa.me/62812345678?text=${encodeURIComponent(
            message
        )}`;
        window.open(whatsappUrl, '_blank');

        // Reset form
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

    return (
        <>
            {/* Page Header */}
            {/* <div className='bg-linear-to-r from-blue-600 to-cyan-500 text-white py-12'>
                <div className='max-w-7xl mx-auto px-4'>
                    <h1 className='text-5xl font-bold mb-2'>Hubungi Kami</h1>
                    <p className='text-lg text-blue-100'>
                        Kami siap membantu Anda melakukan booking dan menjawab
                        pertanyaan apapun
                    </p>
                </div>
            </div> */}
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
                    <h1 className='text-4xl md:text-6xl font-black mb-4 drop-shadow-2xl'>
                        Hubungi Kami
                    </h1>
                    <p className='text-lg md:text-xl text-blue-100 font-semibold'>
                        Kami siap membantu Anda melakukan booking dan menjawab
                        pertanyaan apapun
                    </p>
                </div>
            </div>

            <div className='max-w-7xl mx-auto px-4 py-16'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
                    {/* Contact Information */}
                    <div className='lg:col-span-1'>
                        <h2 className='text-3xl font-bold text-gray-800 mb-8'>
                            Informasi Kontak
                        </h2>

                        <div className='space-y-8'>
                            {/* Phone */}
                            <div>
                                <h3 className='font-bold text-gray-800 mb-2 flex items-center gap-2'>
                                    <span className='text-2xl'>📞</span> Telepon
                                </h3>
                                <p className='text-gray-600'>
                                    +62 812 3456 7890
                                </p>
                            </div>

                            {/* WhatsApp */}
                            <div>
                                <h3 className='font-bold text-gray-800 mb-2 flex items-center gap-2'>
                                    <span className='text-2xl'>💬</span>{' '}
                                    WhatsApp
                                </h3>
                                <p className='text-gray-600'>
                                    +62 812 3456 7890
                                </p>
                                <a
                                    href='https://wa.me/62812345678'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-green-600 hover:text-green-700 font-semibold mt-2 inline-block'
                                >
                                    Chat dengan kami →
                                </a>
                            </div>

                            {/* Email */}
                            <div>
                                <h3 className='font-bold text-gray-800 mb-2 flex items-center gap-2'>
                                    <span className='text-2xl'>📧</span> Email
                                </h3>
                                <p className='text-gray-600'>
                                    info@seribuislandtours.com
                                </p>
                            </div>

                            {/* Office */}
                            <div>
                                <h3 className='font-bold text-gray-800 mb-2 flex items-center gap-2'>
                                    <span className='text-2xl'>🏢</span> Kantor
                                </h3>
                                <p className='text-gray-600'>
                                    Jl. Marina Ancol No. 123
                                    <br />
                                    Jakarta Utara, 14430
                                </p>
                            </div>

                            {/* Hours */}
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

                        {/* Quick Contact Buttons */}
                        <div className='mt-12 space-y-3'>
                            <a
                                href='https://wa.me/62812345678'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors'
                            >
                                💬 WhatsApp Chat
                            </a>
                            <a
                                href='tel:+6281234567890'
                                className='block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors'
                            >
                                📞 Call Us
                            </a>
                        </div>
                    </div>

                    {/* Booking Form */}
                    <div className='lg:col-span-2'>
                        <h2 className='text-3xl font-bold text-gray-800 mb-8'>
                            Form Booking
                        </h2>

                        {submitted && (
                            <div className='mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg'>
                                ✓ Terima kasih! Anda akan diarahkan ke WhatsApp.
                                Silakan kirim pesan booking Anda.
                            </div>
                        )}

                        <form
                            onSubmit={handleSubmit}
                            className='space-y-6 bg-white rounded-2xl shadow-lg p-8'
                        >
                            {/* Name */}
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

                            {/* Email */}
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

                            {/* Phone */}
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

                            {/* Trip Package */}
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
                                    <option value='Pramuka 1 Day'>
                                        Pulau Pramuka - 1 Day Trip
                                    </option>
                                    <option value='Pramuka 2D1N'>
                                        Pulau Pramuka - 2D1N
                                    </option>
                                    <option value='Pramuka 3D2N'>
                                        Pulau Pramuka - 3D2N
                                    </option>
                                    <option value='Untung Jawa 1 Day'>
                                        Pulau Untung Jawa - 1 Day Trip
                                    </option>
                                    <option value='Untung Jawa 2D1N'>
                                        Pulau Untung Jawa - 2D1N
                                    </option>
                                    <option value='Untung Jawa 3D2N'>
                                        Pulau Untung Jawa - 3D2N
                                    </option>
                                    <option value='Seribu 1 Day'>
                                        Pulau Seribu - 1 Day Trip
                                    </option>
                                    <option value='Seribu 2D1N'>
                                        Pulau Seribu - 2D1N
                                    </option>
                                    <option value='Seribu 3D2N'>
                                        Pulau Seribu - 3D2N
                                    </option>
                                    <option value='Ayer 1 Day'>
                                        Pulau Ayer - 1 Day Trip
                                    </option>
                                    <option value='Ayer 2D1N'>
                                        Pulau Ayer - 2D1N
                                    </option>
                                    <option value='Ayer 3D2N'>
                                        Pulau Ayer - 3D2N
                                    </option>
                                    <option value='Onrust 1 Day'>
                                        Pulau Onrust - 1 Day Trip
                                    </option>
                                    <option value='Onrust 2D1N'>
                                        Pulau Onrust - 2D1N
                                    </option>
                                    <option value='Onrust 3D2N'>
                                        Pulau Onrust - 3D2N
                                    </option>
                                </select>
                            </div>

                            {/* Number of People */}
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
                                    placeholder='1'
                                />
                            </div>

                            {/* Trip Date */}
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

                            {/* Message */}
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

                            {/* Submit Button */}
                            <button
                                type='submit'
                                className='w-full bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-105 text-lg'
                            >
                                📨 Kirim Booking ke WhatsApp
                            </button>

                            <p className='text-sm text-gray-600 text-center'>
                                Dengan mengklik tombol di atas, Anda akan
                                diarahkan ke WhatsApp untuk menyelesaikan
                                booking
                            </p>
                        </form>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <section className='bg-linear-to-r from-blue-50 to-cyan-50 py-16'>
                <div className='max-w-6xl mx-auto px-4'>
                    <h2 className='text-4xl font-bold text-gray-800 text-center mb-12'>
                        Pertanyaan Umum
                    </h2>

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
                            <div
                                key={idx}
                                className='bg-white rounded-xl shadow-md p-6'
                            >
                                <h3 className='font-bold text-gray-800 mb-3 text-lg'>
                                    {faq.question}
                                </h3>
                                <p className='text-gray-600'>{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
