# Görev 09 — 1. Aşama İlerleme ve Teslim Denetimi (Progress Batch 01)

Bu görev, Hafta 3 uzaktan çalışma sürecinde (24 saatlik süre içinde) tamamlanan tüm adımların topluca denetlendiği ve projenin ilk resmi kilometre taşına (`milestone`) ulaştırıldığı kontrol aşamasıdır.

---

## 1. Batch 01 Tamamlama Kontrol Matrisi

Aşağıdaki maddelerin her birini deponuzda tek tek kontrol edin:

| No | Alan | İstenen Çıktı | Kontrol |
|:---:|---|---|:---:|
| 1 | **Fork & İşbirliği** | Kendi GitHub hesabınızda fork + `keyvanarasteh` collaborator daveti | [ ] |
| 2 | **Blackboard Teslimi** | GitHub kullanıcı adı ve fork linki Blackboard'a gönderildi mi? | [ ] |
| 3 | **Proje Fikri** | `docs/proje-fikri.md` dosyası oluşturuldu ve 3 ekran tanımlandı mı? | [ ] |
| 4 | **Kurumsal README** | Ana `README.md` üniversite logosu, rozetler ve bilgilerle dolduruldu mu? | [ ] |
| 5 | **Ajan Kural Dosyaları** | Kök dizinde `AGENTS.md`, `CLAUDE.md` ve `GEMINI.md` mevcut mu? | [ ] |
| 6 | **Markalama (Branding)** | `docs/branding.md` yazıldı, `app.css` renk değişkenleri güncellendi mi? | [ ] |
| 7 | **Bilgi Sayfaları** | `hakkinda.mdx`, `iletisim`, `kosullar.mdx`, `gizlilik.mdx` sayfaları hazır mı? | [ ] |
| 8 | **Mimari Ağaç** | `docs/mimari-agac.md` sayfa haritası ve platform matrisi çıkarıldı mı? | [ ] |
| 9 | **Derleme Doğrulaması** | `bun run build` komutu 0 hata ile statik sayfaları üretiyor mu? | [ ] |

---

## 2. Derleme Kanıtı Alma (Build Proof)

Terminalinizde aşağıdaki komutu çalıştırın:
```bash
bun run build
```
Çıktıda tüm sayfaların yeşil renkte listelendiğini ve `Complete!` mesajının çıktığını görün. Bu, projenizin sonraki aşamalara hazır olduğunu kanıtlar.

---

## 3. İlk Kilometre Taşını Etiketleme (Git Tag)

Tüm geliştirmelerinizi `master` dalına merge ettikten sonra ilk sürüm etiketinizi oluşturun:

```bash
git checkout master
git pull origin master
git tag -a v0.1.0-batch-01 -m "Hafta 3: Batch 01 - Proje altyapısı, markalama ve sayfalar tamamlandı"
git push origin v0.1.0-batch-01
```

Tebrikler! 1. Aşama geliştirmeleriniz eksiksiz şekilde tamamlanmıştır. Eğitmenin bildireceği 2. Aşama (derinlemesine AI geliştirme görevleri) için hazırsınız.

## 🎯 Puan Rubriği (toplam 10 puan)

| Kriter | Puan | Tam puan koşulu |
|---|---|---|
| Kontrol matrisi 9/9 | 4 | 9 maddenin 9'u işaretli ve kanıtlı |
| Build kanıtı | 2 | `bun run build` çıktısı ekran görüntüsü |
| Git tag | 2 | `v0.1.0-batch-01` tag'i master üzerinde |
| Blackboard teslimi | 2 | Batch 01 linki ve PR listesi teslim edildi |

## Ortak Kurallar (tüm görevler)

- **Katılımcı davetı yok:** Eğitmen (`keyvanarasteh`) repoya contributor/collaborator olarak davet edilmez. Teslim yalnızca Blackboard üzerinden yapılır.
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
