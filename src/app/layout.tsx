import HeaderWrapper from '@/components/shared/HeaderWrapper';
import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import Footer from '@/components/shared/footer/Footer';
import { AppContextProvider } from '@/context/AppContext';
import { interTight } from '@/utils/font';
import { ReactNode } from 'react';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <body className={`${interTight.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'SequenceFlow',
              url: 'https://sequenceflow.io',
              logo: 'https://sequenceflow.io/images/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'hallo@sequenceflow.io',
                contactType: 'customer service',
                availableLanguage: 'Dutch',
              },
              sameAs: ['https://www.linkedin.com/company/sequenceflow-io/'],
              description:
                'SequenceFlow bouwt, implementeert en beheert autonome AI-workflows voor het MKB — Flow-as-a-Service (FaaS).',
            }),
          }}
        />
        <AppContextProvider>
          <SmoothScrollProvider>
            <HeaderWrapper />
            {children}
            <Footer />
          </SmoothScrollProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
