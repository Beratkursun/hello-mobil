# Görev 02 — Proje Fikri Belirleme ve Konsept Seçimi

Bu görevde elinizdeki temel PassoKlon uygulamasını (etkinlik kartları, arama/filtreleme, detay sayfası, sepet/seçim mekanizması, Rust ile kod üretme ve profil ekranı) **kendi özgün mobil/masaüstü uygulamanıza** dönüştüreceksiniz.

---

## 1. Dönüşüm Mantığı

Passo uygulamasında olan yapıyı kendi fikrinize uyarlayın:
- **Etkinlikler** → Sizin ürünleriniz, dersleriniz, araçlarınız, menü kalemleriniz vb.
- **Bilet Seçimi / Satın Alma** → Sipariş verme, kiralama, randevu alma, üye olma vb.
- **Bilet Kodu (Rust backend)** → Sipariş takip kodu, rezervasyon numarası, takip barkodu.
- **Sepet / Profil** → Seçilen öğeler listesi ve kullanıcı tercihleri.

---

## 2. İlham Alabileceğiniz 40 Proje Fikri

Aşağıdaki 40 fikirden birini seçebilir veya kendi özgün fikrinizi geliştirebilirsiniz:

### 🛍️ E-Ticaret, Pazaryeri ve Hızlı Teslimat
1. **Getir / Hızlı Market Klonu:** Market ürünleri, sepet tutarı ve kurye takip kodu üretimi.
2. **Trendyol / Butik Moda:** Giyim ürünleri, beden/renk seçimi ve favori listesi.
3. **Sahibinden / İkinci El İlan:** İkinci el araç/elektronik ilanları ve satıcı iletişim formu.
4. **Dolap / Gardırop Paylaşımı:** Kullanıcıların kıyafetlerini listelediği ikinci el moda vitrini.
5. **Yemeksepeti / Restoran Menü:** Restoran yemekleri, porsiyon seçimi ve sipariş sepeti.
6. **Kahve Siparişi (Starbucks Klonu):** Kahve boyutu, süt seçimi ve mağazadan teslim barkodu.
7. **Kitap Yurdu / Çevrimiçi Kitapçı:** Kitap kategorileri, yazar filtreleme ve kargo takip numarası.
8. **ÇiçekSepeti / Hediye Gönder:** Buketler, özel gün kartı notu ve teslimat saati seçimi.

### 🎵 Medya, Müzik ve Eğlence
9. **Spotify Klonu:** Albüm ve şarkı kartları, çalma listesi oluşturma ve müzik çalar arayüzü.
10. **YouTube / Video Akışı:** Video kartları, oynatma listesi ve video izleme detay sayfası.
11. **Twitch / Canlı Yayın Portalı:** Canlı yayıncı kartları, kategori filtreleri ve canlı sohbet alanı.
12. **Netflix / Film & Dizi Rehberi:** Türlerine göre filmler, IMDB puanları ve izleme listesi.
13. **Podcast Çalar:** Bölüm listeleri, konuşmacı detayları ve dinleme geçmişi.
14. **Sesli Kitap Kütüphanesi:** Seslendiren bilgisi, bölüm seçimi ve indirme durumu.

### 📚 Eğitim, Dil ve Öğrenci Araçları
15. **Duolingo / Dil Öğrenme:** Günlük ders kartları, seviye seçimi ve tamamlama rozetleri.
16. **Flashcard / Kelime Ezberleme:** Kart çevirme, zor/kolay filtreleme ve günlük hedef.
17. **İstinye Kampüs Rehberi:** Kampüs binaları, yemekhane menüsü, lab saatleri ve etkinlikler.
18. **Sınav Geri Sayım & Deneme Takip:** YKS/DGS sayaçları, çözülen deneme netleri ve hedef yüzdesi.
19. **Kodlama Egzersizleri (LeetCode Mini):** Algoritma soruları, zorluk dereceleri ve çözüm editörü.

### 🚗 Otomotiv, Donanım ve Akıllı Sistemler
20. **Tesla Araç Kontrol Paneli:** Batarya doluluk oranı, iklimlendirme kontrolü, kapı kilit durumu.
21. **Elektrikli Araç Şarj Ağı (ZES/Voltrun):** Yakındaki şarj istasyonları, soket tipi ve şarj başlatma kodu.
22. **Akıllı Ev IoT Kontrol:** Oda bazlı ışıklar, sıcaklık sensörleri ve akıllı priz aç/kapa.
23. **Otopark Doluluk & Rezervasyon:** Şehirdeki otoparkların doluluk yüzdeleri ve park yeri ayırtma.

