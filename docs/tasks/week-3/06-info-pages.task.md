# Görev 06 — Bilgi ve Statik Sayfaları Oluşturma (Astro + MDX + React + Svelte)

Bu görevde projenize kurumsal ciddiyet ve zengin içerik kazandıracak statik bilgi sayfalarını (**Hakkında**, **İletişim**, **Kullanım Koşulları**, **Gizlilik Politikası**) oluşturacaksınız.

---

## 1. Neden Astro Çoklu Çatı (Multi-Framework) Kullanıyoruz?

Astro'nun sağladığı en büyük avantaj:
- Düz yazı ve kurallar içeren sayfaları kolayca **MDX (`.mdx`)** ile yazabilmek,
- Form gibi etkileşimli alanlarda ise **Svelte 5** veya **React** bileşenlerini aynı sayfaya gömebilmektir.

---

## 2. Oluşturulacak Sayfalar

### 📄 1. Hakkında Sayfası (`src/pages/hakkinda.mdx`)
- **Format:** MDX
- **İçerik:**
  - Projenin amacı ve hikayesi,
  - Geliştirici bilgisi (öğrencinin adı, bölümü, üniversitesi),
  - Kullanılan teknolojiler listesi (Tauri v2, Astro, Svelte, Rust),
  - Sayfa içine en az bir etkileşimli bileşen eklenmelidir (örn. `CanliRozet.tsx`).

### 📄 2. İletişim Sayfası (`src/pages/iletisim.astro`)
- **Format:** Astro + Svelte/React Form Bileşeni
- **İçerik:**
  - İsim, E-posta, Konu ve Mesaj alanları olan bir iletişim formu (`IletisimFormu.svelte` veya React karşılığı).
  - Form gönderildiğinde sahte bir "Mesajınız iletildi" bildirimi ve form temizleme.

### 📄 3. Kullanım Koşulları (`src/pages/kosullar.mdx`)
- **Format:** MDX
- **İçerik:**
  - Hizmet şartları, fikri mülkiyet, kullanıcı sorumlulukları ve üniversite eğitim projesi olduğuna dair ibare.

### 📄 4. Gizlilik Politikası (`src/pages/gizlilik.mdx`)
- **Format:** MDX
- **İçerik:**
  - Veri güvenliği, yerel depolama (localStorage) kullanımı ve KVKK / veri koruma bildirimi.

---

## 3. Örnek MDX Sayfa Şablonu

```mdx
---
layout: ../layouts/Layout.astro
title: Gizlilik Politikası
---

import CanliRozet from '../components/react/CanliRozet';

<div class="sayfa">
  <div class="kart" style="padding: 24px;">
    # 🔒 Gizlilik Politikası

    Son güncelleme: 07 Ekim 2026

    Bu uygulama, İstinye Üniversitesi MYO063 Mobil Programlama dersi kapsamında geliştirilmiştir.

    ## 1. Toplanan Veriler
    Uygulamamız kullanıcıların kişisel verilerini harici sunucularda saklamaz. Tüm tercihleriniz (tema seçimi, biletler vb.) yalnızca cihazınızın yerel hafızasında (`localStorage`) tutulur.

    ## 2. Çerezler ve İzinler
    Tauri WebView ortamında çalışan uygulamamız harici izleme çerezleri kullanmaz.

    <div style="margin-top: 16px;">
      <CanliRozet client:load etiket="Yerel Depolama Korumalı" />
    </div>
  </div>
</div>
```

---

## 4. Navigasyona Bağlama

Oluşturduğunuz sayfalara kullanıcıların ulaşabilmesi için:
- Profil sayfasına (`/profil`) veya alt menüye (`AppNav.svelte`) bu sayfaların bağlantı linklerini ekleyin.

---

## ✅ Kontrol Listesi

- [ ] `src/pages/hakkinda.mdx` sayfası oluşturuldu ve içerik yazıldı.
- [ ] `src/pages/iletisim.astro` içinde çalışan reaktif bir form hazırlandı.
- [ ] `src/pages/kosullar.mdx` ve `src/pages/gizlilik.mdx` sayfaları eklendi.
- [ ] Sayfalar menüden veya profilden erişilebilir hale getirildi.
- [ ] `bun run build` komutu ile tüm sayfaların başarıyla derlendiği doğrulandı.

## 🎯 Puan Rubriği (toplam 15 puan)

| Kriter | Puan | Tam puan koşulu |
|---|---|---|
| Hakkında (MDX) | 3 | Proje amacı, geliştirici bilgisi, en az 1 etkileşimli bileşen |
| İletişim formu | 3 | Svelte/React formu çalışır; gönderim sonrası bildirim ve temizleme |
| Kullanım Koşulları ve Gizlilik | 3 | İki sayfa da MDX; localStorage ve KVKK bildirimi içerir |
| Çok dil (TR/EN/AR/FA) | 3 | Her sayfa 4 dilde; AR/FA sayfalarında `dir="rtl"`; sayfalar tüm dillerde derlenir |
| Navigasyon | 3 | Sayfalar profil veya AppNav üzerinden erişilebilir |

## Ortak Kurallar (tüm görevler)

- **Katılımcı davetı yok:** Eğitmen (`keyvanarasteh`) repoya contributor/collaborator olarak davet edilmez. Teslim yalnızca Blackboard üzerinden yapılır.
- **PR sayısı:** Her görev için en az 1 PR açılır (`feature/*` veya `fix/*` dalı). Görev 01.2'de tanımlanan akış zorunludur; doğrudan `master`'a commit yoktur.
- **Doğrulama kanıtı:** `bun run build` çıktısı (0 hata) ve `bun run tauri dev` ile uygulamanın açıldığının ekran görüntüsü teslime eklenir.
- **Dil desteği:** Uygulama metinleri TR, EN, AR, FA dillerinde bulunur (RTL: AR ve FA için `dir="rtl"`). Görev içeriği bu dillerden birinde değil ise ilgili görev için İngilizce karşılığı eklenir.
- **Dokümantasyon:** Her kural tek bir `docs/*.md` dosyasında yaşar; `README.md` ve `AGENTS.md` yalnızca link verir (bkz. Görev 04).

## 📚 Referanslar

Bu görevde aşağıdaki resmi kaynaklardan yararlanın:

- Apple tipografi: https://developer.apple.com/design/human-interface-guidelines/typography
- Material 3 tipografi: https://m3.material.io/styles/typography/overview
- Tasarım temelleri (Figma): https://www.figma.com/resource-library/design-basics/
