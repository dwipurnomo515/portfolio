import "./App.css";
import About from "./components/about";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Skill from "./components/skill";
import Work from "./components/work";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
