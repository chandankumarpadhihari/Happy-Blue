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
];
