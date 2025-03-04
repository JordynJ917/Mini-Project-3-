import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
// import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {
  return (
    <div className='App'>
      {/* <Navbar/> */}
      <Header/>
      <Footer/>
    </div>
  )
}

export default App
