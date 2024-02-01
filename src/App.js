
import './App.css';
// import '../public/assets/css/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Head } from './components/common/Head';
import { Footer } from './components/common/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Teampg } from './pages/Teampg';
import { Testimonial } from './pages/Testimonial';
import { Servicespg } from './pages/Servicespg';
import { Portfoliopg } from './pages/Portfoliopg';
import { Pricing } from './pages/Pricing';
import { Blogpg } from './pages/Blogpg';
import { Contactpg } from './pages/Contactpg';


function App() {
  return (
    <>

      <Router>
      <Head />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Teampg />} />
          <Route path='/testimonials' element={<Testimonial />} />
          <Route path='/services' element={<Servicespg />} />
          <Route path='/portfolio' element={<Portfoliopg />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/blog' element={<Blogpg />} />
          <Route path='/contact' element={<Contactpg />} />

        </Routes>
      <Footer />
      </Router>

    </>
  );
}

export default App;
