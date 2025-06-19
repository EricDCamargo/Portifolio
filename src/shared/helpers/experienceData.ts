import { SVGs } from '@src/assets';
import { ExperienceProps } from '../types';
import { t } from 'i18next';

const { epiousionIt, diebold, delta, pts } = SVGs;

export const ExperiencesData: ExperienceProps[] = [
  {
    id: 1,
    company: 'home:CompanyI',
    ocupation: 'home:ExperienceI',
    logo: epiousionIt,
    period: 'home:PeriodI',
    description: 'home:DescriptionI',
    techs: ['React', 'NodeJs', 'Git', 'Docker', 'Git'],
  },
  {
    id: 2,
    company: 'home:CompanyII',
    ocupation: 'home:ExperienceII',
    logo: pts,
    period: 'home:PeriodII',
    description: 'home:DescriptionII',
    techs: ['React', 'NodeJs', 'Git', 'Docker', 'Figma'],
  },
  {
    id: 3,
    company: 'home:CompanyIII',
    ocupation: 'home:ExperienceIII',
    logo: diebold,
    period: 'home:PeriodIII',
    description: 'home:DescriptionIII',
    techs: [],
  },
  {
    id: 4,
    company: 'home:CompanyIV',
    ocupation: 'home:ExperienceIV',
    logo: delta,
    period: 'home:PeriodIV',
    description: 'home:DescriptionIV',
    techs: [],
  },
];
