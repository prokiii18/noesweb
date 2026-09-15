import { useScrollProgress } from './hooks';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import BrandStrip from './components/BrandStrip';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Stats from './components/Stats';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const progress = useScrollProgress();

  return (
    <>
      <div className="reading-progress" aria-hidden="true" style={{ width: `${progress}%` }} />
      <Header />
      <main>
        <Hero />
        <FeaturedWork />
        <BrandStrip />
        <About />
        <Portfolio />
        <Services />
        <Stats />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
