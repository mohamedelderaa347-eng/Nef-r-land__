:root {
  --primary-color: #d4af37;
  --secondary-color: #0a0a0a;
  --dark-color: #000000;
  --light-color: #1a1a1a;
  --text-color: #f0f0f0;
  --text-light: #aaa;
  --bg-dark: #000000;
  --bg-card: #111111;
  --bg-section: #0a0a0a;
  --transition: all 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Tajawal', sans-serif;
  color: var(--text-color);
  background-color: var(--bg-dark);
  line-height: 1.6;
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  background-color: var(--primary-color);
  color: #000;
  border: none;
  border-radius: 50px;
  font-weight: 700;
  cursor: pointer;
  transition: var(--transition);
  text-align: center;
}

.btn:hover {
  background-color: #f5c542;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
}

.hidden {
  display: none !important;
}

/* Navigation Bar */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  box-shadow: 0 2px 10px rgba(212, 175, 55, 0.2);
  z-index: 1000;
  padding: 15px 0;
  transition: var(--transition);
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  font-family: 'Playfair Display', serif;
}

.logo span {
  color: var(--primary-color);
  margin-right: 10px;
}

.logo i {
  font-size: 1.5rem;
  margin-left: 10px;
  color: var(--primary-color);
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  font-weight: 500;
  transition: var(--transition);
  position: relative;
  color: #fff;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  right: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary-color);
  transition: var(--transition);
}

.nav-links a:hover {
  color: var(--primary-color);
}

.nav-links a:hover::after {
  width: 100%;
  left: 0;
}

.language-switcher select {
  padding: 8px 15px;
  border-radius: 5px;
  border: 1px solid #333;
  background-color: #111;
  font-family: 'Tajawal', sans-serif;
  cursor: pointer;
  margin-left: 20px;
  color: #fff;
}

.mobile-menu-btn {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #fff;
}

/* Hero Section */
.hero {
  height: 100vh;
  position: relative;
  margin-top: 70px;
  overflow: hidden;
}

.hero-content {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10%;
  z-index: 10;
  max-width: 600px;
  color: #fff;
  text-align: right;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  line-height: 1.3;
}

.hero-content h1 span {
  color: var(--primary-color);
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #ddd;
}

.hero-slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-slider .slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.hero-slider .slide.active {
  opacity: 1; /* تغيير من 0.3 إلى 1 لعرض الصورة بشكل كامل */
  filter: brightness(1); /* إزالة التعتيم */
}

/* Sections */
.section {
  padding: 100px 0;
  background-color: var(--bg-section);
}

.section:nth-child(even) {
  background-color: var(--dark-color);
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
  font-weight: 900;
}

.section-header h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: var(--primary-color);
}

.section-header p {
  font-size: 1.1rem;
  color: var(--text-light);
  max-width: 700px;
  margin: 0 auto;
}

/* Tabs */
.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  gap: 15px;
}

.tab-btn {
  padding: 12px 25px;
  background-color: #222;
  border: 1px solid #333;
  border-radius: 50px;
  font-weight: 700;
  cursor: pointer;
  transition: var(--transition);
  color: #ddd;
  font-size: 1.1rem;
}

.tab-btn.active {
  background-color: var(--primary-color);
  color: #000;
  border-color: var(--primary-color);
}

.tab-btn:hover {
  background-color: #333;
  color: #fff;
}

.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}

/* Country Filter */
.country-filter {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.country-btn {
  padding: 8px 20px;
  background-color: #222;
  border: 1px solid #333;
  border-radius: 50px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  color: #ddd;
}

.country-btn.active {
  background-color: var(--primary-color);
  color: #000;
  border-color: var(--primary-color);
}

.country-btn:hover {
  background-color: #333;
  color: #fff;
}

/* Sites Grid */
.sites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.site-card {
  background-color: var(--bg-card);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: var(--transition);
  cursor: pointer;
  border: 1px solid #222;
}

.site-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(212, 175, 55, 0.2);
  border-color: var(--primary-color);
}

.site-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  filter: none !important; /* إزالة أي مرشحات على الصور */
}

.site-card .card-content {
  padding: 20px;
}

.site-card h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #fff;
  font-weight: 700;
}

.site-card .location {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--text-light);
  margin-bottom: 15px;
}

.site-card .location i {
  color: var(--primary-color);
}

