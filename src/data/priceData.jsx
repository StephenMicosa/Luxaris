export const realMannequinsData = [
    {
        id: 1,
        name: "Cachet mannequin (indicatif)",
        badge: null,
        dotColor: "rose-600",
        details: [
            { icon: "clock", text: "Demi-journée" },
            { icon: "clock", text: "Journée complète" }
        ],
        prices: [
            { amount: "80 – 120 €", color: "[#4A001A]" },
            { amount: "150 – 250 €", color: "[#4A001A]" }
        ]
    },
    {
        id: 2,
        name: "Commission Luxaris",
        badge: { text: "Option 1", color: "rose" },
        dotColor: "rose-600",
        details: [{ text: "25 % du cachet mannequin" }],
        prices: [{ amount: "Variable", color: "slate-900", isVariable: true }]
    },
    {
        id: 3,
        name: "Frais agence",
        badge: { text: "Option 2 – Premium", color: "slate" },
        dotColor: "rose-700",
        details: [{ text: "Par mannequin / par shooting" }],
        prices: [{ amount: "300 €", color: "[#4A001A]", size: "2xl" }]
    },
    {
        id: 4,
        name: "Sélection express",
        badge: { text: "Option rapide", color: "rose" },
        dotColor: "rose-600",
        details: [{ text: "Casting sous 48h" }],
        prices: [{ amount: "+150 €", color: "rose-600", size: "xl" }]
    },
    {
        id: 5,
        name: "Remplacement garanti",
        badge: null,
        dotColor: "slate-900",
        details: [{ text: "Mannequin remplacé si désistement" }],
        prices: [{ amount: "+100 €", color: "slate-900", size: "xl" }]
    },
    {
        id: 6,
        name: "Exclusivité mannequin",
        badge: { text: "Premium", color: "rose" },
        dotColor: "rose-800",
        details: [{ text: "Non-utilisation pour concurrents (temps limité)" }],
        prices: [{ amount: "+300 à 600 €", color: "rose-800", size: "xl" }]
    },
    {
        id: 7,
        name: "Gestion casting complet",
        badge: null,
        dotColor: "rose-600",
        details: [{ text: "Plusieurs mannequins" }],
        prices: [{ amount: "+500 €", color: "[#4A001A]", size: "xl" }]
    }
];

export const aiMannequinsData = [
    {
        id: 1,
        name: "Pack IA – Signature",
        badge: { text: "Populaire", color: "rose" },
        dotColor: "rose-600",
        details: [{ text: "1 mannequin irréel + 10 photos studio premium" }],
        prices: [{ amount: "1 700 €", color: "[#4A001A]", size: "2xl" }]
    },
    {
        id: 2,
        name: "Photo supplémentaire",
        badge: null,
        dotColor: "rose-600",
        details: [{ text: "1 photo retouchée" }],
        prices: [{ amount: "75 €", color: "rose-600", size: "xl" }]
    },
    {
        id: 3,
        name: "Pack 5 photos",
        badge: null,
        dotColor: "rose-700",
        details: [{ text: "5 photos supplémentaires" }],
        prices: [{ amount: "350 €", color: "rose-700", size: "xl" }]
    },
    {
        id: 4,
        name: "Vidéo IA courte",
        badge: null,
        dotColor: "slate-900",
        details: [{ text: "10–15 sec (studio)" }],
        prices: [{ amount: "400 €", color: "slate-900", size: "xl" }]
    },
    {
        id: 5,
        name: "Vidéo IA premium",
        badge: { text: "Cinématique", color: "slate" },
        dotColor: "slate-900",
        details: [{ text: "Campagne mode / cinématique" }],
        prices: [{ amount: "800 – 1 100 €", color: "slate-900", size: "xl" }]
    },
    {
        id: 6,
        name: "Exclusivité mannequin IA",
        badge: { text: "Exclusif", color: "rose" },
        dotColor: "rose-800",
        details: [{ text: "Mannequin non réutilisé" }],
        prices: [{ amount: "+700 €", color: "rose-800", size: "xl" }]
    },
    {
        id: 7,
        name: "Déclinaisons",
        badge: null,
        dotColor: "rose-600",
        details: [{ text: "Tenues, couleurs, angles" }],
        prices: [{ amount: "200 – 350 €", color: "rose-600", size: "xl" }]
    }
];
