# Görev 01 — Projeyi Fork'lama ve İşbirliği Ortamı Kurma

Bu görevde kaynak projeyi kendi GitHub hesabınıza kopyalayacak ve Blackboard üzerinden teslimi gerçekleştireceksiniz. Eğitmen repoya davet edilmez.

---

## 1. Fork Nedir ve Neden Yapılır?

- **Fork**, mevcut bir GitHub deposunun (repository) sizin kendi GitHub hesabınız altında tam ve bağımsız bir kopyasını oluşturma işlemidir.
- **Neden Yapıyoruz?**
  - Orijinal ana koda (`keyvanarasteh/hello-mobil`) doğrudan müdahale etmeden, projenin tüm altyapısını kendi hesabınızda özgürce geliştirebilirsiniz.
  - Açık kaynak dünyasında standart geliştirme yöntemi budur: Proje fork'lanır, geliştirmeler yapılır ve istendiğinde Pull Request (PR) ile birleştirilir.

---

## 2. Adım Adım Fork Yapma

1. Tarayıcınızda kaynak depoyu açın: [github.com/keyvanarasteh/hello-mobil](https://github.com/keyvanarasteh/hello-mobil)
2. Sayfanın sağ üst köşesindeki **Fork** butonuna tıklayın.
3. Açılan ekranda:
   - **Owner:** Kendi GitHub hesabınızı seçin.
   - **Repository name:** `hello-mobil` olarak bırakabilir veya belirleyeceğiniz proje adını verebilirsiniz.
   - **Copy the master branch only** seçeneğini işaretli tutun.
4. **Create fork** butonuna basarak işlemin tamamlanmasını bekleyin.

---

## 3. Blackboard Üzerinden Teslim

Fork ve fikir teslimi **bugünkü ders saatinden önce (15:30)** tamamlanmalıdır.

1. **İstinye Üniversitesi Blackboard** sistemine giriş yapın.
2. **MYO063 — Mobil Programlama** dersinizi açın.
3. İlgili haftalık görev/ödev gönderisine şu bilgileri yazarak gönderin:
   - **GitHub Kullanıcı Adınız:** (örn. `github.com/kullaniciadi`)
   - **Fork Edilen Repo Linkiniz:** (örn. `https://github.com/kullaniciadi/hello-mobil`)
   - **Kısa Proje Fikriniz:** (1-2 cümle)

---

## ✅ Kontrol Listesi

- [ ] `hello-mobil` deposu kendi GitHub hesabıma fork'landı.
- [ ] GitHub profil linki ve yeni repo linki Blackboard üzerinden iletildi.

## 🎯 Puan Rubriği (toplam 10 puan)

| Kriter | Puan | Tam puan koşulu |
|---|---|---|
| Fork ve doğru repo adı | 4 | Kendi hesabınızda `hello-mobil` fork'u var; origin ana repoya bağlı |
| Blackboard teslimi | 3 | GitHub kullanıcı adı + fork linki Blackboard'a süre içinde gönderildi |
| Tek başına repo sahipliği | 3 | Repo'da eğitmen davet/collaborator kaydı yok (davet yapılmaz) |

## Ortak Kurallar (tüm görevler)

- **Katılımcı davetı yok:** Eğitmen (`keyvanarasteh`) repoya contributor/collaborator olarak davet edilmez. Teslim yalnızca Blackboard üzerinden yapılır.
- **PR sayısı:** Her görev için en az 1 PR açılır (`feature/*` veya `fix/*` dalı). Görev 01.2'de tanımlanan akış zorunludur; doğrudan `master`'a commit yoktur.
- **Doğrulama kanıtı:** `bun run build` çıktısı (0 hata) ve `bun run tauri dev` ile uygulamanın açıldığının ekran görüntüsü teslime eklenir.
- **Dil desteği:** Uygulama metinleri TR, EN, AR, FA dillerinde bulunur (RTL: AR ve FA için `dir="rtl"`). Görev içeriği bu dillerden birinde değil ise ilgili görev için İngilizce karşılığı eklenir.
- **Dokümantasyon:** Her kural tek bir `docs/*.md` dosyasında yaşar; `README.md` ve `AGENTS.md` yalnızca link verir (bkz. Görev 04).
