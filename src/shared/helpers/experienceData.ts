import { SVGs } from '@src/assets';
import { ExperienceProps } from '../types';

const { epiousionIt, inttercom, delta, pts } = SVGs;

export const ExperiencesData: ExperienceProps[] = [
  {
    id: 1,
    company: 'Epiousion IT.',
    ocupation: 'Desenvolvedor Full-stack Junior',
    logo: epiousionIt,
    period: 'jan/2023 até jun/2023',
    description:
      'Durante minha jornada na Epiousion, comecei como Aprendiz e evoluí para o papel de Junior. Foco inicial no desenvolvimento frontend, trabalhando ativamente em projetos de software. Ao longo do tempo, expandi minhas habilidades, participei de reuniões com clientes e desenvolvi proficiência em tecnologias-chave.',
    techs: ['React', 'NodeJs', 'Git', 'Docker'],
  },
  {
    id: 2,
    company: 'Parque tecnologico.',
    ocupation: 'Desenvolvedor Full-stack Junior',
    logo: pts,
    period: 'jan/2023 até jun/2023',
    description:
      'Durante minha jornada na Epiousion, comecei como Aprendiz e evoluí para o papel de Junior. Foco inicial no desenvolvimento frontend, trabalhando ativamente em projetos de software. Ao longo do tempo, expandi minhas habilidades, participei de reuniões com clientes e desenvolvi proficiência em tecnologias-chave.',
    techs: ['React', 'NodeJs', 'Git', 'Docker'],
  },
  {
    id: 3,
    company: 'Intercom ATM Services.',
    ocupation: 'Tecnico de TI',
    logo: inttercom,
    period: 'ago/2021 até jan/2023',
    description:
      'Instalação de cofres e terminais de auto atendimento, infraestrutura de redes, instalação de roteadores e switches, ativação de pontos de rede e telefone, manutenção de ATM´s, atualizações de hardware, atualizações de software, manutenção de computadores e notebooks, abertura técnica e transporte de cofres e ATM´s.',
    techs: [],
  },
  {
    id: 4,
    company: 'Delta Super Mercados.',
    ocupation: 'Operador de Caixa',
    logo: delta,
    period: 'jul/2023 até out/2023',
    description:
      'Caixa com um forte senso de atendimento ao cliente e precisão em transações financeiras. Proficiente em manter um ambiente organizado, gerenciar transações com cartões de crédito/débito, garantir precisão em registros financeiros e fornecer serviço de alta qualidade aos clientes.',
    techs: [],
  },
];
