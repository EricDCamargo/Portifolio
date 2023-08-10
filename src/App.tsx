import styled from 'styled-components'
import Home from './sections/home'
import Header from './sections/header'
import About from './sections/about'
import Projects from './sections/projects'

const App = () => {
  return (
    <PageContent>
      <Header />
      <Home />
      <About />
      <Projects />
    </PageContent>
  )
}

export default App

const PageContent = styled.div`
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
`
