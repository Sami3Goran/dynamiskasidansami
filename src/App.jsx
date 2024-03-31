import Home from './Components/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
