let currentImages = [];
let currentIndex = 0;

let products = [
  {
    id: 1,
    name: "Navy Blue Floral Panel Kurti",
    description: "Chic navy blue kurti enhanced with a bold side floral design and fine textured pattern. Crafted for a flattering fit with soft, breathable fabric, making it a versatile choice for office wear and daily styling.",
    size: "M",
    sizetag: "38",
    sizedet: "Size: 95cm",
    company: "RANGRITI",
    category: "kurti",
    price: 549,
    oldPrice: 999,
    image: "Images/kurti/1FRANG Navy Blue Floral Panel Kurti.png",
    images: [
    "Images/kurti/1FRANG Navy Blue Floral Panel Kurti.png",
    "Images/kurti/1ZRANG Navy Blue Floral Panel Kurti.png"
  ]
  },
  {
    id: 2,
    name: "Ivory Abstract Brushstroke Kurti",
    description: "Trendy ivory kurti featuring a bold abstract brushstroke print in shades of blue, green, and earthy brown. Designed with a mandarin collar and buttoned placket, this piece offers a modern artistic look with all-day comfort—perfect for casual outings and smart everyday wear.",
    size: "L",
    sizetag: "L",
    sizedet: "XXX",
    company: "ROYSA",
    category: "kurti",
    price: 549,
    oldPrice: 2499,
    image: "Images/kurti/2FROYSA Ivory Abstract Brushstroke Kurti.png",
    images: [
    "Images/kurti/2FROYSA Ivory Abstract Brushstroke Kurti.png"
  ]
  },
  {
    id: 3,
    name: "Ivory Heritage Print Panel Kurti",
    description: "Elegant ivory kurti featuring a beautifully detailed central panel with traditional-inspired motifs and fine geometric patterns. Accented with contrast black borders and subtle red highlights, this design blends ethnic charm with modern simplicity—perfect for everyday elegance and office wear.",
    size: "M",
    sizetag: "36",
    sizedet: "Size: 90cm",
    company: "RANGRITI",
    category: "kurti",
    price: 549,
    oldPrice: 1299,
    image: "Images/kurti/3FRANG Ivory Heritage Print Panel Kurti.png",
    images: [
    "Images/kurti/3FRANG Ivory Heritage Print Panel Kurti.png",
    "Images/kurti/3ZRANG Ivory Heritage Print Panel Kurti.png"
  ]
  },
  {
    id: 4,
    name: "Olive Garden Floral Kurti",
    description: "Elegant olive green kurti featuring an all-over floral print in soft pink and red tones. Accented with contrast printed sleeve borders and a stylish notch neckline, this piece offers a perfect blend of comfort and everyday elegance—ideal for casual wear and office styling.",
    size: "M",
    sizetag: "36",
    sizedet: "Size: 90cm",
    company: "RANGRITI",
    category: "kurti",
    price: 549,
    oldPrice: 1099,
    image: "Images/kurti/4FRANG Olive Garden Floral Kurti.png",
    images: [
    "Images/kurti/4FRANG Olive Garden Floral Kurti.png",
    "Images/kurti/4ZRANG Olive Garden Floral Kurti.png"
  ]
  },
  {
    id: 5,
    name: "Royal Blue Buti Printed Kurti",
    description: "Elegant royal blue kurti featuring delicate vertical buti prints in soft pink and white tones. Designed with a round neckline and subtle front placket, this piece offers a refined and graceful look—perfect for office wear, daily styling, and effortless comfort.",
    size: "XL",
    sizetag: "14",
    sizedet: "Chest=1m 8cm, Length=1m 12cm",
    company: "W",
    category: "kurti",
    price: 549,
    oldPrice: 4599,
    image: "Images/kurti/5FW Royal Blue Buti Printed Kurti.png",
    images: [
    "Images/kurti/5FW Royal Blue Buti Printed Kurti.png",
    "Images/kurti/5ZW Royal Blue Buti Printed Kurti.png"
  ]
  },
  {
    id: 6,
    name: "Sunset Ombre Chevron Kurti",
    description: "Vibrant yellow to orange ombre kurti featuring elegant chevron patterns with subtle dotted detailing. Designed with a stylish notch neckline and contrast red accents on the placket and sleeves, this piece adds a bright, festive touch while ensuring all-day comfort—perfect for casual outings and daytime occasions.",
    size: "M",
    sizetag: "36",
    sizedet: "Size: 90cm",
    company: "RANGRITI",
    category: "kurti",
    price: 549,
    oldPrice: 1799,
    image: "Images/kurti/6FRANG Sunset Ombre Chevron Kurti.png",
    images: [
    "Images/kurti/6FRANG Sunset Ombre Chevron Kurti.png",
    "Images/kurti/6WRANG Sunset Ombre Chevron Kurti.png"
  ]
  },
  {
    id: 7,
    name: "Indigo Stripe Panel Kurti",
    description: "Elegant indigo blue kurti featuring subtle vertical stripe textures with a contrast panel design on the front. Styled with a round neckline, button placket, and minimal detailing, this kurti offers a clean and sophisticated look—perfect for office wear, casual outings, and everyday comfort.",
    size: "L",
    sizetag: "12",
    sizedet: "Chest=1m 4cm, Length=1m 7cm",
    company: "W",
    category: "kurti",
    price: 549,
    oldPrice: 1999,
    image: "Images/kurti/7FW Indigo Stripe Panel Kurti.png",
    images: [
    "Images/kurti/7FW Indigo Stripe Panel Kurti.png",
    "Images/kurti/7ZW Indigo Stripe Panel Kurti.png"
  ]
  },
  {
    id: 8,
    name: "Royal Purple Zari Grid Kurti",
    description: "Elegant royal purple kurti featuring intricate gold zari-style geometric patterns throughout. Designed with a round neckline and subtle front slit, along with contrast striped sleeve borders, this piece offers a rich ethnic look—perfect for festive occasions, celebrations, and elegant day wear.",
    size: "M",
    sizetag: "38",
    sizedet: "Size: 95cm",
    company: "RANGRITI",
    category: "kurti",
    price: 549,
    oldPrice: 1999,
    image: "Images/kurti/8FRANG Royal Purple Zari Grid Kurti.png",
    images: [
    "Images/kurti/8FRANG Royal Purple Zari Grid Kurti.png",
    "Images/kurti/8ZRANG Royal Purple Zari Grid Kurti.png"
  ]
  },
  {
    id: 9,
    name: "Royal Blue Embroidered Panel Kurti",
    description: "Elegant royal blue kurti featuring intricate light embroidery on the front panel with delicate floral and geometric detailing. Designed with a stylish V-notch neckline and printed base pattern, this kurti blends traditional charm with modern comfort—perfect for festive wear, office styling, and everyday elegance.",
    size: "S",
    sizetag: "34",
    sizedet: "Size: 85cm",
    company: "RANGRITI",
    category: "kurti",
    price: 549,
    oldPrice: 1999,
    image: "Images/kurti/9FRANG Royal Blue Embroidered Panel Kurti.png",
    images: [
    "Images/kurti/9FRANG Royal Blue Embroidered Panel Kurti.png",
    "Images/kurti/9ZRANG Royal Blue Embroidered Panel Kurti.png"
  ]
  },
  {
    id: 10,
    name: "Ruby Red Embroidered Kurti",
    description: "Elegant ruby red kurti featuring delicate white floral embroidery on the front panel with a stylish V-notch neckline. Designed with soft textured fabric and gathered sleeves, this piece offers a graceful and feminine look—perfect for festive wear, casual outings, and everyday elegance.",
    size: "XXL",
    sizetag: "XXL",
    sizedet: "Chest=1m 20cm, Length=1m 22cm",
    company: "AURELIA",
    category: "kurti",
    price: 549,
    oldPrice: 3299,
    image: "Images/kurti/10FAURE Ruby Red Embroidered Kurti.png",
    images: [
    "Images/kurti/10FAURE Ruby Red Embroidered Kurti.png",
    "Images/kurti/10ZAURE Ruby Red Embroidered Kurti.png"
  ]
  },
  {
    id: 11,
    name: "Coral Pink Embroidered Festive Kurti",
    description: "Graceful coral pink kurti featuring intricate multicolor embroidery with delicate sequin and zari-style detailing on the neckline. Designed with a soft paisley-inspired base pattern and elegant finish, this kurti adds a rich festive charm—perfect for celebrations, parties, and special occasions.",
    size: "M",
    sizetag: "M",
    sizedet: "Chest=96cm, Length=1m 10cm",
    company: "AURELIA",
    category: "kurti",
    price: 549,
    oldPrice: 1599,
    image: "Images/kurti/11FAURE Coral Pink Embroidered Festive Kurti.png",
    images: [
    "Images/kurti/11FAURE Coral Pink Embroidered Festive Kurti.png",
    "Images/kurti/11ZAURE Coral Pink Embroidered Festive Kurti.png"
  ]
  },
  {
    id: 12,
    name: "Turquoise Gold Embroidered Straight Kurti",
    description: "Elegant turquoise kurti featuring intricate gold foil print and embroidery on the front panel and sleeves. Designed with a round neckline and straight silhouette, this piece offers a perfect blend of traditional charm and modern simplicity—ideal for festive wear, office styling, or casual ethnic looks.",
    size: "0",
    sizetag: "36",
    sizedet: "Size: 90cm",
    company: "RANGRITI",
    category: "kurti",
    price: 549,
    oldPrice: 1299,
    image: "Images/kurti/12FRANG Turquoise Gold Embroidered Straight Kurti.png",
    images: [
    "Images/kurti/12FRANG Turquoise Gold Embroidered Straight Kurti.png",
    "Images/kurti/12ZRANG Turquoise Gold Embroidered Straight Kurti.png"
  ]
  },
  {
    id: 13,
    name: "Midnight Gold Sequin Kurti",
    description: "A stunning black kurti adorned with intricate gold geometric patterns and shimmering sequin detailing around the neckline and sleeves. Designed for a graceful yet festive look, this piece blends elegance with subtle sparkle—perfect for evening outings, celebrations, or special occasions.",
    size: "XXXL",
    sizetag: "18",
    sizedet: "XXX",
    company: "W",
    category: "kurti",
    price: 549,
    oldprice: 549,
    image: "Images/kurti/13FW Midnight Gold Sequin Kurti.png",
    images: [
    "Images/kurti/13FW Midnight Gold Sequin Kurti.png",
    "Images/kurti/13ZW Midnight Gold Sequin Kurti.png"
  ]
  },
  {
    id: 14,
    name: "Crimson Stripe Everyday Kurti",
    description: "A vibrant red kurti featuring sleek navy vertical stripes and a stylish chevron-patterned yoke. Designed with a modern notch neckline and contrasting placket, this piece offers a perfect blend of comfort and contemporary style—ideal for daily wear, office looks, or casual outings.",
    size: "M",
    sizetag: "M",
    sizedet: "Chest=96cm, Length=1m 5cm",
    company: "AURELIA",
    category: "kurti",
    price: 549,
    oldPrice: 999,
    image: "Images/kurti/14FAURE Crimson Stripe Everyday Kurti.png",
    images: [
    "Images/kurti/14FAURE Crimson Stripe Everyday Kurti.png",
    "Images/kurti/14ZAURE Crimson Stripe Everyday Kurti.png"
  ]
  },
  {
    id: 15,
    name: "Indigo Bloom Button Kurti",
    description: "A charming blue kurti adorned with delicate white floral prints, designed for effortless everyday elegance. Featuring a mandarin collar with wooden-style buttons and a clean, minimal silhouette, this piece offers comfort and style—perfect for casual outings, office wear, or relaxed day looks.",
    size: "L",
    sizetag: "12",
    sizedet: "XXX",
    company: "W",
    category: "kurti",
    price: 549,
    oldprice: 549,
    image: "Images/kurti/15FW Indigo Bloom Button Kurti.png",
    images: [
    "Images/kurti/15FW Indigo Bloom Button Kurti.png",
    "Images/kurti/15ZW Indigo Bloom Button Kurti.png"
  ]
  },
  {
    id: 16,
    name: "Indigo Striped Fusion Kurta with Contrast Panel",
    description: "Elevate your everyday ethnic style with this elegant indigo kurta, designed with a modern fusion twist. Featuring a unique dual-pattern layout, the kurta combines vertical and horizontal stripe play for a contemporary yet traditional look. The rich blue base is enhanced with subtle woven motifs, giving it depth and character.",
    size: "M",
    sizetag: "M",
    sizedet: "Chest=96cm, Length=1m 5cm",
    company: "AURELIA",
    category: "kurti",
    price: 549,
    oldPrice: 1499,
    image: "Images/kurti/16FAURE Indigo Striped Fusion Kurta with Contrast Panel.png",
    images: [
    "Images/kurti/16FAURE Indigo Striped Fusion Kurta with Contrast Panel.png",
    "Images/kurti/16ZAURE Indigo Striped Fusion Kurta with Contrast Panel.png"
  ]
  },
  {
    id: 17,
    name: "Ivory Floral Printed Straight Kurta",
    description: "Refresh your everyday style with this ivory kurta adorned with vibrant orange floral prints and subtle grey foliage. Designed with a sleek mandarin collar and button placket, this lightweight piece offers breathable comfort and effortless elegance for daily wear or casual outings.",
    size: "M",
    sizetag: "M",
    sizedet: "XXX",
    company: "NOTAG",
    category: "kurti",
    price: 549,
    oldprice: 549,
    image: "Images/kurti/17FNO Ivory Floral Printed Straight Kurta.png",
    images: [
    "Images/kurti/17FNO Ivory Floral Printed Straight Kurta.png",
    "Images/kurti/17ZNO Ivory Floral Printed Straight Kurta.png"
  ]
  },
  {
    id: 18,
    name: "Sage Grey Minimal Print Straight Kurta",
    description: "Keep it subtle and stylish with this sage grey kurta featuring clean stripe detailing and minimal abstract floral prints. Designed with a round neckline and front button placket, this lightweight piece offers a perfect blend of comfort and modern elegance for everyday wear.",
    size: "S",
    sizetag: "8",
    sizedet: "Chest=94cm, Length=1m 7cm",
    company: "W",
    category: "kurti",
    price: 549,
    oldPrice: 1799,
    image: "Images/kurti/18FW Sage Grey Minimal Print Straight Kurta.png",
    images: [
    "Images/kurti/18FW Sage Grey Minimal Print Straight Kurta.png",
    "Images/kurti/18ZW Sage Grey Minimal Print Straight Kurta.png"
  ]
  },
  {
    id: 19,
    name: "Teal to Indigo Gradient Printed Kurta",
    description: "Make a statement with this elegant kurta featuring a beautiful teal-to-indigo gradient and intricate geometric prints. Designed with a sleek neckline and subtle front zip detail, this piece blends modern style with everyday comfort—perfect for casual outings or workwear.",
    size: "S",
    sizetag: "34",
    sizedet: "Size: 85cm",
    company: "RANGRITI",
    category: "kurti",
    price: 549,
    oldPrice: 1799,
    image: "Images/kurti/19FRANG Teal to Indigo Gradient Printed Kurta.png",
    images: [
    "Images/kurti/19FRANG Teal to Indigo Gradient Printed Kurta.png",
    "Images/kurti/19ZRANG Teal to Indigo Gradient Printed Kurta.png"
  ]
  },
  {
    id: 20,
    name: "Dusty Rose Embroidered Yoke Kurta",
    description: "Add a touch of elegance to your everyday wardrobe with this dusty rose kurta, featuring intricate geometric embroidery on the yoke and sleeves. Designed with a tie-up neckline and soft, flowy silhouette, it offers both comfort and a stylish ethnic charm perfect for casual outings.",
    size: "M",
    sizetag: "10",
    sizedet: "Chest=97cm, Length=79cm",
    company: "W",
    category: "kurti",
    price: 549,
    oldPrice: 1899,
    image: "Images/kurti/20FW Dusty Rose Embroidered Yoke Kurta.png",
    images: [
    "Images/kurti/20FW Dusty Rose Embroidered Yoke Kurta.png",
    "Images/kurti/20ZW Dusty Rose Embroidered Yoke Kurta.png"
  ]
  },
  {
    id: 21,
    name: "Bright Pink Embroidered Panel Kurta",
    description: "Add a pop of color to your wardrobe with this bright pink kurta, featuring delicate embroidery on the yoke and subtle pleat detailing. Designed with a mandarin collar and button placket, it offers a perfect blend of comfort and effortless everyday style.",
    size: "M",
    sizetag: "36",
    sizedet: "XXX",
    company: "RANGRITI",
    category: "kurti",
    price: 549,
    oldprice: 549,
    image: "Images/kurti/21FRANG Bright Pink Embroidered Panel Kurta.png",
    images: [
    "Images/kurti/21FRANG Bright Pink Embroidered Panel Kurta.png",
    "Images/kurti/21WRANG Bright Pink Embroidered Panel Kurta.png"
  ]
  },
  {
    id: 22,
    name: "Sage Green Micro Print Straight Kurta",
    description: "Keep it effortlessly elegant with this sage green kurta featuring a delicate all-over micro print. Designed with a clean round neckline and minimal placket detail, this lightweight piece offers breathable comfort and a refined look perfect for everyday wear.",
    size: "S",
    sizetag: "34",
    sizedet: "Size: 85cm",
    company: "RANGRITI",
    category: "kurti",
    price: 549,
    oldPrice: 1299,
    image: "Images/kurti/22FRANG Sage Green Micro Print Straight Kurta.png",
    images: [
    "Images/kurti/22FRANG Sage Green Micro Print Straight Kurta.png",
    "Images/kurti/22WRANG Sage Green Micro Print Straight Kurta.png"
  ]
  },
  {
    id: 23,
    name: "Classic Black Lace Detail Kurta",
    description: "Timeless and versatile, this classic black kurta features delicate lace detailing on the neckline and sleeves for a subtle elegant touch. Designed with a relaxed fit and breathable fabric, it’s perfect for everyday wear or effortless evening styling.",
    size: "M",
    sizetag: "36",
    sizedet: "Size: 90cm",
    company: "RANGRITI",
    category: "kurti",
    price: 549,
    oldPrice: 1299,
    image: "Images/kurti/23FRANG Classic Black Lace Detail Kurta.png",
    images: [
    "Images/kurti/23FRANG Classic Black Lace Detail Kurta.png",
    "Images/kurti/23WRANG Classic Black Lace Detail Kurta.png"
  ]
  },
  {
    id: 24,
    name: "Mint Green Embroidered Festive Kurta",
    description: "Elevate your ethnic style with this mint green kurta featuring intricate zari-inspired embroidery on the neckline and delicate scattered motifs all over. Crafted from a lightweight, flowy fabric, it offers a graceful silhouette—perfect for festive occasions and elegant day wear.",
    size: "L",
    sizetag: "16",
    sizedet: "XXX",
    company: "W",
    category: "kurti",
    price: 549,
    oldprice: 549,
    image: "Images/kurti/24FW Mint Green Embroidered Festive Kurta.png",
    images: [
    "Images/kurti/24FW Mint Green Embroidered Festive Kurta.png",
    "Images/kurti/24ZW Mint Green Embroidered Festive Kurta.png"
  ]
  },
  {
    id: 25,
    name: "Metallic Sage Embellished Neck Kurta",
    description: "Step into subtle glamour with this metallic sage kurta featuring a delicate all-over shimmer and a beautifully embellished neckline. Designed with a clean silhouette and soft sheen, this piece is perfect for festive occasions or elegant evening wear.",
    size: "XL",
    sizetag: "14",
    sizedet: "Chest=1m 5cm, Length=86cm",
    company: "W",
    category: "kurti",
    price: 549,
    oldPrice: 5999,
    image: "Images/kurti/25FW Metallic Sage Embellished Neck Kurta.png",
    images: [
    "Images/kurti/25FW Metallic Sage Embellished Neck Kurta.png",
    "Images/kurti/25ZW Metallic Sage Embellished Neck Kurta.png"
  ]
  },
  {
    id: 26,
    name: "Taupe Sheer Elegance Kurta",
    description: "A refined taupe kurta crafted in lightweight sheer fabric, featuring subtle shimmer detailing and soft sequin accents. Designed with flowy sleeves and a graceful silhouette, perfect for elegant daywear and festive occasions.",
    size: "4XL",
    sizetag: "18",
    sizedet: "Chest=1m 24cm, Length=1m 7cm",
    company: "W",
    category: "kurti",
    price: 549,
    oldPrice: 4599,
    image: "Images/kurti/26FW Taupe Sheer Elegance Kurta.png",
    images: [
    "Images/kurti/26FW Taupe Sheer Elegance Kurta.png",
    "Images/kurti/26ZW Taupe Sheer Elegance Kurta.png"
  ]
  },
  {
    id: 27,
    name: "Beige Heritage Print Kurta",
    description: "An elegant beige kurta featuring intricate traditional prints in soft red and blue tones. Designed with a detailed front panel and subtle all-over motifs, offering a perfect blend of comfort and timeless ethnic style for everyday wear.",
    size: "S",
    sizetag: "8",
    sizedet: "Chest=91cm, Length=1m 7cm",
    company: "W",
    category: "kurti",
    price: 549,
    oldPrice: 1799,
    image: "Images/kurti/27FW Beige Heritage Print Kurta.png",
    images: [
    "Images/kurti/27FW Beige Heritage Print Kurta.png",
    "Images/kurti/27ZW Beige Heritage Print Kurta.png"
  ]
  },
  {
    id: 28,
    name: "Olive Minimal Classic Kurta",
    description: "A timeless olive kurta designed with a clean, minimal aesthetic and a smart mandarin collar. Featuring subtle texture and wooden button detailing, it offers effortless style and comfort—perfect for everyday wear and understated elegance.",
    size: "M",
    sizetag: "M",
    sizedet: "Chest=96cm, Length=1m 5cm",
    company: "AURELIA",
    category: "kurti",
    price: 549,
    oldPrice: 1199,
    image: "Images/kurti/28FAURE Olive Minimal Classic Kurta.png",
    images: [
    "Images/kurti/28FAURE Olive Minimal Classic Kurta.png"
  ]
  },
  {
    id: 29,
    name: "Royal Blue Ombre Embroidered Kurta",
    description: "A graceful ombre kurta blending rich royal blue into soft sea green, highlighted with intricate silver thread embroidery on the neckline. Designed with a modern silhouette and lightweight fabric, it offers a perfect balance of elegance and comfort for festive and semi-formal occasions.",
    size: "M",
    sizetag: "10",
    sizedet: "Chest=1m, Length=98cm",
    company: "W",
    category: "kurti",
    price: 549,
    oldPrice: 4599,
    image: "Images/kurti/29FW Royal Blue Ombre Embroidered Kurta.png",
    images: [
    "Images/kurti/29FW Royal Blue Ombre Embroidered Kurta.png",
    "Images/kurti/29ZW Royal Blue Ombre Embroidered Kurta.png"
  ]
  },
  {
    id: 30,
    name: "Classic Blue Leaf Print Kurta",
    description: "A stylish blue kurta featuring elegant all-over leaf prints, designed with a mandarin collar and button-down neckline. Its comfortable fit and lightweight fabric make it perfect for everyday wear, office, and casual outings.",
    size: "L",
    sizetag: "12",
    sizedet: "XXX",
    company: "W",
    category: "kurti",
    price: 549,
    oldprice: 549,
    image: "Images/kurti/30FW Classic Blue Leaf Print Kurta.png",
    images: [
    "Images/kurti/30FW Classic Blue Leaf Print Kurta.png",
    "Images/kurti/30ZW Classic Blue Leaf Print Kurta.png"
  ]
  },
  {
    id: 31,
    name: "Blossom Grey Floral Kurta",
    description: "A soft grey kurta featuring delicate pink floral prints with statement paisley detailing on the sleeves. Designed in a straight, comfortable fit with a minimal neckline, it’s perfect for effortless everyday elegance and casual outings.",
    size: "M",
    sizetag: "8",
    sizedet: "Chest=91cm, Length=1m 7cm",
    company: "W",
    category: "kurti",
    price: 549,
    oldPrice: 1599,
    image: "Images/kurti/31FW Blossom Grey Floral Kurta.png",
    images: [
    "Images/kurti/31FW Blossom Grey Floral Kurta.png",
    "Images/kurti/31ZW Blossom Grey Floral Kurta.png"
  ]
  },
  {
    id: 32,
    name: "Royal Plum Embellished Kurta",
    description: "A rich plum kurta crafted in a smooth, glossy fabric, featuring delicate silver floral embroidery along the neckline and sleeves. Designed with a flattering wrap-style tie detail, it adds a touch of elegance and is perfect for festive and evening wear.",
    size: "XXL",
    sizetag: "16",
    sizedet: "XXX",
    company: "W",
    category: "kurti",
    price: 549,
    oldprice: 549,
    image: "Images/kurti/32FW Royal Plum Embellished Kurta.png",
    images: [
    "Images/kurti/32FW Royal Plum Embellished Kurta.png",
    "Images/kurti/32ZW Royal Plum Embellished Kurta.png"
  ]
  },
  {
    id: 33,
    name: "White Canvas Abstract Kurta",
    description: "A clean and contemporary white kurta featuring vibrant abstract prints along the hem. Designed with a mandarin collar, front buttons, and subtle sleeve detailing, it offers a perfect blend of minimal elegance and artistic flair—ideal for casual outings and statement styling.",
    size: "0",
    sizetag: "34",
    sizedet: "XXX",
    company: "RANGRITI",
    category: "kurti",
    price: 549,
    oldPrice: 1399,
    image: "Images/kurti/33FRANG White Canvas Abstract Kurta.png",
    images: [
    "Images/kurti/33FRANG White Canvas Abstract Kurta.png"
  ]
  },
  {
    id: 34,
    name: "Royal Blue Embroidered Yoke Kurti",
    description: "An elegant royal blue kurti featuring intricate white embroidery on the yoke with delicate tassel detailing. Designed with a relaxed fit and subtle all-over motifs, it offers a perfect blend of comfort and ethnic charm—ideal for everyday wear and casual outings.",
    size: "XL",
    sizetag: "14",
    sizedet: "Chest=1m 5cm, Length=74cm",
    company: "W",
    category: "kurti",
    price: 549,
    oldPrice: 4599,
    image: "Images/kurti/34FW Royal Blue Embroidered Yoke Kurti.png",
    images: [
    "Images/kurti/34FW Royal Blue Embroidered Yoke Kurti.png",
    "Images/kurti/34ZW Royal Blue Embroidered Yoke Kurti.png"
  ]
  },
  {
    id: 35,
    name: "Sunlit Gold & Yellow Embroidered Kurta",
    description: "A vibrant yellow kurta featuring subtle gold motifs and an intricately embroidered neckline. Designed for a polished, festive look with a comfortable and elegant fit.",
    size: "S",
    sizetag: "34",
    sizedet: "Size: 85cm",
    company: "RANGRITI",
    category: "kurti",
    price: 549,
    oldPrice: 1999,
    image: "Images/kurti/35FRANG Sunlit Gold Yellow Embroidered Kurta.png",
    images: [
    "Images/kurti/35FRANG Sunlit Gold Yellow Embroidered Kurta.png",
    "Images/kurti/35ZRANG Sunlit Gold Yellow Embroidered Kurta.png"
  ]
  },
  {
    id: 36,
    name: "Royal Blue & Gold Embroidered Kurta",
    description: "An elegant royal blue kurta highlighted with intricate gold embroidery on the yoke and neckline. Designed for a refined, festive look with a rich sheen and graceful silhouette.",
    size: "M",
    sizetag: "M",
    sizedet: "Chest=96cm, Length=1m 5cm",
    company: "AURELIA",
    category: "kurti",
    price: 549,
    oldPrice: 1499,
    image: "Images/kurti/36FAURE Royal Blue Gold Embroidered Kurta.png",
    images: [
    "Images/kurti/36FAURE Royal Blue Gold Embroidered Kurta.png",
    "Images/kurti/36ZAURE Royal Blue Gold Embroidered Kurta.png"
  ]
  },
  {
    id: 37,
    name: "Rose Gold Bloom Printed Kurta",
    description: "A graceful pink kurta adorned with delicate floral prints and subtle gold accents. Featuring an embellished neckline and detailed border, it offers a perfect blend of elegance and festive charm.",
    size: "L",
    sizetag: "L",
    sizedet: "Chest=1m 23cm, Length=1m 5cm",
    company: "AURELIA",
    category: "kurti",
    price: 549,
    oldPrice: 4299,
    image: "Images/kurti/37FAURE Rose Gold Bloom Printed Kurta.png",
    images: [
    "Images/kurti/37FAURE Rose Gold Bloom Printed Kurta.png"
  ]
  },
  {
    id: 38,
    name: "Radiant Red Sparkle Kurta",
    description: "A striking red kurta featuring elegant golden detailing and subtle shimmer work. Designed for festive charm and graceful style, perfect for celebrations and special occasions.",
    size: "S",
    sizetag: "34",
    sizedet: "Size: 85cm",
    company: "RANGRITI",
    category: "kurti",
    price: 549,
    oldPrice: 2199,
    image: "Images/kurti/38FRANG Radiant Red Sparkle Kurta.png",
    images: [
    "Images/kurti/38FRANG Radiant Red Sparkle Kurta.png",
    "Images/kurti/38ZRANG Radiant Red Sparkle Kurta.png"
  ]
  },
  {
    id: 39,
    name: "Beige Geometric Print Straight Kurta",
    description: "A minimal and elegant beige kurta featuring a subtle blue geometric pattern with soft script accents. Designed with a straight hem, round neckline, and three-quarter sleeves, this lightweight piece offers a clean, modern ethnic look—perfect for everyday wear or casual outings.",
    size: "S",
    sizetag: "8",
    sizedet: "Chest=94cm, Length=1m 7cm",
    company: "W",
    category: "kurti",
    price: 549,
    oldPrice: 1999,
    image: "Images/kurti/39FW Beige Geometric Print Straight Kurta.png",
    images: [
    "Images/kurti/39FW Beige Geometric Print Straight Kurta.png"
  ]
  },
  {
    id: 40,
    name: "Beige Geometric Print Straight Kurta",
    description: "A minimal and elegant beige kurta featuring a subtle blue geometric pattern with soft script accents. Designed with a straight hem, round neckline, and three-quarter sleeves, this lightweight piece offers a clean, modern ethnic look—perfect for everyday wear or casual outings.",
    size: "S",
    sizetag: "34",
    sizedet: "Size: 85cm",
    company: "RANGRITI",
    category: "kurti",
    price: 549,
    oldPrice: 1299,
    image: "Images/kurti/39FW Beige Geometric Print Straight Kurta.png",
    images: [
    "Images/kurti/39FW Beige Geometric Print Straight Kurta.png"
  ]
  }
];

