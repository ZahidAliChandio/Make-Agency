import './App.css';
import Navbar from './components/Navbar/Navbar';
import LandingSection from './components/LandingSection/LandingSection';
import Website from './components/Websites/Website';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import CaseStudies from './components/Case-Studies/CaseStudies';
import About from './components/About-Us/About';
import Careers from './components/Careers/Careers';
import Project from './components/StartProject/Project';
function App() {
  return (
    <Router>
      <div className="outer-container">
        <Navbar />
        <section className='landing-container'>
          <Routes>
            <Route path="/" element={<LandingSection />} />
          </Routes>
          <Routes>
            <Route path="/start-project" element={<Project/>} />
          </Routes>
          <Routes>
            <Route path="/about" element={<About/>} />
          </Routes>
        </section>
        <Routes>
          <Route path="/website" element={<Website />} />
        </Routes>
        <Routes>
          <Route path="/case-studies" element={<CaseStudies />} />
        </Routes>
        <Routes>
          <Route path="/careers" element={<Careers/>} />
        </Routes>
        <Footer>
          <Footer />
        </Footer>
      </div>
    </Router >
  );
}

export default App;
