import styled from '@emotion/styled'
import { LIGHT_RED } from '../../constant/style'

export const Cv_Content = styled.div `
    width: 80%;
	float: right;
	display: flex;
	flex-flow: column;
	padding: 0 20px;
    box-sizing: border-box;
    @media only screen and (max-width:768px) {
        width: 100%;
        padding: 20px;
    }
`
export const Personal_Info = styled.section `
    display: flex;
    flex-direction: column;
    margin: 15px 0;
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
        font-size: 35px;
    }
    h3 {
        font-weight: 500;
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
        font-size: 17px;
        line-height: 1.5;
        padding-left: 30px;
        text-align: justify;
    }
    h1 {
        color: ${LIGHT_RED};
        font-size: 25px;
        margin: 0;
        ul {
            font-size: 17px;
            line-height: 1.5;
            padding-left: 30px;
            text-align: justify;
        }
    }
`

export const Title = styled.section `

`

export const Role = styled.div `
    margin: 0;
    font-size: 17px;
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
        margin-bottom: 15px;
        text-align: justify;
    }
    h1 {
        color: ${LIGHT_RED};
        font-size: 25px;
        margin: 0;
    }
    ul {
        font-size: 17px;
        line-height: 1.5;
        padding-left: 30px;
        text-align: justify;
    }
`
export const Education_Content = styled.section `
    div {
        display: flex;
        flex-direction: column;
        margin: 15px 0px;
        font-size: 18px;
    }
    h1 {
        color: ${LIGHT_RED};
        font-size: 25px;
        margin: 0;
        ul {
            font-size: 17px;
            line-height: 1.5;
            padding-left: 30px;
            text-align: justify;
        }
    }
`
export const Strength_Container = styled.section `
    h1 {
        color: ${LIGHT_RED};
        font-size: 25px;
        margin: 0;
    }
    ul {
        font-size: 17px;
        line-height: 1.5;
        padding-left: 30px;
        text-align: justify;
    }
`
