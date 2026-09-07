import {
  ExperienceCategory,
  ServiceItem,
  AdventureActivity,
  ApproachStep,
  WhyThrivePillar,
  TargetAudienceItem,
  TeamMember,
  CommitmentItem,
  GalleryImage
} from '../types';

export const brandInfo = {
  name: 'THRIVE EXPERIENCE',
  tagline: 'CREATE • CONNECT • GROW',
  category: 'EVENT • GATHERING • TEAM BUILDING • ADVENTURE',
  subheading: 'Event Organizer & Experience Management',
  location: 'Bogor, West Java — Indonesia',
  headline: "WE DON'T JUST ORGANIZE EVENTS. WE CREATE EXPERIENCES.",
  supportingCopy: 'THRIVE EXPERIENCE membantu perusahaan, organisasi, komunitas, dan kelompok menciptakan kegiatan yang profesional, kreatif, terencana, dan memorable.',
  belief: {
    label: 'OUR BELIEF',
    title: 'AN EVENT IS MORE THAN A SCHEDULE.',
    lead: 'Kami percaya bahwa sebuah event bukan sekadar kumpulan kegiatan.',
    paragraphs: [
      'Event adalah pengalaman.',
      'Pengalaman yang dapat mempererat hubungan, membangun kebersamaan, meningkatkan semangat, dan menciptakan kenangan yang akan dibawa pulang oleh setiap peserta.'
    ],
    motto: 'CREATE • CONNECT • GROW'
  },
  about: {
    headline: 'WE DESIGN EXPERIENCES AROUND PEOPLE.',
    p1: 'THRIVE EXPERIENCE adalah perusahaan yang bergerak di bidang Event Organizer & Experience Management, dengan fokus menciptakan kegiatan yang bukan hanya berjalan dengan baik, tetapi juga memberikan pengalaman yang berkesan bagi setiap peserta.',
    p2: 'Kami hadir untuk membantu perusahaan, organisasi, komunitas, maupun kelompok dalam merancang dan menyelenggarakan kegiatan secara profesional, kreatif, terencana, dan menyenangkan.',
    keywords: ['PROFESSIONAL', 'CREATIVE', 'PLANNED', 'FUN', 'MEMORABLE']
  },
  areaOfService: {
    headline: 'STARTING IN WEST JAVA. GOING FURTHER.',
    copy: 'THRIVE EXPERIENCE memulai pengembangan pasar dari Jabodetabek & Jawa Barat dan secara bertahap mengembangkan layanan ke berbagai destinasi di Indonesia.',
    stages: ['JABODETABEK', 'JAWA BARAT', 'INDONESIA']
  },
  contact: {
    company: 'THRIVE EXPERIENCE',
    role: 'Event Organizer & Experience Management',
    founder: 'Mohamad Rifki Sopyan Sauri',
    coFounder: 'Ibu Indri',
    instagram: '[akan diisi]',
    whatsapp: '[akan diisi]',
    email: '[akan diisi]',
    website: '[akan diisi]',
    location: 'Bogor, West Java — Indonesia'
  }
};

