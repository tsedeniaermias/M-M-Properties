import './globals.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

// Removed the unused 'inter' variable
export const fontOutfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'M&M Apartment Suites',
  description: 'Experience comfort and style in our Airbnb suite',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontOutfit.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
