import Header from '@/components/Header'
import './globals.css'
import Providers from './Providers'
import NavBar from '@/components/NavBar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />
          {/* Navbar */}
          <NavBar />
          {/* Search */}
          {children}
        </Providers>
      </body>
    </html>
  )
}
