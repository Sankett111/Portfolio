import type { Metadata } from "next";
import { ThemeProvider } from "@/_components/theme-provider";
import { Barlow, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "SN | Software Engineer",
  description: "A portfolio of projects, Engineering and Experience.",

};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${barlow.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className={barlow.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
