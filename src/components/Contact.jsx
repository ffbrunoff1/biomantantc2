import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle, Clock, User } from 'lucide-react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const recaptchaRef = useRef(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recipientEmail: 'contato@ntcbrasil.com.br',
          token
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
        recaptchaRef.current.reset()
      } else {
        throw new Error('Erro ao enviar mensagem')
      }
    } catch (error) {
      console.error('Erro:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone Principal",
      info: "(11) 5242-4280",
      link: "tel:1152424280",
      description: "Horário comercial: 8h às 18h"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      info: "(19) 98361-0058",
      link: "https://wa.me/5519983610058",
      description: "Atendimento rápido e direto"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@ntcbrasil.com.br",
      link: "mailto:contato@ntcbrasil.com.br",
      description: "Resposta em até 24h"
    },
    {
      icon: MapPin,
      title: "Atendimento",
      info: "Todo Brasil",
      link: "#",
      description: "Cobertura nacional"
    }
  ]

  return (
    <section id="contato" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-0 w-64 h-64 bg-primary-50 rounded-full opacity-30"
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
          className="absolute bottom-20 left-0 w-48 h-48 bg-primary-100 rounded-full opacity-20"
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
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.div
              className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full text-primary-600 font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <User size={16} />
              <span>Entre em Contato</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Vamos conversar sobre seu{' '}
              <span className="gradient-text">projeto sustentável</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa equipe está pronta para ajudar você a encontrar a melhor solução 
              em biomanta de fibra de coco para seu projeto.
            </p>
          </motion.div>

          {/* Contact Info Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card p-6 text-center space-y-4 group cursor-pointer"
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
                  <info.icon 
                    className="text-primary-600 group-hover:text-white" 
                    size={24} 
                  />
                </motion.div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-primary-600 font-medium text-lg">
                    {info.info}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {info.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Form */}
              <motion.div
                className="card p-8"
                whileHover={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Solicite seu Orçamento
                    </h3>
                    <p className="text-gray-600">
                      Preencha o formulário e entraremos em contato rapidamente
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Seu nome completo"
                        />
                      </motion.div>

                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="seu@email.com"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Telefone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="(11) 99999-9999"
                        />
                      </motion.div>

                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Assunto
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="form-input"
                        >
                          <option value="">Selecione um assunto</option>
                          <option value="Orçamento">Solicitar Orçamento</option>
                          <option value="Informações">Informações Técnicas</option>
                          <option value="Parceria">Parceria Comercial</option>
                          <option value="Suporte">Suporte Técnico</option>
                          <option value="Outros">Outros</option>
                        </select>
                      </motion.div>
                    </div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="form-textarea"
                        placeholder="Descreva seu projeto e como podemos ajudar..."
                      />
                    </motion.div>

                    {/* reCAPTCHA */}
                    <div className="flex justify-center">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        size="invisible"
                        sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                      />
                    </div>

                    {/* Submit Status */}
                    {submitStatus && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex items-center space-x-2 p-4 rounded-lg ${
                          submitStatus === 'success' 
                            ? 'bg-green-50 text-green-700 border border-green-200' 
                            : 'bg-red-50 text-red-700 border border-red-200'
                        }`}
                      >
                        {submitStatus === 'success' ? (
                          <CheckCircle size={20} />
                        ) : (
                          <AlertCircle size={20} />
                        )}
                        <span>
                          {submitStatus === 'success' 
                            ? 'Mensagem enviada com sucesso! Entraremos em contato em breve.' 
                            : 'Erro ao enviar mensagem. Tente novamente ou entre em contato via WhatsApp.'
                          }
                        </span>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Enviar Mensagem</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Quick Contact */}
              <motion.div className="space-y-8">
                <div className="card p-8 bg-gradient-primary text-white">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="bg-white/20 p-3 rounded-lg">
                        <Clock className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Atendimento Rápido</h3>
                        <p className="opacity-90">Resposta em até 2 horas úteis</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-lg opacity-90">
                        Precisa de uma resposta mais rápida? 
                        Entre em contato diretamente via WhatsApp!
                      </p>
                      
                      <motion.a
                        href="https://wa.me/5519983610058"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2 w-full justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Phone size={18} />
                        <span>WhatsApp: (19) 98361-0058</span>
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="card p-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900">
                      Por que escolher a NTC Ambiental?
                    </h4>
                    
                    <div className="space-y-3">
                      {[
                        'Mais de 15 anos de experiência',
                        'Produtos 100% sustentáveis',
                        'Atendimento personalizado',
                        'Entrega para todo o Brasil',
                        'Suporte técnico especializado'
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <CheckCircle className="text-primary-600" size={16} />
                          <span className="text-gray-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}