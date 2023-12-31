import Header from '@/app/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/app/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chibuikem Nwauche | Personal Portfolio',
  description: 'Chibuikem is a Full Stack Software Developer with some years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-700`} suppressHydrationWarning={true}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
