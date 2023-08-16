import { SVGs } from '@src/assets'
import useWindowSize from '@src/shared/hooks/getWindowSize'
import { colors } from '@src/shared/themes/colors'
import { changeAppLanguage, smoothScroll } from '@src/shared/utils/functions'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RxHamburgerMenu } from 'react-icons/rx'
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs'
import styled from 'styled-components'
import { Hamburguer } from '../hamburguer'

export const NavBar = () => {
  const size = useWindowSize()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const { i18n, t } = useTranslation()

  const { brazil, usa } = SVGs
  return (
    <Container>
      <Links>
        <Logo>
          <LogoTitle size={35} color={colors.white}>
            <BsChevronDoubleLeft />
            Dellai
          </LogoTitle>
          <LogoTitle size={35} color={colors.white}>
            <BsChevronDoubleRight />
          </LogoTitle>
        </Logo>
        <Sections>
          <Section onClick={e => smoothScroll(e, 'home')}>
            <span>01. </span>
            {t('home:home')}
          </Section>
          <Section onClick={e => smoothScroll(e, 'about')}>
            <span>02. </span>
            {t('home:about')}
          </Section>
          <Section onClick={e => smoothScroll(e, 'skills')}>
            <span>03. </span>
            {t('home:skills')}
          </Section>
          <Section onClick={e => smoothScroll(e, 'contact')}>
            <span>04. </span>
            {t('home:contact')}
          </Section>
        </Sections>
        <FlagIcons>
          <img
            onClick={() => {
              i18n.changeLanguage('pt-BR')
              changeAppLanguage('pt-BR')
            }}
            className="languageSelector"
            src={brazil}
            alt="Brazil Flag"
          />
          <img
            onClick={() => {
              i18n.changeLanguage('en')
              changeAppLanguage('en')
            }}
            className="languageSelector"
            src={usa}
            alt="USA Flag"
          />
        </FlagIcons>
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
  padding: 0px 30px;
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
  font-family: 'Tilt Prism', Preahvihear;
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
  justify-content: space-between;
  width: 100%;
  column-gap: 20px;
  height: 100%;
  @media (max-width: 999px) {
    display: none;
  }
`

const Sections = styled.div`
  display: flex;
  column-gap: 20px;
  padding: 0px 15px;

  span {
    font-family: 'Dosis', sans-serif;
  }
`

const Section = styled.a`
  text-decoration: none;
  color: ${colors.white};
  transition: 0.5s;
  cursor: pointer;

  :hover {
    color: ${colors.primary};
    transform: scale(1.1);
  }

  @media (max-width: 1000px) {
    font-size: 22px;
  }
`

const FlagIcons = styled.div`
  display: flex;
  column-gap: 15px;
  .languageSelector {
    cursor: pointer;
    width: 30px;
    height: 20px;
  }
`

const HamburguerMenuArea = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 10px 0px;
`
