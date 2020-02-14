import styled from '@emotion/styled'
import { LIGHT_RED } from '../../constant/style'

export const cv_body = styled.div `
    background: rgb(204,204,204); 
  `
  export const cv_page = styled.div `
    background: white;
    display: block;
    margin: 20px auto;
    padding: 20px;
    margin-bottom: 0.5cm;
    box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
    width: 21cm;
    height: 29.7cm;
    @media only screen and (max-width:768px) {
        width: auto;
        height: auto;
        margin: 0;
        box-shadow: none;
    }
  `


  export const Cv_Content = styled.div `
    width: 80%;
	float: right;
	display: flex;
	flex-flow: column;
    box-sizing: border-box;
    @media only screen and (max-width:768px) {
        width: 100%;
    }
`
export const Personal_Info = styled.section `
    display: flex;
    flex-direction: column;
    margin: 36px 0;
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    h1,
    h3 {
        margin: 5px;
        @media only screen and (max-width:768px) {
            text-align: center;
        }
    }
    h1 {
        color: ${LIGHT_RED};
        text-transform: uppercase;
        font-size: 26px;
    }
    h3 {
        text-transform: uppercase;
        font-size: 16px;
    }
    span {
        padding: 3px;
    }
`

export const Duration = styled.span `
    color: rgb(128, 123, 123) !important;
    font-size: 16px;
    margin: 5px 0;
    display: block;
`
export const Links = styled.ul `
    display: flex;
    flex-direction: column;
    li a {
        text-decoration: none;
        color: ${LIGHT_RED};
         :visited {
            color: ${LIGHT_RED};
        }
    }
    @media only screen and (max-width:768px) {
        text-align: center;
    }
    @media only screen and (min-width: 768px) {
    align-self: flex-end;
}
`
export const Objective_Content = styled.section `
    p {
        font-size: 16px;
        line-height: 1.5;
        padding-left: 16px;
        text-align: justify;
    }
    h1 {
        color: ${LIGHT_RED};
        font-size: 22px;
        margin: 0;
        ul {
            font-size: 16px;
            line-height: 1.5;
            padding-left: 30px;
            text-align: justify;
            @media only screen and (max-width: 768px) {
                padding-left: 16px;
            }
        }
    }
`

export const Title = styled.section `

`

export const Role = styled.div `
    margin: 0;
    font-size: 16px;
`

export const Experience_Content = styled.section `
    div {
        margin-top: 10px;
        
        span {
            color: ${LIGHT_RED};
        }
    }
    p {
        margin: 0;
        font-size: 16px;
        margin-bottom: 16px;
        text-align: justify;
    }
    h1 {
        color: ${LIGHT_RED};
        font-size: 23px;
        margin: 0;
    }
    ul {
        font-size: 16px;
        line-height: 1.5;
        padding-left: 30px;
        text-align: justify;
        @media only screen and (max-width: 768px) {
            padding-left: 16px;
        }
    }
`
export const Education_Content = styled.section `
    div {
        display: flex;
        flex-direction: column;
        margin: 16px 0px;
        font-size: 16px;
    }
    h1 {
        color: ${LIGHT_RED};
        font-size: 23px;
        margin: 0;
        ul {
            font-size: 16px;
            line-height: 1.5;
            padding-left: 30px;
            text-align: justify;
            @media only screen and (max-width: 768px) {
                padding-left: 16px;
            }
        }
    }
`
export const Strength_Container = styled.section `
    h1 {
        color: ${LIGHT_RED};
        font-size: 23px;
        margin: 0;
    }
    ul {
        font-size: 16px;
        line-height: 1.5;
        padding-left: 30px;
        text-align: justify;
        @media only screen and (max-width: 768px) {
            padding-left: 16px;
        }
    }
`

