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
      "Elevated Entertainment: Enjoy your favourite shows with smooth visuals and built-in speakers.",
      "Integrated dual 3W speakers with multiple sound profiles.",
      "4-star TÜV-certified display reduces harmful blue light.",
      "Tilt, swivel, pivot, and height adjustment support.",
      "Easy Arrange enhances multitasking and productivity."
    ],
    buyLink:
      "https://www.amazon.in/dp/B0FQ5F2QSQ?social_share=cm_sw_r_cso_cp_apin_dp_K2HFF8HA8SM4R850JEJC&th=1&linkCode=ll2&tag=happyblue050-21&linkId=49d2909c0b5d058aabc8b7b9fbbf6174&ref_=as_li_ss_tl"
  },

  {
    id: 2,
    title: "Apple iPhone 16e",
    category: "Electronics",
    image: "https://m.media-amazon.com/images/I/61FMZ9rSZUL._SL1500_.jpg",
    price: 59900,
    mrp: 59900,
    rating: 4.5,
    reviews: 1236,
    badge: "",
    features: [
      "Built for Apple Intelligence.",
      "A18 chip for fast performance and long-term software support.",
      "Up to 26 hours of video playback.",
      "48MP Fusion camera with 2x optical-quality Telephoto.",
      "6.1-inch Super Retina XDR display with Ceramic Shield.",
      "Customizable Action Button.",
      "iOS 18 personalization features.",
      "Face ID and enhanced privacy protections."
    ],
    buyLink: "https://link.amazon/B0bkRwFFS"
  },

  {
    id: 3,
    title: "Laptop Cooling Pad",
    category: "Electronics",
    image: "https://m.media-amazon.com/images/I/61ti1QvYWZL._SL1500_.jpg",
    price: 1599,
    mrp: 4499,
    rating: 4.5,
    reviews: 458,
    badge: "",
    features: [
      "Ergonomic design: The ZEB-NS4000 Pro rotatable laptop stand, with its foldable, ergonomic design and durable metal body, is perfect for remote work and workcations.",
      "Optimum cooling: To combat the heat from the laptop, this stand comes with a type-C powered detachable magnetic fan that can boast 66CFM airflow for adequate cooling.",
      "Portability: This stand is easily portable and can withstand a maximum weight of 5 kg, capable of holding a laptop of up to 43.18 cm.",
      "Anti-rust: The anti-rust property of the ZEB-NS4000 Pro laptop stand will allow you to use it for the longest time without any damage.",
      "360° rotatable: The laptop stand comes with 360° rotation to ease the strain from long-duration working."
    ],
    buyLink: "https://www.amazon.in/dp/B0DB8H4JWR?social_share=cm_sw_r_cso_cp_apin_dp_J4V724H81VBFD64NQF7N_1&linkCode=ll2&tag=happyblue050-21&linkId=70682ef041780d37ef88624dacd6938a&ref_=as_li_ss_tl"
  },

  {
    id: 4,
    title: "Samsung Galaxy M17e 5G Mobile (Blitz Blue, 6GB RAM, 128GB Storage) | Smoothest 120 Hz Refresh Rate| Monster 6000 mAh Battery | IP54 | 6 Gen OS Upgrades | AI | Gemini Live | Without Charger",
    category: "Electronics",
    image: "https://m.media-amazon.com/images/I/711NP4juOiL._SL1500_.jpg",
    price: 15999,
    mrp: 18999,
    rating: 4.0,
    reviews: 844,
    badge: "",
    features: [
      "Segment Smoothest Smartphone - 120 Hz Refresh Rate for a smooth scrolling experience, 6.7 Inch display with HD+ Resolution, Adaptive Brightness automatically adjusts screen brightness optimising visibility and saving battery life. 8.2mm sleek with Key Island Design.",
      "Segment Longest 26-Hour Video Playback - Powered by a 6000 mAh Lithium-ion Battery, Segment-Leading Fast Charging Support of 25W. Its Adaptive Battery Technology automatically puts apps in sleeping or deep sleeping modes based on your usage, ensuring they do not drain your battery life in the background.",
      "Segment Leading MediaTek Dimensity 6300 processor with Latest Android 16 Operating System having One UI 8.0, 2.4GHz, 2GHz Clock Speed with Octa-Core Processor, Upto 6GB of RAM, Memory Expandable upto 2 TB.",
      "Galaxy M17e 5G comes with High resolution 50 MP Dual Camera. It allows you to take stunning and brighter pictures and videos. With its Secondary camera, you can capture sharper and clearer portrait pictures. Its Night Mode and F1.8 aperture allow more light to enter capturing sharper and brighter output even in low light.",
      "Galaxy M17e 5G is Water and Dust resistant with IP54 ensuring protection against accidental splashes and dusty environments. Segment Best 6 Generations of OS upgrades and 6 years of Security Upgrades, Samsung Knox Vault for Software and Hardware Security, AI features of Google Gemini, Circle to Search with Google."
    ],
    buyLink: "https://www.amazon.in/dp/B0GN1J78Z2?social_share=cm_sw_r_cso_cp_apin_dp_9NVFH6X33FS94C476EGN&th=1&linkCode=ll2&tag=happyblue050-21&linkId=482e598e910aec6be87bfca7c2779e0e&ref_=as_li_ss_tl"
  },

  {
    id: 5,
    title: "Samsung Galaxy M06 5G Mobile (Sage Green, 6GB RAM, 128GB Storage) | MediaTek Dimensity 6300 | AnTuTu 623K+ | 12 5G Bands | 25W Fast Charging | 4 Gen OS Upgrades | 50MP Camera | Without Charger",
    category: "Electronics",
    image: "https://m.media-amazon.com/images/I/711NP4juOiL._SL1500_.jpg",
    price: 15499,
    mrp: 18999,
    rating: 4.0,
    reviews: 844,
    badge: "",
    features: [
      "Monster Processor - Segment Leading MediaTek Dimensity 6300, AnTuTu score 623K+, Latest Android 15 Operating System having One UI 7.0 platform, 2.4GHz, 2GHz Clock Speed with Octa-Core Processor, Upto 6GB of RAM. Monster 5G Experience - Complete 5G experience with 12 5G Bands (among the highest in the segment), All Network Support, Faster Download and Upload Speed on your mobile. Monster Design, Camera and Display - Refreshing design with new Linear camera deco, Slimmer with just 8.0 mm thickness, 50MP (F1.8) Main Wide Angle Camera + 2MP Depth Camera, 8MP (F2.0) Selfie Camera | Video Maximum Resolution of FHD (1920 x 1080) at 30fps.. Monster Security and OS Upgrades - Knox Security with segment leading smartphone with 4 Generations of Android OS Upgrades and 4 Years of Security Updates to keep your phone updated with all latest software developments. Come with Android 14 Operating System having One UI 6 platform. Monster Battery - Get a massive 5000mAh Lithium-ion Battery (Non-Removable) with Segment leading Fast Charging 25W Support. Get more power in less time."
    ],
    buyLink: "https://www.amazon.in/Samsung-MediaTek-Dimensity-Charging-Upgrades/dp/B0G822HMR3?pd_rd_w=NNTaf&content-id=amzn1.sym.d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_p=d1406b44-aa69-47e4-9270-f613e12d52dc&pf_rd_r=HW783V9CKYQ2G7GWSCVY&pd_rd_wg=9je41&pd_rd_r=88e8bf1a-2b52-4191-a714-eef3a79b52d8&pd_rd_i=B0G822HMR3&th=1&linkCode=ll2&tag=happyblue050-21&linkId=0afd5b794433bea713e407bf427e8fa4&ref_=as_li_ss_tl"
  }
  
];
