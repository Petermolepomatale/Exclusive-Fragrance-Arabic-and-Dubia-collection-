// Product Data
const products = [
    {
        id: 1,
        name: "Intense Noir",
        description: "Intense Noir is a sophisticated and seductive scent built on contrast. It opens with a burst of fresh bergamot and aromatic herbs like clary sage and rosemary, immediately commanding attention. The heart unfolds with warm cardamom, soft lavender, and orange blossom, adding depth and elegance.",
        price: 89.99,
        category: "oud",
        image: "images/intense-noir.jpg"
    },
    {
        id: 2,
        name: "Zara Men",
        description: "Zara Men is a bold, charismatic fragrance that balances freshness with dark, sensual undertones. It opens with bright citrus and bergamot, blended with fruity blackcurrant. At its heart, a rich mix of orchid, lotus, and subtle spices brings intrigue.",
        price: 49.99,
        category: "fresh",
        image: "images/zara-men.jpg"
    },
    {
        id: 3,
        name: "Barakkat Amber Eve",
        description: "Barakkat Amber Eve is a warm, golden embrace captured in a bottle. It opens with rich resins and glowing amber, delicately brightened by bitter orange. As it settles, creamy vanilla and benzoin melt into the heart, creating a sweet, resinous warmth.",
        price: 119.99,
        category: "gourmand",
        image: "images/barakkat-amber-eve.jpg"
    },
    {
        id: 4,
        name: "Barakkat Satin Oud",
        description: "Barakkat Satin Oud is an opulent oud-rose masterpiece. It opens with soft violet and lush roses, enveloped in the richness of Laotian oud. The fragrance's heart is velvety and intense, balancing deep floral notes with the smoky character of agarwood.",
        price: 149.99,
        category: "oud",
        image: "images/barakkat-satin-oud.jpg"
    },
    {
        id: 5,
        name: "Barakkat White Rouge 540",
        description: "Barakkat White is crisp, elegant, and luminous — a fragrance that captures purity with sophistication. It opens with fresh citrus and delicate floral tones, leading into a soft, powdery heart of jasmine and lily.",
        price: 129.99,
        category: "floral",
        image: "images/barakkat-white.jpg"
    },
    {
        id: 6,
        name: "Mocha Wood",
        description: "Mocha Wood is a rich gourmand fragrance that blends the warmth of roasted coffee with creamy chocolate and soft woods. The opening is a delicious mix of coffee beans and sweet cocoa, layered with hints of spice.",
        price: 79.99,
        category: "gourmand",
        image: "images/mocha-wood.jpg"
    },
    {
        id: 7,
        name: "Ammerat Al Arab",
        description: "Ammerat Al Arab is a fragrance steeped in Middle Eastern charm. It opens with exotic spices and fresh citrus, evoking the vibrancy of Arabian souks. The heart reveals rose, jasmine, and saffron, woven with warm oud.",
        price: 99.99,
        category: "oud",
        image: "images/ammerat-al-arab.jpg"
    },
    {
        id: 8,
        name: "Hayaati Eau de Parfum",
        description: "Hayaati is a modern, uplifting fragrance full of energy. It opens with fresh apple and citrus, blended with spicy ginger and bergamot. The heart is smooth and elegant with sage, lavender, and warm spices.",
        price: 69.99,
        category: "fresh",
        image: "images/hayaati.jpg"
    },
    {
        id: 9,
        name: "DES Tentations Eau de Parfum",
        description: "DES Tentations is a playful yet sophisticated floral-fruity fragrance. It bursts open with juicy berries and fresh citrus, before revealing a heart of rose, jasmine, and delicate white flowers.",
        price: 74.99,
        category: "floral",
        image: "images/des-tentations.jpg"
    },
    {
        id: 10,
        name: "White Oud",
        description: "White Oud is a refined take on traditional oud, balancing its deep, resinous character with softness and light. The opening brings fresh citrus and subtle florals, followed by a heart of powdery jasmine and velvety rose.",
        price: 109.99,
        category: "oud",
        image: "images/white-oud.jpg"
    },
    {
        id: 11,
        name: "Sutoor Eau de Parfum",
        description: "Sutoor is vibrant, fresh, and invigorating — a fragrance designed to energize. It opens with bright citrus, juicy apple, and herbal nuances. The heart develops into aromatic lavender, spicy cardamom, and a touch of nutmeg.",
        price: 59.99,
        category: "fresh",
        image: "images/sutoor.jpg"
    },
    {
        id: 12,
        name: "Lattafa Badee Al Oud Honor & Glory",
        description: "Honor & Glory is bold, intense, and made for true oud enthusiasts. It opens with smoky oud, earthy spices, and a touch of saffron, creating a commanding presence. The heart reveals rose, amber, and incense.",
        price: 139.99,
        category: "oud",
        image: "images/honor-glory.jpg"
    },
    {
        id: 13,
        name: "Lattafa Badee Al Oud Sublime",
        description: "Sublime is a smoother, slightly sweeter interpretation of the Badee Al Oud line. It opens with juicy fruits and fresh citrus, balanced by floral heart notes of rose and jasmine.",
        price: 119.99,
        category: "oud",
        image: "images/sublime.jpg"
    },
    {
        id: 14,
        name: "Rave Now (Lattafa)",
        description: "Rave Now is youthful, energetic, and playful. The fragrance opens with zesty citrus and sweet fruits, bursting with vibrancy. The heart reveals light florals and a touch of spice.",
        price: 49.99,
        category: "fresh",
        image: "images/rave-now.jpg"
    },
    {
        id: 15,
        name: "Lattafa Badee Al Oud for Glory",
        description: "Often compared to the niche hit Initio Oud for Greatness, this fragrance is rich, smoky, and powerful. It opens with saffron, nutmeg, and lavender — spicy yet smooth.",
        price: 129.99,
        category: "oud",
        image: "images/for-glory.jpg"
    },
    {
        id: 16,
        name: "Lattafa Yara EDP",
        description: "The original Yara is soft, powdery, and elegant. It begins with bright citrus and delicate florals, balanced with creamy orchid and heliotrope.",
        price: 64.99,
        category: "floral",
        image: "images/yara.jpg"
    },
    {
        id: 17,
        name: "Brown Orchid Purple",
        description: "Brown Orchid Purple is rich, sweet, and sensual. It opens with fruity notes of berries and plum, wrapped in soft florals like jasmine and rose.",
        price: 89.99,
        category: "gourmand",
        image: "images/brown-orchid-purple.jpg"
    },
    {
        id: 18,
        name: "Brown Orchid Ruby",
        description: "Brown Orchid Ruby is radiant and luxurious, with a sparkling fruity-floral opening. Notes of pomegranate, citrus, and exotic flowers shine at the top.",
        price: 94.99,
        category: "floral",
        image: "images/brown-orchid-ruby.jpg"
    },
    {
        id: 19,
        name: "Lattafa Yara White Eau de Parfum",
        description: "Yara White is a soft, creamy, and powdery gourmand with a delicate, elegant twist. It opens with juicy tangerine, coconut, and heliotrope.",
        price: 69.99,
        category: "gourmand",
        image: "images/yara-white.jpg"
    },
    {
        id: 20,
        name: "Brown Orchid Rose Edition Eau de Parfum",
        description: "Brown Orchid Rose Edition is a luxurious floral-oriental fragrance that celebrates the beauty of roses in full bloom.",
        price: 99.99,
        category: "floral",
        image: "images/brown-orchid-rose.jpg"
    },
    {
        id: 21,
        name: "Paradox Rossa Eau de Parfum",
        description: "Paradox Rossa is a glowing ode to rose and amber, wrapped in sensual musk and refined woods.",
        price: 119.99,
        category: "floral",
        image: "images/paradox-rossa.jpg"
    },
    {
        id: 22,
        name: "Lattafa Badee Al Oud Amethyst",
        description: "Amethyst is a rose-oud masterpiece with sweet, warm, and elegant facets. It opens with bright pink pepper and bergamot.",
        price: 134.99,
        category: "oud",
        image: "images/amethyst.jpg"
    }
];
