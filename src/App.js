import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Divider from './components/Divider'
import Logo from './components/Logo'
import Panel from './components/Panel'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AboutUs from './pages/about/AboutUs'
import ContactInfo from './pages/about/ContactInfo'
import Location from './pages/about/Location'
import Insurance from './pages/about/Insurance'
import Future from './pages/philosophy/Future'
import Philosophy from './pages/philosophy/Philosophy'
import Treatment from './pages/philosophy/Treatment'
import Resources from './pages/resources/Resources'
import Links from './pages/resources/Links'
import Tools from './pages/resources/Tools'
import Emergency from './pages/resources/Emergency'
import Testimonials from './pages/testimonials/Testimonials'
import FAQ from './pages/testimonials/FAQ'
import Quotes from './pages/testimonials/Quotes'
import Trends from './pages/trends/Trends'
import News from './pages/trends/News'

function App() {
  return (
    <div className='App mx-auto max-w-7xl sm:px-6 lg:px-8 bg-red'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactinfo' element={<ContactInfo />} />
          <Route path='/location' element={<Location />} />
          <Route path='/insurance' element={<Insurance />} />
          <Route path='/future' element={<Future />} />
          <Route path='/philosophy' element={<Philosophy />} />
          <Route path='/treatment' element={<Treatment />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/links' element={<Links />} />
          <Route path='/tools' element={<Tools />} />
          <Route path='/emergency' element={<Emergency />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/quotes' element={<Quotes />} />
          <Route path='/trends' element={<Trends />} />
          <Route path='/news' element={<News />} />
        </Routes>
        <Footer navigation />
      </BrowserRouter>
    </div>
  )
}

export default App
