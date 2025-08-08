import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, Shield, Droplets, Mountain, ArrowRight, Phone, CheckCircle } from 'lucide-react'

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  const applications = [
    {
      icon: Mountain,
      title: "Encostas e Taludes",
      description: "Proteção eficaz contra deslizamentos e erosão em terrenos inclinados."
    },
    {
      icon: Droplets,
      title: "Margens de Rios",
      description: "Estabilização de margens e controle da erosão hídrica."
    },
    {
      icon: Shield,
      title: "Canais de Drenagem",
      description: "Revestimento biodegradável para canais e sistemas de drenagem."
    },
    {
      icon: Leaf,
      title: "Áreas Degradadas",
      description: "Recuperação de solos degradados e revegetação natural."
    }
  ]

  const features = [
    "Material 100% biodegradável",
    "Instalação rápida e simples",
    "Favorece germinação de sementes",
    "Controla erosão hídrica e eólica",
    "Retém umidade do solo",
    "Durabilidade de 2-4 anos",
    "Não agride o meio ambiente",
    "Custo-benefício excelente"
  ]

  const productImages = [
    {
      src: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754663622493_ghmdqniijoc_biomanta-506x372.jpg",
      alt: "Biomanta de Fibra de Coco"
    },
    {
      src: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754663622964_cssdh5pd2u_biomanta-canais-de-descarga.jpg",
      alt: "Biomanta em Canais de Descarga"
    },
    {
      src: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754663623801_d3hi8n5lqx4_biomanta-obra.jpg",
      alt: "Biomanta em Obra"
    }
  ]

  return (
    <section id="produtos" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-primary-200 rounded-full opacity-20"
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-24 h-24 bg-primary-300 rounded-full opacity-25"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-primary-600 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <Leaf size={16} />
              <span>Nossos Produtos</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              <span className="gradient-text">Biomanta de Fibra de Coco</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solução sustentável e eficaz para controle de erosão, proteção de solo 
              e recuperação de áreas degradadas em projetos ambientais.
            </p>
          </motion.div>

          {/* Product Hero */}
          <motion.div variants={itemVariants} className="relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Product Info */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">
                    Proteção Natural para Seus Projetos
                  </h3>
                  
                  <p className="text-lg text-gray-600">
                    As biomantas de fibra de coco são produzidas a partir de cascas de coco 
                    100% naturais, oferecendo uma solução ecológica para controle de erosão. 
                    Sua estrutura porosa permite a retenção de umidade e favorece a germinação 
                    de sementes, criando um ambiente ideal para o crescimento da vegetação.
                  </p>
                </div>

                {/* Features List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <CheckCircle className="text-primary-600" size={16} />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="https://wa.me/5519983610058"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone size={18} />
                    <span>Solicitar Orçamento</span>
                  </motion.a>
                  
                  <motion.a
                    href="#contato"
                    className="btn-secondary inline-flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Mais Informações</span>
                    <ArrowRight size={18} />
                  </motion.a>
                </div>
              </div>

              {/* Product Images */}
              <motion.div className="relative">
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={productImages[0].src}
                    alt={productImages[0].alt}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </motion.div>
                
                {/* Secondary images */}
                <motion.div
                  className="absolute -bottom-6 -left-6 z-20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={productImages[1].src}
                    alt={productImages[1].alt}
                    className="w-32 h-24 object-cover rounded-xl shadow-xl border-4 border-white"
                  />
                </motion.div>

                <motion.div
                  className="absolute -top-6 -right-6 z-20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={productImages[2].src}
                    alt={productImages[2].alt}
                    className="w-32 h-24 object-cover rounded-xl shadow-xl border-4 border-white"
                  />
                </motion.div>

                {/* Background decoration */}
                <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-primary rounded-2xl opacity-10 -z-10" />
              </motion.div>
            </div>
          </motion.div>

          {/* Applications */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                Aplicações da Biomanta
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Versátil e eficaz em diversas situações que exigem proteção contra erosão 
                e recuperação ambiental.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="card p-6 text-center space-y-4 group"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(0, 104, 55, 0.1)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary-600 transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <application.icon 
                      className="text-primary-600 group-hover:text-white" 
                      size={24} 
                    />
                  </motion.div>
                  
                  <h4 className="text-xl font-semibold text-gray-900">
                    {application.title}
                  </h4>
                  
                  <p className="text-gray-600">
                    {application.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <div className="space-y-6 max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold">
                Pronto para seu próximo projeto sustentável?
              </h3>
              
              <p className="text-xl opacity-90">
                Entre em contato conosco e descubra como nossas biomantas de fibra de coco 
                podem proteger e fortalecer seu projeto ambiental.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://wa.me/5519983610058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={18} />
                  <span>WhatsApp: (19) 98361-0058</span>
                </motion.a>
                
                <motion.a
                  href="tel:1152424280"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 inline-flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={18} />
                  <span>(11) 5242-4280</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}