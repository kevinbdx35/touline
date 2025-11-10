import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Craftsmanship from './components/Craftsmanship'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Craftsmanship />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
