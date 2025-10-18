import { SVGs } from '@src/assets';
import { colors } from '@src/shared/themes/colors';
import { styled } from 'styled-components';
import Lottie, { Options } from 'react-lottie';
import { useTranslation } from 'react-i18next';
import { ageCalc } from '@src/shared/utils/functions';

import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiDocker,
} from 'react-icons/si';
import { IconType } from 'react-icons';

export interface Tool {
  name: string;
  Icon: IconType;
}

export const myTools: Tool[] = [
  { name: 'React', Icon: SiReact },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'Nest.js', Icon: SiNestjs },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'Docker', Icon: SiDocker },
];

const About = () => {
  const { techAnimation } = SVGs;
  const { t } = useTranslation();

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
      <ContentWrapper>
        <TextSection>
          <h2>{t('home:about')}</h2>
          <p>{t('home:aboutTeaser', { age: ageCalc() })}</p>

          <h4>{t('home:myJourneyTitle')}</h4>
          <p>{t('home:myJourneyText')}</p>

          <h4>{t('home:whatIDoTitle')}</h4>
          <p>{t('home:whatIDoText')}</p>
        </TextSection>

        <HighlightsSection>
          <LottieWrapper>
            <Lottie width={300} height={300} options={defaultOptions} />
          </LottieWrapper>
          <h4>{t('home:mainToolsTitle')}</h4>
          <ToolsList>
            {myTools.map((tool) => (
              <ToolItem key={tool.name}>
                <tool.Icon className='icon' />
                <span>{tool.name}</span>
              </ToolItem>
            ))}
          </ToolsList>
        </HighlightsSection>
      </ContentWrapper>
    </Container>
  );
};

export default About;

const Container = styled.section`
  background-color: ${colors.softBlack};
  width: 100%;
  padding: 80px 40px;
  display: flex;
  justify-content: center;
  border-top: 1px solid ${colors.softBlack2};
  border-bottom: 1px solid ${colors.softBlack2};
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 60px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const TextSection = styled.div`
  flex: 2;
  color: ${colors.white};

  h2 {
    font-size: 2.5rem;
    color: ${colors.pink};
    margin-bottom: 1.5rem;
    font-weight: bold;
  }

  h4 {
    font-size: 1.5rem;
    color: ${colors.white};
    margin-top: 2rem;
    margin-bottom: 1rem;
    border-left: 3px solid ${colors.pink};
    padding-left: 10px;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: ${colors.gray};
  }
`;

const HighlightsSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  h4 {
    font-size: 1.5rem;
    color: ${colors.white};
    margin-top: 2rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
  }
`;

const LottieWrapper = styled.div`
  pointer-events: none;
  background: ${colors.softBlack2};
  border-radius: 8px;
`;

const ToolsList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 1100px) and (min-width: 901px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ToolItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${colors.gray};
  font-size: 1rem;
  background: ${colors.softBlack2};
  padding: 12px;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;

  .icon {
    color: ${colors.pink};
    font-size: 1.5rem;
  }

  &:hover {
    color: ${colors.white};
    transform: translateY(-3px);
    border-color: ${colors.pink};
  }
`;
