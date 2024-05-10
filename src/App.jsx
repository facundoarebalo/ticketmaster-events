import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Events from "./components/Events/Events"
import SingupForm from "./components/SingupForm/SingupForm"
import { useState, useEffect } from 'react'


function App() {

  const [searchTerm, setSearchTerm] = useState('')






  const handleNavbarSearch = (term) => {
    setSearchTerm(term)
  }


  return (
    <>
      <Navbar onSearch={handleNavbarSearch} />
      <Events searchTerm={searchTerm} />
      
    </>
  )
}

export default App
