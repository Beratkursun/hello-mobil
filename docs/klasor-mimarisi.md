# Klasör Mimarisi ve Dizin Yapısı

Bu doküman, projenin dizin hiyerarşisini ve her modülün sorumluluk alanını tanımlar.

> 📌 **Dokümantasyon Kuralı (Single Source of Truth):**
> Klasör yapısı yalnızca bu dokümanda tanımlanır ve güncellenir. `README.md`, `AGENTS.md` ve diğer rehberler bu dokümana bağlantı verir; dizin ağacı farklı yerlerde kopyalanıp çoğaltılmaz.

---

## 📂 Dizin Ağacı

```
hello-mobil/
├── public/                  # Statik varlıklar (İstinye logosu, favicon, svg simgeleri)
├── src/
│   ├── components/          # Svelte ve React UI bileşenleri
│   │   ├── AppHeader.svelte # Logo ve gece/gündüz modu butonu
│   │   ├── AppNav.svelte    # Rozetli alt gezinme menüsü
│   │   ├── Kesfet.svelte    # Ana sayfa arama ve listeleme
│   │   ├── Sepet.svelte     # Sepet yönetimi
│   │   ├── Biletlerim.svelte# Bilet listesi
│   │   ├── Profil.svelte    # Profil ve ayarlar
│   │   └── react/           # React bileşenleri (örn: CanliRozet.tsx)
│   ├── layouts/
│   │   └── Layout.astro     # Ana Astro sayfa şablonu & ClientRouter
│   ├── lib/
│   │   ├── data.ts          # Etkinlik ve kategori veri modelleri
│   │   ├── biletler.svelte.ts # Rust invoke("bilet_olustur") ve yerel saklama
│   │   ├── sepet.svelte.ts  # Sepet durumu ($state, $derived)
│   │   └── tema.svelte.ts   # Gece/Gündüz tema yöneticisi
│   ├── pages/               # Astro dosya tabanlı yönlendirme
│   │   ├── index.astro      # Keşfet ekranı
│   │   ├── sepet.astro      # Sepet ekranı
│   │   ├── biletlerim.astro # Biletler ekranı
│   │   ├── profil.astro     # Profil ekranı
│   │   ├── etkinlik/
│   │   │   └── [id].astro   # Dinamik etkinlik detay sayfası (getStaticPaths)
│   │   └── hakkinda.mdx     # MDX formatında rehber sayfası
│   └── styles/
│       └── app.css          # Marka CSS değişkenleri ve global stiller
├── src-tauri/               # Rust Tauri backend çekirdeği
│   ├── src/lib.rs           # bilet_olustur tauri komutu ve uygulama girişi
│   ├── Cargo.toml           # Rust bağımlılıkları
│   └── tauri.conf.json      # Pencere, güvenlik ve derleme ayarları
├── docs/                    # Proje dokümantasyonu ve görevler
│   ├── klasor-mimarisi.md   # Bu belge (dizin yapısı)
│   └── tasks/week-3/        # Hafta 3 uzaktan çalışma ve görev kılavuzları
├── astro.config.mjs         # Astro + Svelte + React + MDX yapılandırması
├── svelte.config.js         # Svelte ön işlemci ayarları
├── tsconfig.json            # TypeScript ve $lib alias tanımları
└── package.json             # Proje script'leri ve bağımlılıklar
```

---

## 🔍 Modül Sorumlulukları

| Dizin | Sorumluluk | Açıklama |
|---|---|---|
| `public/` | Statik Dosyalar | Derleme sürecine girmeden doğrudan kökten servis edilen favicon, svg ve logolar. |
| `src/components/` | Yeniden Kullanılabilir UI | Svelte 5 ve React ile yazılmış arayüz bileşenleri. |
| `src/layouts/` | Sayfa Şablonları | Ortak üst bar, alt bar ve sayfa geçiş animasyonlarını (`ClientRouter`) barındıran Astro layout'ları. |
| `src/lib/` | State & Veri | `$state` ve `$derived` içeren Svelte 5 store'ları, Rust invoke çağrıları ve veri tipleri. |
| `src/pages/` | Rotalar (Routing) | Dosya tabanlı URL yönlendirmeleri (`.astro`, `.mdx`). |
| `src/styles/` | Tasarım Sistemi | CSS değişkenleri (`--renk-ana`, `--zemin` vb.) ve tema sınıfları. |
| `src-tauri/` | Yerel Çekirdek | Rust kodu, işletim sistemi izinleri, masaüstü/mobil pencere ayarları. |
| `docs/` | Dokümantasyon | Mimari, markalama, görevler ve ajan kılavuzları. |
