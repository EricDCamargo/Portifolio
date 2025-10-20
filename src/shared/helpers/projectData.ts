import { SVGs } from '@src/assets';
import { NameTechs } from '@src/shared/components/techButton/TechButton';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techs: NameTechs[];
  liveUrl?: string;
  repoUrl?: string;
}
const { PedidoFacil, SysNevent } = SVGs;

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'home:projectOneTitle',
    description: 'home:projectOneDescription',
    image: PedidoFacil,
    techs: ['NextJs', 'ReactNative', 'NodeJs', 'TypeScript', 'PrismaORM', 'PostgreSQL', 'Docker'],
    repoUrl: 'https://github.com/EricDCamargo/pedidofacil_front',
    liveUrl: 'https://pedidofacil-front.vercel.app/',
  },
  {
    id: 2,
    title: 'home:projectTwoTitle',
    description: 'home:projectTwoDescription',
    image: SysNevent,
    techs: [
      'NextJs',
      'NodeJs',
      'TypeScript',
      'PostgreSQL',
      'PrismaORM',
      'Express',
      'Cloudinary',
      'Docker',
    ],
    repoUrl: 'https://github.com/EricDCamargo/sysnevent-frontend',
    liveUrl: 'https://agendafatecitu.vercel.app/',
  },
];
