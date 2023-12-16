import 'bootstrap/dist/css/bootstrap.min.css'
import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Navigation from "@/app/components/navigation";
import BootstrapInit from "@/app/components/bootstrap-init";
import '@fortawesome/fontawesome-svg-core/styles.css'

const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700'] })

const web_description = "Ourotek Solutions - Premier Software Consulting in Phoenix, AZ. Specializing in innovative tech solutions, custom software development, and expert IT consultancy. Transform your business with cutting-edge technology and tailored strategies. Visit us for unparalleled service and support in software engineering."

export const metadata: Metadata = {
  title: 'OuroTek Systems',
  description: web_description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={ibmPlexMono.className}>
    {/* initialize bootstrap js */}
    <BootstrapInit />
    <Navigation></Navigation>
    {children}
    </body>
    </html>
  )
}
