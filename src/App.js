import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import Contact from './pages/Contact';
// import NotFound from './pages/NotFound';
// import Donation from './pages/Donation';
// import About from './pages/About';
// import Events from './pages/Events';
// import FAQ from './pages/FAQ';
// import SignIn from './pages/Admin/SignIn';
// import Dashboard from './pages/Admin/Dashboard';
import NavBar from './components/common/Nav/NavBar';
import './App.scss';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.nav-container');
      if (window.scrollY > 0) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/admin/signin" element={<SignIn />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
