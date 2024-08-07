import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { SVGs } from '@src/assets';
import Resume from '@src/shared/assets/Eric Dellai Camargo.pdf';
import { colors } from '@src/shared/themes/colors';
import { smoothScroll } from '@src/shared/utils/functions';
import { fontSize } from '@src/shared/themes/fonts';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const MainSection = () => {
  const { t } = useTranslation();
  const { gitHubIcon, linkedinIcon, photoWithoutBack } = SVGs;

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '40px',
      duration: 2500,
      reset: true,
    });

    sr.reveal('.home-text span', { delay: 350, origin: 'top' });
    sr.reveal('.home-text h1', { delay: 450, origin: 'left' });
    sr.reveal('.home-text p', { delay: 620, origin: 'right' });
    sr.reveal('.main-bnt', { delay: 610, origin: 'left' });
    sr.reveal('.share', { delay: 720, origin: 'bottom' });
    sr.reveal('.home-img', { delay: 750, origin: 'right' });
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Eric Dellai Camargo.pdf';
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container id='home'>
      <section className='home'>
        <HomeText className='home-text'>
          <span>{t('home:SoftwareDeveloper')}</span>
          <h1>Eric Dellai Camargo</h1>
          <p>{t('home:introduction')}</p>
          <MainButton className='main-bnt'>
            <div onClick={() => handleResumeDownload()} className='bnt'>
              {t('home:DownloadCV')}
            </div>
            <div onClick={(e) => smoothScroll(e, 'projects')} className='bnt two'>
              {t('home:MyProjects')}
            </div>
          </MainButton>
        </HomeText>

        <Share className='share'>
          <p>{t('home:MyNetwork')}:</p>
          <Social id='about-me'>
            <a href='https://www.linkedin.com/in/ericdellaicamargo/' target='_blank'>
              <img src={linkedinIcon} alt='' width='27px' />
            </a>
            <a href='https://github.com/EricDCamargo' target='_blank'>
              <img src={gitHubIcon} alt='' width='27px' />
            </a>
          </Social>
        </Share>
      </section>
      <HomeImage className='home-img'>
        <img src={photoWithoutBack} />
      </HomeImage>
    </Container>
  );
};

export default MainSection;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  width: 100%;
  margin-top: 60px;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    height: fit-content;
  }
`;

const HomeImage = styled.div`
  width: 480px;
  height: 480px;
  margin-bottom: 40px;

  @keyframes imgg {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-22px);
    }
    100% {
      transform: translateY(0);
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    animation: imgg 2s ease-in-out infinite;
    animation-delay: 2s;
    border-radius: 100%;
  }

  @media screen and (max-width: 1100px) {
    width: 450px;
    height: 450px;
  }

  @media screen and (max-width: 800px) {
    width: 400px;
    height: 400px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 746px) {
    margin-top: 50px;
  }

  @media screen and (max-width: 480px) {
    width: 350px;
    height: 350px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 450px) {
    width: 300px;
    height: 300px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 414px) {
    margin-left: 10px;
  }

  @media screen and (max-width: 360px) {
    width: 300px;
    height: 300px;
    margin-bottom: 30px;
  }
`;

const HomeText = styled.div`
  color: ${colors.white};
  span {
    padding: 5px 25px;
    background: rgb(63, 48, 71);
    background: linear-gradient(135deg, ${colors.black} 60%, ${colors.pink} 20%);
    box-shadow: ${colors.purple} 0px 1px 5px;
    border-radius: 100px;
    font-weight: 700;
    font-size: 15px;
    text-transform: uppercase;
    &:hover {
      background: linear-gradient(135deg, ${colors.pink} 60%, ${colors.black} 20%);
    }
  }

  h1 {
    font-size: 3.4rem;
    margin: 15px 0px 10px 0px;
  }

  p {
    font-size: ${fontSize.small};
    font-weight: 400;
    color: #c3c3c3;
    line-height: 30px;
    margin-bottom: 30px;
    width: 600px;
    min-height: 90px;
  }

  @media screen and (max-width: 1100px) {
    h1 {
      font-size: 3.2rem;
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
  }

  @media screen and (max-width: 800px) {
    span {
      font-size: 16px;
    }

    h1 {
      font-size: 3.8rem;
    }

    p {
      font-size: 1rem;
      width: 600px;
    }
  }
  @media screen and (max-width: 600px) {
    span {
      font-size: 13px;
    }
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1rem;
      width: 440px;
    }
  }

  @media screen and (max-width: 450px) {
    h1 {
      font-size: 2.6rem;
    }
    p {
      font-size: 0.9rem;
      width: 400px;
    }
  }

  @media screen and (max-width: 414px) {
    margin-left: 10px;
    p {
      width: 370px;
      min-height: 120px;
    }
  }
  @media screen and (max-width: 390px) {
    h1 {
      font-size: 2.4rem;
    }
    p {
      font-size: 0.9rem;
      width: 350px;
    }
  }
  @media screen and (max-width: 360px) {
    margin-left: 5px;
    h1 {
      font-size: 2.2rem;
    }
    p {
      width: 330px;
    }
  }
`;

const Share = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.3rem;

  p {
    font-size: 17px;
    color: ${colors.white};
    margin-right: 25px;
  }
  @media screen and (max-width: 360px) {
    width: 100%;
    justify-content: center;
  }
`;

const Social = styled.div`
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;

    img {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin: 0 5px;

      &:hover {
        transform: translateY(-8px);
        transition: all 0.8s ease-in-out;
      }
    }
  }
`;

const MainButton = styled.div`
  .bnt {
    display: inline-block;
    padding: 14px 34px;
    background: ${colors.pink};
    color: ${colors.white};
    border: 2px solid ${colors.pink};
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.6s ease-in-out;
  }
  .bnt:hover {
    transform: translateY(-5px);
    background: transparent;
    color: ${colors.pink};
  }
  .two {
    background: ${colors.black2};
    border: 2px solid ${colors.black2};
    color: ${colors.white};
    margin-left: 25px;
  }
  .two:hover {
    color: ${colors.black2};
    background: ${colors.white};
    border: 2px solid ${colors.white};
  }

  @media screen and (max-width: 390px) {
    .two {
      margin-left: 8px;
    }
  }
  @media screen and (max-width: 360px) {
    display: flex;
    justify-content: center;
    gap: 10px;

    .bnt,
    .two {
      margin: 0;
      padding: 10px 10px;
      width: 150px;
    }
  }
`;
