import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, ArrowUp, Leaf, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const quickLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre Nós' },
    { href: '#produtos', label: 'Produtos' },
    { href: '#contato', label: 'Contato' }
  ]

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefone Principal',
      value: '(11) 5242-4280',
      href: 'tel:1152424280'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '(19) 98361-0058',
      href: 'https://wa.me/5519983610058'
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'contato@ntcbrasil.com.br',
      href: 'mailto:contato@ntcbrasil.com.br'
    },
    {
      icon: MapPin,
      label: 'Atendimento',
      value: 'Todo Brasil',
      href: '#'
    }
  ]

  const services = [
    'Biomanta de Fibra de Coco',
    'Controle de Erosão',
    'Contenção de Solo',
    'Recuperação Ambiental',
    'Consultoria Técnica',
    'Suporte Especializado'
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-primary-600/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-24 h-24 bg-primary-500/10 rounded-full"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-16"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                <motion.img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754663630360_0.png"
                  alt="NTC Ambiental"
                  className="h-12 w-auto object-contain filter brightness-0 invert"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
                
                <p className="text-gray-300 leading-relaxed">
                  Especialistas em soluções sustentáveis para contenção de solo e controle de erosão. 
                  Mais de 15 anos oferecendo produtos de qualidade e responsabilidade ambiental.
                </p>
              </div>

              <div className="flex items-center space-x-2 text-primary-400">
                <Leaf size={16} />
                <span className="text-sm font-medium">100% Sustentável</span>
              </div>

              {/* Social Media */}
              <div className="space-y-3">
                <h4 className="font-semibold text-lg">Siga-nos</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://facebook.com/ntcbrasil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 p-3 rounded-full hover:bg-primary-600 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Facebook size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-semibold">Links Rápidos</h3>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="block text-gray-300 hover:text-primary-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-semibold">Nossos Serviços</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0" />
                    <span className="text-sm">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-semibold">Contato</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start space-x-3 text-gray-300 hover:text-primary-400 transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="bg-gray-700 p-2 rounded-lg group-hover:bg-primary-600 transition-colors duration-300 flex-shrink-0 mt-1"
                      whileHover={{ rotate: 5 }}
                    >
                      <info.icon size={16} />
                    </motion.div>
                    <div>
                      <div className="font-medium">{info.label}</div>
                      <div className="text-sm">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 mb-12 text-center"
          >
            <div className="space-y-4 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold">
                Pronto para seu próximo projeto sustentável?
              </h3>
              
              <p className="text-primary-100 text-lg">
                Entre em contato conosco e descubra como podemos ajudar seu projeto.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://wa.me/5519983610058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={18} />
                  <span>WhatsApp</span>
                </motion.a>
                
                <motion.a
                  href="#contato"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={18} />
                  <span>Enviar E-mail</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>© 2024 NTC Ambiental. Todos os direitos reservados.</p>
              <p className="flex items-center justify-center md:justify-start space-x-1 mt-1">
                <span>Criado com</span>
                <Heart size={14} className="text-red-500" />
                <span>por</span>
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                >
                  Papum
                </a>
              </p>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="bg-primary-600 hover:bg-primary-500 p-3 rounded-full transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}