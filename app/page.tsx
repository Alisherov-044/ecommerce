'use client'
import { categories } from '@/data'
import { CategoriesSection, HeroSection, OffersSection } from '@/app/home'

export default function Home() {
  return (
    <main className="container tablet:p-0">
      <HeroSection />
      <OffersSection />
      <CategoriesSection
        categories={categories}
        image="/categories/sofa.png"
        link="#"
        title="Home and outdoor"
      />
    </main>
  )
}
