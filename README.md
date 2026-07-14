# Happy Blue

A ready-to-use Amazon affiliate storefront. Browse, search, filter, and click
through to buy — every product shows a picture, price, rating, and a quick-view
with full details before redirecting to Amazon.

## Files

```
happy-blue/
├── index.html          the page
├── css/style.css        all styling
├── js/products.js        ← YOUR PRODUCT LIST (edit this)
└── js/main.js            site behaviour (search, filters, modal) — no need to touch
```

## Adding your own products

Open `js/products.js`. Each product is one block like this:

```js
{
  id: 13,
  title: "Product name",
  category: "Electronics",       // must match a name in CATEGORIES
  image: "https://your-image-url.jpg",
  price: 1999,
  mrp: 2999,                      // original price, for the strike-through + discount badge
  rating: 4.5,
  reviews: 1280,
  badge: "Best Seller",           // or "" for no badge
  features: ["Feature one", "Feature two", "Feature three"],
  buyLink: "https://www.amazon.in/dp/XXXXXXX?tag=youraffiliateid-21"
}
```

Copy that block, paste it inside the `PRODUCTS` array, give it a unique `id`,
and fill in your real Amazon affiliate link in `buyLink`. That's it — no
other file needs to change. Delete the placeholder products (ids 1–12) once
you've added your own, or leave them as examples.

To add or rename categories, edit the `CATEGORIES` list at the top of the
same file — the filter chips update automatically.

## Running it locally

No build step — it's plain HTML/CSS/JS. Just open `index.html` in a browser,
or for the smoothest experience serve it locally:

```
cd happy-blue
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Publishing it for free

Any static host works. Two easy options:

- **Netlify Drop** — go to app.netlify.com/drop and drag the `happy-blue`
  folder in. You get a live URL in seconds.
- **GitHub Pages** — push the folder to a GitHub repo, then enable Pages in
  the repo settings (Settings → Pages → Deploy from branch).

## Important: Amazon Associates compliance

The site already includes the required affiliate disclosure at the top and
in the footer ("As an Amazon Associate, Happy Blue earns from qualifying
purchases"). Keep this in place — it's a condition of the Amazon Associates
program, not optional styling. Also make sure every `buyLink` includes your
actual Associate tag (the `?tag=yourid-21` part).

## Customizing the look

All colors, fonts, and spacing live at the top of `css/style.css` under
`:root`. Change `--blue`, `--coral`, or `--navy` to retheme the whole site
in one place.