/* About Section */
.about-section {
  background-color: var(--bg-section);
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.about-content p {
  margin-bottom: 20px;
  line-height: 1.8;
  color: #ddd;
}

/* Scanner Section */
.scanner-section {
  padding: 100px 0;
  background-color: var(--bg-section);
}

.scanner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.scanner-box {
  background: var(--bg-card);
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 500px;
  border: 1px solid #222;
}

.scanner-icon {
  font-size: 4rem;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.scanner-text {
  color: var(--text-color);
  margin-bottom: 20px;
  font-size: 1.2rem;
}

.scanner-results {
  background-color: var(--bg-card);
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 800px;
  display: none;
  border: 1px solid #222;
}

.result-content {
  text-align: center;
}

.result-content h3 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #fff;
}

.artifact-image {
  margin-bottom: 20px;
}

.artifact-image img {
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  border-radius: 8px;
  filter: none !important; /* إزالة أي مرشحات على الصور */
}

.artifact-details p {
  margin-bottom: 15px;
  line-height: 1.8;
  color: var(--text-color);
}

.audio-controls {
  margin-top: 30px;
}

.audio-btns {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 15px;
}

.scan-btn {
  display: block;
  margin: 30px auto 0;
}

/* Footer */
.footer {
  background-color: #000;
  color: #fff;
  padding: 70px 0 0;
  border-top: 2px solid var(--primary-color);
}

.footer .container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.footer-logo {
  margin-bottom: 20px;
}

.footer-logo .logo {
  color: #fff;
  font-size: 2rem;
}

.footer-logo p {
  margin-top: 15px;
  color: #aaa;
}

.footer-about {
  margin-top: 20px;
}

.footer-about h4 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: var(--primary-color);
}

.footer-about p {
  color: #aaa;
  line-height: 1.8;
}

.footer-links h3, .footer-contact h3, .footer-social h3 {
  font-size: 1.3rem;
  margin-bottom: 25px;
  position: relative;
  padding-bottom: 10px;
  color: #fff;
}

.footer-links h3::after, .footer-contact h3::after, .footer-social h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background-color: var(--primary-color);
}

.footer-links ul li {
  margin-bottom: 15px;
}

.footer-links ul li a {
  color: #aaa;
  transition: var(--transition);
}

.footer-links ul li a:hover {
  color: var(--primary-color);
  padding-right: 5px;
}

.footer-contact ul li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  color: #aaa;
}

.footer-contact ul li i {
  color: var(--primary-color);
  width: 20px;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #fff;
  transition: var(--transition);
}

.social-icons a:hover {
  background-color: var(--primary-color);
  transform: translateY(-3px);
  color: #000;
}

.copyright {
  text-align: center;
  padding: 20px 0;
  margin-top: 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #777;
}

/* Artifact Modal */
.artifact-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
}

.artifact-modal.active {
  opacity: 1;
  visibility: visible;
}

.modal-content {
  background-color: var(--bg-card);
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  border: 1px solid #333;
}

.close-modal {
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--primary-color);
  background: none;
  border: none;
  z-index: 10;
}

.modal-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.modal-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #333;
  filter: none !important; /* إزالة أي مرشحات على الصور */
}

.modal-details h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #fff;
}

.modal-details .location {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.modal-details p {
  margin-bottom: 15px;
  line-height: 1.8;
  color: #ddd;
}

/* Responsive Design */
@media (max-width: 992px) {
  .modal-body {
    grid-template-columns: 1fr;
  }
  
  .scanner-container {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .mobile-menu-btn {
    display: block;
  }
  
  .hero-content {
    right: 5%;
    left: 5%;
    max-width: none;
    text-align: center;
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .tabs, .country-filter {
    flex-direction: column;
    align-items: center;
  }
}

/* إضافة تأثيرات ذهبية */
.gold-border {
  border: 2px solid var(--primary-color);
}

.gold-text {
  color: var(--primary-color) !important;
}

.gold-shadow {
  box-shadow: 0 5px 15px rgba(212, 175, 55, 0.2);
}

/* إضافة هذه القاعدة لضمان ظهور جميع الصور بألوانها الأصلية */
img {
  filter: none !important;
  -webkit-filter: none !important;
}

/* ضبط السطوع للصور في hero-slider */
.hero-slider .slide {
  filter: brightness(1); /* إزالة التعتيم */
    }
