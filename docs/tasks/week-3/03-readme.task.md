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

Yaptığınız değişikliği tek bir PR olarak açın (`docs/readme-patch` gibi bir dal) ve ana dala merge edin. (PR linkini Blackboard'a eklemenize gerek yoktur; eğitmen repoda collaborator olduğu için PR'ları doğrudan GitHub üzerinden inceleyecektir. Blackboard'a yalnızca tüm görevler tamamlandığında final `.zip` yüklenecektir.)

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

## 📚 İlgili Kaynaklar

- **Kaynak repo:** [github.com/keyvanarasteh/hello-mobil](https://github.com/keyvanarasteh/hello-mobil)
