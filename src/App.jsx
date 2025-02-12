import './App.css'
import Navbar from './components/Navbar.jsx'
import Landing from './page/Landing.jsx'
import Footer from './components/Footer.jsx';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './page/About.jsx';
import Project from './page/Project.jsx';
import Certificates from './page/Certificate.jsx';
import Skill from './page/Skill.jsx';
import SkillShowcase from './page/example.jsx';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about/detail" element={<About />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/skill' element={<Skill />} />
          <Route path='certificate' element={<Certificates />} />
          <Route path='/ex' element={<SkillShowcase />} />
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App
