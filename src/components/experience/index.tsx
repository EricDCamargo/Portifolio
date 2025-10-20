import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { ExperiencesData } from '@src/shared/helpers/experienceData';
import { TechButton } from '@shared/components/techButton/TechButton';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { colors } from '@src/shared/themes/colors';

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <Section id='experience'>
      <Header>
        <Title>{t('home:experience')}</Title>
        <Subtitle>{t('home:experienceIntro')}</Subtitle>
      </Header>
      <Timeline>
        <TimelineLine />
        <Cards>
          {ExperiencesData.map((exp, idx) => (
            <CardWrapper key={exp.id}>
              <TimelineDot current={t(exp.period).includes(t('home:current'))} />
              <ExperienceCard>
                <CardHeader>
                  <CardHeaderColumn>
                    <Position>{t(exp.ocupation)}</Position>
                    <CompanyRow>
                      <LogoImg src={exp.logo} alt={t(exp.company)} />
                      <Company>{t(exp.company)}</Company>
                      {t(exp.period).includes(t('home:current')) && (
                        <Badge>{t('home:current')}</Badge>
                      )}
                    </CompanyRow>
                  </CardHeaderColumn>
                  <CardHeaderColumn>
                    <InfoRow>
                      <FiCalendar />
                      <span>{t(exp.period)}</span>
                    </InfoRow>

                    {exp.location && (
                      <InfoRow>
                        <FiMapPin />
                        <span>
                          {exp.location} {exp.type && `- ${t(exp.type)}`}
                        </span>
                      </InfoRow>
                    )}
                  </CardHeaderColumn>
                </CardHeader>
                <Description>{t(exp.description)}</Description>
                <SkillsTitle>{t('home:mainTechnologies')} </SkillsTitle>
                <Skills>
                  {exp.techs.map((tech) => (
                    <TechButton name={tech} key={tech} />
                  ))}
                </Skills>
              </ExperienceCard>
            </CardWrapper>
          ))}
        </Cards>
      </Timeline>
    </Section>
  );
};

export default Experience;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${colors.pink};
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${colors.gray};
`;

const Timeline = styled.div`
  position: relative;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 24px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, ${colors.pink} 0%, ${colors.purple} 100%);
  border-radius: 2px;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const CardWrapper = styled.div`
  position: relative;
`;

const TimelineDot = styled.div<{ current?: boolean }>`
  position: absolute;
  left: 16px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 4px solid ${colors.black};
  background: ${({ current }) => (current ? colors.pink : colors.gray2)};
`;

const ExperienceCard = styled.div`
  margin-left: 56px;
  border-radius: 0.75rem;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
  padding: 2rem;
  background: ${colors.softBlack2};
  border: 1px solid ${colors.white};
  color: ${colors.white};
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    border-color: ${colors.pink};
    transform: scale(1.03);
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const CardHeaderColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Position = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const CompanyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: ${colors.pink};
`;

const LogoImg = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const Company = styled.span`
  font-size: 1rem;
`;

const Badge = styled.span`
  background: ${colors.pink};
  color: ${colors.white};
  border-radius: 0.5rem;
  padding: 0.2rem 0.7rem;
  font-size: 0.8rem;
  margin-left: 0.5rem;
  font-weight: bold;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.3rem;
`;

const Description = styled.p`
  margin-bottom: 1.2rem;
  color: ${colors.white};
  line-height: 1.6;
`;

const SkillsTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.7rem;
  color: ${colors.pink};
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;
