import styled from 'styled-components'

type ButtonProps = {
  label: string
}

export const Button = ({ label }: ButtonProps) => {
  return (
    <ButtonConteiner data-text="Awesome">
      <span>{label}</span>
    </ButtonConteiner>
  )
}

const ButtonConteiner = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.1em;
  padding: 10px 30px;
  transition: 0.5s;
  position: relative;
  font-size: 17px;
  background: linear-gradient(45deg, red, blue);

  border: none;
  color: #fff;
  cursor: pointer;
  :hover {
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }
`
