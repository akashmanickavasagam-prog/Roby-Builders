import { Playfair_Display, Cormorant_Garamond, Jost } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata = {
  title: 'Roby Builders — Premium Construction in Karaikudi',
  description:
    'Roby Builders delivers premium residential and commercial construction in Karaikudi and across Tamil Nadu. Quality craftsmanship, transparent pricing, on-time delivery.',
  keywords: 'construction, builders, Karaikudi, Tamil Nadu, residential, commercial, civil engineering',
  openGraph: {
    title: 'Roby Builders — Premium Construction',
    description: 'Premium residential and commercial construction in Karaikudi, Tamil Nadu.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${jost.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
