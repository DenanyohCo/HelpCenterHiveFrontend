import type { Metadata } from 'next'
import { siteConfig } from "@/config/site";
import { Inter, Open_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Navbar } from '../components/navbar'
import Link from 'next/link'
import Footer from '@/components/footer'

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

const font = Open_Sans({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'The best Help Center Page Examples for Design Inspiration - Help Center Hive',
//   description: "Looking for help center page inspiration? Look no further. Help Center Hive curates and showcases the best help center and support center designs on the web.",
// }

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
              <Navbar />
              <main className="container mx-auto max-w-7xl py-16 px-6 flex-grow">
                {children}
              </main>
              <Footer />
            </div>
        </Providers>
      </body>
    </html>
  )
}

