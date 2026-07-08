import "./App.css";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ChatBot from "./components/ChatBot";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import AnimatedBackground from "./components/AnimatedBackground";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Loader />
      <AnimatedBackground />
      <CustomCursor />

      <Navbar />

      <main className="relative z-10 w-full">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>

      <ChatBot />
      <Footer />
    </div>
  );
}

export default App;
