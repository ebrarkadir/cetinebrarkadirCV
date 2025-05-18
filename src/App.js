
import './App.css';
import Hero from "../src/components/Hero";
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;


