import styled from 'styled-components'
import Routes from './routes'

const App = () => {
  return (
    <PageContent>
      <Routes />
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
