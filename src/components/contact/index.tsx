import { colors } from '@src/shared/themes/colors'
import { styled } from 'styled-components'

const Contact = () => {
  return (
    <Container id="contact">
      <h1>Contact</h1>
    </Container>
  )
}

export default Contact

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  padding: 20px;
  background-color: ${colors.black};
  z-index: 1;
`
