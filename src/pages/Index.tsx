import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Events from '@/components/Events';
import Gallery from '@/components/Gallery';
import Team from '@/components/Team';
import Blog from '@/components/Blog';
import Application from '@/components/Application';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Events />
        <Gallery />
        <Team />
        <Blog />
        <Application />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
