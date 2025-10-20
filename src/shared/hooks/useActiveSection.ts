import { useState, useEffect } from 'react';

const sectionIds: string[] = ['home', 'about', 'experience', 'project', 'contact'];

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const scrollContainer = document.querySelector('#root > div > div:nth-child(2)');

    const handleScroll = () => {
      let currentSection = activeSection;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [activeSection, sectionIds]);

  return { activeSection, setActiveSection };
};
