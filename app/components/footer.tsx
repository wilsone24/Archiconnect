import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ArchiConect</h3>
            <p className="text-gray-400">Conectando talento arquitectónico con oportunidades únicas en todo el mundo.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white">Inicio</Link></li>
              <li><Link href="/buscar" className="text-gray-400 hover:text-white">Buscar Profesionales</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Proyectos</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Sobre Nosotros</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <p className="text-gray-400">Email: info@archiconect.com</p>
            <p className="text-gray-400">Teléfono: +1 234 567 890</p>
            <p className="text-gray-400">Dirección: 123 Calle Arquitectura, Ciudad Creativa, CP 12345</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">&copy; 2023 ArchiConect. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

