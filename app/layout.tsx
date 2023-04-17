import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "lazyjs.pro",
  description: "Orest Prystaiko | JS Fullstack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=3188K43VZC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-3188K43VZC');
        `}
      </Script>

      <link rel="icon" href="logo.svg" />
      <body>{children}</body>
    </html>
  );
}
