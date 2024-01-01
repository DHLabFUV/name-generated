import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['vietnamese'] })

export const metadata = {
  title: 'Your name means:',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

