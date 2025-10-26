import { SectionProps } from '../types';

const sections: SectionProps[] = [
  { label: 'home:home', id: '#home' },
  { label: 'home:about', id: '#about' },
  { label: 'home:experience', id: '#experience' },
  { label: 'home:project', id: '#project' },
  { label: 'home:contact', id: '#contact' },
];

const sectionIds = sections.map((s) => s.id.replace('#', ''));

export { sections, sectionIds };
