import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, Target, Users, Award, CheckCircle, ArrowRight } from 'lucide-react'

export default function About() {
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

  const benefits = [
    {
      icon: CheckCircle,
      title: "Controle de Erosão",
      description: "Proteção eficaz contra erosão hídrica e eólica"
    },
    {
      icon: CheckCircle,
      title: "Retenção de Umidade",
      description: "Favorece a germinação de sementes e crescimento vegetal"
    },
    {
      icon: CheckCircle,
      title: "Material Biodegradável",
      description: "100% natural, sem impacto ambiental negativo"
    },
    {
      icon: CheckCircle,
      title: "Instalação Simples",
      description: "Aplicação rápida e eficiente em qualquer terreno"
    },
    {
      icon: CheckCircle,
      title: "Versatilidade",
      description: "Ideal para encostas, taludes e margens de rios"
    },
    {
      icon: CheckCircle,
      title: "Durabilidade",
      description: "Proteção de longo prazo com degradação controlada"
    }
  ]

  const stats = [
    {
      icon: Target,
      number: "15+",
      label: "Anos de Experiência",
      description: "Especialistas em soluções ambientais"
    },
    {
      icon: Users,
      number: "1000+",
      label: "Projetos Concluídos",
      description: "Em todo território nacional"
    },
    {
      icon: Leaf,
      number: "100%",
      label: "Sustentável",
      description: "Compromisso com o meio ambiente"
    },
    {
      icon: Award,
      number: "98%",
      label: "Satisfação",
      description: "Clientes recomendam nossos serviços"
    }
  ]

  return (
    <section id="sobre" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-0 w-64 h-64 bg-primary-50 rounded-full opacity-50"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-0 w-48 h-48 bg-primary-100 rounded-full opacity-30"
          animate={{
            scale: [1.1, 1, 1.1],
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
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.div
              className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full text-primary-600 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <Leaf size={16} />
              <span>Sobre a NTC Ambiental</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Pioneiros em{' '}
              <span className="gradient-text">soluções sustentáveis</span>{' '}
              para contenção de solo
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Há mais de 15 anos desenvolvendo e fornecendo biomantas de fibra de coco 
              para projetos de recuperação ambiental e controle de erosão em todo o Brasil.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div variants={itemVariants} className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                <img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754663622964_cssdh5pd2u_biomanta-canais-de-descarga.jpg"
                  alt="Biomanta em Canais de Descarga"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </motion.div>
              
              {/* Background decoration */}
              <motion.div
                className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-primary rounded-2xl opacity-10"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  Sustentabilidade que faz a diferença!
                </h3>
                
                <p className="text-lg text-gray-600">
                  As biomantas de fibra de coco são soluções sustentáveis e eficazes para 
                  controle de erosão em diversas aplicações ambientais. Produzidas a partir 
                  de cascas de coco, elas oferecem retenção de umidade, favorecendo a 
                  germinação de sementes, enquanto protegem solos de deslizamentos e erosão hídrica.
                </p>
                
                <p className="text-lg text-gray-600">
                  Fortalecendo áreas urbanas e rurais, essas mantas biodegradáveis são ideais 
                  para projetos de recuperação de encostas, taludes e margens de rios. Além disso, 
                  sua instalação é simples e rápida, tornando-se uma escolha prática e ecologicamente 
                  correta para preservação ambiental.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                    whileHover={{ scale: 1.05, backgroundColor: '#f0fdf4' }}
                    transition={{ duration: 0.2 }}
                  >
                    <benefit.icon className="text-primary-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="#contato"
                className="btn-primary inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="pt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center space-y-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto"
                    whileHover={{ backgroundColor: '#006837' }}
                    transition={{ duration: 0.3 }}
                  >
                    <stat.icon 
                      className="text-primary-600" 
                      size={24}
                    />
                  </motion.div>
                  
                  <div>
                    <motion.div
                      className="text-4xl font-bold text-primary-600"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="font-semibold text-gray-900">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}