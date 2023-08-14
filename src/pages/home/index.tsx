import { Template } from '@src/components/layout'
import About from '../../components/about'
import Contact from '../../components/contact'
import MainSection from '../../components/mainSection'

const Home = () => {
  return (
    <Template>
      <MainSection />
      <About />
      <Contact />
      {/* <Projects /> */}
    </Template>
  )
}

export default Home
