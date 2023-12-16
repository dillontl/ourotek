import Image from 'next/image'
import './page.module.css'
import MainAccordion from "@/app/components/main-accordion";
import MainHero from "@/app/components/main-hero";

export default function Home() {
  return (
      <main>
          <MainHero />
          <MainAccordion />
      </main>
  )
}
