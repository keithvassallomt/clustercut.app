import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainFeatures from './components/MainFeatures';
import Features from './components/Features';
import Footer from './components/Footer';
import Downloads from './components/Downloads';
import PrivacyPolicy from './components/PrivacyPolicy';

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MainFeatures />
        <Features />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-blue-500/30">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/downloads/*" element={<Downloads />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
