'use client'

import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'



const links = [
    {
        name: 'inicio',
        path: '/'
    },
    {
        name: 'serviços',
        path: '/services'
    },
    {
        name: 'resumo',
        path: '/resume'
    },
    {
        name: 'trabalhos',
        path: '/work'
    },
    {
        name: 'contato',
        path: '/contact'
    },
]

const Nav = () => {
    const pathname = usePathname()
  return (
    <nav className='flex gap-8'>
        {links.map((link, index) => {
            return(
                <Link 
                href={link.path} 
                key={index} 
                className={`${
                    link.path === pathname && "text-accent border-b-2 border-accent"} capitalize fontmedium hover:text-accent transaction-all`
                    }>
                    {link.name}
                </Link>
            )
        })}
    </nav>
  )
}

export default Nav