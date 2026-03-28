import type { Metadata } from 'next'
import { Bebas_Neue, Geist, Geist_Mono, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' });

export const metadata: Metadata = {
  title: 'Smart Art Link Metals | Wrought Iron Fabrication Onitsha',
  description: 'Expert wrought iron fabrication services in Onitsha. Custom gates, fences, burglary proof installations, staircases, and decorative ironwork.',
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
