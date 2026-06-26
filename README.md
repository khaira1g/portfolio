# khaira1g portfolio

Minimal personal site inspired by [eshay.dev](https://eshay.dev).

## Local preview

```bash
cd ~/code/portfolio
python3 -m http.server 8080
```

Open http://localhost:8080

## Customize

Edit the `links` array at the top of `static/script.js`:

```js
const links = [
  { label: "github", href: "https://github.com/khaira1g" },
  { label: "discord", href: "https://discord.com/users/1081934856642105394" },
];
```

Replace `static/logo.png` if you want different artwork.

## Live site

https://khaira1g.github.io/portfolio/

Pushes to `main` deploy automatically via GitHub Pages.
