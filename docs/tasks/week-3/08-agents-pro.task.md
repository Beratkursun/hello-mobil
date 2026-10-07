# Görev 08 — İleri Seviye AGENTS.md Yapılandırması ve Belge İndeksleme

Bu görevde projenizin kök dizinindeki `AGENTS.md` dosyasını, `docs/` klasöründe ürettiğiniz tüm mimari, dizin yapısı, marka ve hedef dokümanlarıyla entegre ederek profesyonel seviyeye yükselteceksiniz.

---

## 1. Neden İleri Düzey AGENTS.md?

Yapay zeka asistanları uzun görevler sırasında başlangıçtaki hedefleri unutabilir, ad-hoc stiller ekleyerek tasarım bütünlüğünü bozabilir veya dizin yapısını yanlış yerlere kopyalayabilir.

İleri düzey `AGENTS.md` sayesinde ajana:
> *"Herhangi bir renk değiştireceğin zaman önce `docs/branding.md`'ye bak, yeni bir sayfa açacağın zaman `docs/mimari-agac.md` dışına çıkma, dosya düzenlerken `docs/klasor-mimarisi.md` hiyerarşisine uy ve ASLA dokümanları kopyalayarak çoğaltma, link ver!"*
talimatını vermiş olursunuz.

---

## 2. Güncellenmiş AGENTS.md Şablonu

Kök dizindeki `AGENTS.md` dosyanızı aşağıdaki gelişmiş yapı ile güncelleyin:

```markdown
# AGENTS.md — [PROJE ADINIZ]

Bu belge, bu depoda çalışan tüm yapay zeka ajanları (Antigravity, Cursor, Claude Code, Gemini) için bağlayıcı sistem talimatlarını içerir.

## 1. Temel Proje Haritası ve Tek Kaynak Kuralı (DRY Docs)

- **Dokümantasyon Tekrar Edilmez, Link Edilir:** Ajan hiçbir zaman dizin ağaçlarını, kuralları veya renk tablolarını kopyalayıp birden fazla dosyaya yapıştırmaz. Her zaman `docs/` altındaki tek kaynağa link verir.

| Belge | Kapsam | Bağlayıcı Kural |
|---|---|---|
| [`docs/klasor-mimarisi.md`](docs/klasor-mimarisi.md) | Dizin & Dosya Mimarisi | Klasör yapısı yalnızca bu belgede tanımlanır. Yeni dosya eklerken bu hiyerarşiye uy; dizin ağacını başka dosyalarda tekrar yazma. |
| [`docs/proje-fikri.md`](docs/proje-fikri.md) | Proje Konsepti | Veri modelleri, terimler ve sayfa içerikleri bu konsepte sadık kalmalıdır. |
| [`docs/branding.md`](docs/branding.md) | Marka & Renkler | Ad-hoc renk yazılmaz. Yalnızca `app.css` içindeki CSS değişkenleri kullanılır. |
| [`docs/mimari-agac.md`](docs/mimari-agac.md) | Sayfa & Özellik Haritası | Yeni rota veya sayfa eklerken bu ağaç yapısına uyulmalıdır. |
| [`docs/tasks/`](docs/tasks/) | Görev Dokümanları | Eğitmenin tanımladığı haftalık aşamalar ve görev adımları. |

## 2. Teknoloji Yığını ve Komutlar

- **Platform:** Tauri v2 (Rust çekirdek + WebView)
- **Web Çatısı:** Astro (Statik derleme, `output: 'static'`, port `1420`)
- **Arayüz:** Svelte 5 (Runes: `$state`, `$derived`, `$props`), React bileşenleri, MDX
- **Paket Yöneticisi:** Bun

### Komutlar:
- Web Dev: `bun run dev`
- Tauri Dev: `bun run tauri dev`
- Derleme & Doğrulama: `bun run build`

## 3. Geliştirme ve Git Kuralları

1. **Feature Branch Kuralı:** Asla doğrudan `master`/`main` dalında geliştirme yapma. Her yeni özellik için `feature/<ozellik>` branch'i açılmalıdır.
2. **Kapsam Koruma (Scope Guard):** Görev tanımında istenmeyen dosyalara dokunulmamalıdır.
3. **Derleme Garantisi (Proof):** Her geliştirme bittiğinde `bun run build` çalıştırılarak 0 hata alındığı doğrulanmalıdır.
4. **Svelte 5 Runes:** Yeni Svelte bileşenlerinde sadece Runes (`$state`, `$derived`, `$props`) kullanılmalıdır.
```

---

## ✅ Kontrol Listesi

- [ ] `AGENTS.md` güncellendi ve tüm `docs/` bağlantıları (özellikle `docs/klasor-mimarisi.md`) doğrulandı.
- [ ] `CLAUDE.md` ve `GEMINI.md` dosyalarının `AGENTS.md`'ye referans verdiği teyit edildi.
- [ ] Dokümanların ve kuralların yinelenmeden tek merkezden linklenmesi kuralı ajana benimsetildi.

## 🎯 Puan Rubriği (toplam 10 puan)

| Kriter | Puan | Tam puan koşulu |
|---|---|---|
| Doküman indeksi | 3 | Tüm `docs/*.md` dosyaları AGENTS.md tablosunda listelenir ve linkler çalışır |
| Doğruluk kontrolü | 3 | Her komut gerçekten çalışır (`bun run build` 0 hata); eski/kopya bilgi yok |
| Tek kaynak kuralı | 2 | Renk, klasör ve sayfa ağacı yalnızca kendi dokümanında; AGENTS.md link verir |
| Ajan uyumu testi | 2 | Ajana bir renk ve bir sayfa görevi verilip AGENTS.md'ye uyduğu doğrulandı |

## 📚 İlgili Kaynaklar

- **Kaynak repo:** [github.com/keyvanarasteh/hello-mobil](https://github.com/keyvanarasteh/hello-mobil)
