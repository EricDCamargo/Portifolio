import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { SVGs } from '@src/assets'
import { Options } from 'react-lottie'
import useWindowSize from '@src/shared/hooks/getWindowSize'
import Resume from '@src/shared/assets/Eric Dellai Camargo.pdf'
import { keyframes } from 'styled-components'

const MainSection = () => {
  const { t } = useTranslation()
  const size = useWindowSize()
  const { gitHubIcon, linkedinIcon, wolf, photoWithoutBack } = SVGs

  const handleCalcSize = () => {
    return size.width * 0.9
  }
  return (
    <Container id="home">
      <section>
        <HomeText>
          <span>Software Developer</span>
          <h1>Eric Dellai Camargo</h1>
          <p>
            Olá, seja bem-vindo(a)! Tenho 19 anos, sou desenvolvedor full-stack
            Jr e moro em São Paulo. Fique à vontade para conhecer melhor o meu
            trabalho.
          </p>
          <MainButton className="main-bnt">
            <a href={Resume} className="bnt" download>
              Baixar CV
            </a>
            {/* <a href="#portfolio" className="bnt two">
              Meus projetos
            </a> */}
          </MainButton>
        </HomeText>
        <Share>
          <p>Minhas redes:</p>
          <Social>
            <a
              href="https://www.linkedin.com/in/ericdellaicamargo/"
              target="_blank"
            >
              <img src={linkedinIcon} alt="" width="27px" />
            </a>
            <a href="https://github.com/EricDCamargo" target="_blank">
              <img src={gitHubIcon} alt="" width="27px" />
            </a>
          </Social>
        </Share>
      </section>
      <HomeImage className="home-img">
        <img src={photoWithoutBack} alt="" />
      </HomeImage>
    </Container>
  )
}

export default MainSection

const Container = styled.div`
  display: flex;
  align-items: center;
  color: white;
  justify-content: space-evenly;
  height: 100vh;
  width: 100%;
  margin-top: 60px;

  @media screen and (max-width: 1100px) {
    flex-direction: column-reverse;
    margin-top: 240px;
  }

  @media screen and (max-width: 800px) {
    margin-top: 120px;
  }

  @media screen and (max-width: 746px) {
    .home-img {
      margin-top: 50px;
    }
  }

  @media screen and (max-width: 600px) {
    .home-img {
      margin-top: 90px;
    }
  }

  @media screen and (max-width: 480px) {
    .home-img {
      margin-top: 30px;
    }
  }
`

// Componente HomeImage
const HomeImage = styled.div`
  width: 580px;
  height: 580px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 900%;
  }

  img {
    animation: ${keyframes`
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-22px);
      }
      100% {
        transform: translateY(0);
      }
    `} 2s ease-in-out infinite;
    animation-delay: 2s;
  }

  @media screen and (max-width: 1100px) {
    width: 450px;
    height: 450px;
  }

  @media screen and (max-width: 800px) {
    width: 400px;
    height: 400px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 746px) {
    .home-img {
      width: 350px;
      height: 350px;
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 600px) {
    .home-img {
      width: 300px;
      height: 300px;
      margin-bottom: 30px;
    }
  }
`

const HomeText = styled.div`
  span {
    padding: 5px 25px;
    background: rgb(63, 48, 71);
    background: linear-gradient(
      135deg,
      rgba(63, 48, 71, 1) 48%,
      rgba(81, 113, 165, 1) 76%
    );
    box-shadow: var(--main-color) 0px 1px 5px;
    border-radius: 100px;
    color: var(--text-color);
    font-weight: 700;
    font-size: 15px;
    text-transform: uppercase;
  }

  h1 {
    font-size: var(--big-font);
    margin: 15px 0px 10px 0px;
  }

  p {
    font-size: var(--p-font);
    font-weight: 400;
    color: #c3c3c3;
    line-height: 30px;
    margin-bottom: 30px;
    width: 600px;
  }

  @media screen and (max-width: 1100px) {
    h1 {
      font-size: 3.8rem;
    }

    p {
      font-size: 1rem;
      width: 500px;
    }
  }

  @media screen and (max-width: 930px) {
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 0.9rem;
      width: 390px;
    }

    span {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 3.8rem;
    }
  }

  @media screen and (max-width: 746px) {
    h1 {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 2.6rem;
    }
  }

  @media screen and (max-width: 414px) {
    margin-left: 10px;

    p {
      width: 370px;
    }
  }

  @media screen and (max-width: 390px) {
    h1 {
      font-size: 2.4rem;
    }
    p {
      width: 330px;
    }
  }

  @media screen and (max-width: 360px) {
    .home-img {
      width: 300px;
      height: 300px;
      margin-bottom: 30px;
    }
    h1 {
      font-size: 2.6rem;
    }
    p {
      width: 330px;
    }
  }

  @media screen and (max-width: 350px) {
    .home-img {
      width: 350px;
      height: 350px;
      margin-bottom: 30px;
    }
    h1 {
      font-size: 2.6rem;
    }
    p {
      width: 330px;
    }
  }
`

const Share = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.3rem;

  p {
    font-size: 17px;
    color: var(--text-color);
    margin-right: 25px;
  }
`

const Social = styled.div`
  display: flex;
  align-items: center;
  margin: 0 5px;

  img {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
  }

  img:hover {
    transform: translateY(-8px);
    transition: all 0.8s ease-in-out;
  }
`

// Componente MainButton
const MainButton = styled.a`
  display: inline-block;
  padding: 14px 34px;
  background: var(--main-color);
  color: var(--text-color);
  border: 2px solid var(--main-color);
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.6s ease-in-out;
  cursor: pointer;

  &.two {
    background: #141414;
    border: 2px solid #141414;
    color: var(--text-color);
    margin-left: 25px;
  }

  &:hover {
    transform: translateY(-5px);
    background: transparent;
    color: var(--main-color);
  }

  &.two:hover {
    color: #141414;
    background: var(--text-color);
    border: 2px solid var(--text-color);
  }

  @media screen and (max-width: 378px) {
    .box-projects {
      width: 300px;
    }
  }
`
