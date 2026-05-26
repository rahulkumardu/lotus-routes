import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SkipToContent } from './components/SkipToContent';
import { Home } from './pages/Home';
import { Experiences } from './pages/Experiences';
import { RequestExperience } from './pages/RequestExperience';
import { Confirmation } from './pages/Confirmation';
import { About } from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <SkipToContent />
        <Header />
        <main id="main-content" className="flex-1" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/request" element={<RequestExperience />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}