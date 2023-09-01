import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { colors } from '@src/shared/themes/colors'
import { Button } from '../button'
import { smoothScroll } from '@src/shared/utils/functions'
import { SVGs } from '@src/assets'
import Lottie, { Options } from 'react-lottie'
import useWindowSize from '@src/shared/hooks/getWindowSize'
import { Particle } from '@src/components/particle'

const MainSection = () => {
  const { t } = useTranslation()
  const size = useWindowSize()
  const { noteAnimation } = SVGs

  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: size.width > 1000 ? noteAnimation : noteAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  const handleCalcSize = () => {
    return size.width * 0.9
  }
  return (
    <Container id="home">
      <Particle />
      <ApresentationContainer>
        <div className="texts">
          <h1 className="name">Eric Dellai Camargo</h1>
          <h1 className="job">{t('home:SoftwareDeveloper')}</h1>
          <ButtonArea onClick={e => smoothScroll(e, 'contact')}>
            <Button label={t('home:contactMe')} />
          </ButtonArea>
        </div>
      </ApresentationContainer>
      <AnimationConteiner>
        <Lottie
          height={size.width > 1000 ? 800 : handleCalcSize()}
          width={size.width > 1000 ? 800 : handleCalcSize()}
          options={defaultOptions}
        />
      </AnimationConteiner>
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
  @media (max-width: 425px) {
    padding: 0px 0px 0px 20px;
  }

  .job {
    font-family: 'Dosis', sans-serif;
    color: ${colors.white};
    font-size: 50;
    @media (max-width: 425px) {
      font-size: 25px;
    }
    @media (max-width: 375px) {
      font-size: 25px;
    }
  }
  .name {
    color: ${colors.white};

    @media (max-width: 425px) {
      font-size: 35px;
    }
    @media (max-width: 375px) {
      font-size: 30px;
    }
  }
`

const ApresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 10%;
  width: 20%;
  min-width: fit-content;
  @media (max-width: 1000px) {
    width: 100%;
    height: auto;
  }
`
const ButtonArea = styled.div`
  display: flex;
  width: fit-content;
  padding-top: 10px;
  :hover {
    box-shadow: 0px 0px 10px 2px #e74c3c;
  }
`

const AnimationConteiner = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  pointer-events: none;
  @media (max-width: 1000px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`
