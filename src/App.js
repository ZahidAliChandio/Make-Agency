import './App.css';
import Navbar from './components/Navbar/Navbar';
import LandingSection from './components/LandingSection/LandingSection';

function App() {
  return (
    <div className="outer-container">
      <header>
        <Navbar />
      </header>
      <section className='landing-container'>
        <LandingSection />
      </section>
    </div>
  );
}

export default App;
