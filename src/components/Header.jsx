import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#produtos', label: 'Produtos' },
    { href: '#contato', label: 'Contato' }
  ]

  return (
    <>
      {/* Top contact bar */}
      <motion.div 
        className="bg-gradient-primary text-white py-2 text-sm"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>(11) 5242-4280</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>contato@ntcbrasil.com.br</span>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <span className="text-xs">Soluções sustentáveis para todo o Brasil</span>
          </div>
        </div>
      </motion.div>

      {/* Main header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-100' 
            : 'bg-transparent'
        }`}
        style={{ marginTop: isScrolled ? '0' : '40px' }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754663630360_0.png"
                alt="NTC Ambiental"
                className="h-12 w-auto object-contain"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-primary-600' 
                      : 'text-gray-800 hover:text-primary-600'
                  }`}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.a>
              ))}
              
              <motion.a
                href="https://wa.me/5519983610058"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={16} />
                <span>WhatsApp</span>
              </motion.a>
            </nav>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden p-2 rounded-lg transition-colors duration-200"
              onClick={toggleMenu}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-800" />
              ) : (
                <Menu size={24} className="text-gray-800" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden bg-white border-t border-gray-100 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-gray-800 hover:text-primary-600 font-medium py-2 transition-colors duration-200"
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
              
              <motion.a
                href="https://wa.me/5519983610058"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center space-x-2 mt-4"
                onClick={closeMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Phone size={16} />
                <span>WhatsApp</span>
              </motion.a>
            </nav>
          </div>
        </motion.div>
      </motion.header>
    </>
  )
}