import { t } from 'i18next'
import { styled } from 'styled-components'

interface PersonalInfoProps {
  onClick: (newTab: string) => void
  currentTab: string
}

export const InfoTabs = ({ onClick, currentTab }: PersonalInfoProps) => {
  return (
    <TopcsConteiner>
      <Tab
        isActive={currentTab == 'Experience' && true}
        onClick={() => onClick('Experience')}
      >
        {t('home:experience')}
      </Tab>
      <Tab
        isActive={currentTab == 'Graduations' && true}
        onClick={() => onClick('Graduations')}
      >
        {t('home:graduations')}
      </Tab>
      <Tab
        isActive={currentTab == 'Skills' && true}
        onClick={() => onClick('Skills')}
      >
        {t('home:skills')}
      </Tab>
    </TopcsConteiner>
  )
}

const TopcsConteiner = styled.div`
  display: flex;
  margin: 20px 0 40px;
  gap: 50px;
  @media (max-width: 425px) {
    gap: 20px;
  }
`
const Tab = styled.div<{ isActive: boolean }>`
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: 0ms.1s;
  border-bottom: 2px solid
    ${props => (props.isActive ? '#ff004f' : 'transparent')};
`
