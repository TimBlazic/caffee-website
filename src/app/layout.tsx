import { ReactLenis } from "lenis/react";
import { Analytics } from "@vercel/analytics/react";
import { metadata } from "@/metadata";
import { saans } from "@/fonts";
import DocumentTitleChanger from "@/components/layout/DocumentTitleChanger";
import LocationsModal from "@/components/modal/LocationsModal";
import "./globals.css";
import { FooterProvider } from "@/contexts/footer-context";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <FooterProvider>
        <ReactLenis root>
          <body
            className={`${saans.className} font-semibold antialiased bg-[#6F4E37] text-[#F7E7CE]`}
          >
            <DocumentTitleChanger />

            {children}
            <LocationsModal />
            <Analytics />
          </body>
        </ReactLenis>
      </FooterProvider>
    </html>
  );
}
