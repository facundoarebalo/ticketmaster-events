import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Events from "./components/Events/Events"
import SingupForm from "./components/SingupForm/SingupForm"
import { useState, useRef } from 'react'


function App() {

  const [searchTerm, setSearchTerm] = useState('')
  const containerRef = useRef()

  const handleNavbarSearch = (term) => {
    setSearchTerm(term)
  }


  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      <Events searchTerm={searchTerm} />

    </>
  )
}

export default App
