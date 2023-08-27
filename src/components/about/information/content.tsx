import { string } from 'prop-types'
import { FaUser, FaBriefcase, FaGraduationCap, FaReact } from 'react-icons/fa'
import { RiGraduationCapFill } from 'react-icons/ri'
import { styled } from 'styled-components'

interface TabContentProps {
  currentTab: string
  currentArrays: { item: string; description: string }[]
}

const iconMap: Record<string, React.ReactNode> = {
  Experience: <FaBriefcase />,
  Graduations: <RiGraduationCapFill />,
  Skills: <FaReact />,
  Default: <FaUser />
}

export const TabContent = ({ currentTab, currentArrays }: TabContentProps) => {
  const icon = iconMap[currentTab] || iconMap.Default
  return (
    <Conteiner>
      {currentArrays.map((item, index) => (
        <Item key={index}>
          <div className="description">
            {icon} {item.description}
          </div>
          {item.item}
        </Item>
      ))}
    </Conteiner>
  )
}
const Conteiner = styled.div`
  width: 100%;
  height: 100%;
`
const Item = styled.div`
  .description {
    color: #ff004f;
  }
`
