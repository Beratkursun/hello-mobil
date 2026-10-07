# Görev 05 — Proje Markalama (Branding), Logo ve Renk Sistemi

Bu görevde projenizi PassoKlon görünümünden çıkarıp kendi belirlediğiniz uygulamanın kurumsal kimliğine (renk paleti, logo, launcher simgeleri ve tema) kavuşturacaksınız.

---

## 1. Neden Markalama Yapıyoruz?

Bir uygulamanın ilk izlenimi renkleri ve logosudur. Örneğin bir doğa/kamp uygulaması yeşil ve toprak tonları kullanırken, bir finans uygulaması güven veren lacivert ve zümrüt yeşili tonları tercih eder. Passo'nun kırmızı temasını kendi konseptinize uygun hale getirmelisiniz.

---

## 2. Adım Adım Markalama İşlemleri

### 1. Adım: `docs/branding.md` Dosyası Oluşturun
Projenizin `docs/branding.md` dosyasını oluşturun ve marka kimliğinizi tanımlayın:

```markdown
# [Proje Adı] — Marka ve Tasarım Kılavuzu

## 1. Marka Renk Paleti

| Kullanım Alanı | Açık Mod (Gündüz) | Koyu Mod (Gece) | Açıklama |
|---|---|---|---|
| **Ana Renk (Primary)** | `#2563eb` | `#3b82f6` | Butonlar, aktif sekmeler, logolar |
| **İkincil Renk (Accent)** | `#f59e0b` | `#fbbf24` | Rozetler, uyarılar, özel etiketler |
| **Zemin (Background)** | `#f8fafc` | `#0f172a` | Sayfa arka plan rengi |
| **Kart (Surface)** | `#ffffff` | `#1e293b` | Liste kartları, form kutuları |
| **Yazı Rengi (Text)** | `#0f172a` | `#f8fafc` | Ana başlık ve gövde metinleri |
| **Soluk Yazı (Muted)** | `#64748b` | `#94a3b8` | Tarih, mekan, ikincil açıklamalar |
| **Kenarlık (Border)** | `#e2e8f0` | `#334155` | Kart ve input sınır çizgileri |

## 2. Tipografi ve Köşe Yuvarlaklığı
- **Yazı Tipi:** System UI (`-apple-system, Segoe UI, Roboto`)
- **Köşe Yuvarlaklığı (`--radius`):** `14px`

## 3. Logo ve İkon Konsepti
- **Sembol:** [Örn: Yaprak ikonu / Yıldız / Akıllı çip]
- **Slogan:** [Kısa marka sloganınız]
```

---

### 2. Adım: Renkleri Kod Tabakasına İşleyin (`src/styles/app.css`)
`src/styles/app.css` dosyasını açarak belirlediğiniz renk kodlarını CSS değişkenlerine yazın:

```css
:root {
  --renk-ana: #2563eb;      /* Sizin ana marka renginiz */
  --renk-koyu: #1e293b;     /* Üst bar ve koyu alan rengi */
  --zemin: #f8fafc;
  --kart: #ffffff;
  --yazi: #0f172a;
  --yazi-soluk: #64748b;
  --kenar: #e2e8f0;
  --radius: 14px;
}

:root[data-tema="gece"] {
  --zemin: #0f172a;
  --kart: #1e293b;
  --yazi: #f8fafc;
  --yazi-soluk: #94a3b8;
  --kenar: #334155;
}
```

---

### 3. Adım: Logo ve İkonları Güncelleyin

1. **Üst Bar Logosu (`src/components/AppHeader.svelte`):**
   - `passo<span>klon</span>` metnini kendi proje adınızla değiştirin (örn: `kamp<span>rehberi</span>`).
2. **Web Favicon & Varlıklar (`public/`):**
   - `public/favicon.png` görselini kendi logonuzla değiştirin.
3. **Tauri Launcher İkonu (`src-tauri/icons/`):**
   - 1024x1024 boyutunda bir `app-icon.png` hazırlayın.
   - Tauri CLI'ın dahili ikon üreticisi ile tüm platform ikonlarını otomatik oluşturabilirsiniz:
     ```bash
     bun run tauri icon path/to/app-icon.png
     ```

---

### 4. Adım: Pencere Başlığı ve Uygulama Adı (`src-tauri/tauri.conf.json`)

`src-tauri/tauri.conf.json` dosyasını açıp kendi proje başlığınızı yazın:

```json
{
  "productName": "proje-adiniz",
  "app": {
    "windows": [
      {
        "title": "Projenizin Adı",
        "width": 420,
        "height": 820
      }
    ]
  }
}
```

---

## ✅ Kontrol Listesi

- [ ] `docs/branding.md` dosyası oluşturuldu ve renkler tablolandı.
- [ ] `src/styles/app.css` içinde CSS renk değişkenleri güncellendi.
- [ ] `AppHeader.svelte` logo ve başlığı güncellendi.
- [ ] `tauri.conf.json` pencere başlığı güncellendi.
- [ ] `bun run build` hatasız tamamlandı.
