import DrawerButton from '@/components/DrawerButton'
import Providers from '@/components/Providers'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/header/Header'
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KANTIN PM',
  description: 'E-Kantin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="drawer">
            <DrawerButton />
            <div className="drawer-content">
              <div className="min-h-screen flex flex-col">
                <Header />
                {children}
                <SpeedInsights/>
                <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                  <p>
                   Made with ❤️ - F
                  </p>
                </footer>
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <Sidebar />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
