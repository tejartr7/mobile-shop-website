import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Swaad Bihar Ka',
  description: 'Swaad bihar ka is a cloud kitchen in Bihar, India',
  icons: {
    favicon: ['./favicon.ico', 'image/x-icon'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href='./favicon.ico' type={metadata.icons.favicon[1]} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
