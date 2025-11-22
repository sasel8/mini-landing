# Mini Landing + Bileşen Kütüphanesi

Bu proje; semantik HTML, modern CSS (SCSS), basit JavaScript etkileşimleri ve yeniden kullanılabilir UI bileşenleri ile geliştirilmiş tek sayfalık bir ürün tanıtım landing sayfasıdır. React + Vite altyapısı kullanılarak modern bir front-end yaklaşımı uygulanmıştır.

## 🚀 Teknolojiler
- Vite + React
- SCSS (sass-embedded)
- Vanilla JS ile form doğrulama
- Light/Dark tema (CSS değişkenleri)
- Responsive tasarım (3 breakpoint)

## 🧩 Bileşen Kütüphanesi
Projede küçük bir UI kütüphanesi oluşturulmuştur:

- **Button**
- **Input**
- **Card**
- **Modal**
- **Accordion**

Her bileşen kendi klasöründe, SCSS dosyasıyla birlikte bulunur. Tümü yeniden kullanılabilir şekilde props yapısına sahiptir.

## 🧱 Sayfa Bölümleri
- Hero
- Özellikler
- Fiyatlandırma
- Sık Sorulan Sorular (Accordion)
- İletişim Formu (yalancı submit + doğrulama)

## ✔️ Form Doğrulama
- İsim, e-posta ve mesaj alanları kontrol edilir.
- Boş alanlar için hata mesajı gösterilir.
- E-posta regex ile doğrulanır.
- Gerçek sunucuya gönderim yok, yalancı submit uygulanır.

## 📱 Breakpoint Yapısı
Proje aşağıdaki ekran genişlikleri için optimize edilmiştir:

- ≤ 640px (mobil)
- 641–1024px (tablet)
- ≥ 1025px (desktop)

## 🌐 Canlı Demo
Projenin canlı olarak çalışan sürümü:  
🔗 **https://mini-landing-rosy.vercel.app/**

## 🚦 Lighthouse Raporu
- Performance: 83
- Accessibility: 87
- Best Practices: 96
- SEO: 83
![Lighthouse Report](./lighthouse.png)


## 📦 Kurulum

```bash
npm install
npm run dev
