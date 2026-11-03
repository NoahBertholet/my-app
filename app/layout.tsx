import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SITE_NAME } from '@/lib/site'

export const metadata: Metadata = {
  title: SITE_NAME,
  description: 'Mon site personnel',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="mx-auto w-full max-w-4xl flex-1 p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}