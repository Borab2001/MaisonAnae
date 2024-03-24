import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ModalProvider from '@/providers/modal-provider'
import { Toaster } from '@/components/ui/toaster'

import './globals.css'
import ClientOnly from '@/components/client-only'

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
			<ClientOnly>
				<ModalProvider />
				<Toaster />
				<Navbar />
			</ClientOnly>
			<div className="">
				{children}
			</div>
			<ClientOnly>
				<Footer />
			</ClientOnly>
		</body>
    </html>
  )
}