'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { ProfessionalCard } from '../../components/professional-card'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { SearchIcon, FilterIcon } from 'lucide-react'

// Simulación de datos de profesionales
const professionals = [
  { id: 1, name: "Ana García", title: "Arquitecta Senior", skills: ["Diseño Residencial", "Arquitectura Sostenible", "Planificación Urbana"], rating: 4.8, image: "/placeholder.svg?height=300&width=400", projects: 32 },
  { id: 2, name: "Carlos Rodríguez", title: "Diseñador de Interiores", skills: ["Diseño Comercial", "Remodelación", "Visualización 3D"], rating: 4.6, image: "/placeholder.svg?height=300&width=400", projects: 28 },
  { id: 3, name: "Laura Martínez", title: "Arquitecta Paisajista", skills: ["Diseño de Jardines", "Arquitectura Sostenible", "Planificación Urbana"], rating: 4.9, image: "/placeholder.svg?height=300&width=400", projects: 45 },
  { id: 4, name: "Miguel Sánchez", title: "Arquitecto de Conservación", skills: ["Restauración", "Patrimonio Histórico", "Diseño Sostenible"], rating: 4.7, image: "/placeholder.svg?height=300&width=400", projects: 37 },
  { id: 5, name: "Elena Torres", title: "Arquitecta de Proyectos", skills: ["Gestión de Proyectos", "Diseño Comercial", "Arquitectura Sostenible"], rating: 4.5, image: "/placeholder.svg?height=300&width=400", projects: 25 },
  { id: 6, name: "Javier López", title: "Arquitecto Técnico", skills: ["Supervisión de Obras", "Eficiencia Energética", "Normativa de Construcción"], rating: 4.8, image: "/placeholder.svg?height=300&width=400", projects: 41 },
]

const allSkills = Array.from(new Set(professionals.flatMap(p => p.skills)))

export default function BuscarProfesionales() {
  const [filteredProfessionals, setFilteredProfessionals] = useState(professionals)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [minRating, setMinRating] = useState(0)
  const [sortBy, setSortBy] = useState("rating")
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    if (!isLoggedIn) {
      router.push('/iniciar-sesion')
    }
  }, [router])

  const handleSearch = () => {
    const filtered = professionals.filter(p => 
      (p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       p.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))) &&
      (selectedSkills.length === 0 || selectedSkills.every(skill => p.skills.includes(skill))) &&
      p.rating >= minRating
    )
    const sorted = filtered.sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating
      if (sortBy === "projects") return b.projects - a.projects
      return 0
    })
    setFilteredProfessionals(sorted)
  }

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    )
  }

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    router.push('/')
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Buscar Profesionales</h1>
          <Button onClick={handleLogout} variant="outline">Cerrar Sesión</Button>
        </div>
        <div className="grid md:grid-cols-[300px_1fr] gap-8">
          <aside className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <FilterIcon className="mr-2" /> Filtros
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Habilidades</label>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {allSkills.map(skill => (
                    <label key={skill} className="flex items-center">
                      <Checkbox
                        checked={selectedSkills.includes(skill)}
                        onCheckedChange={() => handleSkillToggle(skill)}
                      />
                      <span className="ml-2 text-sm">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Calificación mínima</label>
                <Slider
                  min={0}
                  max={5}
                  step={0.1}
                  value={[minRating]}
                  onValueChange={(value) => setMinRating(value[0])}
                />
                <span className="text-sm text-gray-500">{minRating.toFixed(1)}</span>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ordenar por</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar orden" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Calificación</SelectItem>
                    <SelectItem value="projects">Número de proyectos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </aside>
          <div>
            <div className="mb-6 flex gap-4">
              <div className="flex-grow">
                <Input
                  type="text"
                  placeholder="Buscar por nombre o habilidad"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button onClick={handleSearch}>
                <SearchIcon className="mr-2" /> Buscar
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProfessionals.map(professional => (
                <ProfessionalCard key={professional.id} {...professional} />
              ))}
            </div>
            {filteredProfessionals.length === 0 && (
              <p className="text-center text-gray-500 mt-8">No se encontraron profesionales que coincidan con los criterios de búsqueda.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

