import Image from 'next/image'
import './page.module.css'
import MainAccordion from "@/app/components/home/main-accordion";
import MainHero from "@/app/components/home/main-hero";
import MainContent from "@/app/components/home/main-content";

export default function Home() {
  return (
      <main>
          <MainHero />
          <MainAccordion />
          <MainContent />
      </main>
  )
}
