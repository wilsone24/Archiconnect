import { Header } from './components/header'
import { Footer } from './components/footer'
import { Button } from "@/app/components/ui/button"
import Link from 'next/link'
import { ArrowRight, Users, Briefcase, TrendingUp, Award, CheckCircle } from 'lucide-react'
import { Check, X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Conectando Talento Arquitectónico con Oportunidades Únicas</h1>
              <p className="text-xl mb-8">ArchiConnect: La solución integral que simplifica la búsqueda de profesionales y proyectos en el sector de la arquitectura y construcción</p>
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
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">¿Por qué elegir ArchiConnect?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Conexión Eficiente</h3>
                <p className="text-gray-600">Simplificamos la conexión entre empresas y profesionales, reduciendo tiempo y costos de contratación.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Briefcase className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Base de Datos Verificada</h3>
                <p className="text-gray-600">Accede a una amplia base de datos de profesionales y proyectos verificados en el sector.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <TrendingUp className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Gestión Transparente</h3>
                <p className="text-gray-600">Facilitamos una gestión transparente de proyectos desde el inicio hasta el fin del proceso de contratación.</p>
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
                  ArchiConnect está revolucionando la forma en que los profesionales y las empresas se conectan en el sector de la arquitectura y construcción. Nuestra plataforma ofrece una solución integral que combina las mejores características del mercado, superando las limitaciones de las alternativas existentes.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    <span className="text-gray-700">Catálogo extenso de profesionales disponibles</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    <span className="text-gray-700">Filtros avanzados de búsqueda por habilidades y requerimientos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    <span className="text-gray-700">Comisiones competitivas y proceso de contratación completo</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img src="/images/team/arqui.jpg?height=400&width=600" alt="Arquitectos trabajando" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Beneficios para Todos los Usuarios</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Para Contratistas</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-600">Acceso a una amplia base de profesionales calificados</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-600">Filtros avanzados para encontrar el talento ideal</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-600">Gestión eficiente de proyectos y comunicación</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Para Profesionales</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-600">Exposición a una variedad de oportunidades de proyectos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-600">Proceso de contratación transparente y seguro</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-600">Desarrollo profesional y networking en la industria</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Únete a la Revolución en Arquitectura y Construcción</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              ArchiConnect ofrece soluciones flexibles que se adaptan a tus necesidades, ya seas una empresa buscando el talento perfecto o un profesional en busca de oportunidades únicas. Juntos, estamos dinamizando el sector y promoviendo proyectos de calidad.
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Planes y Tarifas</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="relative overflow-hidden border-2 border-indigo-500">
                <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 rounded-bl-lg text-sm font-semibold">
                  Popular
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">Suscripción Premium</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold">$50.000</span>
                    <span className="text-gray-600">/mes</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Acceso ilimitado a la plataforma</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Búsqueda avanzada de profesionales</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Herramientas de gestión de proyectos</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Soporte prioritario</span>
                    </li>
                  </ul>
                  <div className="mt-6 space-y-2">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">10% de descuento</span> en suscripción semestral
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">20% de descuento</span> en suscripción anual
                    </p>
                  </div>
                </CardContent>
                <div className="p-6 bg-gray-50 mt-6">
                  <Button className="w-full">Suscribirse Ahora</Button>
                </div>
              </Card>

              <Card className="relative overflow-hidden border-2 border-indigo-500">
                <div className="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 rounded-bl-lg text-sm font-semibold">
                  Flexible
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">Servicio de Reclutamiento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold">5%</span>
                    <span className="text-gray-600"> del contrato</span>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Gestión completa del proceso de reclutamiento</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Selección de candidatos calificados</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Coordinación de entrevistas</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>Negociación de contratos</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Nota:</span> Las tarifas están sujetas a cambios según las necesidades específicas del proyecto.
                    </p>
                  </div>
                </CardContent>
                <div className="p-6 bg-gray-50 mt-6">
                  <Button className="w-full">Contactar para Más Información</Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

