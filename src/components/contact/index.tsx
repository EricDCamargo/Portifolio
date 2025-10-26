import { colors } from '@src/shared/themes/colors';
import { handleGmailIconClick } from '@src/shared/utils/functions';
import { useTranslation } from 'react-i18next';
import { SiGmail, SiInstagram, SiLinkedin, SiWhatsapp } from 'react-icons/si';
import styled from 'styled-components';

const Contact = () => {
  const { wppColor, linkedin, gmail, instagram } = colors;

  const { t } = useTranslation();

  return (
    <Section id='contact'>
      <ContentWrapper>
        <TextContainer>
          <h2>{t('home:contactWay')}</h2>
          <p className='paragraph'>{t('home:contactDesc')}</p>
        </TextContainer>
        <ContactWay>
          <DataCard hover={wppColor} href='https://contate.me/eric-camargo' target='_blank'>
            <div className='iconContainer'>
              <SiWhatsapp />
            </div>
            <div>
              <h4>WhatsApp</h4>
              <p>(15) 99728-4066</p>
            </div>
          </DataCard>
          <DataCard
            hover={linkedin}
            href='https://www.linkedin.com/in/ericdellaicamargo/'
            target='_blank'
          >
            <div className='iconContainer'>
              <SiLinkedin />
            </div>
            <div>
              <h4>LinkedIn</h4>
              <p>/ericdellaicamargo</p>
            </div>
          </DataCard>
          <DataCard
            hover={instagram}
            href='https://www.instagram.com/dellaicamargo/'
            target='_blank'
          >
            <div className='iconContainer'>
              <SiInstagram className='gradient' />
            </div>
            <div>
              <h4>Instagram</h4>
              <p className='insta'>@dellaicamargo</p>
            </div>
          </DataCard>
          <DataCard href={handleGmailIconClick} hover={gmail}>
            <div className='iconContainer'>
              <SiGmail />
            </div>
            <div>
              <h4>E-mail</h4>
              <p>ericdcamargo</p>
            </div>
          </DataCard>
        </ContactWay>
      </ContentWrapper>
    </Section>
  );
};

export default Contact;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.black};
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1100px;
`;

const TextContainer = styled.div`
  text-align: center;
  max-width: 600px;

  h2 {
    color: ${colors.white};
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .paragraph {
    color: ${colors.gray};
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const ContactWay = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
`;

const DataCard = styled.a<{ hover?: string }>`
  display: flex;
  text-decoration: none;
  align-items: center;
  gap: 20px;
  padding: 20px;
  width: 300px;
  border-radius: 12px;
  color: ${colors.white};
  background: ${colors.softBlack};
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 0.3s ease-in-out;

  div:last-child {
    text-align: left;
  }

  h4 {
    margin: 0 0 5px 0;
    font-size: 1.1rem;
    color: ${colors.white};
  }

  p {
    margin: 0;
    color: ${colors.gray};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .iconContainer {
    font-size: 1.8rem;
    background-color: ${colors.softBlack2};
    min-width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5);

    .iconContainer {
      background-color: ${({ hover }) => hover};
      color: ${colors.white};
    }

    .insta {
      background-image: radial-gradient(
        circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #285aeb 90%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
