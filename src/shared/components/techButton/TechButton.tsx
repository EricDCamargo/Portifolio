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
  FaCloud,
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
  | 'DockerCompose'
  | 'Cloudinary'
  | 'Webpack'
  | 'Socketio'
  | 'WordPress'
  | 'Axios'
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
  DockerCompose: <FaDocker />,
  Cloudinary: <FaCloud />,
  Webpack: <SiWebpack />,
  Socketio: <SiSocketdotio />,
  WordPress: <SiWordpress />,
  Axios: <SiAxios />,
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
  SiFirebase,
  SiRabbitmq,
  SiTailwindcss,
  SiMui,
  SiAxios,
  SiSocketdotio,
  SiWebpack,
  SiWordpress,
} from 'react-icons/si';
import { BiMobile } from 'react-icons/bi';
import { RiComputerFill } from 'react-icons/ri';

export const TechButtonContainer = styled.li`
  display: flex;
  align-items: center;
  background: ${colors.softBlack};
  border-radius: 40px;
  padding: 0.2rem 0.6rem;
  gap: 0.4rem;
  width: fit-content;
  font-weight: bold;
  cursor: pointer;

  svg {
    width: 20px;
  }

  @media (max-width: 1200px) {
    font-size: 80%;
    justify-content: center;
  }

  @media (max-width: 768px) {
    font-size: 75%;
    display: flex;
    padding: 0;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background: ${colors.pink};
  }
`;
