import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Galeri - Seribu Island Tours',
    description:
        'Jelajahi keindahan Kepulauan Seribu melalui koleksi foto dan video kami.',
};

export default function page() {
    return (
        <div>
            {/* Page Header */}
            <div
                className='text-white py-40 relative overflow-hidden bg-cover bg-center'
                style={{
                    backgroundImage:
                        'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBphBX5Wb4ygCd6LOm-y82tMJdzQS8Qt3hIZVNWgQSSgaUGqSYzKDk6Sj_n09be4X-CGz6mBP0vOqdu8Id4NiMNQbHgD5QRkbYzp4vh_r7H-mSiPuWb-303W2PC36kCZjcxAKRvOS5EoqvPj4hNsljVatx5rFuuYVDNgKgOWSi47nSK31YRnqcwnmgHYFsBy2nQhPeOvZHPJ9LSoMdMGWgbYra1nrIga-QrA1RG_h7KBYgVNcPG9KDd49Kvi9Wfs5ty--d4E7KTtQ)',
                }}
            >
                <div className='absolute inset-0 opacity-10'>
                    <div className='absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
                    <div className='absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl'></div>
                </div>
                <div className='max-w-7xl mx-auto px-4 relative z-10'>
                    <h1 className='text-4xl md:text-6xl font-black mb-4 drop-shadow-2xl'>
                        Galeri Kami
                    </h1>
                    <p className='text-lg md:text-xl text-blue-100 font-semibold'>
                        Jelajahi keindahan Kepulauan Seribu melalui setiap foto
                    </p>
                </div>
            </div>

            <div className='relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden'>
                <main className='flex-1 w-full max-w-[1280px] mx-auto px-6 py-20'>
                    <div className='flex flex-col items-center text-center max-w-[800px] mx-auto mb-12'>
                        <div className='flex items-center gap-2 mb-3'>
                            <span className='h-px w-8 bg-primary/50'></span>
                            <span className='text-primary font-bold text-xs uppercase tracking-wider'>
                                Explore the Paradise
                            </span>
                            <span className='h-px w-8 bg-primary/50'></span>
                        </div>
                        <h1 className='text-4xl md:text-5xl font-extrabold text-[#111618] dark:text-white mb-6 leading-tight'>
                            Island Gallery
                        </h1>
                        <p className='text-[#617f89] dark:text-gray-400 text-lg leading-relaxed'>
                            Discover the hidden gem of the Thousand Islands.
                            Experience crystal clear waters, vibrant marine
                            life, and unforgettable sunsets through our lens.
                        </p>
                    </div>
                    <div className='flex justify-center mb-12'>
                        <div className='flex flex-wrap justify-center gap-3'>
                            <button className='bg-primary text-white dark:text-[#111618] shadow-lg shadow-primary/25 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95'>
                                All Photos
                            </button>
                            <button className='bg-white dark:bg-[#1e2a30] text-[#617f89] dark:text-gray-300 border border-[#e5e7eb] dark:border-[#333] hover:border-primary hover:text-primary px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105 active:scale-95'>
                                Snorkeling
                            </button>
                            <button className='bg-white dark:bg-[#1e2a30] text-[#617f89] dark:text-gray-300 border border-[#e5e7eb] dark:border-[#333] hover:border-primary hover:text-primary px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105 active:scale-95'>
                                Island Hopping
                            </button>
                            <button className='bg-white dark:bg-[#1e2a30] text-[#617f89] dark:text-gray-300 border border-[#e5e7eb] dark:border-[#333] hover:border-primary hover:text-primary px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105 active:scale-95'>
                                Drone Shots
                            </button>
                            <button className='bg-white dark:bg-[#1e2a30] text-[#617f89] dark:text-gray-300 border border-[#e5e7eb] dark:border-[#333] hover:border-primary hover:text-primary px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105 active:scale-95'>
                                Accommodations
                            </button>
                        </div>
                    </div>
                    <div className='masonry-grid'>
                        <div className='masonry-item group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 cursor-pointer'>
                            <img
                                alt='Aerial view of a tropical island with turquoise water'
                                className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110'
                                data-alt='Aerial drone shot of tropical island surrounded by turquoise water'
                                src='https://lh3.googleusercontent.com/aida-public/AB6AXuBCt06IvpllTO64U1Jco5CYYgFPl2JYABD9Pq-F1WWKlog8AExC2euPXfQGBagUTjblxz_B1n1bG-mCFJhm2nIEqo6UGAu6AjD0e7h-QxLBuP29bFdilLXM89WuDr9PqfYMRldmGnGfY4gEdbkN85UjJYhX4_zsL820NUFyjrC08rcsJTAQDlNkndOxAUB8iew1VZOBV5PgeQgeosxoNd9QqoMpN1A7e6FgEE_mcVBwtjCvt6iQkCwlHOojxl3kDySS_zPlKuVXJg'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
                                <span className='text-white text-xs font-bold uppercase tracking-wider mb-1 bg-primary px-2 py-0.5 rounded w-fit'>
                                    Drone Shot
                                </span>
                                <h3 className='text-white font-bold text-lg'>
                                    Aerial Paradise View
                                </h3>
                                <div className='flex items-center gap-1 text-gray-200 text-sm mt-1'>
                                    <span className='material-symbols-outlined text-sm'>
                                        location_on
                                    </span>
                                    <span>Pulau Pramuka</span>
                                </div>
                            </div>
                        </div>
                        <div className='masonry-item group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 cursor-pointer'>
                            <img
                                alt='Underwater coral reef with colorful fish'
                                className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110'
                                data-alt='Colorful coral reef underwater scene with fish'
                                src='https://lh3.googleusercontent.com/aida-public/AB6AXuDP2KoZe_oDCVMB8BCETMIk514xmklXccMyxs50mDXltXZqSfWRPT9tPXw7OwSU_Z-AmYhVKT1DUDvxmtArAx64VO54_gtX6d6ygZzqB4zHapZFjRfU4zLavpmdEww9Kz6wV__TLZ7cMwDhGt2BmLlJbRYBF4GKk7PC97VjO3GUtB9SWbtfwBysrLO461EgKOV3PuKyaeeh8QyosElq__D4oaCTzFXQSHtZ-nLhWEmg_l-1MATRvr_8xbeA9a16EQk-rqXWSZgr0A'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
                                <span className='text-white text-xs font-bold uppercase tracking-wider mb-1 bg-primary px-2 py-0.5 rounded w-fit'>
                                    Snorkeling
                                </span>
                                <h3 className='text-white font-bold text-lg'>
                                    Coral Garden
                                </h3>
                                <div className='flex items-center gap-1 text-gray-200 text-sm mt-1'>
                                    <span className='material-symbols-outlined text-sm'>
                                        scuba_diving
                                    </span>
                                    <span>Semak Daun</span>
                                </div>
                            </div>
                        </div>
                        <div className='masonry-item group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 cursor-pointer'>
                            <img
                                alt='Wooden pier stretching into blue ocean'
                                className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110'
                                data-alt='Wooden pier stretching out into calm blue ocean water'
                                src='https://lh3.googleusercontent.com/aida-public/AB6AXuAW55NbSCWUWmbz5pog9xa2daU5rZqaL7SWL2XwsksEaQriG65xl-UwfDYnxHPcQCT3_9Lm9DDpIYZ4Y_9hB-5fnGgMYPEHf50VehF8Wvic1ljbjkZxzudSXRrhp-Kq1z8NdFo4nNz_xfp-R2VvkDKMM745wkSeBxG5ec-mxNgtK2HBJ09ysaT3ImhmKJisfTSoWUw7bImUJgZ0XTv0e5A_ieDWFqyAyocx1YuxOs4O8iloU-K7YsO8OFDDFMCt6BiwAhi_VUTbTg'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
                                <span className='text-white text-xs font-bold uppercase tracking-wider mb-1 bg-primary px-2 py-0.5 rounded w-fit'>
                                    Island Hopping
                                </span>
                                <h3 className='text-white font-bold text-lg'>
                                    Morning at the Dock
                                </h3>
                                <div className='flex items-center gap-1 text-gray-200 text-sm mt-1'>
                                    <span className='material-symbols-outlined text-sm'>
                                        sunny
                                    </span>
                                    <span>Pulau Air</span>
                                </div>
                            </div>
                        </div>
                        <div className='masonry-item group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 cursor-pointer'>
                            <img
                                alt='Stunning sunset over the ocean with silhouette boat'
                                className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110'
                                data-alt='Orange and purple sunset over ocean horizon with boat silhouette'
                                src='https://lh3.googleusercontent.com/aida-public/AB6AXuDzI39CBLhdPyiWtP3uEmMASPir1ij6N0tEiqcGzR0BbBriSAsmpmspkSDaqp-JkwWEEYqsklHG6LIrFCkp4Ekq2j_bWNC238CulrxUFIhdrU2WR6uuPpdri9wb-XQFP4EXsmVzu-CMus_N-ArsiX5bBNcmHdCjAn92-RlkoUtsUdsK0h5AdKpvVEKbw_poYunVszi31fPtmqFXcFMawLWIgisNfmO8Z4va6mUuFijwCoUtjZU0t5ZiDTbBlx6y3mNZxOKn4WAX5g'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
                                <span className='text-white text-xs font-bold uppercase tracking-wider mb-1 bg-primary px-2 py-0.5 rounded w-fit'>
                                    Sunset
                                </span>
                                <h3 className='text-white font-bold text-lg'>
                                    Golden Hour
                                </h3>
                                <div className='flex items-center gap-1 text-gray-200 text-sm mt-1'>
                                    <span className='material-symbols-outlined text-sm'>
                                        schedule
                                    </span>
                                    <span>West Beach</span>
                                </div>
                            </div>
                        </div>
                        <div className='masonry-item group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 cursor-pointer'>
                            <img
                                alt='White sand beach with clear blue water'
                                className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110'
                                data-alt='Pristine white sand beach meeting clear turquoise water'
                                src='https://lh3.googleusercontent.com/aida-public/AB6AXuDoFqyI__HwW6MHI3yYKoX0sGSs_s6knNSR6BGlosgmks8AVyI9Xiu_WVo0CsLJ5iI-mcbeMeOhkpjN-0teNt1zV1oPiFaeIbsSDC_On4p29WKq5GxzNQhqWMuU8HLBgjt7O70Ifymt5O3CdW0N9kp5UOI5YoasbXZ-P5TLWDUJZC9DfE5KdfuNiX76GAHPvKj-oZ72SKAbxaR3x3KdBsDD6saschve7aLjPwFtS3lBl4KVubkxExLqMvJigba_riQiAZhYDe--dQ'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
                                <span className='text-white text-xs font-bold uppercase tracking-wider mb-1 bg-primary px-2 py-0.5 rounded w-fit'>
                                    Landscape
                                </span>
                                <h3 className='text-white font-bold text-lg'>
                                    Hidden Beach
                                </h3>
                                <div className='flex items-center gap-1 text-gray-200 text-sm mt-1'>
                                    <span className='material-symbols-outlined text-sm'>
                                        beach_access
                                    </span>
                                    <span>Pulau Semak Daun</span>
                                </div>
                            </div>
                        </div>
                        <div className='masonry-item group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 cursor-pointer'>
                            <img
                                alt='Tourist swimming with sea turtles'
                                className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110'
                                data-alt='Snorkeler swimming underwater near a sea turtle'
                                src='https://lh3.googleusercontent.com/aida-public/AB6AXuAp2Nq7aMYZXaNDM67mruZRRskTnrWdF_iURLLiQgOzFQ6B62Q4xMO-xbTQc2ovHl-vZ1SA01wUFnzae1SQN3zjjJARNd2jEZBwfPQmSL9cVDE2l5f7Va1Myn6BntzbBOsaPOBy3Mk-jVcUOmlerERSZ-xFVehhUtUlQXGLRXUuOYMLU9GRwL-v_kDgQUt4aGZe2QD2vbMH2aaD0BXMy9UaC1JbcNC8gwiwG7TX5I8y8QB-AWYbEfXsPTYRhCFpAbNmHCnSR7CAnA'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
                                <span className='text-white text-xs font-bold uppercase tracking-wider mb-1 bg-primary px-2 py-0.5 rounded w-fit'>
                                    Wildlife
                                </span>
                                <h3 className='text-white font-bold text-lg'>
                                    Turtle Encounter
                                </h3>
                                <div className='flex items-center gap-1 text-gray-200 text-sm mt-1'>
                                    <span className='material-symbols-outlined text-sm'>
                                        water_drop
                                    </span>
                                    <span>Conservation Area</span>
                                </div>
                            </div>
                        </div>
                        <div className='masonry-item group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 cursor-pointer'>
                            <img
                                alt='Cozy wooden cottage interior on the beach'
                                className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110'
                                data-alt='Interior of a wooden beach cottage with ocean view'
                                src='https://lh3.googleusercontent.com/aida-public/AB6AXuBKQtvgzVaMlJy_CZ14fZfv7BAlmlSzULGk1RlBLedJoGV8ATbAWTHDVBSvU1pO9zLZg7KAr95__DAXrLlaEr4n_-M1Xxmg0gz72anyD13s2nuNiv9ftKJu6Bc7SPpr7Anz4hrhummBXOidqSgjH9tNUEz76onlf4V4TYW6KqEsucV0Ia4nmLPhF8wh5XqyVDs1kr_kwyihqHJpZW1_ArZMs2ZNZQMfZz-HaFiG9SF3cOpdRwWj-_w99b9m1lHTduVD1_QazUKbMA'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
                                <span className='text-white text-xs font-bold uppercase tracking-wider mb-1 bg-primary px-2 py-0.5 rounded w-fit'>
                                    Accommodation
                                </span>
                                <h3 className='text-white font-bold text-lg'>
                                    Ocean View Villa
                                </h3>
                                <div className='flex items-center gap-1 text-gray-200 text-sm mt-1'>
                                    <span className='material-symbols-outlined text-sm'>
                                        bed
                                    </span>
                                    <span>Nusa Resto</span>
                                </div>
                            </div>
                        </div>
                        <div className='masonry-item group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 cursor-pointer'>
                            <img
                                alt='Traditional boat floating on crystal clear water'
                                className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110'
                                data-alt='Traditional Indonesian wooden boat floating on clear water'
                                src='https://lh3.googleusercontent.com/aida-public/AB6AXuAWefEnzzaOnbo7BezDuaRobpdXmUNQl80bM4hXPbt3HhWFSaO6W9UHjcVntXJjiTcqovqJGaRTUin5aZBgwjwPpvTztSBR2LT6Ls4UKC9LW8Y8VF8Ra1MDHS3KxH0g6BQ5dQJ89Cs2ihbMm0YsMlRACA8aUvnG08Gzbe12Z7NWZcJmB516COPwteu9lISf916XotAikRlv6FzHmWKmg744XcPMRr-XXyo4yuv8oLxREEUc_SDEElIeaPDsDdgDDBgFsjhpBODFWQ'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
                                <span className='text-white text-xs font-bold uppercase tracking-wider mb-1 bg-primary px-2 py-0.5 rounded w-fit'>
                                    Culture
                                </span>
                                <h3 className='text-white font-bold text-lg'>
                                    Traditional Boat
                                </h3>
                                <div className='flex items-center gap-1 text-gray-200 text-sm mt-1'>
                                    <span className='material-symbols-outlined text-sm'>
                                        sailing
                                    </span>
                                    <span>Harbor</span>
                                </div>
                            </div>
                        </div>
                        <div className='masonry-item group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 cursor-pointer'>
                            <img
                                alt='Group of friends jumping on the beach'
                                className='w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110'
                                data-alt='Group of friends jumping joyfully on a sandy beach'
                                src='https://lh3.googleusercontent.com/aida-public/AB6AXuC0gQy6uPkVbK8X9g5ZmR44aRyl8jPeIpElSZKqxcN53fdNUtTnj2Wlzy58Bsljt-rNf6fdkXlIXb8olMj6MAtsE4fdyxfqpVGEQrJTqr12jn5Wkdb_H5IvXgACZzcbRYLrLvyTzfh8Idd8l506NHQLFYYkGN125HPhzCJxQEAooar_Wkd2KgCX_78TsYcXEI98J6O6F7fqZ3iZ6f9mJg_EZF_z0oeaRi2d3oCSSSmY9Nxs3WyMWfUol2lvYeECg6I1YR2lyLbGvA'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
                                <span className='text-white text-xs font-bold uppercase tracking-wider mb-1 bg-primary px-2 py-0.5 rounded w-fit'>
                                    Activities
                                </span>
                                <h3 className='text-white font-bold text-lg'>
                                    Island Fun
                                </h3>
                                <div className='flex items-center gap-1 text-gray-200 text-sm mt-1'>
                                    <span className='material-symbols-outlined text-sm'>
                                        groups
                                    </span>
                                    <span>Sand Bar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-16 flex flex-col items-center gap-6'>
                        <button className='flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all'>
                            Load more photos
                            <span className='material-symbols-outlined'>
                                expand_more
                            </span>
                        </button>
                        <div className='w-full max-w-4xl bg-gradient-to-r from-[#13b6ec] to-[#0d9ccb] rounded-3xl p-8 md:p-12 text-center text-white shadow-xl mt-12 relative overflow-hidden group'>
                            <div className='absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700'></div>
                            <div className='absolute -bottom-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700'></div>
                            <h2 className='text-3xl font-bold mb-4 relative z-10'>
                                Ready to Experience Paradise?
                            </h2>
                            <p className='text-white/90 mb-8 max-w-lg mx-auto relative z-10'>
                                Don't just look at the photos. Book your trip
                                today and create your own unforgettable memories
                                in Pulau Pramuka.
                            </p>
                            <button className='bg-white text-primary font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all relative z-10'>
                                Check Availability
                            </button>
                        </div>
                    </div>
                </main>
            </div>
            <div className='fixed inset-0 z-[100] hidden bg-black/95 backdrop-blur-sm flex items-center justify-center p-4'>
                <button className='absolute top-6 right-6 text-white/70 hover:text-white'>
                    <span className='material-symbols-outlined text-4xl'>
                        close
                    </span>
                </button>
                <div className='max-w-6xl w-full flex flex-col md:flex-row gap-6 items-center'>
                    <button className='hidden md:block text-white/50 hover:text-white transition-colors'>
                        <span className='material-symbols-outlined text-5xl'>
                            chevron_left
                        </span>
                    </button>
                    <div className='flex-1'>
                        <img
                            alt='Full screen view'
                            className='rounded-lg shadow-2xl max-h-[80vh] mx-auto'
                            src='https://lh3.googleusercontent.com/aida-public/AB6AXuC0fzaF5lq-2DyxKgpJnec38VQPNoTUx9iwawou12RNvLv0cGKTfnBPbuJCHp44JczeiXpL8TLDPhenaiMMQ5fLZX7s6HCIVaqquNayHlpMh7l5-7yM_y3b75EKd6XXiRm86MxwlT5EgKBa0BgYTThAoUoEt6teiLm3trwj10mo2nea_NWIjjz70OEtvym57q3wjrZSP6N2BKHqA-S0ZErjc2atRMhGASZByPLFdg8YKzycjXBGRp-Z3kxq7D2WyQP291L2tmJb_w'
                        />
                        <div className='mt-4 text-center'>
                            <h3 className='text-white text-xl font-bold'>
                                Aerial Paradise View
                            </h3>
                            <p className='text-white/60 text-sm mt-1'>
                                Pulau Pramuka - Drone Shot
                            </p>
                        </div>
                    </div>
                    <button className='hidden md:block text-white/50 hover:text-white transition-colors'>
                        <span className='material-symbols-outlined text-5xl'>
                            chevron_right
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
