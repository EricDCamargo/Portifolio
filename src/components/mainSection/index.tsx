import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { colors } from '@src/shared/themes/colors'
import { Button } from '../button'
import { smoothScroll } from '@src/shared/utils/functions'
import { SVGs } from '@src/assets'

const MainSection = () => {
  const { t } = useTranslation()

  const { wolf } = SVGs
  return (
    <Container id="home">
      <ApresentationContainer>
        <div className="texts">
          <h1 className="name">Eric Dellai Camargo</h1>
          <h1 className="job">{t('home:SoftwareDeveloper')}</h1>
          <ButtonArea onClick={e => smoothScroll(e, 'contact')}>
            <Button label={t('home:contactMe')} />
          </ButtonArea>
        </div>
      </ApresentationContainer>
      <WolfConteiner>
        <img className="wolf" src={wolf} alt="Wolf" />
      </WolfConteiner>
    </Container>
  )
}

export default MainSection

const Container = styled.div`
  display: flex;
  position: relative;
  min-height: 100vh;
  height: auto;
  width: 100%;
  padding: 100px 0px 0px 60px;
  @media (max-width: 769px) {
    padding: 100px 0px 0px 30px;
    flex-direction: column;
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
    font-size: 100px;
    @media (max-width: 1024px) {
      font-size: 70px;
    }
    @media (max-width: 768px) {
      font-size: 50px;
    }
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
  width: 100%;
  position: relative;
  .texts {
    flex-direction: column;
    z-index: 3;
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

const WolfConteiner = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  justify-content: end;
  @media (max-width: 425px) {
    justify-content: center;
  }
  .wolf {
    width: 880px;
    height: 760px;
    display: flex;
  }
`
