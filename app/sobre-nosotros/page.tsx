import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import Image from 'next/image'
import { Building2, Users, Lightbulb, Target } from 'lucide-react'

export default function SobreNosotros() {
  const teamMembers = [
    { name: "Wilson Estrada", role: "CEO", image: "/images/team/Wilson.png?height=200&width=200"},
    { name: "Sofia Mejía", role: "CTO", image: "/images/team/ar.jpeg?height=200&width=200" },
    { name: "Ana Quesada", role: "COO", image: "/images/team/a.jpeg?height=200&width=200" },
    { name: "Daniela Martinez", role: "CMO", image: "/images/team/i.png?height=200&width=200" },
    { name: "Alejandro Díaz", role: "CFO", image: "/images/team/man.jpeg?height=200&width=200" },
    { name: "Luisangel Parra", role: "CIO", image: "/images/team/ar.jpeg?height=200&width=200" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Sobre ArchiConnect</h1>
        
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Nuestra Historia</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Fundada en 2023, ArchiConnect nació de la visión de un grupo de arquitectos y desarrolladores de software que identificaron la necesidad de una plataforma que conectara de manera eficiente el talento arquitectónico con oportunidades únicas en todo el mundo.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl mb-2 flex items-center">
                  <Target className="mr-2" />
                  Nuestra Misión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  En ArchiConnect, nos dedicamos a revolucionar la forma en que los profesionales de la arquitectura se conectan con proyectos innovadores. Nuestra misión es crear un ecosistema global que fomente la colaboración, la innovación y el crecimiento en el sector de la arquitectura y la construcción.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Nuestros Valores</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl mb-2 flex items-center">
                  <Building2 className="mr-2" />
                  Excelencia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Nos esforzamos por la excelencia en cada aspecto de nuestro servicio, desde la calidad de los profesionales en nuestra plataforma hasta la experiencia del usuario.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl mb-2 flex items-center">
                  <Users className="mr-2" />
                  Colaboración
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Creemos en el poder de la colaboración para impulsar la innovación y el progreso en el campo de la arquitectura y la construcción.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl mb-2 flex items-center">
                  <Lightbulb className="mr-2" />
                  Innovación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Constantemente buscamos nuevas formas de mejorar nuestra plataforma y ofrecer soluciones innovadoras a los desafíos de la industria.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Lo Que Nos Hace Únicos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Tecnología Avanzada</h3>
              <p>Utilizamos algoritmos de inteligencia artificial para hacer coincidir de manera óptima a los profesionales con los proyectos adecuados.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Comunidad Global</h3>
              <p>Conectamos talento de todo el mundo, fomentando la diversidad y el intercambio cultural en el diseño arquitectónico.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Sostenibilidad</h3>
              <p>Promovemos prácticas sostenibles en arquitectura y construcción a través de nuestra plataforma y comunidad.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Desarrollo Profesional</h3>
              <p>Ofrecemos recursos y oportunidades de aprendizaje para el crecimiento continuo de nuestros usuarios.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-40 h-40 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <Badge variant="secondary" className="mt-2">{member.role}</Badge>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

