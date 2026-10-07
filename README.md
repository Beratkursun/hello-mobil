# PassoKlon — Tauri v2 + Astro (Svelte, React & MDX)

Bu proje, İstinye Üniversitesi **MYO063 Mobil Programlama** dersi için geliştirilmiş hibrit mobil/masaüstü etkinlik ve bilet uygulamasıdır.

## 🛠️ Teknoloji Yığını

- **Çekirdek:** [Tauri v2](https://v2.tauri.app/) (Rust + WebView)
- **Web Çatısı:** [Astro](https://astro.build/)
- **UI & Çoklu Çatı Desteği:**
  - **Svelte 5:** Reaktif arayüzler ve state yönetimi (`@astrojs/svelte` + Runes: `$state`, `$derived`, `$props`)
  - **React:** Zengin ekosistem bileşenleri (`@astrojs/react`)
  - **MDX:** Zengin içerik ve dokümantasyon sayfaları (`@astrojs/mdx`)
- **Paket Yöneticisi:** [Bun](https://bun.sh/)

## 🚀 Başlangıç

```bash
# Bağımlılıkları yükle
bun install

# Web geliştirme sunucusunu başlat (http://127.0.0.1:1420)
bun run dev

# Tauri penceresinde çalıştır
bun run tauri dev

# Üretim için statik derleme (dist/ çıktısı üretir)
bun run build
```

## 📂 Proje Yapısı

```
src/
├── components/          # Svelte ve React UI bileşenleri
│   └── react/           # React bileşenleri (örn: CanliRozet.tsx)
├── layouts/             # Astro sayfa şablonları (Layout.astro)
├── lib/                 # Veri modelleri, Svelte 5 state store'ları ve yardımcılar
│   ├── biletler.svelte.ts # Rust IPC ve bilet saklama
│   ├── data.ts          # Etkinlik ve kategori modelleri
│   ├── sepet.svelte.ts  # Sepet durumu
│   └── tema.svelte.ts   # Gece/gündüz teması
├── pages/               # Astro dosya tabanlı yönlendirme
│   ├── index.astro      # Keşfet / Ana sayfa
│   ├── biletlerim.astro # Satın alınan biletler
│   ├── sepet.astro      # Sepet sayfası
│   ├── profil.astro     # Profil ve ayarlar
│   ├── etkinlik/[id].astro # Dinamik etkinlik detayları
│   └── hakkinda.mdx     # MDX rehber sayfası
└── styles/              # Global CSS (app.css)
src-tauri/               # Rust Tauri backend (bilet_olustur komutu)
```
