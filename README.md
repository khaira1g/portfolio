# khairally portfolio

Minimal personal site inspired by [eshay.dev](https://eshay.dev).

## Local preview

```bash
cd ~/code/portfolio
python3 -m http.server 8080
```

Open http://localhost:8080

## Customize

1. **Links** — edit the `links` array at the top of `static/script.js`. Example:

   ```js
   const links = [
     { label: "github", href: "https://github.com/khaira1g" },
     { label: "discord", href: "https://discord.com/users/YOUR_ID" },
   ];
   ```

2. **Music** — drop an MP3 at `static/music/track.mp3`, then update the `label` in `static/script.js` if you want a custom marquee name.
3. **Logo** — replace `static/logo.png` if you want different artwork.

## Deploy with GitHub Pages

Push this folder to a GitHub repo, then enable Pages under **Settings → Pages → Deploy from branch → root**.

Example:

```bash
cd ~/code/portfolio
gh repo create khairally --public --source=. --remote=origin --push
```

Live URL: `https://khaira1g.github.io/portfolio/`
