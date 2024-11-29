'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from "@/app/components/ui/button"
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
          <ul className="flex space-x-1">
  {[
    { href: "/", label: "Inicio" },
    { href: "/sobre-nosotros", label: "Sobre Nosotros" },
    ...(isLoggedIn ? [
      { href: "/buscar", label: "Buscar Profesionales" },
      { href: "/reclutamiento", label: "Proceso de Reclutamiento" }
    ] : [])
  ].map(({ href, label }) => (
    <li key={href}>
      <Link
        href={href}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out
          ${pathname === href
            ? "bg-indigo-100 text-indigo-800"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          }`}
      >
        {label}
      </Link>
    </li>
  ))}
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
