# Görev 09 — 1. Aşama İlerleme ve Teslim Denetimi (Progress Batch 01)

Bu görev, Hafta 3 uzaktan çalışma sürecinde (09.10.2026 23:59 son teslimine kadar) tamamlanan tüm adımların topluca denetlendiği ve projenin ilk resmi kilometre taşına (`milestone`) ulaştırıldığı kontrol aşamasıdır.

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

---

## 4. Blackboard Teslim Formatı

- **PR Linki Gönderilmez:** Blackboard'a PR linki eklemenize gerek yoktur. Eğitmen (`keyvanarasteh`) deponuzda collaborator olduğu için tüm PR'ları, açıklamaları ve diff'leri doğrudan GitHub üzerinden görecektir.
- **Tek Final ZIP:** Tüm görevler tamamlandığında projenizin final halini GitHub üzerinden ZIP olarak indirin (`Code > Download ZIP`) ve Blackboard'a tek bir `.zip` dosyası olarak yükleyin.

## 🎯 Puan Rubriği (toplam 10 puan)

| Kriter | Puan | Tam puan koşulu |
|---|---|---|
| Kontrol matrisi 9/9 | 4 | 9 maddenin 9'u işaretli ve kanıtlı |
| Build kanıtı | 2 | `bun run build` çıktısı ekran görüntüsü |
| Git tag | 2 | `v0.1.0-batch-01` tag'i master üzerinde |
| Blackboard teslimi | 2 | Tüm görevler bitince final `.zip` Blackboard'a yüklendi |

## 📚 İlgili Kaynaklar

- **Kaynak repo:** [github.com/keyvanarasteh/hello-mobil](https://github.com/keyvanarasteh/hello-mobil)
