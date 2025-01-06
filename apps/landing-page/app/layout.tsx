import { Libre_Baskerville, Inter } from "next/font/google";

import "@workspace/ui/globals.css";
import "../styles/global.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${libreBaskerville.variable} ${inter.variable} font-sans antialiased bg-white`}
      >
        <Providers>
          <Header />
          
          {children}
        </Providers>
      </body>
    </html>
  );
}
