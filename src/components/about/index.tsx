import { colors } from '@src/shared/themes/colors'
import { styled } from 'styled-components'

const About = () => {
  return (
    <Container id="about">
      <h1>About</h1>
    </Container>
  )
}

export default About

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 50px;
  z-index: 1;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.softBlack};
  width: 100%;
  padding: 20px 25px;
  height: auto;
  @media (max-width: 1000px) {
    flex-direction: column;
    row-gap: 50px;
  }
  @media (max-width: 300px) {
    padding: 0px;
  }
`
