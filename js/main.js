/**
 * Can Yıldırım - Portfolyo, Hizmet & Pazarlama Sitesi
 * İnteraktif İşlevler & UI/UX İyileştirmeleri
 */

// Blog Makaleleri Veri Tabanı
const blogArticles = {
  1: {
    title: "C# ve .NET Core ile Kurumsal Masaüstü & Arka Plan Mimarisi",
    category: "C# & .NET Mimarisi",
    date: "14 Eylül 2026",
    readTime: "6 dk okuma",
    author: "Can Yıldırım",
    content: `
      <p class="mb-4 text-slate-200 leading-relaxed">
        Kurumsal masaüstü uygulamaları geliştirirken karşılaşılan en büyük handikap, zaman içinde projenin monolitik ve sürdürülemez bir yapıya bürünmesidir. Özellikle WPF veya modern .NET MAUI/WinForms mimarilerinde katmanlı yapı (N-Tier Architecture) ve Dependency Injection (DI) kullanımı hayati önem taşır.
      </p>
      <h4 class="text-xl font-bold text-white mb-3 mt-6 border-l-4 border-blue-500 pl-3">1. Temiz Katman Yapısı (Clean Architecture)</h4>
      <p class="mb-4 text-slate-300 leading-relaxed">
        UI katmanını iş kurallarından (Business Logic) ve veri erişim katmanından (Data Access Layer - DAL) tamamen ayırmak gerekir. Repository Pattern ve Unit of Work, özellikle Entity Framework Core veya Dapper ile çalışırken veritabanı sorgularının kontrol altında tutulmasını sağlar.
      </p>
      <h4 class="text-xl font-bold text-white mb-3 mt-6 border-l-4 border-blue-500 pl-3">2. Asenkron Operasyonlar (Async / Await)</h4>
      <p class="mb-4 text-slate-300 leading-relaxed">
        Kullanıcı arayüzünün (UI Thread) donmaması için dosya okuma/yazma, dış API çağrıları veya yoğun SQL sorguları mutlaka <code>async/await</code> yapısı ile işlenmelidir. Task Parallel Library (TPL) sayesinde modern C# uygulamalarında yüksek performanslı arka plan kuyrukları inşa edilebilmektedir.
      </p>
      <h4 class="text-xl font-bold text-white mb-3 mt-6 border-l-4 border-blue-500 pl-3">3. Sonuç</h4>
      <p class="text-slate-300 leading-relaxed">
        Doğru mimariyle tasarlanan bir C# yazılımı, yıllar sonra bile kolayca yeni modüller eklenebilir, test edilebilir ve sıfır hata ile şirket operasyonlarını hızlandırır.
      </p>
    `
  },
  2: {
    title: "MySQL Veritabanı Performansını 5 Kat Artıran Kritik İpuçları",
    category: "Veritabanı & Optimizasyon",
    date: "02 Eylül 2026",
    readTime: "5 dk okuma",
    author: "Can Yıldırım",
    content: `
      <p class="mb-4 text-slate-200 leading-relaxed">
        Birçok yazılım projesinde yavaşlamanın ana kaynağı backend kodundan ziyade, yanlış indekslenmiş ve optimize edilmemiş veritabanı sorgularıdır. MySQL veritabanınızın yanıt sürelerini milisaniyelere düşürmek için uygulayabileceğiniz 5 altın kuralı paylaşıyorum.
      </p>
      <h4 class="text-xl font-bold text-white mb-3 mt-6 border-l-4 border-blue-500 pl-3">1. EXPLAIN Analizini Alışkanlık Haline Getirin</h4>
      <p class="mb-4 text-slate-300 leading-relaxed">
        Yavaş çalışan sorgularınızın önüne <code>EXPLAIN</code> veya <code>EXPLAIN ANALYZE</code> ekleyerek tablonun tüm satırlarının (Full Table Scan) taranıp taranmadığını mutlaka tespit edin.
      </p>
      <h4 class="text-xl font-bold text-white mb-3 mt-6 border-l-4 border-blue-500 pl-3">2. Birleşik İndeksler (Composite Indexes)</h4>
      <p class="mb-4 text-slate-300 leading-relaxed">
        WHERE şartında birden fazla sütun (örn: <code>status = 1 AND created_at >= '...'</code>) filtreliyorsanız, tekil indeksler yerine bu iki alanı kapsayan tek bir Composite Index oluşturmak sorgu hızını katlayacaktır.
      </p>
      <h4 class="text-xl font-bold text-white mb-3 mt-6 border-l-4 border-blue-500 pl-3">3. SELECT * Kullanımından Kaçının</h4>
      <p class="text-slate-300 leading-relaxed">
        İhtiyacınız olmayan metin veya BLOB verilerini taşımak RAM ve I/O tüketimini artırır. Sadece view'da veya API'de kullanacağınız kolonları talep edin.
      </p>
    `
  },
  3: {
    title: "2026'da Modern Bir Web Sitesi İşinizi Nasıl 3 Kat Büyütür?",
    category: "Web & Dijital Pazarlama",
    date: "20 Ağustos 2026",
    readTime: "4 dk okuma",
    author: "Can Yıldırım",
    content: `
      <p class="mb-4 text-slate-200 leading-relaxed">
        Günümüzde bir web sitesi sadece dijital bir kartvizit değil, 7/24 kesintisiz çalışan bir satış ve güven mekanizmasıdır. Ziyaretçilerin sadece %20'si yavaş veya karmaşık bir sitede kalmayı tercih ediyor.
      </p>
      <h4 class="text-xl font-bold text-white mb-3 mt-6 border-l-4 border-blue-500 pl-3">1. İlk 2 Saniye Kuralı (Core Web Vitals)</h4>
      <p class="mb-4 text-slate-300 leading-relaxed">
        Site açılış hızındaki her 1 saniyelik gecikme dönüşüm oranını %7 düşürür. Tailwind CSS ve optimize edilmiş hafif mimarilerle ultra hızlı yüklenen siteler, Google'da da üst sıralara tırmanır.
      </p>
      <h4 class="text-xl font-bold text-white mb-3 mt-6 border-l-4 border-blue-500 pl-3">2. Net Çağrılar (Call-to-Action) ve Güven Faktörü</h4>
      <p class="mb-4 text-slate-300 leading-relaxed">
        Ziyaretçiyi kaybettirmeyen net CTA butonları ("Hemen Teklif Al", "Projeler"), referanslar ve net çözüm odaklı hizmet kartları potansiyel müşteriyi hemen eyleme geçirir.
      </p>
      <h4 class="text-xl font-bold text-white mb-3 mt-6 border-l-4 border-blue-500 pl-3">3. Mobil Uyumun Gücü</h4>
      <p class="text-slate-300 leading-relaxed">
        Trafiğin %75'inden fazlasının mobilden geldiği günümüzde, mobil öncelikli (mobile-first) tasarlanmış arayüzler müşteri kaçırmanın önüne geçer.
      </p>
    `
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Lucide İkonlarını Başlat
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Mobil Menü Yönetimi
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMobileMenu(isOpen) {
    if (!mobileMenu || !mobileMenuBtn) return;
    const shouldOpen = isOpen !== undefined ? isOpen : mobileMenu.classList.contains('hidden');
    if (shouldOpen) {
      mobileMenu.classList.remove('hidden');
      mobileMenuBtn.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
    } else {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
    }
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });

    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleMobileMenu(false);
      });
    });

    // Menü dışına tıklanınca kapat
    document.addEventListener('click', (e) => {
      if (!mobileMenu.classList.contains('hidden') && !mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        toggleMobileMenu(false);
      }
    });
  }

  // 3. Navbar Scroll ve Başa Dön Butonu
  const navbar = document.getElementById('main-navbar');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
      navbar?.classList.add('shadow-xl', 'border-blue-500/30');
    } else {
      navbar?.classList.remove('shadow-xl', 'border-blue-500/30');
    }

    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
      }
    }

    highlightActiveNavLink();
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4. Aktif Nav Linkini Vurgulama
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav-link');

  function highlightActiveNavLink() {
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('text-blue-400', 'font-semibold');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-blue-400', 'font-semibold');
          }
        });
      }
    });
  }

  // 5. Proje Filtreleme
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Buton aktiflik sınıfı
      filterBtns.forEach(b => {
        b.classList.remove('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/30');
        b.classList.add('bg-navy-surface', 'text-slate-300');
      });
      btn.classList.add('bg-blue-600', 'text-white', 'shadow-lg', 'shadow-blue-500/30');
      btn.classList.remove('bg-navy-surface', 'text-slate-300');

      // Kartları filtrele
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 6. Hizmet Kartlarından İletişim Formuna Yönlendirme (Hızlı Teklif)
  const serviceSelect = document.getElementById('form-service');
  const requestQuoteBtns = document.querySelectorAll('.request-quote-btn');

  requestQuoteBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetService = btn.getAttribute('data-service');
      if (serviceSelect && targetService) {
        serviceSelect.value = targetService;
      }
      
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }

      // İletişim kartında hafif parıldama efekti
      const formCard = document.getElementById('contact-form-card');
      if (formCard) {
        formCard.classList.add('ring-2', 'ring-blue-500');
        setTimeout(() => {
          formCard.classList.remove('ring-2', 'ring-blue-500');
        }, 1500);
      }
    });
  });

  // 7. İletişim Formu Doğrulama ve Gönderim
  const contactForm = document.getElementById('portfolio-contact-form');
  const submitBtn = document.getElementById('form-submit-btn');
  const submitBtnText = document.getElementById('submit-btn-text');
  const submitBtnSpinner = document.getElementById('submit-btn-spinner');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name')?.value.trim();
      const email = document.getElementById('form-email')?.value.trim();
      const message = document.getElementById('form-message')?.value.trim();

      if (!name || !email || !message) {
        showToast('Lütfen zorunlu alanları (Ad, E-posta, Mesaj) doldurunuz.', 'warning');
        return;
      }

      // Buton yükleniyor durumu
      if (submitBtn) submitBtn.disabled = true;
      if (submitBtnText) submitBtnText.textContent = 'Mesajınız Gönderiliyor...';
      if (submitBtnSpinner) submitBtnSpinner.classList.remove('hidden');

      // Gönderim simülasyonu (750ms)
      setTimeout(() => {
        if (submitBtn) submitBtn.disabled = false;
        if (submitBtnText) submitBtnText.textContent = 'Teklif / Mesaj Gönder';
        if (submitBtnSpinner) submitBtnSpinner.classList.add('hidden');

        // Formu temizle
        contactForm.reset();

        // Başarılı toast bildirimi
        showToast(`Teşekkürler Sayın ${name}! Mesajınız Can Yıldırım'a ulaştı. En kısa sürede dönüş sağlanacaktır.`, 'success');
      }, 750);
    });
  }

  // 8. Toast Bildirim Fonksiyonu
  function showToast(message, type = 'success') {
    const toast = document.getElementById('toast-notification');
    const toastMsg = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');

    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    
    if (type === 'success') {
      toast.className = 'fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-navy-card border border-blue-500 text-white px-5 py-4 rounded-xl shadow-2xl show';
      if (toastIcon) {
        toastIcon.innerHTML = `<i data-lucide="check-circle" class="w-6 h-6 text-blue-400"></i>`;
      }
    } else {
      toast.className = 'fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-navy-card border border-amber-500 text-white px-5 py-4 rounded-xl shadow-2xl show';
      if (toastIcon) {
        toastIcon.innerHTML = `<i data-lucide="alert-circle" class="w-6 h-6 text-amber-400"></i>`;
      }
    }

    if (window.lucide) {
      window.lucide.createIcons();
    }

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  // 9. Blog Okuma Modalı
  const blogModal = document.getElementById('blog-modal');
  const blogModalTitle = document.getElementById('blog-modal-title');
  const blogModalCategory = document.getElementById('blog-modal-category');
  const blogModalMeta = document.getElementById('blog-modal-meta');
  const blogModalBody = document.getElementById('blog-modal-body');
  const blogModalClose = document.getElementById('blog-modal-close');
  const readArticleBtns = document.querySelectorAll('.read-article-btn');

  readArticleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const articleId = btn.getAttribute('data-id');
      const article = blogArticles[articleId];

      if (article && blogModal) {
        blogModalTitle.textContent = article.title;
        blogModalCategory.textContent = article.category;
        blogModalMeta.textContent = `${article.author} • ${article.date} • ${article.readTime}`;
        blogModalBody.innerHTML = article.content;

        blogModal.classList.remove('hidden');
        blogModal.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeBlogModal() {
    if (blogModal) {
      blogModal.classList.add('hidden');
      blogModal.classList.remove('flex');
      document.body.style.overflow = 'auto';
    }
  }

  if (blogModalClose) {
    blogModalClose.addEventListener('click', closeBlogModal);
  }

  if (blogModal) {
    blogModal.addEventListener('click', (e) => {
      if (e.target === blogModal) {
        closeBlogModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBlogModal();
    }
  });
});
