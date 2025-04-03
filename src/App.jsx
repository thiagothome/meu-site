import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import AboutMe from './Components/AboutMe'
import Works from './Components/Works'
import Contact from './Components/Contact'
import Header from './Components/Header'
import WorksMemoryGame from './Components/WorksMemoryGame'

function App() {
  return (
    <div className='container'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='aboutme' element={<AboutMe />} />
          <Route path='works' element={<Works />} />
          <Route path='works/worksmemorygame' element={<WorksMemoryGame />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
