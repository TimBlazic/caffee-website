import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artisan Coffee | Specialty Coffee House & Roastery",
  description:
    "Family-owned coffee house in the heart of the city. Serving freshly roasted coffee, artisan pastries, and creating a cozy community space for coffee lovers.",

  // Basic SEO
  keywords: [
    "coffee house",
    "specialty coffee",
    "coffee shop",
    "fresh roasted coffee",
    "artisan pastries",
    "cozy cafe",
    "community coffee",
    "local coffee shop",
    "coffee roastery",
    "neighborhood cafe",
    "coffee culture",
    "family owned cafe",
  ], // Add your keywords here
  authors: [{ name: "Artisan Coffee", url: "https://www.artisancoffee.com" }],
  creator: "Artisan Coffee",
  publisher: "Artisan Coffee",

  // Open Graph
  openGraph: {
    title: "Artisan Coffee | Specialty Coffee House & Roastery",
    description:
      "Family-owned coffee house in the heart of the city. Serving freshly roasted coffee, artisan pastries, and creating a cozy community space for coffee lovers.",
    url: "https://www.artisancoffee.com",
    siteName: "artisancoffee.com",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Artisan Coffee - Specialty Coffee House & Roastery",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Artisan Coffee | Specialty Coffee House & Roastery",
    description:
      "Family-owned coffee house in the heart of the city. Serving freshly roasted coffee, artisan pastries, and creating a cozy community space for coffee lovers.",
    creator: "@artisancoffee",
    images: [
      {
        url: "/src/app/opengraph-image.png",
        width: 1200,
        height: 675,
        alt: "Artisan Coffee - Specialty Coffee House & Roastery",
      },
    ],
  },

  // Canonical URL
  alternates: {
    canonical: "https://www.artisancoffee.com",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Verification
  verification: {
    google: "google-site-verification-code-123456",
    yandex: "yandex-verification-code-123456",
    yahoo: "yahoo-verification-code-123456",
    other: {
      me: ["https://instagram.com/artisancoffee"],
    },
  },

  // App links
  appleWebApp: {
    title: "Artisan Coffee",
    statusBarStyle: "default",
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  // Other
  category: "Coffee",
  colorScheme: "light dark",
  themeColor: "#6F4E37",
};
