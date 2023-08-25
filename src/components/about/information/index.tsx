import { styled } from 'styled-components'

interface PersonalInfoProps {
  onClick: (newTab: string) => void
  currentTab: string
}

export const PersonalInfo = ({ onClick, currentTab }: PersonalInfoProps) => {
  return (
    <TopcsConteiner>
      <Tab
        isActive={currentTab == 'Experience' && true}
        onClick={() => onClick('Experience')}
      >
        Experience
      </Tab>
      <Tab
        isActive={currentTab == 'Graduations' && true}
        onClick={() => onClick('Graduations')}
      >
        Graduations
      </Tab>
      <Tab
        isActive={currentTab == 'Skills' && true}
        onClick={() => onClick('Skills')}
      >
        Skills
      </Tab>
    </TopcsConteiner>
  )
}

const TopcsConteiner = styled.div`
  display: flex;
  margin: 20px 0 40px;
  .topc-link {
    margin: 50px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    position: relative;
  }
`
const Tab = styled.div<{ isActive: boolean }>`
  margin: 10px 50px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: 0ms.1s;
  border-bottom: 2px solid
    ${props => (props.isActive ? '#ff004f' : 'transparent')};
`
