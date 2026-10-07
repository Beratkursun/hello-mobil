# PassoKlon

> Tauri v2 ve Astro üzerinde geliştirilmiş, bilet ve etkinlik akışını gösteren hibrit mobil/masaüstü uygulama.

![Tauri v2](https://img.shields.io/badge/Tauri-v2-FFC131?logo=tauri&logoColor=white) ![Astro](https://img.shields.io/badge/Astro-v5-BC52EE?logo=astro&logoColor=white) ![Svelte 5](https://img.shields.io/badge/Svelte-5-FF3E00?logo=svelte&logoColor=white) ![Bun](https://img.shields.io/badge/Bun-1.3-000000?logo=bun&logoColor=white)

**İstinye Üniversitesi · MYO063 Mobil Programlama · 2026-2027 Güz**
Eğitmen: [Keyvan Arasteh Abbasabad](https://github.com/keyvanarasteh)

## İçindekiler
- [Özellikler](#özellikler)
- [Teknoloji](#teknoloji)
- [Kurulum](#kurulum)
- [Klasör yapısı](docs/klasor-mimarisi.md)
- [Haftalık görevler](docs/tasks/)

## Özellikler
- **Keşfet:** Arama ve kategori filtresi ile etkinlik listesi.
- **Sepet:** Dinamik tutar, kalem silme ve ödeme akışı.
- **Biletlerim:** Rust tarafında üretilen bilet kodları (`PSK-XXX-XXXXXXX`).
- **Tema:** Gece / gündüz modu, sayfa açılışında titreme olmadan.

## Teknoloji
| Katman | Teknoloji |
|---|---|
| Çekirdek | Tauri v2 (Rust) |
| Web çatısı | Astro (`output: 'static'`) |
| Arayüz | Svelte 5 (Runes) · React 19 · MDX |
| Paket yöneticisi | Bun |

## Kurulum
Gereksinimler: [Bun](https://bun.sh/), [Rust](https://rustup.rs/) ve [Tauri önkoşulları](https://v2.tauri.app/start/prerequisites/).

```bash
git clone https://github.com/keyvanarasteh/hello-mobil.git
cd hello-mobil
bun install
bun run dev         # web: http://127.0.0.1:1420
bun run tauri dev   # masaüstü / mobil pencere
bun run build       # üretim derlemesi (dist/)
```

## Lisans
Bu proje eğitim amaçlı geliştirilmiştir. Lisans dosyası eklendiğinde bu bölüm güncellenir.
