import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from './providers';
import '@rainbow-me/rainbowkit/styles.css';


const jetBrains_Mono = JetBrains_Mono({
  weight: ['400', '500' ,'600','700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Trading view Chart",
  description: "Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrains_Mono.className}><Providers>{children}</Providers></body>
    </html>
  );
}
