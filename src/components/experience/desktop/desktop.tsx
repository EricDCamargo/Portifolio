import { SvgRender } from '@src/shared/components/svgRender';
import { ExperiencesData } from '@src/shared/helpers/experienceData';
import { colors } from '@src/shared/themes/colors';
import { ExperienceProps } from '@src/shared/types';
import React from 'react';
import styled from 'styled-components';
import { TechButton } from '@shared/components/techButton/TechButton';
import { useTranslation } from 'react-i18next';

const DesktopExperience = () => {
  const { t } = useTranslation();
  const [activeExperience, setActiveExperience] = React.useState<ExperienceProps>(
    ExperiencesData[0],
  );

  const onSetActiveExperience = (id: number) => {
    const experience = ExperiencesData.find((item) => item.id === id) || ExperiencesData[0];
    setActiveExperience(experience);
  };
  return (
    <DesktopContainer>
      <ListConteiner>
        {ExperiencesData.map(({ id, company, period, logo }) => (
          <ExperienceItem
            active={activeExperience.id === id}
            key={id}
            onClick={() => onSetActiveExperience(id)}
          >
            <SvgRender src={logo} width={'140px'} height='40px' alt={t(company)} />
            <small>{t(period)}</small>
          </ExperienceItem>
        ))}
      </ListConteiner>
      <DetailsConteiner>
        <h1>{t(activeExperience.company)}</h1>
        <h3>{t(activeExperience.ocupation)}</h3>
        <small>{t(activeExperience.period)}</small>
        <p>{t(activeExperience.description)}</p>
        <ul>
          {activeExperience.techs.map((item) => (
            <TechButton name={item} key={item} />
          ))}
        </ul>
      </DetailsConteiner>
    </DesktopContainer>
  );
};
export default DesktopExperience;

const DesktopContainer = styled.div`
  //dont display in mobile
  @media (max-width: 768px) {
    display: none;
  }
  margin-top: 2rem;
  display: flex;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 3fr;
  height: 100%;
  width: 100%;
  flex: 1;
  @media (max-width: 1024px) {
    grid-template-columns: 3fr 5fr;
  }
`;

export const ListConteiner = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 100%;
  flex: 1;
  gap: 0.5rem;
  background-color: rgb(39, 39, 42);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
`;

export const ExperienceItem = styled.li<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: fit-content;
  border-left: solid 3px ${(props) => (props.active ? colors.pink : 'transparent')};
  border-bottom: 1px solid ${colors.black};
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: ${colors.white};

  &:hover {
    background-color: ${colors.softBlack};
  }
`;

export const DetailsConteiner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  color: ${colors.white};
  background-color: rgb(39, 39, 42);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
  small {
    font-size: 0.8rem;
    color: ${colors.white};
  }
  > p {
    margin-top: 1rem;
    overflow-wrap: break-word;
    text-align: justify;
  }

  ul {
    margin-top: 2rem;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    li {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      border: solid 2px ${colors.pink};
      cursor: pointer;
      width: 8rem;
      font-weight: bold;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

      &:hover {
        background-color: ${colors.black};
        color: ${colors.pink};
      }
    }
  }
`;
