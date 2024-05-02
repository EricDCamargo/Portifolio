import { colors } from '@src/shared/themes/colors';
import { FaUser, FaBriefcase, FaReact } from 'react-icons/fa';
import { RiGraduationCapFill } from 'react-icons/ri';
import { styled } from 'styled-components';

interface TabContentProps {
  currentTab: string;
  currentArrays: { item: string; description: string }[];
}

const iconMap: Record<string, React.ReactNode> = {
  Experience: <FaBriefcase />,
  Graduations: <RiGraduationCapFill />,
  Skills: <FaReact />,
  Default: <FaUser />,
};

export const TabContent = ({ currentTab, currentArrays }: TabContentProps) => {
  const icon = iconMap[currentTab] || iconMap.Default;
  return (
    <Conteiner>
      {currentArrays.map((item, index) => (
        <Item key={index}>
          <div className='description'>
            {icon} {item.description}
          </div>
          <p className='item'>{item.item}</p>
        </Item>
      ))}
    </Conteiner>
  );
};
const Conteiner = styled.div`
  width: 100%;
  height: 100%;
  min-height: 250px;
`;
const Item = styled.div`
  .item {
    font-size: 13px;
    @media (max-width: 450px) {
      font-size: 11px;
    }
  }
  .description {
    color: ${colors.pink};
  }
`;
