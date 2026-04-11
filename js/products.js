let currentImages = [];
let currentIndex = 0;

let products = [
  {
    id: 1,
    name: "Floral Kurti",
    description: "1Stylish yellow coat for young and beautiful ladies.",
    size: "S",
    category: "kurti",
    price: 799,
    oldPrice: 1000,
    image: "Images/woman/woman-jak1.png",
    images: [
    "Images/woman/woman-jak1.png",
    "Images/woman/woman-jak2.png",
    "Images/woman/woman-jak3.png",
    "Images/woman/woman-jak1.png",
    "Images/woman/woman-jak2.png",
    "Images/woman/woman-jak3.png"
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

  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
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
