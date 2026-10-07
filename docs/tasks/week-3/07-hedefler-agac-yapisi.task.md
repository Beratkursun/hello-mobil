# Görev 07 — Hedef Mimari, Sayfa Ağaç Yapısı ve Platform Kapsamı

Bu görevde projenizin tüm sayfalarını, özelliklerini, hedeflediği platformları ve ekran boyutlarını içeren **Mimari Ağaç Yapısını** (`docs/mimari-agac.md`) oluşturacaksınız.

---

## 1. Neden Sayfa Ağaç Yapısı Gereklidir?

Yapay zeka ajanlarıyla çalışırken ajanın rastgele sayfalar uydurmasını engellemek için projenin sınırlarını çizmemiz gerekir. Bir haritanız olduğunda hem siz ne yapacağınızı bilirsiniz, hem de ajan bu ağacın dışına çıkmaz.

---

## 2. `docs/mimari-agac.md` Dosyasını Oluşturun

Aşağıdaki şablonu kullanarak `docs/mimari-agac.md` dosyasını kendi projenize göre doldurun:

```markdown
# [Proje Adı] — Mimari Ağaç Yapısı ve Kapsam

## 1. Sayfa ve Özellik Ağacı (Site & Feature Map)

```
[Projenizin Adı]
├── / (Ana Sayfa / Liste Ekranı)
│   ├── Arama ve Canlı Filtreleme
│   ├── Kategori Çipleri
│   └── Öğe Kartları (Görsel/Gradyan + Başlık + Fiyat/Bilgi)
│
├── /etkinlik/[id] (Öğe Detay Ekranı)
│   ├── Başlık ve Görsel Afiş
│   ├── Detaylı Açıklama, Tarih, Konum/Etiketler
│   ├── Seçenek / Kategori Radyo Butonları
│   ├── Adet / Sayı Artırma-Azaltma
│   └── Sepete / Listeye Ekle Butonu
│
├── /sepet (İşlem / Sepet Özeti)
│   ├── Seçilen Kalemlerin Listesi
│   ├── Kalem Silme ve Adet Kontrolü
│   ├── Toplam Tutar / Sayı Hesabı
│   └── "İşlemi Tamamla" Butonu ──> [Rust Backend Çağrısı]
│
├── /biletlerim (Kayıtlarım / Sonuçlar)
│   ├── Başarıyla Oluşturulan Kayıt Kartları
│   └── Rust Tarafından Üretilen Benzersiz Kod (Takip Kodu)
│
├── /profil (Kullanıcı Ekranı)
│   ├── Giriş / Kayıt Formu
│   ├── Kullanıcı Kartı ve Kayıt Sayısı
│   └── Gece / Gündüz Teması Değiştirici
│
└── Bilgi ve Yasal Sayfalar
    ├── /hakkinda (MDX — Proje ve Ekip)
    ├── /iletisim (Astro/Svelte — İletişim Formu)
    ├── /kosullar (MDX — Kullanım Koşulları)
    └── /gizlilik (MDX — Gizlilik Bildirimi)
```

---

## 2. Hedef Platform Matrisi

Tauri v2 mimarimiz sayesinde uygulamamız **tüm platformları** hedefler:

| Platform Grubu | İşletim Sistemleri | Hedef Çıktı |
|---|---|---|
| **Masaüstü** | macOS (Apple Silicon / Intel) | `.dmg`, `.app` |
| **Masaüstü** | Windows (10 / 11 x64) | `.msi`, `.exe` |
| **Masaüstü** | Linux (Ubuntu / Debian) | `.deb`, `.AppImage` |
| **Mobil** | iOS (iPhone & iPad) | `.ipa` (Xcode arşivi) |
| **Mobil** | Android (Telefon & Tablet) | `.apk`, `.aab` |

---

## 3. Ekran Boyutları ve Duyarlı Tasarım (Responsive Breakpoints)

Uygulama arayüzü farklı cihaz boyutlarına uyum sağlayacak şekilde tasarlanacaktır:

1. **Mobil (Telefonlar — 375px - 430px):**
   - Tek sütunlu liste görünümü.
   - Parmakla kolay erişim için ekranın altında sabit gezinme menüsü (`alt-menu`).
2. **Tabletler (768px - 1024px):**
   - 2 sütunlu kart ızgarası (`grid-template-columns: repeat(2, 1fr)`).
   - Genişletilmiş yatay form ve detay düzeni.
3. **Masaüstü & Geniş Ekranlar (1200px+):**
   - 3 sütunlu kart düzeni.
   - Sayfa içeriği ortalanır (`max-width: 1100px; margin: 0 auto;`).
```

---

## ✅ Kontrol Listesi

- [ ] `docs/mimari-agac.md` dosyası oluşturuldu.
- [ ] Sayfa ağacı (Sitemap) kendi projenize göre özelleştirildi.
- [ ] Hedef platformlar (iOS, Android, macOS, Windows, Linux) listelendi.
- [ ] Responsive tasarım hedefleri tanımlandı.
