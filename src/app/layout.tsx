import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond, Geist_Mono } from 'next/font/google'
import { CustomCursor } from '@/components/cursor/CustomCursor'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'WeekendSync — From Idea to MVP in 7 Days',
  description: 'A rapid MVP delivery studio. One team. Seven days. A working product. From $2,500.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${cormorant.variable} ${inter.variable} ${geistMono.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
