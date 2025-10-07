import React from 'react';
import { DiJavascript, DiMysql, DiScrum } from 'react-icons/di';
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
  FaBitbucket,
  FaJava,
  FaSass,
  FaServer,
} from 'react-icons/fa';

export type NameTechs =
  | 'JavaScript'
  | 'Java'
  | 'TypeScript'
  | 'React'
  | 'NextJs'
  | 'ReactNative'
  | 'NodeJs'
  | 'Express'
  | 'JWT'
  | 'ReactHookForm'
  | 'Zod'
  | 'StyledComponents'
  | 'PrismaORM'
  | 'SQL'
  | 'PostgreSQL'
  | 'MySQL'
  | 'Firebase'
  | 'Docker'
  | 'Figma'
  | 'Scrum'
  | 'AWS'
  | 'RabbitMQ'
  | 'Git'
  | 'RESTfulAPI'
  | 'SCSS'
  | 'CSS'
  | 'HTML'
  | 'TailwindCSS'
  | 'MaterialUI'
  | 'Scrum'
  | 'Jira'
  | 'Bitbucket'
  | 'Software'
  | 'Hardware';

export interface TechButtonProps {
  name: NameTechs;
}

interface TechsIconsProps {
  [key: string]: React.ReactNode;
}

const TechsIcons: TechsIconsProps = {
  JavaScript: <DiJavascript />,
  Java: <FaJava />,
  TypeScript: <SiTypescript />,
  React: <FaReact />,
  NextJs: <SiNextdotjs />,
  ReactNative: <BiMobile />,
  NodeJs: <FaNodeJs />,
  Express: <SiExpress />,
  JWT: <SiJsonwebtokens />,
  ReactHookForm: <SiReacthookform />,
  Zod: <SiZod />,
  StyledComponents: <SiStyledcomponents />,
  PrismaORM: <SiPrisma />,
  SQL: <BsDatabaseFill />,
  PostgreSQL: <SiPostgresql />,
  MySQL: <DiMysql />,
  Firebase: <SiFirebase />,
  Docker: <FaDocker />,
  RabbitMQ: <SiRabbitmq />,
  Git: <FaGitAlt />,
  RESTfulAPI: <FaServer />,
  SCSS: <FaSass />,
  CSS: <FaCss3Alt />,
  HTML: <FaHtml5 />,
  TailwindCSS: <SiTailwindcss />,
  MaterialUI: <SiMui />,
  Scrum: <DiScrum />,
  Jira: <FaJira />,
  Bitbucket: <FaBitbucket />,
  AWS: <FaAws />,
  Bootstrap: <FaBootstrap />,
  Figma: <FaFigma />,
  Hardware: <BsMotherboard />,
  Software: <RiComputerFill />,
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
import { BsDatabaseFill, BsMotherboard } from 'react-icons/bs';
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiJsonwebtokens,
  SiReacthookform,
  SiZod,
  SiStyledcomponents,
  SiPrisma,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiRabbitmq,
  SiTailwindcss,
  SiMui,
  SiApifox,
  SiInfracost,
  SiBmcsoftware,
  SiEsotericsoftware,
  SiTaketwointeractivesoftware,
} from 'react-icons/si';
import { BiCloud, BiCloudDownload, BiHardHat, BiMobile, BiServer } from 'react-icons/bi';
import { RiComputerFill, RiComputerLine } from 'react-icons/ri';

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
