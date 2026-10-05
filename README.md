# Jinghan Technology website (Next.js 14 + Tailwind CSS 3)
Static, trilingual (ja / zh / en). Routes: /ja/ /zh/ /en/ ( / redirects by browser language ).

    npm install
    npm run dev        # http://localhost:3000
    npm run build      # static site is written to ./out

Edit text: lib/content.ts   Email + site URL: lib/site.ts (NEXT_PUBLIC_SITE_URL env var)

## GitHub Pages
Push to `main` -> .github/workflows/deploy.yml builds and deploys ./out.
One-time: repo Settings > Pages > Source = "GitHub Actions".
basePath is set automatically (/<repo> for project sites). Custom domain: add repository variable SITE_URL.
