import type { Metadata } from 'next'
import { Bebas_Neue, Geist, Geist_Mono, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' });

export const metadata: Metadata = {
  title: 'Smart Art Link Metals | Wrought Iron Fabrication, CNC & Laser Cutting Onitsha',
  description: 'Expert wrought iron fabrication, CNC laser cutting, and custom metal services in Onitsha. Precision gates, fences, signage, and architectural metalwork.',
  keywords: [
    'laser cutting',
    'CNC cutting',
    'CNC routing',
    'wrought iron gates',
    'wrought iron gate designs',
    'metal fabrication',
    'custom gates',
    'architectural metalwork',
    'metal signage',
    'Onitsha',
    'Nigeria'
  ],
  verification: { google: 'google28a3dde07e12c4a9' },
  icons: {
    icon: [
      {
        url: '/images/logo.png',
        type: 'image/png',
      },
    ],
    apple: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${inter.variable} ${bebasNeue.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
