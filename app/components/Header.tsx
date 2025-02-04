"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image src="/mm.png" alt="Logo" width={40} height={40} className="w-auto h-8 sm:h-10" />
          </Link>
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">About</Link>
            <Link href="/rooms-and-suites" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Rooms & Suites</Link>
            <Link href="/things-to-do" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Things to Do</Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium">Contact</Link>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">About</Link>
            <Link href="/rooms-and-suites" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">Rooms & Suites</Link>
            <Link href="/things-to-do" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">Things to Do</Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">Contact</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

