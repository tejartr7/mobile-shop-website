import { Inter } from 'next/font/google';
import './globals.css';
import './images/logo.png'; // Ensure that this import is correct and points to your logo file
import logo from './images/logo.png';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Swaad Bihar Ka',
  description: 'Swaad bihar ka is a cloud kitchen in Bihar, India',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href={logo} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
