import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { businessInfo, generateLocalBusinessSchema, generateOrganizationSchema, generateWebSiteSchema, generateAggregateRatingSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    default: `${businessInfo.name} | Premier Commercial Landscaping in DFW`,
    template: `%s | ${businessInfo.name}`
  },
  description: 'Professional commercial landscaping, hardscaping, and grounds maintenance services in Dallas-Fort Worth. Expert landscape design, irrigation, tree care, and large-scale installations. Serving Dallas, Fort Worth, Frisco, Plano, and surrounding areas. Call 214-506-3983.',
  keywords: 'commercial landscaping DFW, commercial grounds maintenance, landscape design Dallas, irrigation systems Fort Worth, commercial tree trimming, HOA landscaping, retail center maintenance, office park landscaping',
  metadataBase: new URL('https://dfwcommerciallandscaping.com'),
  alternates: {
    canonical: 'https://dfwcommerciallandscaping.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dfwcommerciallandscaping.com',
    siteName: businessInfo.name,
    title: `${businessInfo.name} | Premier Commercial Landscaping in DFW`,
    description: 'Professional commercial landscaping and grounds maintenance for businesses in DFW. Expert design, installation, and care.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DFW Commercial Landscaping - Professional Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${businessInfo.name} | Premier Commercial Landscaping in DFW`,
    description: 'Professional commercial landscaping and grounds maintenance services in DFW.',
    images: ['/og-image.jpg'],
    creator: '@dfwcommerciallandscaping'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Landscaping Services',
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Dallas',
    'geo.position': '32.7767;-96.7970',
    'ICBM': '32.7767, -96.7970',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0c4a6e" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Dallas, Texas" />
        <meta name="geo.position" content="32.7767;-96.7970" />
        <meta name="ICBM" content="32.7767, -96.7970" />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema())
          }}
        />
        
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema())
          }}
        />
        
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema())
          }}
        />
        
        {/* Aggregate Rating Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateAggregateRatingSchema())
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
