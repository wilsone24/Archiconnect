'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select"

interface Candidate {
  id: number
  name: string
  title: string
  status: 'Entrevista Inicial' | 'Entrevista Final' | 'Aceptado' | 'Rechazado'
}

export default function ProcesoReclutamiento() {
  const [candidates, setCandidates] = useState<Candidate[]>([])
  const router = useRouter()

  useEffect(() => {
    const storedProcesses = localStorage.getItem('recruitmentProcesses')
    if (storedProcesses) {
      setCandidates(JSON.parse(storedProcesses))
    }
  }, [])

  const handleStatusChange = (id: number, newStatus: Candidate['status']) => {
    const updatedCandidates = candidates.map(candidate => 
      candidate.id === id ? { ...candidate, status: newStatus } : candidate
    )
    setCandidates(updatedCandidates)
    localStorage.setItem('recruitmentProcesses', JSON.stringify(updatedCandidates))
  }

  const handleCancelRecruitment = (id: number) => {
    const updatedCandidates = candidates.filter(candidate => candidate.id !== id)
    setCandidates(updatedCandidates)
    localStorage.setItem('recruitmentProcesses', JSON.stringify(updatedCandidates))
  }

  const getStatusColor = (status: Candidate['status']) => {
    switch (status) {
      case 'Entrevista Inicial': return 'bg-blue-100 text-blue-800'
      case 'Entrevista Final': return 'bg-purple-100 text-purple-800'
      case 'Aceptado': return 'bg-green-100 text-green-800'
      case 'Rechazado': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Proceso de Reclutamiento</h1>
        {candidates.length === 0 ? (
          <p className="text-center text-gray-500">No hay candidatos en el proceso de reclutamiento actualmente.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {candidates.map(candidate => (
              <Card key={candidate.id} className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle>{candidate.name}</CardTitle>
                  <p className="text-sm text-gray-500">{candidate.title}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <Badge className={getStatusColor(candidate.status)}>{candidate.status}</Badge>
                    <Select
                      value={candidate.status}
                      onValueChange={(value) => handleStatusChange(candidate.id, value as Candidate['status'])}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Cambiar estado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Entrevista Inicial">Entrevista Inicial</SelectItem>
                        <SelectItem value="Entrevista Final">Entrevista Final</SelectItem>
                        <SelectItem value="Aceptado">Aceptado</SelectItem>
                        <SelectItem value="Rechazado">Rechazado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex justify-between mt-4">
                    <Button variant="outline" className="w-1/2 mr-2" onClick={() => handleCancelRecruitment(candidate.id)}>
                      Cancelar Proceso
                    </Button>
                    <Button className="w-1/2 ml-2">Ver Detalles</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

