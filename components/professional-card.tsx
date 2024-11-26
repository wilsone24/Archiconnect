import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StarIcon } from 'lucide-react'

interface ProfessionalCardProps {
  id: number
  name: string
  title: string
  skills: string[]
  rating: number
  image: string
  projects: number
}

export function ProfessionalCard({ id, name, title, skills, rating, image, projects }: ProfessionalCardProps) {
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
        <Button className="w-full">Ver Perfil</Button>
      </CardContent>
    </Card>
  )
}

