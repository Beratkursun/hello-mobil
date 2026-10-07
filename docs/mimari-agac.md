# Mimari Ağaç Yapısı ve Kapsam

> ✍️ **Öğrenci Görevi:** Bu taslağı uygulamanızın sayfalarına ve özelliklerine göre doldurun. Ayrıntılı yönerge için [`docs/tasks/week-3/07-hedefler-agac-yapisi.task.md`](tasks/week-3/07-hedefler-agac-yapisi.task.md) dosyasını inceleyin.

---

## 1. Sayfa ve Özellik Ağacı (Site & Feature Map)

```
[Projenizin Adı]
├── / (Ana Sayfa)
│   ├── [Arama ve filtreleme özellikleri]
│   └── [Listelenecek öğeler]
│
├── /[detay-sayfasi]/[id] (Öğe Detayı)
│   ├── [Detay bilgileri]
│   └── [Seçenek ve işlem butonları]
│
├── /[islem-sayfasi] (İşlem / Sepet / Kayıt)
│   └── [Özet ve Rust backend komutu tetikleme]
│
├── /[sonuc-sayfasi] (Sonuçlar / Kodlarım)
│   └── [Üretilen benzersiz kodlar ve geçmiş]
│
├── /profil (Kullanıcı & Tema)
│   └── [Kullanıcı bilgisi ve tema geçişi]
│
└── Bilgi ve Yasal Sayfalar
    ├── /hakkinda (MDX)
    ├── /iletisim (Reaktif Form)
    ├── /kosullar (MDX)
    └── /gizlilik (MDX)
```

---

## 2. Hedef Platform Matrisi

| Platform Grubu | Hedef Sistemler | Paket Formatı |
|---|---|---|
| **Masaüstü** | macOS (Apple Silicon / Intel) | `.dmg`, `.app` |
| **Masaüstü** | Windows (10 / 11) | `.msi`, `.exe` |
| **Masaüstü** | Linux (Ubuntu / Debian) | `.deb`, `.AppImage` |
| **Mobil** | iOS (iPhone & iPad) | `.ipa` (Xcode) |
| **Mobil** | Android (Telefon & Tablet) | `.apk`, `.aab` |

---

## 3. Ekran Boyutları (Responsive Breakpoints)

- **Telefon (375px - 430px):** Tek sütun, alt menü (`alt-menu`) sabit.
- **Tablet (768px - 1024px):** 2 sütunlu ızgara düzeni.
- **Masaüstü (1200px+):** 3 sütunlu ızgara, `max-width` ortalanmış görünüm.
