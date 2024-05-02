import { Template } from '@src/shared/components/layout';
import About from '../../components/about';
import Footer from '@src/components/footer';
import Contact from '../../components/contact';
import MainSection from '../../components/mainSection';
import Experience from '@src/components/experience';

const Home = () => {
  return (
    <Template>
      <MainSection />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </Template>
  );
};

export default Home;
