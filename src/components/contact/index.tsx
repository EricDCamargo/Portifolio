import { colors } from '@src/shared/themes/colors';
import { useTranslation } from 'react-i18next';
import { SiGmail, SiInstagram, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import styled from 'styled-components';

const Contact = () => {
  const { wppColor, linkedin, gmail, instagram } = colors;
  const email = 'ericdcamargo@gmail.com';

  const handleGmailIconClick = async () => {
    return (window.location.href = `mailto:${email}`);
  };
  const { t } = useTranslation();

  return (
    <Container id='contact'>
      <h2>{t('home:contactWay')}</h2>
      <p className='paragraph'>{t('home:contactDesc')}</p>
      <ContactWay>
        <DataCard hover={wppColor} href='https://contate.me/eric-camargo'>
          <div className='iconConteiner'>
            <SiWhatsapp />
          </div>
          <p>(15) 997284066</p>
        </DataCard>
        <DataCard hover={linkedin} href='https://www.linkedin.com/in/ericdellaicamargo/'>
          <div className='iconConteiner'>
            <SiLinkedin />
          </div>
          <p>Eric Camargo</p>
        </DataCard>
        <DataCard hover={instagram} href='https://www.instagram.com/dellaicamargo/'>
          <div className='iconConteiner'>
            <SiInstagram className='gradient' />
          </div>
          <p className='insta'>@dellaicamargo</p>
        </DataCard>
        <DataCard onClick={handleGmailIconClick} hover={gmail}>
          <div className='iconConteiner'>
            <SiGmail />
          </div>
          <p>ericdcamargo</p>
        </DataCard>
      </ContactWay>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  padding: 20px;
  background-color: ${colors.black};
  z-index: 1;

  h2 {
    color: ${colors.white};
  }

  .paragraph {
    color: ${colors.white};
    text-align: center;
    margin-bottom: 30px;
  }
`;
const ContactWay = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const DataCard = styled.a<{ hover?: string; insta?: boolean }>`
  display: flex;
  text-decoration: none;
  align-items: center;
  column-gap: 10px;
  padding: 0 10px;
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 80px;
  border-radius: 100px;
  color: ${colors.white};
  background: ${colors.softBlack};
  cursor: pointer;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  .iconConteiner {
    font-size: 1.5rem;
    border: solid 2px ${colors.white};
    width: 3rem;
    height: 3rem;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 10px;
  }

  &:hover {
    color: ${({ hover }) => hover};
    .iconConteiner {
      border: solid 2px ${({ hover }) => hover};
    }

    .insta {
      background-color: red;
      background-image: radial-gradient(
        circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #285aeb 90%
      );

      background-size: 100%;
      background-repeat: repeat;

      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }
  }
`;
