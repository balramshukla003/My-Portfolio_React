import './App.css'
import Navbar from './components/Navbar.jsx'
import Landing from './page/Landing.jsx'
import Footer from './components/Footer.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './page/About.jsx';
import Details from './page/Details.jsx';
import Project from './page/Project.jsx';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about/detail" element={<About />} />
          <Route path="/details" element={<Details />} />
          <Route path='/projects' element={<Project />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App
