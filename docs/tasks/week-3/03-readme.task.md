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

## 2. Görev: Ana README.md'yi Patch Edin

Şablon verilmez. Eğitmen deposundaki [`README.md`](https://github.com/keyvanarasteh/hello-mobil/blob/master/README.md) dosyasını fork'unuzda inceleyin ve kendi projenize uyarlayarak bir **patch / PR** ile düzeltin:

1. Başlık ve tek cümlelik açıklamayı kendi projenize göre değiştirin.
2. **Öğrenci** satırına adınızı ve öğrenci numaranızı yazın.
3. Teknoloji ve özellik bölümlerini kendi uygulamanıza göre güncelleyin.
4. Kurulum komutlarını kendi repo adresinizle ve gerçekten çalışır halde yazın.
5. Bağlantıların hepsinin çalıştığını kontrol edin.

Yaptığınız değişikliği tek bir PR olarak açın (`docs/readme-patch` gibi bir dal) ve Blackboard'a PR linkini ekleyin.

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
