import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuotesRender from './components/QuotesRender'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    <NavBar/>
     <QuotesRender/>
     <Footer/>
    </>
  )
}

export default App
