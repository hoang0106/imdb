import Header from '@/components/Header'
import './globals.css'
import Providers from './Providers'
import NavBar from '@/components/NavBar'
import SearchBox from '@/components/SearchBox'

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
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  )
}