let currentCategory = "all";

// Display products
function displayProducts(filteredProducts) {
  const container = document.getElementById("productContainer");
  if (!container) return;

  container.innerHTML = "";

  if (filteredProducts.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-2">
        
        <div class="no-product-box shadow-sm p-4 mx-auto">
          
          <img src="icon/no-data.png" style="width:180px;" alt="No Data">

          <h4 class="mb-2">No matching styles found</h4>
          
          <p class="text-muted mb-3">
            Try different sizes or types of dresses.
          </p>

          <button class="btn btn-outline-dark btn-sm" onclick="resetFilters()">
            Reset Filters
          </button>

        </div>

      </div>
    `;
    return;
  }

  filteredProducts.forEach(product => {
    
    const sizes = product.size.split(",");
    let sizeHTML = sizes.map(s => 
      `<span class="size-badge">${s.trim()}</span>`
    ).join(" ");

    let discountHTML = "";
    if (product.oldPrice && product.oldPrice > product.price) {
      const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

      discountHTML = `<div class="discount-badge">${discount}% OFF</div>`;
    }

    let priceHTML = "";
    if (product.oldPrice && product.oldPrice > product.price) {
      priceHTML = `
        <h4 class="price-old-text-style">₹${product.oldPrice}</h4>
        <h3 class="price-text-style">₹${product.price}</h3>
        ${discountHTML}
      `;
    } else {
      priceHTML = `
        <h3 class="price-text-style">₹${product.price}</h3>
      `;
    }

    container.innerHTML += `
      
      <div class="col" onclick="openProductModal(${product.id})" style="cursor:pointer;">
            <div class="card h-100 penguin-card-border shadow rounded position-relative">
              <img
                src="${product.image}"
                class="card-img-top penguin-card-img w-75"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">
                  ${product.description}
                </p>
              </div>
              <div
                class="card-footer d-flex justify-content-between align-items-center penguin-card-footer"
              >
                <div class="mb-2">
                  <span class="size-label">Size:</span>
                  ${sizeHTML}
                </div>
                <div class="price-box">
                  ${priceHTML}
                </div>
              </div>
            </div>
          </div>
    `;
  });
}

// Filter products
function filterProducts(category, btn) {
  currentCategory = category;

  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  if (btn) btn.classList.add("active");

  applyFilters();
}

// Edit product
function editProduct(id) {
  const product = products.find(p => p.id === id);

  const newName = prompt("Enter product name:", product.name);
  const newPrice = prompt("Enter price:", product.price);
  const newCategory = prompt("Enter category (kurti / 2pc / new):", product.category);

  if (newName && newPrice && newCategory) {
    product.name = newName;
    product.price = newPrice;
    product.category = newCategory;

    refreshView();
  }
}

// Refresh UI
function refreshView() {
  if (currentCategory === "all") {
    displayProducts(products);
  } else {
    displayProducts(products.filter(p => p.category === currentCategory));
  }
}

// Load on page start
document.addEventListener("DOMContentLoaded", () => {
  displayProducts(products);
});

function openProductModal(id) {
  const product = products.find(p => p.id === id);

  document.getElementById("modalTitle").innerText = product.name;
  document.getElementById("modalDescription").innerText = product.description;

  const mainImage = document.getElementById("mainImage");
  const thumbContainer = document.getElementById("thumbnailContainer");

  thumbContainer.innerHTML = "";

  currentImages = product.images || [product.image];
  currentIndex = 0;

  mainImage.src = currentImages[0];

  currentImages.forEach((img, index) => {
    thumbContainer.innerHTML += `
      <img 
        src="${img}" 
        class="thumb-img ${index === 0 ? "active-thumb" : ""}"
        onclick="setImage(${index}, this)"
      >
    `;
  });

  new bootstrap.Modal(document.getElementById("productModal")).show();
}

function setImage(index, element) {
  currentIndex = index;

  document.getElementById("mainImage").src = currentImages[index];

  document.querySelectorAll(".thumb-img").forEach(img => {
    img.classList.remove("active-thumb");
  });

  if (element) {
    element.classList.add("active-thumb");

    // 🔥 AUTO SCROLL
    element.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  }
}

function scrollThumbs(amount) {
  document.getElementById("thumbnailContainer").scrollBy({
    left: amount,
    behavior: "smooth"
  });
}

function changeImageBy(step) {
  currentIndex += step;

  if (currentIndex < 0) currentIndex = currentImages.length - 1;
  if (currentIndex >= currentImages.length) currentIndex = 0;

  document.getElementById("mainImage").src = currentImages[currentIndex];

  const thumbs = document.querySelectorAll(".thumb-img");

  thumbs.forEach((img, i) => {
    img.classList.toggle("active-thumb", i === currentIndex);
  });

  // 🔥 AUTO SCROLL ACTIVE THUMB
  const activeThumb = thumbs[currentIndex];
  if (activeThumb) {
    activeThumb.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  }
}

let startX = 0;

const mainImg = document.getElementById("mainImage");

mainImg.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

mainImg.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) {
    changeImageBy(1); // swipe left
  } else if (endX - startX > 50) {
    changeImageBy(-1); // swipe right
  }
});

function applyFilters() {
  // get selected sizes
  const checkedSizes = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
    .map(cb => cb.value);

  let filtered = products;

  // filter by category
  if (currentCategory !== "all") {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  // filter by sizes
  if (checkedSizes.length > 0) {
    filtered = filtered.filter(product => {
      const productSizes = product.size.split(",").map(s => s.trim());
      return checkedSizes.some(size => productSizes.includes(size));
    });
  }

  displayProducts(filtered);
}

function resetFilters() {
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
  currentCategory = "all";
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  document.querySelector(".filter-btn").classList.add("active");

  displayProducts(products);
}
