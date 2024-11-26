'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '../../components/header'
import { Footer } from '../../components/footer'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useToast } from "@/components/use-toast"
import { ToastProvider } from "@/components/toast"

// Array de correos y contraseñas permitidos
const allowedEmails = ['wilsone@uninorte.edu.co']
const allowedPasswords = ['Wilson24']

export default function IniciarSesion() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const emailIndex = allowedEmails.indexOf(email)
    if (emailIndex !== -1 && allowedPasswords[emailIndex] === password) {
      // Inicio de sesión exitoso
      localStorage.setItem('isLoggedIn', 'true')
      router.push('/buscar')
    } else {
      // Inicio de sesión fallido
      toast({
        title: "Error de inicio de sesión",
        description: "Correo electrónico o contraseña incorrectos.",
        variant: "destructive",
      })
    }
  }

  return (
    <ToastProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Iniciar Sesión</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <Button type="submit" className="w-full">Iniciar Sesión</Button>
              </form>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    </ToastProvider>
  )
}

