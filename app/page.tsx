import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { ArrowRight, Users, Briefcase, TrendingUp, Award, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Conectando Visiones Arquitectónicas con Talento Excepcional</h1>
              <p className="text-xl mb-8">ArchiConect: La plataforma líder que une a profesionales de la arquitectura con proyectos innovadores</p>
              <div className="flex justify-center space-x-4">
                <Link href="/buscar">
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">Buscar Profesionales</Button>
                </Link>
                <Link href="#">
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-indigo-600">Publicar Proyecto</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">¿Por qué elegir ArchiConect?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Red de Talento Global</h3>
                <p className="text-gray-600">Accede a una comunidad diversa de arquitectos y profesionales de la construcción de todo el mundo.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Briefcase className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Proyectos Exclusivos</h3>
                <p className="text-gray-600">Descubre oportunidades únicas y colabora en proyectos innovadores que desafían los límites del diseño.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <TrendingUp className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Crecimiento Profesional</h3>
                <p className="text-gray-600">Expande tu red, mejora tus habilidades y lleva tu carrera al siguiente nivel con ArchiConect.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Transformando la Industria Arquitectónica</h2>
                <p className="text-lg mb-6 text-gray-600">
                  ArchiConect está revolucionando la forma en que los profesionales de la arquitectura se conectan con oportunidades extraordinarias. Nuestra plataforma utiliza tecnología avanzada para unir el talento creativo con proyectos innovadores, facilitando colaboraciones que dan forma al futuro de nuestros espacios urbanos y residenciales.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    <span className="text-gray-700">Más de 10,000 profesionales registrados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    <span className="text-gray-700">5,000+ proyectos completados con éxito</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    <span className="text-gray-700">Presente en más de 50 países</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img src="/placeholder.svg?height=400&width=600" alt="Arquitectos trabajando" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Únete a la Revolución Arquitectónica</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ya sea que estés buscando el próximo gran proyecto o el talento perfecto para dar vida a tu visión, ArchiConect es tu puente hacia el éxito.
            </p>
            <Link href="/registro">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                Comienza Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Reconocimientos y Logros</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <Award className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Mejor Plataforma de Networking 2023</h3>
                <p className="text-gray-600">ArchDaily Awards</p>
              </div>
              <div className="text-center">
                <Award className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Innovación en Reclutamiento</h3>
                <p className="text-gray-600">AEC Tech Symposium</p>
              </div>
              <div className="text-center">
                <Award className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Top 10 Startups en Arquitectura</h3>
                <p className="text-gray-600">TechCrunch</p>
              </div>
              <div className="text-center">
                <Award className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Impacto Social en Diseño</h3>
                <p className="text-gray-600">World Architecture Festival</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

