import styled from 'styled-components'

const MedallionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #292929;
`

const Medallion = styled.div`
  width: 300px;
  height: 300px;
  background-color: #292929;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`

const WolfFace = styled.div`
  width: 150px;
  height: 150px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:before,
  &:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
  }

  &:before {
    border-width: 0 0 65px 40px;
    border-color: transparent transparent #fff transparent;
    top: -40px;
    left: 40px;
    transform: rotate(-30deg);
  }

  &:after {
    border-width: 0 40px 65px 0;
    border-color: transparent #fff transparent transparent;
    top: -40px;
    right: 40px;
    transform: rotate(30deg);
  }
`

const Eye = styled.div`
  width: 25px;
  height: 25px;
  background-color: #000;
  border-radius: 50%;
  position: absolute;

  &:nth-child(1) {
    top: 50px;
    left: 50px;
  }

  &:nth-child(2) {
    top: 50px;
    right: 50px;
  }
`

const Glare = styled.div`
  width: 8px;
  height: 8px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;

  &:nth-child(1) {
    top: 58px;
    left: 68px;
  }

  &:nth-child(2) {
    top: 58px;
    right: 68px;
  }
`

function ComplexMedallion() {
  return (
    <MedallionContainer>
      <Medallion>
        <WolfFace>
          <Eye />
          <Eye />
          <Glare />
          <Glare />
        </WolfFace>
      </Medallion>
    </MedallionContainer>
  )
}

export default ComplexMedallion
