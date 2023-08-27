import { SVGs } from '@src/assets'
import { colors } from '@src/shared/themes/colors'
import { styled } from 'styled-components'
import { useState } from 'react'
import { InfoTabs } from './information/tabs'
import { TabContent } from './information/content'
import Lottie, { Options } from 'react-lottie'
import wolfAnimation from '@assets/animations/wolfAnimation.json'
import useWindowSize from '@src/shared/hooks/getWindowSize'

const About = () => {
  const { profilePhoto } = SVGs
  const size = useWindowSize()
  const [activeTopc, setActiveTopc] = useState<string>('Experience')

  interface ExperienceItem {
    item: string
    description: string
  }

  interface MockData {
    Experience: ExperienceItem[]
    Graduations: ExperienceItem[]
    Skills: ExperienceItem[]
  }

  const data: MockData = {
    Experience: [
      { item: 'Software Engineer at Company A', description: '2022' },
      { item: 'Web Developer at Company B', description: '2022' },
      { item: 'Internship at Company C', description: '2022' }
    ],
    Graduations: [
      { item: "Bachelor's Degree in Computer Science", description: '2022' },
      { item: "Master's Degree in Software Engineering", description: '2022' }
    ],
    Skills: [
      { item: 'JavaScript', description: '2022' },
      { item: 'React', description: '2022' },
      { item: 'Node.js', description: '2022' },
      { item: 'HTML/CSS', description: '2022' },
      { item: 'Problem Solving', description: '2022' }
    ]
  }

  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: wolfAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Container id="about">
      <ProfilePhoto url={profilePhoto} />
      <TextArea>
        <div>
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            quaerat est et provident facere molestiae voluptas adipisci nostrum
            corrupti inventore natus praesentium, perferendis voluptate error
            aperiam laborum dolore numquam dolores?
          </p>
        </div>
        <InfoTabs currentTab={activeTopc} onClick={setActiveTopc} />
        <TabContent
          currentTab={activeTopc}
          currentArrays={data[activeTopc as keyof MockData]}
        />
      </TextArea>
      <AnimationContainer>
        <Lottie
          width={size.width > 1000 ? 400 : 'auto'}
          height={size.width > 1000 ? 400 : 'auto'}
          options={defaultOptions}
        />
      </AnimationContainer>
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

const AnimationContainer = styled.div`
  display: flex;
  justify-content: center;
  pointer-events: none;
  @media (max-width: 1000px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`
