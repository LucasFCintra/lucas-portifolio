'use client'

import React from 'react'

import { BsArrowDownRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Desenvolvo sites e aplicativos personalizados, unindo design atraente e alta performance, com tecnologia avançada, segurança, escalabilidade e suporte contínuo para atender às suas necessidades.',
    href: '' 
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: 'Crio interfaces intuitivas e atraentes, focando na experiência do usuário, com design inovador, usabilidade, acessibilidade e testes contínuos para garantir a satisfação e eficiência.',
    href: '' 
  },
  {
    num: '03',
    title: 'Landing Pages',
    description: 'Desenvolvo landing pages personalizadas e atraentes, focadas em conversão, com design otimizado, carregamento rápido, responsividade e integração contínua para maximizar seus resultados.',
    href: '' 
  },
  {
    num: '04',
    title: 'Portifólio web',
    description: 'Desenvolvo sites para portfólios web, combinando design elegante e funcionalidade, com navegação intuitiva, responsividade e otimização para destacar suas habilidades e conquistas.',
    href: '' 
  }
]

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
        <div className='container mx-auto'>
            <motion.div
              initial={{opacity: 0}}
              animate={{
                opacity: 1,
                transition: {
                  delay: 2.4,
                  duration: 0.4,
                  ease: 'easeIn'
                }
              }}
              className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
            >
              {services.map((service, index) => {
                return(
                  <div 
                    key={index}
                    className='flex-1 flex flex-col justify-center gap-6 group'
                  >
                    {/* top */}
                    <div className='w-full flex justify-between items-center'>
                      <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-accent'>{service.num}</div>
                      <Link 
                        href={service.href}
                        className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 group-hover:-rotate-45'
                      >
                        <BsArrowDownRight className='text-primary text-3xl' />
                      </Link>
                    </div>
                    {/* title */}
                    <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                    {/* description */}
                    <p className='text-white/60'>{service.description}</p>
                    {/* border */}
                    <div className='border-b border-white/20 w-full'></div>
                  </div>
                )
              })}
            </motion.div>
        </div>
    </section>
  )
}


export default Services