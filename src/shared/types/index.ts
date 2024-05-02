import { NameTechs } from '@src/shared/components/techButton/TechButton';

export interface ExperienceProps {
  id: number;
  company: string;
  ocupation: string;
  logo: string;
  period: string;
  description: string;
  techs: NameTechs[];
}
