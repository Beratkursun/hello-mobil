# Görev 04 — Yapay Zeka Ajan Kural Dosyaları (AGENTS.md, CLAUDE.md, GEMINI.md)

Bu görevde projenizi geliştiren yapay zeka ajanlarının (Antigravity, Cursor, Claude Code vb.) hata yapmasını engelleyen, standartlara uymasını sağlayan ve debug döngülerini azaltan **Ajan Kural Dosyaları** altyapısını kuracaksınız.

---

## 1. AGENTS.md, CLAUDE.md ve GEMINI.md Nedir?

- Yapay zeka ajanları deponuzu açtığında ilk olarak kök dizindeki kural dosyalarını okurlar.
- Bu dosyalar ajana:
  - Hangi teknolojilerin kullanıldığını,
  - Asla yapmaması gereken şeyleri (kırmızı çizgiler),
  - Test ve derleme komutlarını,
  - Kod yazma ve dal (branch) disiplinini öğretir.

---

## 2. Tek Doğru Kaynak (Single Source of Truth) ve Doküman Linkleme Kuralı

Kuralları hem `AGENTS.md`, hem `CLAUDE.md`, hem de `GEMINI.md` içine kopyalayıp yapıştırmak **kesinlikle yasaktır**; çünkü bir kural değiştiğinde diğer yerlerde unutulur ve tutarsızlık çıkar.

Aynı şekilde **Klasör Mimarisi**, **Marka Kuralları** veya **Sayfa Ağaçları** da `README.md` ya da `AGENTS.md` içerisine kopyala-yapıştır ile yazılmaz.

> 🚨 **ALTIN KURAL: Dokümanlar Tekrarlanmaz, Link Edilir!**
> - Her bilgi veya kural `docs/` altında **tek bir yerde** yaşar (Örn: `docs/klasor-mimarisi.md`, `docs/branding.md`, `docs/mimari-agac.md`).
> - `README.md`, `AGENTS.md` ve ajan komutları bu belgelere **markdown linki** verir.
> - Bir kural değiştiğinde sadece ilgili `docs/*.md` dosyası güncellenir.
> - `CLAUDE.md` ve `GEMINI.md` ise yalnızca `AGENTS.md`'ye link verir.

---

## 3. Oluşturulacak Dosyalar ve Şablonlar

### 📄 Dosya 1: `CLAUDE.md` (Kök Dizinde)
```markdown
See [AGENTS.md](AGENTS.md). All agent instructions and rules for this repository live there.
```

### 📄 Dosya 2: `GEMINI.md` (Kök Dizinde)
```markdown
See [AGENTS.md](AGENTS.md). All agent instructions and rules for this repository live there.
```

### 📄 Dosya 3: `AGENTS.md` (Kök Dizinde)
Aşağıdaki şablonu kopyalayıp kök dizindeki `AGENTS.md` dosyanıza yazın:

