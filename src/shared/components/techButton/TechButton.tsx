import React from 'react';
import { DiScrum } from 'react-icons/di';
import {
  FaAws,
  FaBootstrap,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaJira,
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';

export type NameTechs =
  | 'React'
  | 'NodeJs'
  | 'AWS'
  | 'Bootstrap'
  | 'Figma'
  | 'Scrum'
  | 'Git'
  | 'Docker'
  | 'Jira'
  | 'HTML'
  | 'CSS';

export interface TechButtonProps {
  name: NameTechs;
}

interface TechsIconsProps {
  [key: string]: React.ReactNode;
}

const TechsIcons: TechsIconsProps = {
  React: <FaReact />,
  NodeJs: <FaNodeJs />,
  AWS: <FaAws />,
  Bootstrap: <FaBootstrap />,
  Figma: <FaFigma />,
  Scrum: <DiScrum />,
  Git: <FaGitAlt />,
  Docker: <FaDocker />,
  Jira: <FaJira />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
};

export const TechButton = ({ name }: TechButtonProps) => {
  return (
    <TechButtonContainer>
      {TechsIcons[name] || null}
      <span>{name}</span>
    </TechButtonContainer>
  );
};

import styled from 'styled-components';
import { colors } from '@src/shared/themes/colors';

export const TechButtonContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: solid 2px ${colors.pink};
  padding: 0.3rem 0.5rem;
  width: 7rem;
  font-weight: bold;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 6rem;
    font-size: 80%;
    justify-content: center;
    svg {
      width: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 75%;
    display: flex;
    padding: 0;
    align-items: center;
    justify-content: center;
    width: 4rem;
    svg {
      display: none;
    }
  }

  &:hover {
    background: ${colors.pink};
  }
`;