### ✈️ Seyahat, Ulaşım ve Konaklama
24. **Airbnb / Tatil Evi Kiralama:** Ev ilanları, gecelik fiyat, oda olanakları ve rezervasyon.
25. **Martı / Scooter Kiralama:** Haritada scooter listesi, dakika ücreti ve kilit açma PIN'i.
26. **Uçak & Otobüs Bileti (Enuygun Klonu):** Kalkış/varış noktası, koltuk seçimi ve PNR kodu.
27. **Doğa Yürüyüşü & Kamp Rota Rehberi:** Parkur zorluğu, rakım grafiği ve kamp yeri rezervasyonu.
28. **Müze & Örenyeri Bilet Sistemi:** Müze saatleri, sesli rehber dili ve QR giriş bileti.

### 🏃 Sağlık, Spor ve Yaşam
29. **Fitness & Antrenman Programı:** Kas grubu egzersizleri, set/tekrar sayıları ve gün sonu özeti.
30. **Su & Kalori Takipçisi:** Günlük hedef grafiği, içilen su bardağı ve öğün kaydı.
31. **Nöbetçi Eczane & İlaç Hatırlatıcı:** En yakın nöbetçi eczaneler ve saatlik ilaç bildirimleri.
32. **Kuaför & Berber Randevu Sistemi:** Hizmet seçimi, berber tercihi ve saat randevusu.

### 💰 Finans ve Yatırım
33. **Kripto Varlık Portföyü:** Canlı coin fiyatları, 24 saatlik grafikler ve cüzdan toplamı.
34. **Kişisel Bütçe & Gider Yönetimi:** Gelir/gider kategorileri, harcama limitleri ve ay sonu tasarruf.
35. **Döviz & Altın Canlı Takip:** Serbest piyasa kurları, alarm kurma ve çevirici hesap makinesi.

### 🐾 Topluluk, Sosyal ve Hobi
36. **Pati Dostu / Evcil Hayvan Sahiplendirme:** Barınak hayvanları, aşı geçmişi ve sahiplenme formu.
37. **Halı Saha Maç Bulucu:** Eksik oyuncu ilanları, saha saati ve maç kadrosu kurma.
38. **Kitap & Eşya Takas Kulübü:** Takasa sunulan eşyalar, takas teklif etme ve kargo onay kodu.
39. **Gönüllülük & Sosyal Sorumluluk:** Sivil toplum etkinlikleri, gönüllü kontenjanı ve katılım belgesi.
40. **Yemek Tarifleri & Kiler Menüsü:** Evdeki malzemelerle yapılabilecek yemekler ve pişirme süresi.

---

## 3. Görev Teslim Formatı

Seçtiğiniz fikri projenizin `docs/proje-fikri.md` dosyasına şu şablonla kaydedin:

```markdown
# Proje Fikri: [Projenizin Adı]

- **Öğrenci Adı Soyadı:** [Adınız]
- **Öğrenci Numarası:** [Numaranız]
- **İlham Alınan Konsept:** [Örn: Spotify / Yemeksepeti / Tesla]

## 1. Proje Özeti
[Projenizin ne işe yaradığını 2-3 cümleyle açıklayın.]

## 2. Temel 3 Ekran ve İşlev
1. **Ana Liste Ekranı:** [Ne listelenecek?]
2. **Detay ve Seçim Ekranı:** [Hangi detaylar ve butonlar olacak?]
3. **Kayıt / Kod Üretme Ekranı:** [Rust backend'i ne tür bir kod üretecek?]

## 3. Hedef Kitle
[Bu uygulamayı kimler kullanacak?]
```

---

## ✅ Kontrol Listesi

- [ ] 40 fikirden biri seçildi veya özgün fikir belirlendi.
- [ ] `docs/proje-fikri.md` dosyası oluşturulup dolduruldu.
- [ ] Belirlenen fikir 07.10.2026 23:59'a kadar Blackboard'a yazıldı.

## 🎯 Puan Rubriği (toplam 10 puan)

| Kriter | Puan | Tam puan koşulu |
|---|---|---|
| Konsept seçimi | 2 | 40 fikirden biri veya gerekçeli özgün fikir |
| 3 ekran tanımı | 3 | Liste, detay/seçim ve kayıt/kod ekranı net ve birbirine bağlı |
| Hedef kitle | 2 | Kim kullanır, neden kullanır sorusu yanıtlı |
| Veri modeli ve kod üretimi | 2 | Rust tarafında üretilen kodun formatı tanımlı (örn. `PSK-XXX-XXXXXXX`) |
| Blackboard'a süre içinde iletildi | 1 | Fikir özeti 07.10.2026 23:59 öncesi teslim |

## 📚 İlgili Kaynaklar

- **Tasarım temelleri (Figma):** [figma.com/resource-library/design-basics](https://www.figma.com/resource-library/design-basics/)
- **Apple HIG:** [developer.apple.com/design/human-interface-guidelines](https://developer.apple.com/design/human-interface-guidelines)
