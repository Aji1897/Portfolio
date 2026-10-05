import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Hero from './sections/Hero.jsx'
import Experience from './sections/Experience.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
