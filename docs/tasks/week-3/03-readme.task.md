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

````markdown
# [Proje Adı]

> [Tek cümlelik açıklama]

![Tauri v2](https://img.shields.io/badge/Tauri-v2-FFC131?logo=tauri&logoColor=white) ![Astro](https://img.shields.io/badge/Astro-v5-BC52EE?logo=astro&logoColor=white) ![Svelte 5](https://img.shields.io/badge/Svelte-5-FF3E00?logo=svelte&logoColor=white)

**İstinye Üniversitesi · MYO063 Mobil Programlama · 2026-2027 Güz**
**Öğrenci:** [Ad Soyad] · [Öğrenci No]

## İçindekiler
- [Hakkında](#hakkında)
- [Özellikler](#özellikler)
- [Kurulum](#kurulum)
- [Klasör yapısı](docs/klasor-mimarisi.md)
- [Lisans](#lisans)

## Hakkında
[Problem, kullanıcı ve çözüm: 2–3 cümle.]

## Özellikler
- **[Özellik]** — [kısa açıklama]

## Kurulum
```bash
git clone https://github.com/[kullanici]/[repo].git && cd [repo]
bun install
bun run dev         # web
bun run tauri dev   # masaüstü
bun run build       # derleme (0 hata)
```

## Lisans
[MIT](LICENSE)
````

---

## ✅ Kontrol Listesi

- [ ] `README.md` dosyası yukarıdaki (minimal) şablona göre güncellendi.
- [ ] İstinye Üniversitesi ve eğitmen bağlantıları eksiksiz bırakıldı.
- [ ] Öğrenci adı, numarası ve iletişim bilgileri dolduruldu.
- [ ] Rozetler (Badges) ve kurulum komutları kontrol edildi.

## 🎯 Puan Rubriği (toplam 10 puan)

| Kriter | Puan | Tam puan koşulu |
|---|---|---|
| Başlık ve kurum bilgisi | 2 | Proje adı, tek cümle açıklama, İstinye/MYO063 bilgisi |
| Badge'ler | 2 | En az 3 badge, hepsi çalışan link (Tauri, Astro, Svelte) |
| İçindekiler (TOC) | 1 | Tüm başlıklar için çalışan anchor linki |
| Kurulum adımları | 2 | klon → `bun install` → `bun run dev` / `bun run tauri dev` / `bun run build`; komutlar gerçekten çalışır |
| Lisans ve akademik bilgiler | 2 | Lisans bağlantısı, öğrenci adı-numarası, eğitmen bilgisi |
| Format kuralları | 1 | Başlık seviyeleri tutarlı; klasör ağacı README'ye kopyalanmaz, `docs/klasor-mimarisi.md`'ye link verilir |

## Ortak Kurallar (tüm görevler)

- **Eğitmen davetı (zorunlu):** Öğrenci, repoya eğitmeni (`keyvanarasteh`) **collaborator** olarak davet eder (Settings > Collaborators > Add people). Teslim Blackboard üzerinden yapılır.
- **PR sayısı:** Her görev için en az 1 PR açılır (`feature/*` veya `fix/*` dalı). Görev 01.2'de tanımlanan akış zorunludur; doğrudan `master`'a commit yoktur.
- **Doğrulama kanıtı:** `bun run build` çıktısı (0 hata) ve `bun run tauri dev` ile uygulamanın açıldığının ekran görüntüsü teslime eklenir.
- **Dil desteği:** Uygulama metinleri TR, EN, AR, FA dillerinde bulunur (RTL: AR ve FA için `dir="rtl"`). Görev içeriği bu dillerden birinde değil ise ilgili görev için İngilizce karşılığı eklenir.
- **Dokümantasyon:** Her kural tek bir `docs/*.md` dosyasında yaşar; `README.md` ve `AGENTS.md` yalnızca link verir (bkz. Görev 04).

## 📚 Kaynaklar

- **Kaynak repo:** [github.com/keyvanarasteh/hello-mobil](https://github.com/keyvanarasteh/hello-mobil)
- **Tasarım temelleri (Figma):** [figma.com/resource-library/design-basics](https://www.figma.com/resource-library/design-basics/)
- **Apple HIG:** [developer.apple.com/design/human-interface-guidelines](https://developer.apple.com/design/human-interface-guidelines)
- **Apple uygulama ikonları:** [app-icons](https://developer.apple.com/design/human-interface-guidelines/app-icons) · **Düzen:** [layout](https://developer.apple.com/design/human-interface-guidelines/layout)
- **Responsive (web):** [MDN responsive design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- **Tipografi:** [Apple typography](https://developer.apple.com/design/human-interface-guidelines/typography) · [Material 3 typography](https://m3.material.io/styles/typography/overview)
