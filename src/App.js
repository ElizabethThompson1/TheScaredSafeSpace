import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Contact from './pages/ContactPage';
// import NotFound from './pages/NotFound';
import Donation from './pages/DonationPage';
import About from './pages/AboutPage';
import Events from './pages/EventPage';
import FAQ from './pages/FAQPage';
// import SignIn from './pages/Admin/SignIn';
// import Dashboard from './pages/Admin/Dashboard';
import NavBar from './components/common/Nav/NavBar';
import './App.scss';
import { Footer } from './components/common/Footer/Footer';

function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/admin/signin" element={<SignIn />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
