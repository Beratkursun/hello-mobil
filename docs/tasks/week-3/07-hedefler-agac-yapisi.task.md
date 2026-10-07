# Görev 07 — Hedef Mimari, Sayfa Ağaç Yapısı ve Platform Kapsamı

Bu görevde projenizin temel klasör mimarisini, sayfalarını, hedeflediği platformları ve ekran boyutlarını içeren **Mimari Ağaç Yapısını** (`docs/mimari-agac.md`) oluşturacaksınız.

---

## 1. Dizin Ağacı Kuralı: Münferit Dosyalar Değil, Ana Klasörler!

> ⚠️ **ÖNEMLİ KURAL:**
> Dizin ağaçlarında projedeki her küçük dosyayı tek tek listelemeyin! Proje geliştikçe onlarca yeni dosya eklenir ve her dosyayı listelemeye çalışmak dokümanın hemen eskimesine ve kafa karışıklığına yol açar.
>
> Bunun yerine **yalnızca ana klasörleri ve kök konfigürasyon dosyalarını** tanımlayın ve bunların ne işe yaradığını bilin:
>
> - **`package.json`:** Projenin kütüphane bağımlılıkları ve çalıştırma scriptleri.
> - **`astro.config.mjs`:** Web çatısı entegrasyonları (Svelte, React, MDX) ve yerel port ayarları.
> - **`public/`:** Derlemeye girmeyen statik dosyalar (logolar, favicon, svg ikonları).
> - **`src-tauri/`:** Rust çekirdeği, native komutlar ve işletim sistemi pencere ayarları (`tauri.conf.json`).
> - **`src/layouts/`:** Ortak sayfa iskeletleri (üst bar, alt menü, sayfa geçişleri).
> - **`src/pages/`:** Dosya tabanlı sayfa rotaları (URL yolları: `.astro`, `.mdx`).
> - **`src/components/`:** Tekrar kullanılabilir arayüz parçaları (butonlar, kartlar, formlar).
> - **`src/lib/`:** İş mantığı, Svelte 5 `$state` store'ları ve veri modelleri.
> - **`src/types/`:** TypeScript veri arayüzleri ve tip tanımları.
> - **`src/styles/`:** Global tema CSS değişkenleri ve renk paleti (`app.css`).
> - **`docs/`:** Proje planları, görevler ve kurallar.

---

## 2. Sayfa ve Özellik Ağacı (Site & Feature Map)

Sayfa ağacı, projenizin navigasyonunu ve ekranlar arası akışı gösterir.
Projenizin `docs/mimari-agac.md` taslağını açın ve kendi uygulamanızın sayfalarına göre doldurun:

```
[Projenizin Adı]
├── / (Ana Sayfa)
│   ├── Arama ve Canlı Filtreleme
│   └── Öğe Listesi
├── /[detay]/[id] (Öğe Detayı)
│   ├── Detay Bilgileri ve Seçenekler
│   └── Sepete / Listeye Ekleme
├── /[islem] (İşlem / Sepet / Onay)
│   └── Toplam Tutar ve [Rust Backend Komut Çağrısı]
├── /[sonuc] (Kayıtlar / Kodlarım)
│   └── Rust Tarafından Üretilen Kodun Gösterimi
├── /profil (Kullanıcı & Ayarlar)
│   └── Kullanıcı Bilgisi ve Gece/Gündüz Modu
└── Bilgi Sayfaları
    ├── /hakkinda (MDX)
    ├── /iletisim (Reaktif Form)
    ├── /kosullar (MDX)
    └── /gizlilik (MDX)
```

---

## 3. Hedef Platform Matrisi

Tauri v2 sayesinde tek kod tabanından aşağıdaki tüm platformları hedefliyoruz:

| Platform | İşletim Sistemleri | Hedef Çıktı |
|---|---|---|
| **Masaüstü** | macOS (Apple Silicon / Intel) | `.dmg`, `.app` |
| **Masaüstü** | Windows (10 / 11 x64) | `.msi`, `.exe` |
| **Masaüstü** | Linux (Ubuntu / Debian) | `.deb`, `.AppImage` |
| **Mobil** | iOS (iPhone & iPad) | `.ipa` (Xcode) |
| **Mobil** | Android (Telefon & Tablet) | `.apk`, `.aab` |

---

## 4. Ekran Boyutları (Responsive Breakpoints)

- **Telefon (375px - 430px):** Tek sütun, alt menü (`alt-menu`) sabit.
- **Tablet (768px - 1024px):** 2 sütunlu ızgara düzeni.
- **Masaüstü (1200px+):** 3 sütunlu ızgara, `max-width` ortalanmış düzen.

---

## ✅ Kontrol Listesi

- [ ] `docs/mimari-agac.md` taslağı kendi fikrinize göre dolduruldu.
- [ ] Dizin mimarisinde ana klasörlerin (`layouts`, `pages`, `components`, `lib`, `types`, `styles`, `src-tauri`) işlevi anlaşıldı.
- [ ] Sayfa ağacı ve hedef platformlar dokümana işlendi.

## 🎯 Puan Rubriği (toplam 10 puan)

| Kriter | Puan | Tam puan koşulu |
|---|---|---|
| Klasör yapısı | 3 | Yalnızca ana klasörler ve kök dosyalar listelenir; dosya tek tek yazılmaz |
| Sayfa ve özellik ağacı | 2 | `docs/mimari-agac.md` ile birebir uyumlu; her sayfa bir rota |
| Platform matrisi | 2 | 5 platform ve hedef çıktı (dmg/msi/deb/ipa/apk) dolu |
| Responsive ve adaptive | 3 | Telefon, tablet, masaüstü, büyük ekran için breakpoint + düzen ve gezinme davranışı; `max-width` ve grid tanımlı |

## 📚 İlgili Kaynaklar

- **Kaynak repo:** [github.com/keyvanarasteh/hello-mobil](https://github.com/keyvanarasteh/hello-mobil)
- **Apple HIG:** [developer.apple.com/design/human-interface-guidelines](https://developer.apple.com/design/human-interface-guidelines)
- **Responsive (web):** [MDN responsive design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
