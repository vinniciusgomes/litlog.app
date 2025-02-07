import "@workspace/ui/globals.css";

import { Inter, Libre_Baskerville } from "next/font/google";

import { Providers } from "@/components/providers";

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
        className={`${libreBaskerville.variable} ${inter.variable} font-sans antialiased bg-white relative`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
