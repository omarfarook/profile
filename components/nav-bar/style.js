import styled from '@emotion/styled'
import { FORMAL_WHITE, LIGHT_RED } from '../../constant/style'

export const navContainer = styled.div`
    width: 20%;
	position: fixed;
	display: flex;
	flex-direction: column;
	height: 100vh;
    background: ${LIGHT_RED};
    & ul li {
		position: relative;
		list-style: none;
		padding: 0 20px;
		margin: 25px 0;
		cursor: pointer;
		a {
			font-size: 18px;
			color: rgba(255, 255, 255, 0.6);
			text-decoration: none;
			&:hover {
				color: ${FORMAL_WHITE};
				span {
					display: inline;
				}
			}
		}
		span {
			position: absolute;
			display: none;
			top: 2px;
			padding-left: 5px;
		}
    }
	
    @media only screen and (max-width: 768px) {
            display: none;
        }
`




export const pro_pic = styled.section `
    margin: 0 auto;
    padding-top: 40px;
    & img {
        height: 150px;
        max-width: 150px;
        width: 100%;
        border-radius: 50%;
    }
`

export const name_role = styled.section `
    margin-top: 25px;
    text-align: center;
    display: flex;
    flex-direction: column;
`
export const name = styled.span `
    font-size: 23px;
    color: white;
    text-transform: uppercase;
`
export const role = styled.span `
    font-size: 15px;
    color: white;
    font-weight: 100;
    padding: 10px 0;
    text-transform: uppercase;
`
export const get_in_touch = styled.section `
    position: absolute;
    bottom: 0;
    width: 100%;
    span {
        color: rgba(255, 255, 255, 0.6);
        padding-left: 20px;
        font-size: 12px;
        line-height: 1
    }
    ul {
        list-style: none;
        display: flex;
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        padding: 0;

        li {
            padding: 0;
            margin: 0;
        }
    }`
