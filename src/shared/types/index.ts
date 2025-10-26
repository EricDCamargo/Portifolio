import { NameTechs } from '@src/shared/components/techButton/TechButton';

export interface ExperienceProps {
  id: number;
  company: string;
  ocupation: string;
  logo: string;
  period: string;
  location: string;
  type?: string;
  description: string;
  techs: NameTechs[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techs: NameTechs[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface SectionProps {
  id: string;
  label: string;
}