```markdown
# AGENTS.md — [PROJE ADINIZ]

Bu belge, bu depoda çalışan tüm yapay zeka ajanları (Antigravity, Claude, Cursor, Gemini) için bağlayıcı geliştirme kurallarını içerir.

## 1. Dokümantasyon ve Tek Kaynak Kuralı (DRY Docs)

- **Dokümanlar Tekrarlanmaz, Link Edilir:** Ajan hiçbir zaman dizin ağaçlarını, kuralları veya renk tablolarını dosyalar arasında kopyalamaz. İlgili konularda daima `docs/` altındaki tek doğru kaynağa link verir.
- Aşağıdaki belgeler bağlayıcı standartlardır:

| Doküman | Kapsam | Bağlayıcı Kural |
|---|---|---|
| [`docs/klasor-mimarisi.md`](docs/klasor-mimarisi.md) | Dizin & Dosya Yapısı | Klasör mimarisi yalnızca bu belgede tanımlanır. Yeni dosya eklerken bu hiyerarşiye uy. |
| [`docs/branding.md`](docs/branding.md) | Marka Kimliği ve Renkler | UI geliştirirken ad-hoc renk uydurma, `branding.md` ve CSS değişkenlerini kullan. |
| [`docs/mimari-agac.md`](docs/mimari-agac.md) | Sayfa & Özellik Haritası | Yeni sayfa veya yönlendirme eklerken mimari ağaca sadık kal. |
| [`docs/proje-fikri.md`](docs/proje-fikri.md) | Proje Konsepti | İş mantığı ve veri modelleri projenin amacına uygun olmalı. |

## 2. Teknoloji Yığını ve Çalıştırma

- **Çekirdek:** Tauri v2 (Rust) + Astro (Statik)
- **Arayüz:** Svelte 5 (Runes: `$state`, `$derived`, `$props`), React bileşenleri, MDX dokümantasyonu
- **Paket Yöneticisi:** Bun
- **Geliştirme Sunucusu:** `bun run dev` (127.0.0.1:1420)
- **Tauri Uygulaması:** `bun run tauri dev`
- **Derleme / Doğrulama:** `bun run build`

## 3. Git ve Geliştirme Disiplini (Zorunlu)

1. **Doğrudan `master`/`main`'e commit atılmaz!**
   - Her yeni özellik veya düzeltme için `feature/<ozellik-adi>` veya `fix/<hata-adi>` dalı açılmalıdır.
   - Değişiklikler test edildikten sonra Pull Request (PR) mantığıyla incelenip ana dala birleştirilir.
2. **Kanıtsız Teslim Yapılmaz:**
   - Her değişiklikten sonra `bun run build` çalıştırılmalı ve derlemenin 0 hata ile tamamlandığı doğrulanmalıdır.
3. **Kapsam Koruma (Scope Guard):**
   - Yalnızca görevin gerektirdiği dosyalar düzenlenmelidir. İstenmeyen dosyalarda "temizlik" veya izinsiz büyük refactoring yapılmaz.

## 4. Kod Yazım Kuralları

- Svelte kodlarında Svelte 5 Runes (`$state`, `$derived`, `$props`) kullanılır. Eski Svelte 4 sözdizimi (`export let`, `$:`) kullanılmaz.
- Sayfa bileşenlerinde SSR güvenliği gözetilmeli; doğrudan `window` veya `localStorage` erişimleri client ortamında veya korumalı (`typeof window !== 'undefined'`) yapılmalıdır.
```

---

## ✅ Kontrol Listesi

- [ ] Kök dizinde `AGENTS.md` dosyası oluşturuldu ve kurallar yazıldı.
- [ ] Kök dizinde `CLAUDE.md` oluşturuldu ve `AGENTS.md`'ye link verildi.
- [ ] Kök dizinde `GEMINI.md` oluşturuldu ve `AGENTS.md`'ye link verildi.
- [ ] "Dokümanları tekrarlamama, tek kaynaktan link verme" kuralı benimsendi.
- [ ] Feature branch ve PR kuralı `AGENTS.md`'ye eklendi.

## 🎯 Puan Rubriği (toplam 10 puan)

| Kriter | Puan | Tam puan koşulu |
|---|---|---|
| AGENTS.md içeriği | 3 | Teknoloji, komutlar, git kuralları, kod kuralları yazılı |
| CLAUDE.md ve GEMINI.md | 2 | İkisi de yalnızca `AGENTS.md`'ye link verir (tekrar yok) |
| Doküman linkleri doğru | 3 | AGENTS.md'deki her link var olan bir dosyaya gider |
| PR kuralı | 2 | Branch + PR zorunluluğu AGENTS.md'de açıkça yazılı |

## 📚 İlgili Kaynaklar

- **Kaynak repo:** [github.com/keyvanarasteh/hello-mobil](https://github.com/keyvanarasteh/hello-mobil)
