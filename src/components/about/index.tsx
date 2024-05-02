import { SVGs } from '@src/assets';
import { colors } from '@src/shared/themes/colors';
import { styled } from 'styled-components';
import { useState } from 'react';
import { InfoTabs } from './information/tabs';
import { TabContent } from './information/content';
import Lottie, { Options } from 'react-lottie';
import useWindowSize from '@src/shared/hooks/getWindowSize';
import { useTranslation } from 'react-i18next';
import { ageCalc } from '@src/shared/utils/functions';

const About = () => {
  const { profilePhoto, techAnimation } = SVGs;
  const size = useWindowSize();
  const { t } = useTranslation();
  const [activeTopc, setActiveTopc] = useState<string>('Experience');

  interface ExperienceItem {
    item: string;
    description: string;
  }

  interface MockData {
    Experience: ExperienceItem[];
    Graduations: ExperienceItem[];
    Skills: ExperienceItem[];
  }

  const data: MockData = {
    Experience: [
      { item: t('home:ExperienceI'), description: '2023' },
      { item: t('home:ExperienceII'), description: '2023' },
      { item: t('home:ExperienceIII'), description: '2020' },
    ],
    Graduations: [
      { item: t('home:GraduationI'), description: '2022' },
      { item: t('home:GraduationII'), description: '2020' },
      { item: t('home:GraduationIII'), description: '2023' },
    ],
    Skills: [
      { item: 'React', description: t('home:reactLevel') },
      { item: 'Node.js', description: t('home:nodeLevel') },
      { item: 'HTML/CSS', description: t('home:htmlCssLevel') },
    ],
  };

  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: techAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container id='about'>
      <ProfilePhoto url={profilePhoto} />
      <TextArea>
        <div>
          <h1>{t('home:about')}</h1>
          <p>
            {t('home:resume')}
            {ageCalc()}
            &nbsp;
            {t('home:yearsOld')}
          </p>
        </div>
        <InfoTabs currentTab={activeTopc} onClick={setActiveTopc} />
        <TabContent currentTab={activeTopc} currentArrays={data[activeTopc as keyof MockData]} />
      </TextArea>
      <AnimationContainer>
        <Lottie
          width={size.width > 1000 ? 400 : 'auto'}
          height={size.width > 1000 ? 400 : 'auto'}
          options={defaultOptions}
        />
      </AnimationContainer>
    </Container>
  );
};

export default About;

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

  @media (max-width: 375px) {
    padding: 10px 15px;
  }
`;

const ProfilePhoto = styled.div<{ url: string }>`
  background: url(${({ url }) => url});
  display: inline-block;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  -webkit-box-shadow: 5px 5px 15px 5px #000000;
  box-shadow: 5px 5px 15px 5px #000000;
  transition: 0.9s;

  &:hover {
    -webkit-box-shadow: 5px 5px 15px 5px ${colors.pink};
  }

  @media (min-width: 300px) and (max-width: 1000px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 300px) {
    width: 90%;
    height: 300px;
    min-width: 100px;
  }
`;
const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50%;
  width: 40%;
  justify-content: center;
  color: ${colors.white};
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const AnimationContainer = styled.div`
  display: flex;
  justify-content: center;
  pointer-events: none;
  @media (max-width: 1000px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
