import styled from 'styled-components'
import { FaWolfPackBattalion } from 'react-icons/fa'

const MainSection = () => {
  return (
    <Container id="home">
      <FaWolfPackBattalion size={130} color={'#fff'} />
    </Container>
  )
}

export default MainSection

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  height: auto;
  width: 100%;
  padding: 0px 0px 0px 60px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`
