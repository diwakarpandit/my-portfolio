import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import './App.css'

export default function App() {
  return (
    <div className='bg-black'>
     <Navbar/>
     <Hero/>
     <Experience/>
    </div>
  )
}