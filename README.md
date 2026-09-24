# Website Belajar Golang

Situs pembelajaran berbasis [Fumadocs](https://fumadocs.dev) (Next.js) yang
menampung **beberapa segmen pembelajaran Golang**. Segmen pertama yang tersedia
adalah **Backend**: kurikulum **16 pertemuan** yang dibagi ke dalam 5 fase —
fondasi bahasa, concurrency & testing, web API & database, otentikasi &
arsitektur, serta lanjutan & deployment.

Run development server:

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

## Konten

Setiap **segmen** adalah sebuah *root folder* di `content/docs`, sehingga
otomatis muncul sebagai **tab** di sidebar. Segmen baru cukup ditambahkan sebagai
folder baru dengan `meta.json` berisi `"root": true`.

```text
content/docs/
├── index.mdx                    # Halaman pemilihan segmen
├── meta.json                    # Daftar segmen: index, backend
└── backend/                     # Segmen: Backend (root folder -> tab)
    ├── meta.json                # "root": true
    ├── index.mdx                # Silabus & peta kurikulum Backend
    ├── fase-1-fondasi-golang/   # Pertemuan 1–4
    ├── fase-2-concurrency-testing/  # Pertemuan 5–6
    ├── fase-3-web-api-database/     # Pertemuan 7–10
    ├── fase-4-auth-arsitektur/      # Pertemuan 11–13
    └── fase-5-advanced-deployment/  # Pertemuan 14–16
```

Menambah segmen baru (mis. `cli`): buat `content/docs/cli/` dengan `meta.json`
`{ "title": "CLI", "root": true }`, lalu tambahkan `"cli"` ke `pages` di
`content/docs/meta.json`.

Urutan navigasi sidebar diatur lewat file `meta.json` di setiap folder.

## Deploy ke GitHub Pages

Situs di-*export* sebagai HTML statis (`output: 'export'`) ke folder `out/`.
Deployment otomatis lewat GitHub Actions (`.github/workflows/deploy.yml`).

Langkah:

1. Push proyek ke repositori GitHub (branch `main`).
2. Buka **Settings → Pages → Build and deployment → Source**, pilih **GitHub Actions**.
3. Setiap push ke `main` otomatis di-build dan di-deploy.

`actions/configure-pages` mengisi `BASE_PATH` (sub-path repo) dan
`NEXT_PUBLIC_SITE_URL` secara otomatis, sehingga situs berfungsi baik untuk
*user/org page* (`username.github.io`) maupun *project page*
(`username.github.io/repo`).

Build & uji statis secara lokal:

```bash
npm run build       # menghasilkan folder out/
npx serve out       # atau: python3 -m http.server -d out 4321
```

## Explore

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `lib/layout.shared.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                     | Description                                            |
| ------------------------- | ------------------------------------------------------ |
| `app/(home)`              | The route group for your landing page and other pages. |
| `app/docs`                | The documentation layout and pages.                    |
| `app/api/search/route.ts` | The Route Handler for search.                          |

### Fumadocs MDX

Collections are defined with the [Macro API](https://fumadocs.dev/docs/mdx/macro) in `lib/source.ts`.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.dev) - learn about Fumadocs
