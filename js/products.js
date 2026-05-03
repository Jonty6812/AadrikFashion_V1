let currentImages = [];
let currentIndex = 0;

const companyLogos = {
  "RANGRITI": "icon/rangriti.png",
  "W": "icon/w.png",
  "AURELIA": "icon/aurelia.png",
  "ROYSA": "icon/roysa.png",
  "NOTAG": "icon/rangriti.png"
};

let products = [
  ...(typeof kurtiProducts !== "undefined" ? kurtiProducts : []),
  ...(typeof twoPcsSetProducts !== "undefined" ? twoPcsSetProducts : [])
];

let currentCategory = "all";

// Display products
function displayProducts(filteredProducts) {
  const container = document.getElementById("productContainer");
  if (!container) return;

  container.innerHTML = "";

  if (filteredProducts.length === 0) {
    // SHOW COMING SOON FOR 2PC
    if (currentCategory === "2pc_XXX") { //2pc

      // REMOVE GRID BEHAVIOR
      container.classList.add("coming-soon-mode");

      container.innerHTML = `
        <div class="w-100 d-flex justify-content-center align-items-center" style="min-height:60vh;">
          <img src="Images/coming_soon.png" 
              style="max-width:360px; width:100%;" 
              alt="Coming Soon">
        </div>
      `;
      return;
    } else {
      container.classList.remove("coming-soon-mode");
    }

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
            
            <!-- SOLD OUT BADGE -->
            ${product.soldOut ? `
                <div class="sold-out-overlay">
                  <img src="Images/sold_out.png" alt="Sold Out">
                </div>
              ` : ""}

            <img 
              src="${companyLogos[product.company] || 'icon/default.png'}"
              class="company-logo"
              alt="${product.company}"
              onerror="this.onerror=null; this.src='icon/default.png';"
            />
            
            <img
                src="${product.image}"
                class="card-img-top penguin-card-img w-100"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">
                  ${shortText(product.description)}
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

function shortText(text, wordLimit = 7) {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
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
  
  let sizeTxt = "";
  if(product.sizedet != "XXX"){
    if(product.company != "W"){
      sizeTxt = " (" + product.sizedet + ")";
    }
    else{
      sizeTxt = " ( Brand size: " + product.sizetag + ")";
    }
  }

  document.getElementById("modalTitle").innerText = product.name + sizeTxt;
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
  // uncheck all sizes
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);

  // reset category
  currentCategory = "all";

  // reset active button properly
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  document.querySelector(".filter-btn[onclick*='all']").classList.add("active");

  // remove coming soon mode (important)
  const container = document.getElementById("productContainer");
  container.classList.remove("coming-soon-mode");

  // reload products
  displayProducts(products);
}