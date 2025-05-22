import {Navigate, Route, Routes} from 'react-router-dom'
import About from "./pages/About"
import Certifications from "./pages/Certifications"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
import Layout from './ui/Layout'
import Error from './pages/Error'

import './App.css'

function App() {
  return (
    <Routes>
      <Route  path='/' element={<Layout/>} >
        <Route index element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/certifications' element={<Certifications />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />

        {/* <Redirect to="/not-found" /> */}
      </Route>  
       <Route path="/*" element={<Navigate to="/not-found" />} />
      <Route path='/not-found' element={<Error/>} />
    </Routes>
  )
}

export default App
