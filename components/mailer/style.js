import styled from '@emotion/styled'
import { FORMAL_WHITE, LIGHT_RED } from '../../constant/style'

export const Form = styled.form `
  width: 100%;
  max-width: 625px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 20px;
  textarea {
    padding: 0px 5px;
    font-size: 15px;
    line-height: 1.5;
    font-weight: 300;
    border-color: rgb(218, 218, 218);
  }
  .field-one {
    width: 45%;
    padding-right: 20px;
    flex-grow: 1;
    @media only screen and (max-width:768px) {
      width: 100%;
      padding-right: 0;
    }
  }
  .field-two {
    width: 45%;
    flex-grow: 1;
    @media only screen and (max-width:768px) {
      width: 100%;
      padding-right: 0;
    }
  }
  .field-three {
    width: 100%;
  }
`

export const InputField = styled.div `
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  textarea {
    transition: box-shadow .35s ease,border-color .35s ease;
    font-size: 1rem;
    padding: 15px;
    -webkit-appearance: none;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    box-shadow: 0 1px 4px rgb(0 0 0 / 3%);
    font-family: Rubik,sans-serif;
    font-weight: 300;
    width: 100%;
    outline: 0;
    box-sizing: border-box;
    &:hover {
      border-color: #888;
      box-shadow: 0 1px 4px rgb(0 0 0 / 10%);
    }
    &:focus {
      border-color: #888;
      box-shadow: 0 1px 4px rgb(0 0 0 / 10%);
    }
  }
`

export const Label = styled.label `
  padding: 10px 0;
  span {
    color: red;
  }
`

export const Input = styled.input `
  
  height: 50px;
  transition: box-shadow .35s ease,border-color .35s ease;
  font-size: 1rem;
  padding: 15px;
  -webkit-appearance: none;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgb(0 0 0 / 3%);
  font-family: Rubik,sans-serif;
  font-weight: 300;
  width: 100%;
  outline: 0;
  box-sizing: border-box;
  &:hover {
    border-color: #888;
    box-shadow: 0 1px 4px rgb(0 0 0 / 10%);
  }
  &:focus {
    border-color: #888;
    box-shadow: 0 1px 4px rgb(0 0 0 / 10%);
  }
    
`
export const SendButton = styled.div `
  padding: 20px 0;
  input {
    width: 150px;
    height: 44px;
    background-color: ${LIGHT_RED};
    color: white;
    font-family: 'Roboto Light',arial;
    font-size: 16px;
    -webkit-transition: all ease 0.3s;
    transition: all ease 0.3s;
    border: 1px solid ${LIGHT_RED};
    border-radius: 30px;
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