import styled from '@emotion/styled'
import { FORMAL_WHITE, LIGHT_RED } from '../../constant/style'

export const Form = styled.form `
  max-width: 450px;
  margin: 0 auto;
  textarea {
    padding: 0px 5px;
    font-size: 17px;
    line-height: 1.5;
    font-weight: 300;
  }
`

export const InputField = styled.div `
  display: flex;
  flex-direction: column;
`

export const Label = styled.label `
  padding: 10px 0;
  span {
    color: red;
  }
`

export const Input = styled.input `
  height: 30px;
  padding: 0px 5px;
  font-size: 17px;
  line-height: 1.5;
  font-weight: 300;
`
export const SendButton = styled.div `
  padding: 20px 0;
  input {
    width: 200px;
  height: 44px;
  background-color: ${LIGHT_RED};
  color: ${FORMAL_WHITE};
  font-family: 'Roboto', sans-serif;
  font-size: 18px;

  transition: all ease 0.3s;
  :hover {
    background-color: ${FORMAL_WHITE};
    color: ${LIGHT_RED} ;
    border-color: ${LIGHT_RED};
  }
  }
  @media only screen and (max-width:768px) {
    display: flex;
    input {
      margin: 0 auto;
    }
  }
`

export const Button = styled.button `
  

`