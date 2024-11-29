import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { StarIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react'

interface ProfessionalCardProps {
  id: number
  name: string
  title: string
  skills: string[]
  rating: number
  image: string
  projects: number
  hourlyRate: number
  availability: string
  location: string
  onStartRecruitment: (id: number) => void
}

export function ProfessionalCard({ id, name, title, skills, rating, image, projects, hourlyRate, availability, location, onStartRecruitment }: ProfessionalCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="transition-transform hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl mb-2">{name}</CardTitle>
        <p className="text-sm text-gray-500 mb-2">{title}</p>
        <div className="flex items-center mb-2">
          <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
          <span className="font-semibold">{rating.toFixed(1)}</span>
          <span className="text-gray-500 text-sm ml-2">({projects} proyectos)</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="secondary">{skill}</Badge>
          ))}
          {skills.length > 3 && (
            <Badge variant="outline">+{skills.length - 3}</Badge>
          )}
        </div>
        {expanded && (
          <div className="mt-4 space-y-2">
            <p><strong>Tarifa por hora:</strong> ${hourlyRate}/hora</p>
            <p><strong>Disponibilidad:</strong> {availability}</p>
            <p><strong>Ubicación:</strong> {location}</p>
          </div>
        )}
        <div className="flex justify-between items-center mt-4">
          <Button variant="outline" onClick={() => setExpanded(!expanded)} className="flex-1 mr-2">
            {expanded ? (
              <>
                <ChevronUpIcon className="w-4 h-4 mr-2" />
                Menos info
              </>
            ) : (
              <>
                <ChevronDownIcon className="w-4 h-4 mr-2" />
                Más info
              </>
            )}
          </Button>
          <Button onClick={() => onStartRecruitment(id)} className="flex-1 ml-2">
            Reclutar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

