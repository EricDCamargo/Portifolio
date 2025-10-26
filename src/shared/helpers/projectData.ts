import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'home:projectOneTitle',
    description: 'home:projectOneDescription',
    image:
      'https://image.thum.io/get/fullpage/width/800/disable_animations/https://pedidofacil-front.vercel.app/',
    techs: [
      'NextJs',
      'ReactNative',
      'NodeJs',
      'Express',
      'TypeScript',
      'PrismaORM',
      'PostgreSQL',
      'Cloudinary',
      'Socketio',
      'Docker',
      'Figma',
      'JWT',
    ],
    repoUrl: 'https://github.com/EricDCamargo/pedidofacil_front',
    liveUrl: 'https://pedidofacil-front.vercel.app/',
  },
  {
    id: 2,
    title: 'home:projectTwoTitle',
    description: 'home:projectTwoDescription',
    image:
      'https://image.thum.io/get/fullpage/width/800/disable_animations/https://agendafatecitu.vercel.app/auth/signin',
    techs: [
      'NextJs',
      'NodeJs',
      'TypeScript',
      'PostgreSQL',
      'PrismaORM',
      'Express',
      'Cloudinary',
      'Docker',
      'Figma',
      'JWT',
    ],
    repoUrl: 'https://github.com/EricDCamargo/sysnevent-frontend',
    liveUrl: 'https://agendafatecitu.vercel.app/',
  },
];
