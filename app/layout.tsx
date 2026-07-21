import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { LangProvider } from "@/lib/i18n";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Yozapps — Mobil Uygulama Stüdyosu",
  description:
    "Yozapps: mobil odaklı bağımsız bir uygulama stüdyosu. Yenilikçi, Özgün, Zarif uygulamalar — Holes ve Safe Oto.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LangProvider>
            <SmoothScroll>{children}</SmoothScroll>
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
