// frontend/src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './screens/Home';
import Problem from './screens/Problem';
import Solution from './screens/Solution';
import About from './screens/About';
import JoinWaitlist from './screens/JoinWaitlist';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/about" element={<About />} />
        <Route path="/join-waitlist" element={<JoinWaitlist />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
