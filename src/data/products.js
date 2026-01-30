import perfumeImg from '../assets/images/perfume.png'
import watchImg from '../assets/images/watch.png'
import crystalImg from '../assets/images/crystal.png'
import perfumeNoirII from '../assets/images/perfume_noir_ii.png'
import eternityRing from '../assets/images/eternity_ring.png'
import chronosSport from '../assets/images/chronos_sport.png'

export const products = [
    {
        id: 1,
        name: "Or Noir",
        category: "Parfum",
        price: "€450",
        image: perfumeImg,
        images: [perfumeImg, perfumeNoirII, perfumeImg],
        dateAdded: '2025-11-15',
        popularity: 98,
        description: "A fragrance that transcends time. Or Noir combines deep notes of oud and amber with a whisper of midnight jasmine. Encased in a bottle of hand-blown black glass, it is as much an objet d'art as it is a scent.",
        colors: ["#1a1a1a", "#d4af37"],
        sizes: ["50ml", "100ml"],
        reviews: [
            { id: 1, user: "Elena R.", rating: 5, comment: "Absolutely divine. The scent lasts all day.", date: "2025-12-10" },
            { id: 2, user: "Marc D.", rating: 4, comment: "Powerful and elegant. A bit strong for day wear but perfect for evening.", date: "2026-01-05" },
            { id: 3, user: "Sophie L.", rating: 5, comment: "The packaging alone is worth the price. The scent is the cherry on top.", date: "2026-01-15" },
            { id: 4, user: "Alexander K.", rating: 5, comment: "I've collected perfumes for years, and this is now in my top 3. Distinctive.", date: "2026-01-20" },
            { id: 5, user: "Isabella V.", rating: 3, comment: "Beautiful bottle, but the oud note is heavier than I expected.", date: "2026-01-22" },
            { id: 6, user: "Thomas M.", rating: 5, comment: "Fast shipping and impeccable presentation.", date: "2026-01-25" },
            { id: 7, user: "Charlotte B.", rating: 4, comment: "Lovely, sophisticated fragrance.", date: "2026-01-28" }
        ],
        faq: [
            { question: "Is this unisex?", answer: "Yes, Or Noir is crafted to appeal to all connoisseurs of fine fragrance." },
            { question: "How long does the scent last?", answer: "Expect 12+ hours of longevity due to the high concentration of oils." }
        ]
    },
    {
        id: 2,
        name: "Chronos One",
        category: "Timepiece",
        price: "€12,500",
        image: watchImg,
        images: [watchImg, chronosSport, watchImg],
        dateAdded: '2025-10-01',
        popularity: 85,
        description: "Precision engineering meets timeless design. The Chronos One features a Swiss automatic movement housed in a casing of brushed titanium and sapphire crystal.",
        colors: ["#C0C0C0", "#000000"],
        sizes: ["40mm", "42mm"],
        reviews: [
            { id: 1, user: "James B.", rating: 5, comment: "A masterpiece.", date: "2025-11-20" }
        ],
        faq: [
            { question: "Is it water resistant?", answer: "Yes, up to 100 meters." }
        ]
    },
    {
        id: 3,
        name: "Lumina",
        category: "Fine Jewelry",
        price: "€3,200",
        image: crystalImg,
        images: [crystalImg, eternityRing, crystalImg],
        dateAdded: '2026-01-10',
        popularity: 92,
        description: "Capturing the light of a thousand stars. Lumina is a handcrafted crystal pendant suspended from a 24k gold chain, designed to refract light in mesmerizing patterns.",
        colors: ["#FFD700", "#E6E6FA"],
        sizes: ["Standard"],
        reviews: [],
        faq: []
    },
    {
        id: 4,
        name: "Or Noir II",
        category: "Parfum",
        price: "€450",
        image: perfumeNoirII,
        images: [perfumeNoirII, perfumeImg, perfumeNoirII],
        dateAdded: '2026-01-20',
        popularity: 100,
        description: "The successor to our icon. Or Noir II introduces spicy notes of saffron and cardamom to the signature oud base.",
        colors: ["#000000"],
        sizes: ["50ml", "100ml"],
        reviews: [],
        faq: []
    },
    {
        id: 5,
        name: "Eternity Band",
        category: "Fine Jewelry",
        price: "€5,800",
        image: eternityRing,
        images: [eternityRing, crystalImg, eternityRing],
        dateAdded: '2025-12-05',
        popularity: 78,
        description: "A symbol of never-ending elegance. Set with flawless diamonds in a pavé setting around the entire band.",
        colors: ["#FFFFFF", "#FFD700"],
        sizes: ["6", "7", "8"],
        reviews: [],
        faq: []
    },
    {
        id: 6,
        name: "Chronos Sport",
        category: "Timepiece",
        price: "€9,800",
        image: chronosSport,
        images: [chronosSport, watchImg, chronosSport],
        dateAdded: '2026-01-25',
        popularity: 88,
        description: "Built for the adventurous. Chronos Sport offers the same precision as the One, but with a rugged, rubberized strap and enhanced shock resistance.",
        colors: ["#000000", "#000080"],
        sizes: ["42mm"],
        reviews: [],
        faq: []
    }
]
