import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import MegaMenu from '@/components/MegaMenu';
import Carousel from '@/components/Carousel';
import GalleryGrid from '@/components/GalleryGrid';
import FAQs from '@/components/FAQs';
import TermsConditions from '@/components/TermsConditions';
import PrivacyPolicy from '@/components/PrivacyPolicy';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import TeamMembers from '@/components/TeamMembers';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  useEffect(() => {
    console.log('Website Loaded');
  }, []);

  const handleContactClick = () => {
    window.location.href = 'mailto:chazakafrica@gmail.com';
  };

  return (
    <div className={inter.className}>
      <Header />
      <MegaMenu categories={['Books', 'Authors', 'Genres', 'New Arrivals', 'Best Sellers', 'Offers', 'Discounts', 'Gift Cards', 'Featured Collections', 'Our Team', 'Testimonials']} />
      <main>
        <HeroSection />
        <Component {...pageProps} />
        {pageProps.page === 'feedback' && <Carousel />}
        {pageProps.page === 'gallery' && <GalleryGrid />}
        {pageProps.page === 'faqs' && <FAQs />}
        {pageProps.page === 'terms' && <TermsConditions />}
        {pageProps.page === 'privacy' && <PrivacyPolicy />}
        {pageProps.page === 'testimonials' && <Testimonials />}
        {pageProps.page === 'team' && <TeamMembers />}
      </main>
      <ContactForm onContactClick={handleContactClick} />
      <Footer />
    </div>
  );
}

// Folder Structure:
// - pages/
//   - index.js (Home Page)
//   - about.js (About Us Page)
//   - products.js (Products Page)
//   - contact.js (Contact Us Page)
//   - services.js (Services Page)
//   - gallery.js (Gallery Page)
//   - feedback.js (Feedback Page with carousel)
//   - faqs.js (FAQs Page)
//   - terms.js (Terms and Conditions Page)
//   - privacy.js (Privacy Policy Page)
//   - testimonials.js (Testimonials Page)
//   - team.js (Our Team Page)
// - styles/
//   - globals.css (Global styles)
// - public/
//   - images/ (Store images like logos, product images)
// - components/
//   - Header.js
//   - Footer.js
//   - HeroSection.js
//   - ProductCard.js
//   - ContactForm.js
//   - MegaMenu.js (Dropdown Navigation with categories: Books, Authors, Genres, New Arrivals, Best Sellers, Offers, Discounts, Gift Cards, Featured Collections, Our Team, Testimonials)
//   - Carousel.js (For Feedback Page)
//   - GalleryGrid.js (For Gallery Page)
//   - FAQs.js (For FAQs Page)
//   - TermsConditions.js (For Terms and Conditions Page)
//   - PrivacyPolicy.js (For Privacy Policy Page)
//   - Testimonials.js (For Testimonials Page)
//   - TeamMembers.js (For Our Team Page)
