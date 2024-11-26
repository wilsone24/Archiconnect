'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation'

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true')
  }, [pathname])

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">ArchiConect</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-gray-600 hover:text-gray-800">Inicio</Link></li>
            <li><Link href="/sobre-nosotros" className="text-gray-600 hover:text-gray-800">Sobre Nosotros</Link></li>
            {isLoggedIn && (
              <li><Link href="/buscar" className="text-gray-600 hover:text-gray-800">Buscar Profesionales</Link></li>
            )}
          </ul>
        </nav>
        {!isLoggedIn && (
          <Link href="/iniciar-sesion">
            <Button variant="default" className="bg-indigo-600 hover:bg-indigo-700 text-white">Iniciar Sesión</Button>
          </Link>
        )}
      </div>
    </header>
  )
}