export const experienceCategories: ExperienceCategory[] = [
  {
    id: 'employee-gathering',
    title: 'EMPLOYEE GATHERING',
    tagline: 'Workplace Harmony & Spirit',
    description: 'Membangun kebersamaan dan semangat dalam lingkungan kerja.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop',
    activities: ['Fun Team Challenges', 'Celebration Gala', 'Appreciation Night', 'Interactive Ice Breaking']
  },
  {
    id: 'family-gathering',
    title: 'FAMILY GATHERING',
    tagline: 'Warmth Across Generations',
    description: 'Menciptakan momen kebersamaan yang menyenangkan.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop',
    activities: ['All-Age Fun Games', 'Picnic & Barbecue', 'Family Stage Show', 'Kids Activity Corner']
  },
  {
    id: 'corporate-outing',
    title: 'CORPORATE OUTING',
    tagline: 'Disconnect to Reconnect',
    description: 'Memberikan ruang bagi tim untuk terhubung di luar rutinitas.',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop',
    activities: ['Resort Retreat', 'Scenic Group Tour', 'Relaxation & Bonding', 'Informal Dialogue']
  },
  {
    id: 'team-building',
    title: 'TEAM BUILDING',
    tagline: 'Collaboration, Trust & Leadership',
    description: 'Membangun teamwork, communication, leadership, trust, problem solving, dan collaboration.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    activities: ['Strategic Simulation', 'Trust Fall & Synergy', 'Synergy Obstacle', 'Problem Solving Quest']
  },
  {
    id: 'outbound',
    title: 'OUTBOUND',
    tagline: 'Courage, Energy & Camaraderie',
    description: 'Aktivitas yang mendorong interaksi, keberanian, dan kebersamaan.',
    image: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=1200&auto=format&fit=crop',
    activities: ['High Rope Challenges', 'Dynamic Field Games', 'Leadership Circuit', 'Courage Boosters']
  },
  {
    id: 'adventure',
    title: 'ADVENTURE',
    tagline: 'Extraordinary Outdoor Journeys',
    description: 'Menggabungkan perjalanan dan aktivitas outdoor menjadi pengalaman yang lebih berkesan.',
    image: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=1200&auto=format&fit=crop',
    activities: ['White Water Rafting', 'Jeep Mountain Safari', 'ATV Trail Trek', 'Wilderness Camping']
  },
  {
    id: 'corporate-event',
    title: 'CORPORATE EVENT',
    tagline: 'Corporate Culture & Milestone',
    description: 'Kegiatan yang memperkuat hubungan dan budaya perusahaan.',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop',
    activities: ['Company Anniversary', 'Kick-off Meeting', 'Townhall Gathering', 'Award & Recognition']
  },
  {
    id: 'school-community-event',
    title: 'SCHOOL & COMMUNITY EVENT',
    tagline: 'Shared Passions & Impact',
    description: 'Menciptakan pengalaman yang relevan untuk sekolah, komunitas, dan organisasi.',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop',
    activities: ['Youth Leadership Camp', 'Community Gathering', 'Student Orientation', 'Social Expedition']
  }
];

