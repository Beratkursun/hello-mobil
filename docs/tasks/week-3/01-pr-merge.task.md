# Görev 01.2 — Feature Branch, Pull Request (PR) ve Merge Disiplini

Bu görevde modern yazılım geliştirmenin ve yapay zeka ile çalışmanın en kritik disiplini olan **Branch → Pull Request (PR) → Merge** akışını öğreneceksiniz.

---

## 1. Neden Doğrudan `master` / `main` Dalına Commit Atılmaz?

Yapay zeka araçları (Antigravity, Cursor, Copilot vb.) ile kod yazarken yapılan en büyük hata, değişiklikleri doğrudan ana dalda yapmaktır. Eğer AI hatalı veya bozuk bir kod üretirse çalışan uygulamanız bozulur ve geri almak zorlaşır.

### Branch ve PR Kullanmanın Faydaları:
1. **İzolasyon (Güvenli Alan):** Yeni bir özellik eklerken açtığınız dal (`branch`), ana koda zarar vermez. Kod çalışana kadar ana dal temiz kalır.
2. **Diff İnceleme (Prompt → Diff Denetimi):** AI'ın yazdığı her satırı PR açtığınızda GitHub üzerinde yeşil/kırmızı farklar (`diff`) olarak açıkça görürsünüz.
3. **Kolay Geri Alma (Rollback):** Bir özellik başarısız olursa o branch'i silebilirsiniz; ana projeniz hiçbir zarar görmez.
4. **Profesyonel Portföy:** GitHub profilinizde sadece tek commit yerine, özellik bazlı açılmış ve başarıyla merge edilmiş PR'lar görmek iş başvurularında sizi öne geçirir.

---

## 2. Standart İş Akışı Adımları

Her yeni özellik, sayfa veya düzeltme için bu 5 adımı uygulayın:

### 1. Adım: Yeni Bir Dal (Branch) Açın
```bash
# Ana dalın güncel olduğundan emin olun
git checkout master
git pull origin master

# Yeni özelliğiniz için dal oluşturun (Türkçe karakter ve boşluk kullanmayın)
git checkout -b feature/marka-renkleri
```

### 2. Adım: Geliştirmeyi Yapın ve Doğrulayın
Yapay zeka ile geliştirmelerinizi yaptıktan sonra derlemeyi test edin:
```bash
bun run build
```
Hata yoksa commit atın:
```bash
git add .
git commit -m "feat: yeni marka renkleri ve tema CSS tanımlandı"
```

### 3. Adım: Dalınızı GitHub'a Gönderin
```bash
git push -u origin feature/marka-renkleri
```

### 4. Adım: GitHub Üzerinde Pull Request (PR) Açın
1. GitHub reponuza gidin; sarı bildirim bandında **Compare & pull request** butonunu göreceksiniz.
2. Tıklayın, PR başlığını ve AI ile ne yaptığınızı açıklayan 2-3 cümlelik bir açıklama yazın.
3. Sayfanın altındaki **Files changed** (Değişen Dosyalar) sekmesine bakın: Sadece değiştirmek istediğiniz yerler mi değişmiş?
4. **Create pull request** butonuna basın.

### 5. Adım: İnceleyin ve Merge Edin
1. Değişikliklerden eminseniz yeşil **Merge pull request** butonuna ve ardından **Confirm merge** butonuna basın.
2. Yerel terminalinize dönüp ana dalınızı güncelleyin:
```bash
git checkout master
git pull origin master
```

---

## 3. AGENTS.md Entegrasyonu

Bu kural projenizin `AGENTS.md` dosyasına bağlayıcı bir kural olarak eklenecektir. Yapay zeka asistanınıza görev verirken doğrudan `master`'da çalışmasını engelleyecek, her zaman yeni bir `feature/*` dalı açmasını isteyeceğiz.

---

## ✅ Kontrol Listesi

- [ ] Her özellik için ayrı bir `feature/<isim>` branch'i açıldı.
- [ ] Değişiklikler test edilip commit'lendi.
- [ ] GitHub'da Pull Request açılarak diff incelendi.
- [ ] PR başarıyla `master` dalına merge edildi.

## 🎯 Puan Rubriği (toplam 10 puan)

| Kriter | Puan | Tam puan koşulu |
|---|---|---|
| Feature branch | 2 | `feature/<ad>` dalı açıldı, master'a doğrudan commit yok |
| Conventional commit | 2 | Commit mesajları `feat:`/`fix:`/`docs:` ile başlar |
| PR açıklaması | 2 | PR'da ne yapıldığı ve AI'a verilen görev 2-3 cümle ile yazılı |
| Diff incelemesi ve merge | 2 | Files changed incelendi; PR master'a merge edildi |
| PR sayısı | 2 | Görev 01.2 kapsamında en az 1 merge edilmiş PR (her özellik ayrı PR) |

## 📚 İlgili Kaynaklar

- **Kaynak repo:** [github.com/keyvanarasteh/hello-mobil](https://github.com/keyvanarasteh/hello-mobil)
