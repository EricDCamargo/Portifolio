import { SVGs } from '@src/assets'
import { colors } from '@src/shared/themes/colors'
import { styled } from 'styled-components'

const About = () => {
  const { profilePhoto } = SVGs
  return (
    <Container id="about">
      <ProfilePhoto url={profilePhoto} />
      <TextArea>
      </TextArea>
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

const ProfilePhoto = styled.div<{ url: string }>`
  background: url(${({ url }) => url});
  display: inline-block;
  width: 450px;
  height: 450px;
  border-radius: 50%;

  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;

  @media (min-width: 300px) and (max-width: 1000px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 300px) {
    width: 90%;
    height: 300px;
    min-width: 100px;
  }
`
const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 40%;
  width: 40%;
  justify-content: center;
  color: ${colors.white};
  @media (max-width: 1000px) {
    width: 100%;
  }
`
