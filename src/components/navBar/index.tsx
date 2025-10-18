import { SVGs } from '@src/assets';
import useWindowSize from '@src/shared/hooks/getWindowSize';
import { colors } from '@src/shared/themes/colors';
import { changeAppLanguage, smoothScroll } from '@src/shared/utils/functions';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BsLinkedin } from 'react-icons/bs';
import styled from 'styled-components';
import { Hamburguer } from '../../shared/components/hamburguer';
import { SiGmail, SiWhatsapp } from 'react-icons/si';
import { useActiveSection } from '@shared/hooks/useActiveSection';

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { activeSection, setActiveSection } = useActiveSection();
  const [indicatorStyle, setIndicatorStyle] = useState({});

  const size = useWindowSize();
  const { i18n, t } = useTranslation();
  const { brazil, usa } = SVGs;

  const gmail = 'ericdcamargo@gmail.com';
  const handleGmailIconClick = async () => {
    return (window.location.href = `mailto:${gmail}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const elementId = `#${activeSection}`;
    const activeLink = document.querySelector<HTMLAnchorElement>(`a[href='${elementId}']`);
    if (activeLink) {
      setIndicatorStyle({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      });
    }
  }, [activeSection, size.width]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elementId = href.replace('#', '');

    setActiveSection(elementId);
    smoothScroll(e, elementId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: t('home:home'), id: '#home' },
    { label: t('home:about'), id: '#about' },
    { label: t('home:experience'), id: '#experience' },
    { label: t('home:contact'), id: '#contact' },
  ];

  return (
    <Container>
      <Logo onClick={(e) => handleNavClick(e as any, 'home')}>
        <LogoTitle size={35} color={colors.white}>
          Eric
        </LogoTitle>
        <LogoTitle size={35} color={colors.pink}>
          .dev
        </LogoTitle>
      </Logo>

      <Sections>
        {navItems.map((item) => {
          const sectionId = item.id.replace('#', '');
          const isActive = activeSection === sectionId;

          return (
            <Section
              key={item.id}
              href={item.id}
              isActive={isActive}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </Section>
          );
        })}
        <ActiveLinkIndicator style={indicatorStyle} />
      </Sections>

      <Links>
        <Icons>
          <a href='https://contate.me/eric-camargo' target='_blank'>
            <SiWhatsapp size={18} className='icon iconWpp' />
          </a>
          <SiGmail onClick={handleGmailIconClick} className='icon iconGmail' size={18} />
          <a href='https://www.linkedin.com/in/ericdellaicamargo/' target='_blank'>
            <BsLinkedin className='icon iconLinkedin' size={18} />
          </a>
          <img
            onClick={() => {
              i18n.changeLanguage('ptBR');
              changeAppLanguage('ptBR');
            }}
            className='flag'
            src={brazil}
            alt='Brazil Flag'
          />
          <img
            onClick={() => {
              i18n.changeLanguage('en');
              changeAppLanguage('en');
            }}
            className='flag'
            src={usa}
            alt='USA Flag'
          />
        </Icons>
      </Links>

      {size.width < 1000 && (
        <HamburguerMenuArea>
          <RxHamburgerMenu
            color={colors.white}
            size={22}
            onClick={() => setIsMenuOpen((state) => !state)}
          />
        </HamburguerMenuArea>
      )}
      {isMenuOpen && size.width < 1000 && <Hamburguer setIsMenuOpen={setIsMenuOpen} />}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-area: NB;
  background-color: ${colors.black};
  z-index: 2;
  display: flex;
  align-items: center;
  padding: 0px 30px;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media (max-width: 1000px) {
    background-color: #0a4f4f;
    z-index: 2;
    height: 70px;
    align-items: center;
    background-color: ${colors.black};
    width: 100%;
    position: fixed;
    top: 0;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: fit-content;
  cursor: pointer;
`;

const LogoTitle = styled.label<{ color: string; size: number }>`
  text-decoration: none;
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: ${colors.purple};
    transform: scale(1.1);
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  height: 100%;
  @media (max-width: 999px) {
    display: none;
  }
`;

const Sections = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${colors.softBlack2};
  padding: 8px;
  border-radius: 999px;

  @media (max-width: 999px) {
    display: none;
  }
`;

const ActiveLinkIndicator = styled.div`
  position: absolute;
  height: calc(100% - 16px);
  top: 8px;
  left: 0;
  background-color: ${colors.pink};
  border-radius: 999px;
  z-index: 1;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
`;

const Section = styled.a<{ isActive?: boolean }>`
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? colors.white : colors.gray)};
  font-weight: ${({ isActive }) => (isActive ? '600' : '500')};
  transition: color 0.3s ease-in-out;
  padding: 8px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  z-index: 2;
  white-space: nowrap;
  &:hover {
    color: ${colors.white};
  }

  @media (max-width: 1000px) {
    font-size: 22px;
  }
`;

const Icons = styled.div`
  display: flex;
  column-gap: 15px;

  .flag {
    cursor: pointer;
    width: 30px;
    height: 20px;
  }

  .icon {
    color: ${colors.white};
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      transform: scale(1.1);
    }
  }

  .iconWpp:hover {
    color: ${colors.wppColor};
  }

  .iconLinkedin:hover {
    color: ${colors.linkedin};
  }

  .iconGmail:hover {
    color: ${colors.gmail};
  }
`;

const HamburguerMenuArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px 0px;
`;
