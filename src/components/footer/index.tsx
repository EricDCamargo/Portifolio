import { colors } from '@src/shared/themes/colors'
import styled from 'styled-components'
import { SVGs } from '@src/assets'
import { useTranslation } from 'react-i18next'
import { BiCopyright } from 'react-icons/bi'
import { t } from 'i18next'

const Footer = () => {
  const { brazil, usa } = SVGs
  const { i18n } = useTranslation()

  return (
    <Content>
      <BiCopyright color={colors.white} />
      <p>Copyright - Eric Dellai Camargo - {t('home:rightsReserved')}</p>
      <img src={i18n.language === 'ptBR' ? brazil : usa} alt="Country flag" />
    </Content>
  )
}
export default Footer

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  padding: 20px;
  background-color: ${colors.black};
  border-top: 3px solid ${colors.softBlack};
  z-index: 1;

  img {
    width: 30px;
    height: 20px;
  }

  p {
    font-size: 0.8rem;
    color: ${colors.white};
  }
`