export const services: ServiceItem[] = [
  {
    id: 'concept-development',
    number: '01',
    title: 'CONCEPT DEVELOPMENT',
    description: 'Merancang konsep, tema, flow, dan storytelling kegiatan yang selaras dengan tujuan organisasi Anda.',
    details: ['Theme Ideation & Moodboard', 'Experience Storyboarding', 'Activity Concept Mapping'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'budget-planning',
    number: '02',
    title: 'BUDGET PLANNING',
    description: 'Perencanaan anggaran yang terstruktur, transparan, dan dapat disesuaikan dengan skala serta prioritas client.',
    details: ['Transparent Cost Breakdown', 'Allocation Optimization', 'Financial Feasibility Assessment'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'venue-accommodation',
    number: '03',
    title: 'VENUE & ACCOMMODATION',
    description: 'Kurasi dan koordinasi lokasi, resort, glamping, hotel, hingga area outdoor terbaik di Bogor, Jawa Barat, dan sekitarnya.',
    details: ['Site Inspection & Feasibility', 'Resort & Villa Booking', 'Outdoor Ground Management'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'transportation',
    number: '04',
    title: 'TRANSPORTATION',
    description: 'Pengaturan armada transportasi darat yang aman, nyaman, dan terjadwal rapi untuk seluruh peserta dari titik kumpul.',
    details: ['Fleet Coordination (Bus/HiAce/Jeep)', 'Travel Itinerary Logistics', 'Safety Marshall & Escort'],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'catering',
    number: '05',
    title: 'CATERING',
    description: 'Penyediaan menu konsumsi lezat, higienis, dan variatif — mulai dari coffee break, live BBQ, hingga hidangan nusantara.',
    details: ['Customized Dietary Menus', 'Outdoor BBQ & Live Cooking', 'Hygienic Beverage Stations'],
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'games-team-building',
    number: '06',
    title: 'GAMES & TEAM BUILDING',
    description: 'Desain modul permainan interaktif yang menggugah tawa, mengasah sinergi tim, dan membangun trust antarpeserta.',
    details: ['Custom Synergy Modules', 'Field Game Property & Equipment', 'Debriefing & Insight Sessions'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'crew-facilitator',
    number: '07',
    title: 'CREW & FACILITATOR',
    description: 'Tim fasilitator, instruktur outbound berdedikasi, serta ground crew sigap yang memastikan kelancaran setiap sesi.',
    details: ['Certified Outbound Instructors', 'Dedicated Liaison Officers (LO)', 'Safety & First Aid Marshalls'],
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'mc-event-production',
    number: '08',
    title: 'MC & EVENT PRODUCTION',
    description: 'Dukungan MC profesional yang mampu menghidupkan suasana, didukung sound system, lighting, panggung, dan multimedia.',
    details: ['Energetic Professional MC', 'Sound & Stage Architecture', 'Lighting & Atmospheric Effects'],
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'documentation',
    number: '09',
    title: 'DOCUMENTATION',
    description: 'Perekaman momen melalui foto dan video sinematik, drone aerial, serta aftermovie berkualitas tinggi sebagai kenangan abadi.',
    details: ['Cinematic Aftermovie Production', 'High-Res Photo Gallery', 'Drone Aerial Footage'],
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop'
  }
];

export const adventureActivities: AdventureActivity[] = [
  {
    id: 'rafting',
    name: 'RAFTING',
    category: 'White Water Adrenaline',
    description: 'Menaklukkan arus deras sungai Cisadane & Citarik dengan panduan skipper profesional dan standar keselamatan internasional.',
    image: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Jeram Kelas II - III+', 'Rescue Team & Safety Briefing', 'Pemandangan Tebing & Hutan Tropis']
  },
  {
    id: 'jeep-adventure',
    name: 'JEEP ADVENTURE',
    category: 'Offroad Mountain Expedition',
    description: 'Menjelajahi jalur berlumpur, perkebunan teh, dan bukit pinus dengan armada 4x4 Jeep yang tangguh.',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Rute Offroad Menantang', 'Tea Plantation Panoramas', 'Experienced 4WD Drivers']
  },
  {
    id: 'atv',
    name: 'ATV',
    category: 'All-Terrain Thrill',
    description: 'Pacu adrenalin menembus kubangan lumpur, trek berbatu, dan hutan alami dengan kendaraan segala medan.',
    image: 'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Single & Tandem Quads', 'Mud Track & Water Crossing', 'Instruktur Pendamping']
  },
  {
    id: 'paintball',
    name: 'PAINTBALL',
    category: 'Tactical Team Warfare',
    description: 'Uji strategi, komunikasi cepat, dan kekompakan tim dalam simulasi pertempuran taktis di arena hutan pinus.',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Full Tactical Protective Gear', 'Capture the Flag Scenario', 'Wasit & Marshall Resmi']
  },
  {
    id: 'camping',
    name: 'CAMPING',
    category: 'Wilderness Glamping',
    description: 'Bermalam di bawah bintang di tengah kesejukan perbukitan Bogor, ditemani hangatnya api unggun dan obrolan bermakna.',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Tenda Dome & Glamping Mat', 'Bonfire & Acoustic Night', 'Sanitasi Bersih & Nyaman']
  },
  {
    id: 'outdoor-games',
    name: 'OUTDOOR GAMES',
    category: 'High-Energy Fun',
    description: 'Rangkaian permainan lapangan dinamis yang dirancang untuk memecah kekakuan dan menghadirkan tawa lepas.',
    image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Energetic Ice Breakers', 'Team Synergy Battles', 'Custom Game Props']
  },
  {
    id: 'adventure-trip',
    name: 'ADVENTURE TRIP',
    category: 'Exploration & Journey',
    description: 'Perjalanan terpadu yang memadukan trekking air terjun, penjelajahan alam, dan eksplorasi destinasi eksotis Jawa Barat.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Hidden Waterfall Trekking', 'Local Cultural Experience', 'Curated Itinerary Flow']
  }
];

export const approachSteps: ApproachStep[] = [
  {
    step: '01',
    title: 'LISTEN',
    description: 'Memahami kebutuhan dan tujuan client.',
    actions: [
      'In-depth stakeholder briefing',
      'Analisis karakter peserta & demografi',
      'Identifikasi objektif utama (kebersamaan, kepemimpinan, perayaan)',
      'Penetapan batasan waktu dan estimasi budget'
    ]
  },
  {
    step: '02',
    title: 'CREATE',
    description: 'Menyusun konsep dan pengalaman yang sesuai.',
    actions: [
      'Brainstorming tema kegiatan yang segar',
      'Penyusunan modul aktivitas interaktif',
      'Storyline dan ritme acara dari pembuka hingga penutup',
      'Visual moodboard & presentasi proposal awal'
    ]
  },
  {
    step: '03',
    title: 'PLAN',
    description: 'Mengatur budget, venue, vendor, rundown, dan seluruh kebutuhan kegiatan.',
    actions: [
      'Alokasi budgeting transparan tanpa biaya tersembunyi',
      'Kurasi venue, resort, catering, armada transportasi',
      'Penyusunan rundown menit-demi-menit yang realistis',
      'Risk management plan & koordinasi mitra lapangan'
    ]
  },
  {
    step: '04',
    title: 'EXECUTE',
    description: 'Memastikan kegiatan berjalan sesuai rencana.',
    actions: [
      'Briefing koordinasi crew & LO di lapangan',
      'Manajemen arus peserta dan alur waktu yang presisi',
      'Fasilitasi permainan outbound & panggung acara',
      'Penanganan cepat & fleksibel untuk setiap dinamika lapangan'
    ]
  },
  {
    step: '05',
    title: 'EVALUATE',
    description: 'Melakukan evaluasi untuk memastikan kualitas dan membangun hubungan jangka panjang.',
    actions: [
      'Post-event feedback review bersama client',
      'Evaluasi kepuasan peserta dan ketercapaian tujuan',
      'Penyerahan dokumentasi foto, video, & aftermovie',
      'Pondasi kerja sama jangka panjang yang berkelanjutan'
    ]
  }
];

export const whyThrivePillars: WhyThrivePillar[] = [
  {
    id: 'experience-driven',
    title: 'EXPERIENCE-DRIVEN',
    coreValue: 'Keberhasilan Diukur dari Apa yang Dirasakan Peserta',
    description: 'Kami memahami bahwa keberhasilan event bukan hanya tentang acara yang selesai, tetapi bagaimana peserta merasakan pengalaman tersebut.'
  },
  {
    id: 'flexible',
    title: 'FLEXIBLE',
    coreValue: 'Solutif & Adaptif Terhadap Beragam Kondisi',
    description: 'Konsep dapat disesuaikan dengan tujuan, jumlah peserta, lokasi, dan budget client.'
  },
  {
    id: 'professional',
    title: 'PROFESSIONAL',
    coreValue: 'Sistem Operasional yang Rapi & Teruji',
    description: 'Setiap kegiatan direncanakan melalui rundown, budgeting, koordinasi vendor, dan sistem operasional yang jelas.'
  },
  {
    id: 'creative',
    title: 'CREATIVE',
    coreValue: 'Ide Segar yang Selaras dengan Karakter Brand',
    description: 'Kami menghadirkan konsep yang dapat disesuaikan dengan karakter dan kebutuhan setiap client.'
  },
  {
    id: 'partner-network',
    title: 'PARTNER NETWORK',
    coreValue: 'Jaringan Kolaborasi Luas & Andal',
    description: 'Kami membangun jaringan partner dan vendor untuk mendukung kebutuhan transportasi, venue, akomodasi, aktivitas, konsumsi, dokumentasi, dan kebutuhan event lainnya.'
  }
];

export const targetAudiences: TargetAudienceItem[] = [
  {
    id: 'corporate',
    title: 'CORPORATE',
    members: 'Perusahaan swasta, HR, GA, Human Capital, Procurement, dan Management.',
    description: 'Merancang program gathering dan team building yang menyelaraskan energi tim dengan budaya serta sasaran strategis perusahaan.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'organization',
    title: 'ORGANIZATION',
    members: 'Organisasi, yayasan, komunitas profesi, dan institusi publik.',
    description: 'Memfasilitasi forum konsolidasi, musyawarah, retreat, dan kegiatan keakraban yang memperkuat visi bersama.',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'education',
    title: 'EDUCATION',
    members: 'Sekolah, kampus, perguruan tinggi, dan lembaga pendidikan.',
    description: 'Menyajikan pengalaman edukatif luar ruang, latihan kepemimpinan siswa, dan outbound karakter yang aman dan inspiratif.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'community-family',
    title: 'COMMUNITY & FAMILY',
    members: 'Komunitas hobi, paguyuban, keluarga besar, dan kelompok privat.',
    description: 'Menghadirkan kehangatan dan keseruan tanpa repot bagi keluarga dan komunitas untuk menikmati waktu berkualitas bersama.',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 'rifki',
    name: 'MOHAMAD RIFKI SOPYAN SAURI',
    role: 'FOUNDER',
    bio: [
      'Founder THRIVE EXPERIENCE yang memiliki pengalaman dalam bidang Event Organizer dan operasional kegiatan.',
      'Memiliki pengalaman dalam menangani berbagai kebutuhan event, mulai dari perencanaan kegiatan, penyusunan rundown, budgeting, koordinasi vendor, transportasi, akomodasi, team building, pengelolaan crew, hingga koordinasi pelaksanaan di lapangan.',
      'Rifki membawa pengalaman operasional tersebut ke dalam THRIVE EXPERIENCE untuk membangun perusahaan EO yang lebih profesional, mandiri, dan berkelanjutan.'
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'indri',
    name: 'IBU INDRI',
    role: 'CO-FOUNDER',
    bio: [
      'Co-Founder THRIVE EXPERIENCE yang berperan dalam mendukung pengembangan perusahaan, koordinasi, pengambilan keputusan strategis, serta penguatan hubungan dan jaringan bisnis.',
      'Kehadiran Co-Founder menjadi bagian penting dalam membangun THRIVE EXPERIENCE sebagai perusahaan yang memiliki fondasi kerja sama, tanggung jawab, dan pengembangan bisnis jangka panjang.'
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop'
  }
];

export const commitments: CommitmentItem[] = [
  {
    id: '01',
    number: '01',
    title: 'PROFESSIONAL SERVICE',
    description: 'Pelayanan yang profesional dan responsif dalam setiap tahap komunikasi dan koordinasi.'
  },
  {
    id: '02',
    number: '02',
    title: 'TRANSPARENT PLANNING',
    description: 'Perencanaan dan budgeting yang jelas, terperinci, dan dapat dipertanggungjawabkan.'
  },
  {
    id: '03',
    number: '03',
    title: 'RELIABLE EXECUTION',
    description: 'Pelaksanaan kegiatan yang terkoordinasi rapi, tepat waktu, dan terjaga standarnya.'
  },
  {
    id: '04',
    number: '04',
    title: 'MEMORABLE EXPERIENCE',
    description: 'Pengalaman yang menyenangkan dan berkesan yang berdampak positif bagi seluruh peserta.'
  },
  {
    id: '05',
    number: '05',
    title: 'LONG-TERM PARTNERSHIP',
    description: 'Membangun hubungan kerja sama jangka panjang yang berlandaskan kepercayaan dan integritas.'
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    title: 'Dynamic River Rafting',
    category: 'adventure',
    image: 'https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=1200&auto=format&fit=crop',
    caption: 'Team synergy navigating the white-water rapids of West Java.',
    aspect: 'wide'
  },
  {
    id: 'g2',
    title: 'Authentic Celebration',
    category: 'gathering',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop',
    caption: 'Moments of laughter and shared victories at an evening gathering.',
    aspect: 'square'
  },
  {
    id: 'g3',
    title: 'Mountain 4x4 Offroad',
    category: 'adventure',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop',
    caption: 'Rugged terrain convoy through pine forests and mountain trails.',
    aspect: 'portrait'
  },
  {
    id: 'g4',
    title: 'Synergy Field Simulation',
    category: 'team-building',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    caption: 'Collaborative problem solving and high-trust group modules.',
    aspect: 'wide'
  },
  {
    id: 'g5',
    title: 'Backstage Field Coordination',
    category: 'production',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop',
    caption: 'Thrive field crews orchestrating event flow with precision.',
    aspect: 'portrait'
  },
  {
    id: 'g6',
    title: 'Pine Forest Retreat',
    category: 'gathering',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1200&auto=format&fit=crop',
    caption: 'Warm campfire dialogue connecting teams beyond office walls.',
    aspect: 'wide'
  },
  {
    id: 'g7',
    title: 'Tactical Paintball Field',
    category: 'adventure',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    caption: 'Intense strategy and communication test in natural woodland.',
    aspect: 'square'
  },
  {
    id: 'g8',
    title: 'Mainstage Lighting & Production',
    category: 'production',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
    caption: 'Atmospheric audio-visual setup elevating company milestones.',
    aspect: 'wide'
  }
];
