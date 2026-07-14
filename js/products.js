/* ============================================================
   HAPPY BLUE — PRODUCT DATA
   ------------------------------------------------------------
   This is the ONLY file you need to edit to manage your store.
   Copy the block below for each product and fill in your own
   Amazon affiliate link in "buyLink".

   {
     id: 17,                    // unique number
     title: "Product name",
     category: "Electronics",   // must match one of CATEGORIES below
     image: "https://...",      // product photo URL
     price: 1999,               // current price (numbers only)
     mrp: 2999,                 // original price (for strike-through)
     rating: 4.5,               // 0–5
     reviews: 1280,             // number of ratings
     badge: "Best Seller",      // optional tag, or "" for none
     features: [                // shown in the quick-view popup
       "Feature one",
       "Feature two"
     ],
     buyLink: "https://www.amazon.in/dp/XXXXXXX?tag=youraffiliateid-21"
   }
   ============================================================ */

const CATEGORIES = [
  "All",
  "Electronics",
  "Home & Kitchen",
  "Fashion",
  "Fitness",
  "Books",
  "Beauty"
];

const PRODUCTS = [
  {
    id: 1,
    title: "Wireless Noise-Cancelling Headphones",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop",
    price: 4499,
    mrp: 6999,
    rating: 4.6,
    reviews: 18342,
    badge: "Best Seller",
    features: [
      "Active noise cancellation with 30-hour battery",
      "Bluetooth 5.3 with multipoint pairing",
      "Foldable design with carry case included"
    ],
    buyLink: "https://www.amazon.in/dp/EXAMPLE01?tag=youraffiliateid-21"
  },
  {
    id: 2,
    title: "Stainless Steel Insulated Water Bottle 1L",
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=800&auto=format&fit=crop",
    price: 699,
    mrp: 1199,
    rating: 4.4,
    reviews: 9021,
    badge: "Deal of the Day",
    features: [
      "Keeps drinks cold for 24 hrs, hot for 12 hrs",
      "Leak-proof lid, BPA free",
      "Fits standard car cup holders"
    ],
    buyLink: "https://www.amazon.in/dp/EXAMPLE02?tag=youraffiliateid-21"
  },
  {
    id: 3,
    title: "Smart Fitness Band with Heart Rate Monitor",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1575311373937-40ad20af6de5?q=80&w=800&auto=format&fit=crop",
    price: 1799,
    mrp: 2999,
    rating: 4.3,
    reviews: 15234,
    badge: "",
    features: [
      "24/7 heart rate & SpO2 tracking",
      "7-day battery life, water resistant",
      "Sleep tracking with smart alarm"
    ],
    buyLink: "https://www.amazon.in/dp/EXAMPLE03?tag=youraffiliateid-21"
  },
  {
    id: 4,
    title: "Cotton Oversized Graphic T-Shirt",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    price: 499,
    mrp: 899,
    rating: 4.1,
    reviews: 3021,
    badge: "New",
    features: [
      "100% breathable cotton",
      "Relaxed unisex fit",
      "Machine washable, colour-fast print"
    ],
    buyLink: "https://www.amazon.in/dp/EXAMPLE04?tag=youraffiliateid-21"
  },
  {
    id: 5,
    title: "Atomic Habits — James Clear (Paperback)",
    category: "Books",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
    price: 349,
    mrp: 599,
    rating: 4.8,
    reviews: 52310,
    badge: "Best Seller",
    features: [
      "#1 bestseller on building good habits",
      "Practical, easy-to-apply framework",
      "Great gifting option"
    ],
    buyLink: "https://www.amazon.in/dp/EXAMPLE05?tag=youraffiliateid-21"
  },
  {
    id: 6,
    title: "Vitamin C Brightening Face Serum 30ml",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop",
    price: 549,
    mrp: 899,
    rating: 4.2,
    reviews: 7654,
    badge: "",
    features: [
      "20% Vitamin C + Hyaluronic Acid",
      "Brightens skin & reduces dark spots",
      "Dermatologically tested"
    ],
    buyLink: "https://www.amazon.in/dp/EXAMPLE06?tag=youraffiliateid-21"
  },
  {
    id: 7,
    title: "Non-Stick Cast Iron Dosa Tawa 30cm",
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1584990347449-a2d4c2a6d59e?q=80&w=800&auto=format&fit=crop",
    price: 899,
    mrp: 1499,
    rating: 4.5,
    reviews: 4210,
    badge: "Deal of the Day",
    features: [
      "Even heat distribution, pre-seasoned",
      "Works on gas, induction & electric",
      "Ergonomic riveted handle"
    ],
    buyLink: "https://www.amazon.in/dp/EXAMPLE07?tag=youraffiliateid-21"
  },
  {
    id: 8,
    title: "Adjustable Dumbbell Set 20kg (Pair)",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
    price: 3299,
    mrp: 4999,
    rating: 4.4,
    reviews: 2890,
    badge: "",
    features: [
      "Quick-adjust dial, space-saving",
      "Rubber coated plates, non-slip grip",
      "Ideal for home strength training"
    ],
    buyLink: "https://www.amazon.in/dp/EXAMPLE08?tag=youraffiliateid-21"
  },
  {
    id: 9,
    title: "Portable Bluetooth Speaker, 12W",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=800&auto=format&fit=crop",
    price: 1299,
    mrp: 2199,
    rating: 4.3,
    reviews: 11023,
    badge: "New",
    features: [
      "360° immersive sound, deep bass",
      "IPX7 waterproof, floats in water",
      "10-hour playtime, USB-C charging"
    ],
    buyLink: "https://www.amazon.in/dp/EXAMPLE09?tag=youraffiliateid-21"
  },
  {
    id: 10,
    title: "Genuine Leather Bifold Wallet",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=800&auto=format&fit=crop",
    price: 649,
    mrp: 1199,
    rating: 4.5,
    reviews: 6210,
    badge: "Best Seller",
    features: [
      "RFID-blocking card slots",
      "Full-grain leather, ages beautifully",
      "Slim profile, 6 card slots + 2 pockets"
    ],
    buyLink: "https://www.amazon.in/dp/EXAMPLE10?tag=youraffiliateid-21"
  },
  {
    id: 11,
    title: "Ceramic Non-Stick Cookware Set (5 pcs)",
    category: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1584990347449-b8f7cc9b3e1e?q=80&w=800&auto=format&fit=crop",
    price: 2799,
    mrp: 4499,
    rating: 4.2,
    reviews: 3456,
    badge: "",
    features: [
      "PFOA-free ceramic coating",
      "Includes pans, kadhai & tawa",
      "Compatible with all cooktops"
    ],
    buyLink: "https://www.amazon.in/dp/EXAMPLE11?tag=youraffiliateid-21"
  },
  {
    id: 12,
    title: "Yoga Mat with Alignment Lines, 6mm",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=800&auto=format&fit=crop",
    price: 799,
    mrp: 1299,
    rating: 4.6,
    reviews: 8901,
    badge: "Deal of the Day",
    features: [
      "Extra cushioning, non-slip surface",
      "Alignment lines for correct posture",
      "Comes with carry strap"
    ],
    buyLink: "https://www.amazon.in/dp/EXAMPLE12?tag=youraffiliateid-21"
  }
];
