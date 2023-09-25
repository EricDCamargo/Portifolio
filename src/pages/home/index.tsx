import { Template } from '@src/components/layout'
import About from '../../components/about'
import Footer from '@src/components/footer'
import Contact from '../../components/contact'
import MainSection from '../../components/mainSection'
import Skills from '@src/components/skills'

const Home = () => {
  return (
    <Template>
      <MainSection />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </Template>
  )
}

export default Home
