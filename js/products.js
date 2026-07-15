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
  "Electronics"
];

const PRODUCTS = [
  {
    id: 1,
    title: "Dell Monitor 24inch",
    category: "Electronics",
    image: "https://m.media-amazon.com/images/I/719QTbfDACL._SL1500_.jpg",
    price: 11179,
    mrp: 19999,
    rating: 4.4,
    reviews: 411,
    badge: "Best Seller",
    features: [
      "Elevated Entertainment: Enjoy your favourite shows with smooth visuals and built-in speakers. The FHD resolution and 1500:1 contrast ratio bring clarity, while a 144Hz refresh rate and 1ms Moving Picture Response Time (MPRT) deliver a smooth, tear-free viewing experience.",
      "Hear The Audio Difference: Immerse yourself in sound with integrated dual 3W speakers delivering a wider range of frequencies. Whether you're watching a movie or enjoying music, you can fine-tune your experience with five preset sound profiles or create your own for personalised, dynamic audio that suits every moment.",
      "Eye Comfort: Prioritise visual comfort with this 4-star TÜV-certified display. Reduce harmful blue light emissions while maintaining stunning image quality without compromising colours.",
      "Designed For Comfort: Adjust your monitor to suit your preference throughout the day. Tilt from -5° to +21° | Swivel bi-directionally up to 30° | Pivot bi-directionally up to 90° | Height adjustability up to 110mm.",
      "Maximise Productivity: Easy Arrange tiles apps across screens with pre-set partitions and customises up to five windows, enhancing multitasking. Easy Arrange Memory saves and restores app profiles manually, on schedule, or at start-up. Work comfortably day or night and automate brightness and contrast settings to match your schedule."
    ],
    buyLink:
      "https://www.amazon.in/dp/B0FQ5F2QSQ?social_share=cm_sw_r_cso_cp_apin_dp_K2HFF8HA8SM4R850JEJC&th=1&linkCode=ll2&tag=happyblue050-21&linkId=49d2909c0b5d058aabc8b7b9fbbf6174&ref_=as_li_ss_tl"
  }
];
