import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

// Lazy load components below the fold
const Products = lazy(() => import('./components/Products'))
const Craftsmanship = lazy(() => import('./components/Craftsmanship'))
const Contact = lazy(() => import('./components/Contact'))

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
)

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <Products />
        <Craftsmanship />
        <Contact />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
