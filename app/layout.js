import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PILLAR",
  description: "PILLAR WEBSITE BY TEAM ✅",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hide-scrollbar" suppressHydrationWarning={true}>
      <head>
        <link
          rel="icon"
          href="../../images/PILLAR_FAVICON.png"
          type="image/png"
          sizes="32x32"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
