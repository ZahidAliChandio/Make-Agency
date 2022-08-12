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
function App() {
  return (
    <Router>
      <div className="outer-container">
        <Navbar />
        <section className='landing-container'>
          <Routes>
            <Route path="/" element={<LandingSection />} />
          </Routes>
        </section>
        <Routes>
          <Route path="/website" element={<Website />} />
        </Routes>
      <Footer/>
      </div>
    </Router >
  );
}

export default App;
