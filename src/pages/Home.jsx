import Contact from "../components/Contact";
import About from "../sections/About";
import Clients from "../sections/Clients";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Navbar from "../sections/Navbar";
import Projects from "../sections/Projects";
import WorkExperience from "../sections/WorkExperience";

const Home = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto relative">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Clients />
        <WorkExperience />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;
