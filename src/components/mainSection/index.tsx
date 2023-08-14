import styled from 'styled-components'
import { FaWolfPackBattalion } from 'react-icons/fa'

const MainSection = () => {
  return (
    <HeaderConteiner>
      <FaWolfPackBattalion size={130} color={'#fff'} />
    </HeaderConteiner>
  )
}

export default MainSection

const HeaderConteiner = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  background-color: #292929;
`
