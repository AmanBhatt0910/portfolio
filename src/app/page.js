'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Scene3D from '@/components/Scene3D'

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Scene3D />
      {/* Skills, Projects, Contact – coming next */}
    </main>
  )
}
