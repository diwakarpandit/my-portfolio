import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import './App.css'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className='bg-black'>
     <Navbar/>
     <Hero/>
     <Skills/>
     <Experience/>
     <Contact/>
     <Footer/>
    </div>
  )
}