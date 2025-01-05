import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './assets/App.css';
import Category from './components/Category.jsx';
import Landing from './components/Landing.jsx';
import Navbar from './components/Navbar.jsx';
import Featured from './components/Featured.jsx';
import Working from './components/Working.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Explore from './components/Explore.jsx';
import Careers from './components/Careers.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import NotFound from './components/NotFound.jsx';
import ComingSoon from './components/ComingSoon.jsx';
import UserProfile from './components/UserProfile.jsx';
import Auth from './context/Auth.jsx';

function Home() {
  return (
    <div>
      <Landing />
      <Category />
      <Featured />
      <Featured title="New Professional"/>
      <Working />
    </div>
  );
}
function ComeSoon() {
  return (
    <div className="coming-soon">
      <ComingSoon />
    </div>
  );
}

function App() {
  
  const location = useLocation();
  const knownPaths = [
    "/",
    "/about",
    "/careers",
    "/explore",
    "/login",
    "/register",
    "/explore/architecture",
    "/explore/graphics",
    "/explore/development",
    "/explore/illustration",
    "/explore/marketing",
    "/explore/advertisement",
    "/explore/visualarts",
    "/browse-service",
    "/browse-request",
    "/post-request",
    "/user"
  ];

  const isKnownPath = knownPaths.includes(location.pathname);

  if (!isKnownPath) {
    return <NotFound />;
  } else if (location.pathname === "/browse-request" || location.pathname === "/browse-service" || location.pathname === "/post-request") {
    return <ComeSoon />;
  } else if (location.pathname ==="/login" ){
    return <Login />;
  } else if (location.pathname ==="/register"){
    return <Register />;
  }

  return (
    <>
    <Auth>
      <Navbar />
      <Routes>
        <Route path="/user" element={<UserProfile />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/architecture" element={<Explore />} />
        <Route path="/explore/graphics" element={<Explore />} />
        <Route path="/explore/development" element={<Explore />} />
        <Route path="/explore/illustration" element={<Explore />} />
        <Route path="/explore/marketing" element={<Explore />} />
        <Route path="/explore/advertisement" element={<Explore />} />
        <Route path="/explore/visualarts" element={<Explore />} />
        <Route path="/browse-service" element={<ComeSoon />} />
        <Route path="/browse-request" element={<ComeSoon />} />
        <Route path="/post-request" element={<ComeSoon />} />
      </Routes>
      <Footer />
      </Auth>
    </>
  );
}

export default App;
