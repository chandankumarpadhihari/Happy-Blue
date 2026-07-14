/* ============================================================
   HAPPY BLUE — MAIN SCRIPT
   ============================================================ */
(function () {
  "use strict";

  const grid = document.getElementById("productGrid");
  const chipRow = document.getElementById("chipRow");
  const sortSelect = document.getElementById("sortSelect");
  const searchInput = document.getElementById("searchInput");
  const resultsCount = document.getElementById("resultsCount");
  const emptyState = document.getElementById("emptyState");
  const clearFiltersBtn = document.getElementById("clearFilters");
  const statCount = document.getElementById("statCount");

  let activeCategory = "All";
  let activeSort = "featured";
  let activeSearch = "";

  /* ---------- helpers ---------- */
  const formatINR = (n) =>
    "₹" + Number(n).toLocaleString("en-IN");

  const discountPct = (price, mrp) =>
    mrp > price ? Math.round(((mrp - price) / mrp) * 100) : 0;

  const starString = (rating) => {
    const full = Math.round(rating);
    return "★".repeat(full) + "☆".repeat(5 - full);
  };

  /* ---------- render category chips ---------- */
  function renderChips() {
    chipRow.innerHTML = "";
    CATEGORIES.forEach((cat) => {
      const chip = document.createElement("button");
      chip.className = "chip" + (cat === activeCategory ? " active" : "");
      chip.type = "button";
      chip.textContent = cat;
      chip.addEventListener("click", () => {
        activeCategory = cat;
        renderChips();
        renderGrid();
      });
      chipRow.appendChild(chip);
    });
  }

  /* ---------- filter + sort pipeline ---------- */
  function getVisibleProducts() {
    let list = PRODUCTS.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const matchesSearch =
        !activeSearch ||
        p.title.toLowerCase().includes(activeSearch) ||
        p.category.toLowerCase().includes(activeSearch);
      return matchesCategory && matchesSearch;
    });

    switch (activeSort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "discount":
        list.sort(
          (a, b) => discountPct(b.price, b.mrp) - discountPct(a.price, a.mrp)
        );
        break;
      default:
        break; // featured = original order
    }
    return list;
  }

  /* ---------- render product grid ---------- */
  function renderGrid() {
    const list = getVisibleProducts();
    grid.innerHTML = "";

    resultsCount.textContent = `${list.length} product${list.length === 1 ? "" : "s"}`;
    emptyState.hidden = list.length !== 0;

    list.forEach((p, i) => {
      const disc = discountPct(p.price, p.mrp);
      const card = document.createElement("article");
      card.className = "product-card";
      card.style.animationDelay = `${Math.min(i, 8) * 45}ms`;

      card.innerHTML = `
        <div class="card-media" data-id="${p.id}">
          ${p.badge ? `<span class="card-badge">${p.badge}</span>` : ""}
          ${disc ? `<span class="card-discount">-${disc}%</span>` : ""}
          <img src="${p.image}" alt="${p.title}" loading="lazy">
        </div>
        <div class="card-body">
          <span class="card-category">${p.category}</span>
          <h3 class="card-title" data-id="${p.id}">${p.title}</h3>
          <div class="card-rating">
            <span class="stars">${starString(p.rating)}</span>
            ${p.rating.toFixed(1)} · ${p.reviews.toLocaleString("en-IN")}
          </div>
          <div class="card-price-row">
            <span class="card-price">${formatINR(p.price)}</span>
            ${p.mrp > p.price ? `<span class="card-mrp">${formatINR(p.mrp)}</span>` : ""}
          </div>
          <div class="card-actions">
            <button class="btn btn-view" data-id="${p.id}">Quick view</button>
            <a class="btn btn-primary" href="${p.buyLink}" target="_blank" rel="noopener sponsored nofollow">Buy now</a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    // wire up quick-view triggers
    grid.querySelectorAll(".card-media, .card-title, .btn-view").forEach((el) => {
      el.addEventListener("click", () => openModal(Number(el.dataset.id)));
    });
  }

  /* ---------- modal ---------- */
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalBody = document.getElementById("modalBody");
  const modalClose = document.getElementById("modalClose");

  function openModal(id) {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return;
    const disc = discountPct(p.price, p.mrp);

    modalBody.innerHTML = `
      <div class="modal-media"><img src="${p.image}" alt="${p.title}"></div>
      <div class="modal-info">
        <span class="modal-category">${p.category}</span>
        <h3>${p.title}</h3>
        <div class="card-rating">
          <span class="stars">${starString(p.rating)}</span>
          ${p.rating.toFixed(1)} · ${p.reviews.toLocaleString("en-IN")} ratings
        </div>
        <div class="modal-price-row">
          <span class="modal-price">${formatINR(p.price)}</span>
          ${p.mrp > p.price ? `<span class="modal-mrp">${formatINR(p.mrp)}</span>` : ""}
          ${disc ? `<span class="modal-discount">Save ${disc}%</span>` : ""}
        </div>
        <ul class="modal-features">
          ${p.features.map((f) => `<li>${f}</li>`).join("")}
        </ul>
        <a class="btn btn-primary modal-buy" href="${p.buyLink}" target="_blank" rel="noopener sponsored nofollow">
          View on Amazon &rarr;
        </a>
        <p class="modal-fineprint">Price shown was last checked by Happy Blue — confirm final price on Amazon before purchase.</p>
      </div>
    `;
    modalBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  /* ---------- search + sort + clear ---------- */
  let searchTimer;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      activeSearch = e.target.value.trim().toLowerCase();
      renderGrid();
    }, 150);
  });

  sortSelect.addEventListener("change", (e) => {
    activeSort = e.target.value;
    renderGrid();
  });

  clearFiltersBtn.addEventListener("click", () => {
    activeCategory = "All";
    activeSearch = "";
    searchInput.value = "";
    sortSelect.value = "featured";
    activeSort = "featured";
    renderChips();
    renderGrid();
  });

  /* ---------- header shrink + back to top ---------- */
  const header = document.getElementById("siteHeader");
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 12;
    header.classList.toggle("scrolled", scrolled);
    backToTop.classList.toggle("visible", window.scrollY > 500);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- mobile menu (simple toggle → scroll to search) ---------- */
  const menuToggle = document.getElementById("menuToggle");
  menuToggle.addEventListener("click", () => {
    const nav = document.querySelector(".main-nav");
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    nav.style.display = expanded ? "none" : "flex";
    nav.style.cssText += "position:absolute; top:100%; left:0; right:0; background:#F7FAFF; flex-direction:column; padding:16px 28px; border-bottom:1px solid #E3EBF7;";
  });

  /* ---------- newsletter (front-end only demo) ---------- */
  const newsletterForm = document.getElementById("newsletterForm");
  const newsletterNote = document.getElementById("newsletterNote");
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    newsletterNote.textContent = "You're on the list — welcome to Happy Blue!";
    newsletterForm.reset();
  });

  /* ---------- init ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
  statCount.textContent = PRODUCTS.length;
  renderChips();
  renderGrid();
})();
