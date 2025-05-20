import "./App.css";
import Hero from "../src/components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="bg-gradient-to-b from-black via-gray-900 to-[#0f172a]
"
    >
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
