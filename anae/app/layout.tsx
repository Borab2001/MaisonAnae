import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from '@/components/footer'

import './globals.css'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maison Anaé',
  description: 'Le site e-commerce de Maison Anaé',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
