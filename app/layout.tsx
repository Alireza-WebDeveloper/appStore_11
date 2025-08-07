import '../app/globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Header from './lib/design/layout/header';
import AppProvider from './lib/provider/app';
import localFont from 'next/font/local';
import { Metadata } from 'next';
const iranSans = localFont({ src: '../public/fonts/iranSans.woff2' });
import { CookiesProvider } from 'next-client-cookies/server';
import LogoImg from '@/public/images/logo/website.png';

export const metadata: Metadata = {
  title: 'لوازم خانگی با کیفیت و قیمت مناسب - خرید آنلاین از بهترین برندها',
  description:
    'بهترین لوازم خانگی از برندهای معتبر با قیمت‌های ویژه. خرید آنلاین انواع یخچال، لباسشویی، تلویزیون، کولر و سایر لوازم ضروری خانه. ارسال رایگان و گارانتی اصالت کالا.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="icon" href={LogoImg.src} />
      </head>
      <body
        className={`${iranSans.className} bg-gray-100 text-black  
        dark:bg-black dark:text-white capitalize`}
      >
        <CookiesProvider>
          <AppProvider>
            <main>
              <Header />
              {children}
            </main>
          </AppProvider>
        </CookiesProvider>
      </body>
    </html>
  );
}
