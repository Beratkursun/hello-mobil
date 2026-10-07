# Görev 08 — İleri Seviye AGENTS.md Yapılandırması ve Belge İndeksleme

Bu görevde projenizin kök dizinindeki `AGENTS.md` dosyasını, `docs/` klasöründe ürettiğiniz tüm mimari, marka ve hedef dokümanlarıyla entegre ederek profesyonel seviyeye yükselteceksiniz.

---

## 1. Neden İleri Düzey AGENTS.md?

Yapay zeka asistanları uzun görevler sırasında başlangıçtaki hedefleri unutabilir veya ad-hoc stiller ekleyerek tasarım bütünlüğünü bozabilir.
İleri düzey `AGENTS.md` sayesinde ajana:
> *"Herhangi bir renk değiştireceğin zaman önce `docs/branding.md`'ye bak, yeni bir sayfa açacağın zaman `docs/mimari-agac.md` dışına çıkma!"*
talimatını vermiş olursunuz.

---

## 2. Güncellenmiş AGENTS.md Şablonu

Kök dizindeki `AGENTS.md` dosyanızı aşağıdaki gelişmiş yapı ile güncelleyin:

```markdown
# AGENTS.md — [PROJE ADINIZ]

Bu belge, bu depoda çalışan tüm yapay zeka ajanları (Antigravity, Cursor, Claude Code, Gemini) için bağlayıcı sistem talimatlarını içerir.

## 1. Temel Proje Haritası ve Belgeler

Ajan, görev yaparken aşağıdaki belgelere kesin olarak bağlı kalmalıdır:

| Belge | Kapsam | Bağlayıcı Kural |
|---|---|---|
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

- [ ] `AGENTS.md` güncellendi ve tüm `docs/` bağlantıları doğrulandı.
- [ ] `CLAUDE.md` ve `GEMINI.md` dosyalarının `AGENTS.md`'ye referans verdiği teyit edildi.
- [ ] Marka ve mimari kuralları ajanın bağlayıcı kuralları arasına alındı.
