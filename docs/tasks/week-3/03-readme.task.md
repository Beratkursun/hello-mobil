# Görev 03 — Standart Proje README.md Dosyasını Hazırlama

Bu görevde projenizin ana `README.md` dosyasını İstinye Üniversitesi kurumsal standartlarına ve profesyonel açık kaynak proje şablonuna göre düzenleyeceksiniz.

---

## 1. Neden Kaliteli Bir README.md Zorunludur?

Bir yazılım deposunun vitrini `README.md` dosyasıdır. Projeyi inceleyen eğitmen veya gelecekteki işvereniniz koddan önce bu dokümana bakar:
- Projenin kime ait olduğunu,
- Ne işe yaradığını,
- Nasıl kurulup çalıştırılacağını,
- Hangi teknolojilerin kullanıldığını buradan anlar.

---

## 2. Kopyalanabilir README.md Şablonu

Aşağıdaki şablonu kopyalayarak kendi deponuzun ana dizinindeki `README.md` dosyasına yapıştırın ve köşeli parantez `[...]` içindeki yerleri kendi proje bilgilerinize göre doldurun.

```markdown
<div align="center">

<a href="https://www.istinye.edu.tr" target="_blank">
  <img src="https://raw.githubusercontent.com/keyvanarasteh/hello-mobil/master/public/tauri.svg" alt="İstinye Üniversitesi" width="120" height="120" />
</a>

# [PROJE ADINIZ BURAYA]
### [Projenizin Tek Cümlelik Sloganı]

[![İstinye Üniversitesi](https://img.shields.io/badge/%C4%B0stinye%20%C3%9Cniversitesi-MYO-002855.svg)](https://www.istinye.edu.tr)
[![Ders](https://img.shields.io/badge/Ders-MYO063%20Mobil%20Programlama-e4002b.svg)](#)
[![Tauri v2](https://img.shields.io/badge/Tauri-v2-FFC131?logo=tauri&logoColor=white)](https://v2.tauri.app/)
[![Astro](https://img.shields.io/badge/Astro-v5-BC52EE?logo=astro&logoColor=white)](https://astro.build/)
[![Svelte 5](https://img.shields.io/badge/Svelte-5%20Runes-FF3E00?logo=svelte&logoColor=white)](https://svelte.dev/)
[![Bun](https://img.shields.io/badge/Bun-1.3-black?logo=bun&logoColor=white)](https://bun.sh/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

<p align="center">
  <b>İstinye Üniversitesi Meslek Yüksekokulu — Bilişim Güvenliği Teknolojisi</b><br>
  2026-2027 Güz Dönemi Dönem Projesi
</p>

</div>

---

## 📋 İçindekiler
- [Proje Hakkında](#-proje-hakkında)
- [Akademik Bilgiler](#-akademik-bilgiler)
- [Özellikler](#-özellikler)
- [Teknoloji Yığını](#-teknoloji-yığını)
- [Kurulum ve Çalıştırma](#-kurulum-ve-çalıştırma)
- [Klasör Mimarisi](docs/klasor-mimarisi.md)
- [Lisans](#-lisans)

---

## 🚀 Proje Hakkında

[Projenizin amacını, hangi problemi çözdüğünü ve kullanıcıya sunduğu deneyimi burada detaylıca anlatın. 1-2 paragraf.]

### 🎯 Temel Yetenekler
- **[Özellik 1]:** [Kısa açıklama]
- **[Özellik 2]:** [Kısa açıklama]
- **[Özellik 3]:** [Rust backend entegrasyonu ile üretilen kod mekanizması]
- **Gece / Gündüz Modu:** Kullanıcı tercihine göre saklanan sistem teması.

---

## 🎓 Akademik Bilgiler

| Bilgi | Detay |
|---|---|
| **Üniversite** | [İstinye Üniversitesi](https://www.istinye.edu.tr) |
| **Bölüm / Program** | Meslek Yüksekokulu — Bilişim Güvenliği Teknolojisi |
| **Ders** | MYO063 — Mobil Programlama (App Development) |
| **Öğretim Görevlisi** | Öğr. Gör. Keyvan Arasteh Abbasabad ([Web](https://www.istinye.edu.tr) · [GitHub](https://github.com/keyvanarasteh) · [LinkedIn](https://www.linkedin.com/in/keyvanarasteh/)) |
| **Geliştirici (Öğrenci)** | [Adınız Soyadınız] — No: [Öğrenci Numaranız] |
| **E-posta / İletişim** | [öğrenci-no]@ogrenci.istinye.edu.tr · [GitHub Profiliniz](https://github.com/) |

---

## 🛠️ Teknoloji Yığını

- **Masaüstü & Mobil Çekirdek:** [Tauri v2](https://v2.tauri.app/) (Rust + Native Webview)
- **Web Altyapısı:** [Astro](https://astro.build/) (Statik Derleme & Hibrit Çatı Desteği)
- **Kullanıcı Arayüzü (UI):**
  - **Svelte 5:** Reaktif vitrin ve durum yönetimi (`$state`, `$derived`, `$props`)
  - **React:** Zengin ekosistem bileşenleri
  - **MDX:** Dokümantasyon ve zengin metin sayfaları
- **Paket Yöneticisi:** [Bun](https://bun.sh/)
- **Versiyon Kontrol:** Git & GitHub

---

## 💻 Kurulum ve Çalıştırma

### Gereksinimler
- [Bun](https://bun.sh/) kurulu olmalıdır.
- Rust toolchain (`cargo`, `rustc`) kurulu olmalıdır ([rustup.rs](https://rustup.rs)).

### Adımlar

1. **Repoyu klonlayın:**
```bash
git clone https://github.com/[kullanici-adiniz]/[repo-adiniz].git
cd [repo-adiniz]
```

2. **Bağımlılıkları yükleyin:**
```bash
bun install
```

3. **Web arayüzünü geliştirme modunda çalıştırın:**
```bash
bun run dev
```

4. **Tauri masaüstü uygulamasını başlatın:**
```bash
bun run tauri dev
```

5. **Üretim sürümünü derleyin (dist/):**
```bash
bun run build
```

---

## 📂 Klasör Mimarisi

Projenin modül dağılımı ve dizin sorumlulukları için [`docs/klasor-mimarisi.md`](docs/klasor-mimarisi.md) dokümanını inceleyin.

> ⚠️ **Dokümantasyon Kuralı:** Klasör ağacı README içine kopyalanmaz; `docs/klasor-mimarisi.md` dokümanına link verilir. Tekrardan kaçınılmalı, tek doğru kaynak (Single Source of Truth) korunmalıdır.

---

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) kapsamında geliştirilmiştir.
```

---

## ✅ Kontrol Listesi

- [ ] `README.md` dosyası yukarıdaki şablona göre güncellendi.
- [ ] İstinye Üniversitesi ve eğitmen bağlantıları eksiksiz bırakıldı.
- [ ] Öğrenci adı, numarası ve iletişim bilgileri dolduruldu.
- [ ] Rozetler (Badges) ve kurulum komutları kontrol edildi.
