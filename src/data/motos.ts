export type MotoCategory = {
  slug: "sport" | "cargo" | "electric" | "mini-car" | "kids";
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  image: string;
  accent: string;
  accentBorder: string;
  specs: { label: string; value: string }[];
  features: string[];
  models: {
    name: string;
    price: string;
    image: string;
    badge: string;
    description: string;
  }[];
};

export const motoCategories: MotoCategory[] = [
  {
    slug: "sport",
    name: "Sport Mototsikllari",
    shortName: "Sport",
    tagline: "Tezlik, dizayn va adrenalinni bir joyda his qiling",
    description:
      "Tezlik, dizayn va adrenalinni bir vaqtda his qiling. Dunyoga mashhur brendlarning (Ducati, Kawasaki, BMW) muhandislik durdonalari endi sizning ixtiyoringizda. Bu shunchaki mototsikl emas, bu sizning xarakteringiz aksidir.",
    image: "/motos/sport.svg",
    accent: "from-red-600/30 via-rose-500/20 to-transparent",
    accentBorder: "hover:border-red-400/40",
    specs: [
      { label: "Dvigatel", value: "250cc – 600cc" },
      { label: "Maks. tezlik", value: "120 – 220 km/soat" },
      { label: "Sovutish", value: "Havo / suyuqlik" },
      { label: "Tormoz", value: "ABS, disk" },
    ],
    features: [
      "Sport kuzov va agressiv aerodinamika",
      "LED faralar va raqamli panel",
      "Yuqori tezlanish va balansli boshqaruv",
      "Premium rang va individual komplektatsiya",
    ],
    models: [
      {
        name: "VM Storm 250R",
        price: "$3,200",
        image: "/motos/sport.svg",
        badge: "Top model",
        description: "Kuchli ko'rinish, ABS va qulay sport ergonomika.",
      },
      {
        name: "VM Racer 300X",
        price: "$4,100",
        image: "/motos/sport.svg",
        badge: "Yangi",
        description: "Magistral va shahar uchun balanslangan quvvat.",
      },
      {
        name: "VM Blaze 400",
        price: "$5,500",
        image: "/motos/sport.svg",
        badge: "Premium",
        description: "400cc dvigatel, suyuqlik sovutish va sportiv dizayn.",
      },
    ],
  },
  {
    slug: "cargo",
    name: "Yuk tashuvchi moto",
    shortName: "Yuk",
    tagline: "Biznes, yetkazib berish va qishloq xo'jaligi uchun ishonchli transport",
    description:
      "Yuk tashish, servis xizmati, do'kon ta'minoti va kichik logistika uchun mo'ljallangan mustahkam mototsikllar.",
    image: "/motos/cargo.svg",
    accent: "from-orange-500/30 via-amber-500/20 to-transparent",
    accentBorder: "hover:border-orange-400/40",
    specs: [
      { label: "Dvigatel", value: "150cc – 250cc" },
      { label: "Yuk sig'imi", value: "200 – 450 kg" },
      { label: "Bak hajmi", value: "12 – 18 L" },
      { label: "Uzatilish", value: "Mexanik / yarim avtomat" },
    ],
    features: [
      "Keng platforma va orqa yuk moduli",
      "Tejamkor yoqilg'i sarfi",
      "Servis va ehtiyot qismlar mavjudligi",
      "Kuryer va tijorat uchun mos komplektatsiya",
    ],
    models: [
      {
        name: "VM Cargo Pro 200",
        price: "$2,850",
        image: "/motos/cargo.svg",
        badge: "Biznes",
        description: "Kundalik yetkazib berish va ombor logistikasiga mos.",
      },
      {
        name: "VM Farmer 250",
        price: "$3,450",
        image: "/motos/cargo.svg",
        badge: "Mustahkam",
        description: "Qishloq va shaharda og'ir yuk uchun kuchli rama.",
      },
    ],
  },
  {
    slug: "electric",
    name: "Elektron moto",
    shortName: "Elektron",
    tagline: "Ekologik, tejamkor va zamonaviy elektr harakat",
    description:
      "Shovqinsiz yurish, past xarajat va urban hayotga mos texnologik elektr mototsikllar. Servis va zaryadlash ssenariylari uchun qulay.",
    image: "/motos/electric.svg",
    accent: "from-sky-500/30 via-blue-500/20 to-transparent",
    accentBorder: "hover:border-sky-400/40",
    specs: [
      { label: "Quvvat", value: "3kW – 8kW" },
      { label: "Masofa", value: "70 – 160 km" },
      { label: "Zaryad", value: "4 – 7 soat" },
      { label: "Batareya", value: "Lithium-ion" },
    ],
    features: [
      "Minimal ekspluatatsiya xarajati",
      "Mobil ilova va smart qulf opsiyasi",
      "Jim ishlash va ekologik yechim",
      "Kuryer va shahardagi kundalik qatnovga ideal",
    ],
    models: [
      {
        name: "VM E-Ride S",
        price: "$2,600",
        image: "/motos/electric.svg",
        badge: "Eco",
        description: "Shahar ichida jim, tez va tejamkor harakat uchun.",
      },
      {
        name: "VM Volt Max",
        price: "$3,900",
        image: "/motos/electric.svg",
        badge: "Smart",
        description: "Uzoq masofa, kuchli batareya va premium boshqaruv.",
      },
    ],
  },
  {
    slug: "mini-car",
    name: "Mini mashina",
    shortName: "Mini",
    tagline: "Ixcham, tejamkor va shahar uchun ideal mini transport",
    description:
      "Shahardagi qisqa masofalar, oilaviy qatnovlar va tejamkor yurish uchun mo'ljallangan mini mashinalar. Past narx, yuqori qulaylik.",
    image: "/motos/minicar.svg",
    accent: "from-violet-500/30 via-purple-500/20 to-transparent",
    accentBorder: "hover:border-violet-400/40",
    specs: [
      { label: "Dvigatel", value: "Elektr / 150cc" },
      { label: "Tezlik", value: "40 – 80 km/soat" },
      { label: "O'rindiq", value: "2 – 4 kishi" },
      { label: "Masofa", value: "80 – 150 km" },
    ],
    features: [
      "Ixcham gabarit — shahar parklari uchun qulay",
      "Issiqlik va sovutish tizimi mavjud",
      "Elektr va benzin versiyalari",
      "Oilaviy va tijorat maqsadlariga mos",
    ],
    models: [
      {
        name: "VM City Mini E",
        price: "$4,200",
        image: "/motos/minicar.svg",
        badge: "Elektr",
        description: "To'liq elektr, 4 o'rindiqli shahar mini mashinasi.",
      },
      {
        name: "VM Smart 150",
        price: "$3,600",
        image: "/motos/minicar.svg",
        badge: "Benzin",
        description: "150cc dvigatel, iqtisodiy va mustahkam dizayn.",
      },
    ],
  },
  {
    slug: "kids",
    name: "Bolalar motolari",
    shortName: "Bolalar",
    tagline: "Kichkintoylar uchun xavfsiz va qiziqarli mototsikllar",
    description:
      "3 yoshdan 14 yoshgacha bolalar uchun maxsus tayyorlangan xavfsiz, past tezlikli va chiroyli dizaynli mototsikllar.",
    image: "/motos/kids.svg",
    accent: "from-pink-500/30 via-fuchsia-500/20 to-transparent",
    accentBorder: "hover:border-pink-400/40",
    specs: [
      { label: "Dvigatel", value: "Elektr / 50cc" },
      { label: "Tezlik", value: "5 – 35 km/soat" },
      { label: "Yosh chegarasi", value: "3 – 14 yosh" },
      { label: "Xavfsizlik", value: "Tezlik limiter" },
    ],
    features: [
      "Ota-ona nazorati uchun tezlik cheklash funksiyasi",
      "Engil va mustahkam plastik kuzov",
      "Yorqin ranglar va cartoon dizayn",
      "Zaryadlash qulay — 2-4 soat",
    ],
    models: [
      {
        name: "VM Kids Spark",
        price: "$450",
        image: "/motos/kids.svg",
        badge: "3-6 yosh",
        description: "Eng kichkintoylar uchun elektr mini moto.",
      },
      {
        name: "VM Junior 50",
        price: "$890",
        image: "/motos/kids.svg",
        badge: "7-12 yosh",
        description: "50cc benzin dvigatel, bolalar uchun xavfsiz tezlik.",
      },
      {
        name: "VM Teen Racer",
        price: "$1,200",
        image: "/motos/kids.svg",
        badge: "10-14 yosh",
        description: "O'smirlar uchun sportiv ko'rinishli elektr mototsikl.",
      },
    ],
  },
];

export const companyStats = [
  { label: "Model turlari", value: "20+" },
  { label: "Yetkazib berish", value: "O'zbekiston bo'ylab" },
  { label: "Javob vaqti", value: "10 daq." },
  { label: "Integratsiya", value: "Telegram + CRM" },
];

export function getMotoBySlug(slug: string) {
  return motoCategories.find((item) => item.slug === slug);
}
