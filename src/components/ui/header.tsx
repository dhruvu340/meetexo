'use client'

import React, { useState } from 'react'
import { Button } from './button'
import { Menu, X } from 'lucide-react'

type Props = {}

const Header = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Product', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'About Us', href: '#' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className='sticky top-0 z-50 w-full border-b border-red-900/30 backdrop-blur-lg bg-black/95'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          
          <div className='flex-shrink-0'>
            <a
              href='#'
              className='text-2xl md:text-2xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent hover:from-red-500 hover:to-red-400 transition-all duration-300'
            >
              Meetexo
            </a>
          </div>

          
          <nav className='hidden md:flex items-center gap-8'>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className='text-xl font-medium text-gray-300 hover:text-red-500 transition-colors duration-200 relative group'
              >
                {item.label}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300'></span>
              </a>
            ))}
          </nav>

          
          <div className='hidden md:flex items-center gap-3'>
            <Button
              variant='ghost'
              className='text-gray-300 text-xl hover:text-red-500 cursor-pointer hover:bg-red-950/30 transition-colors duration-200'
            >
              Login
            </Button>
            <Button className='bg-red-600 text-xl p-7 cursor-pointer hover:bg-red-700 text-white shadow-lg shadow-red-600/40 hover:shadow-red-600/60 transition-all duration-200'>
              Get Started
            </Button>
          </div>

         
          <button
            onClick={toggleMenu}
            className='md:hidden p-2 rounded-lg hover:bg-red-950/40 transition-colors duration-200'
            aria-label='Toggle menu'
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className='w-6 h-6 text-red-500' />
            ) : (
              <Menu className='w-6 h-6 text-gray-300' />
            )}
          </button>
        </div>

        
        {isOpen && (
          <nav className='md:hidden pb-4 border-t border-red-900/30'>
            <div className='flex flex-col space-y-1 pt-4'>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className='px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-red-950/40 hover:text-red-500 transition-colors duration-200'
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className='flex flex-col gap-2 pt-4 border-t border-red-900/30'>
                <Button
                  variant='ghost'
                  className='w-full justify-center text-gray-300 hover:bg-red-950/40 hover:text-red-500'
                >
                  Login
                </Button>
                <Button className='w-full justify-center bg-red-600 hover:bg-red-700 text-white'>
                  Get Started
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>

      
      <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent'></div>
    </header>
  )
}

export default Header