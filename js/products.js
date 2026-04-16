let currentImages = [];
let currentIndex = 0;

let products = [
  {
    id: 1,
    name: "Navy Blue Floral Panel Kurti",
    description: "Chic navy blue kurti enhanced with a bold side floral design and fine textured pattern. Crafted for a flattering fit with soft, breathable fabric, making it a versatile choice for office wear and daily styling.",
    size: "M",
    sizetag: "38",
    company: "RANGRITI",
    category: "kurti",
    price: 499,
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
    company: "RANGRITI",
    category: "kurti",
    price: 589,
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
    company: "RANGRITI",
    category: "kurti",
    price: 439,
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
    company: "W",
    category: "kurti",
    price: 599,
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
    company: "RANGRITI",
    category: "kurti",
    price: 599,
    oldPrice: 1799,
    image: "Images/kurti/6FRANG Sunset Ombre Chevron Kurti.png",
    images: [
    "Images/kurti/6FRANG Sunset Ombre Chevron Kurti.png",
    "Images/kurti/6WRANG Sunset Ombre Chevron Kurti.png"
  ]
  },
  {
    id: 2,
    name: "Cotton Kurti",
    description: "2Stylish yellow coat for young and beautiful ladies.",
    size: "M",
    category: "kurti",
    price: 999,
    oldPrice: 999,
    image: "Images/woman/woman-jak2.png"
  },
  {
    id: 3,
    name: "2 Pc Suit Set",
    description: "3Stylish yellow coat for young and beautiful ladies.",
    size: "L,XL",
    category: "2pc",
    price: 1299,
    oldPrice: 1599,
    image: "Images/man/man-jak1.png"
  },
  {
    id: 4,
    name: "Designer 2 Pc",
    description: "4Stylish yellow coat for young and beautiful ladies.",
    size: "XL",
    category: "2pc",
    price: 1499,
    oldPrice: 0,
    image: "Images/man/man-jak2.png"
  },
  {
    id: 5,
    name: "Latest Kurti 2026",
    description: "5Stylish yellow coat for young and beautiful ladies.",
    size: "XXL,L,XS,S",
    category: "new",
    price: 999,
    oldPrice: 1220,
    image: "Images/woman/woman-jak3.png"
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
