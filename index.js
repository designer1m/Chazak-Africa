import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

// Folder Structure:
// - pages/
//   - index.js (Home Page)
//   - about.js (About Us Page)
//   - products.js (Products Page)
// - styles/
//   - globals.css (Global styles)
// - public/
//   - images/ (Store images like logos, product images)
// - components/
//   - Header.js
//   - Footer.js
