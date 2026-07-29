import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import CosaFacciamo from './components/CosaFacciamo.jsx'
import Products from './components/Products.jsx'
import Ricorrenze from './components/Ricorrenze.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CosaFacciamo />
        <Products />
        <Ricorrenze />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
