import { SVGs } from '@src/assets'
import useWindowSize from '@src/shared/hooks/getWindowSize'
import { colors } from '@src/shared/themes/colors'
import { changeAppLanguage, smoothScroll } from '@src/shared/utils/functions'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RxHamburgerMenu } from 'react-icons/rx'
import {
  BsChevronDoubleLeft,
  BsChevronDoubleRight,
  BsLinkedin
} from 'react-icons/bs'
import styled from 'styled-components'
import { Hamburguer } from '../hamburguer'
import { SiGmail, SiWhatsapp } from 'react-icons/si'

export const NavBar = () => {
  const gmail = 'ericdcamargo@gmail.com'
  const size = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const { i18n, t } = useTranslation()

  const { brazil, usa } = SVGs
  const handleGmailIconClick = async () => {
    return (window.location.href = `mailto:${gmail}`)
  }
  return (
    <Container>
      <Logo>
        <LogoTitle size={35} color={colors.white}>
          Eric
        </LogoTitle>
        <LogoTitle size={35} color={colors.primary}>.dev</LogoTitle>
      </Logo>
      <Sections>
        <Section onClick={e => smoothScroll(e, 'home')}>
          {t('home:home')}
        </Section>
        <Section onClick={e => smoothScroll(e, 'about')}>
          {t('home:about')}
        </Section>
        <Section onClick={e => smoothScroll(e, 'skills')}>
          {t('home:skills')}
        </Section>
        <Section onClick={e => smoothScroll(e, 'contact')}>
          {t('home:contact')}
        </Section>
      </Sections>
      <Links>
        <Icons>
          <a href="https://contate.me/eric-camargo" target="_blank">
            <SiWhatsapp size={18} className="icon iconWpp" />
          </a>
          <SiGmail
            onClick={handleGmailIconClick}
            className="icon iconGmail"
            size={18}
          />
          <a
            href="https://www.linkedin.com/in/ericdellaicamargo/"
            target="_blank"
          >
            <BsLinkedin className="icon iconLinkedin" size={18} />
          </a>
          <img
            onClick={() => {
              i18n.changeLanguage('ptBR')
              changeAppLanguage('ptBR')
            }}
            className="flag"
            src={brazil}
            alt="Brazil Flag"
          />
          <img
            onClick={() => {
              i18n.changeLanguage('en')
              changeAppLanguage('en')
            }}
            className="flag"
            src={usa}
            alt="USA Flag"
          />
        </Icons>
      </Links>
      {size.width < 1000 && (
        <HamburguerMenuArea>
          <RxHamburgerMenu
            color={colors.white}
            size={22}
            onClick={() => setIsMenuOpen(state => !state)}
          />
        </HamburguerMenuArea>
      )}
      {isMenuOpen && size.width < 1000 && (
        <Hamburguer setIsMenuOpen={setIsMenuOpen} />
      )}
    </Container>
  )
}

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
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: fit-content;
`

const LogoTitle = styled.label<{ color: string; size: number }>`
  text-decoration: none;
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
  transition: 0.5s;
  cursor: pointer;

  :hover {
    color: ${colors.primary};
    transform: scale(1.1);
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  height: 100%;
  @media (max-width: 999px) {
    display: none;
  }
`

const Sections = styled.div`
  display: flex;
  column-gap: 20px;
  font-family: 'Dosis', sans-serif;
  :hover {
    color: ${colors.black};
    background-color: ${colors.white};
    transform: scale(1.2);
    box-shadow: 0px 0px 10px 0px white;
  }
  @media (max-width: 999px) {
    display: none;
  }
`

const Section = styled.a`
  text-decoration: none;
  color: ${colors.white};
  transition: 0.5s;
  height: 50px;
  width: 100px;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.black};
  cursor: pointer;

  @media (max-width: 1000px) {
    font-size: 22px;
  }
`

const Icons = styled.div`
  display: flex;
  column-gap: 15px;
  display: flex;
  .flag {
    cursor: pointer;
    width: 30px;
    height: 20px;
  }
  .icon {
    color: ${colors.white};
    cursor: pointer;
  }
`

const HamburguerMenuArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 10px 0px;
`
