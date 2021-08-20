import styled from '@emotion/styled'
import { FORMAL_WHITE, LIGHT_RED_NAV } from '../../constant/style'

export const navContainer = styled.div`
    width: 23%;
    padding: 0 20px;
	position: fixed;
	display: flex;
	flex-direction: column;
	height: 100vh;
    background: ${LIGHT_RED_NAV};
    box-sizing: border-box; 
    z-index: 9999;
    & ul li {
		position: relative;
		list-style: none;
		padding: 0 10px;
		margin: 25px 0;
		cursor: pointer;
		a {
			font-size: 16px;
			color: rgba(255, 255, 255, 0.6);
			text-decoration: none;
			&:hover {
				color: ${FORMAL_WHITE};
				span {
					display: inline;
				}
			}
		}
        .active {
            color: ${FORMAL_WHITE};
            span {
                display: inline;
            }
            &::after {
                content: " ";
                display: block;
                position: absolute;
                width: 0;
                height: 0;
                border-top: 9px solid transparent;
                border-bottom: 9px solid transparent;
                border-right: 8px solid #fff;
                bottom: 6px;
                left: auto;
                right: -20px;
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
        height: 125px;
        width: 125px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center right;
    }
`
export const links = styled.ul `
    padding: 0;
`
export const name_role = styled.section `
    margin-top: 25px;
    text-align: center;
    display: flex;
    flex-direction: column;
`
export const name = styled.h2 `
    font-size: 1.5rem;
    color: white;
    text-transform: uppercase;
`
export const role = styled.p `
    color: white;
    text-transform: uppercase;
    margin: 0;
    font-size: 1.1rem;
`
export const get_in_touch = styled.section `
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    span {
        color: rgba(255, 255, 255, 0.6);
        padding-left: 20px;
        font-size: 10px;
        line-height: 1
    }
    ul {
        list-style: none;
        display: flex;
        justify-content: flex-start;
        padding-left: 20px;
        list-style: none;
        display: flex;
        margin-top: 0;
        li {
            margin: 15px 0;
        }
        li:first-of-type {
            padding-left: 0;
        }
    }
`
export const download_link = styled.p `
    color: ${FORMAL_WHITE};
    font-size: 1rem;
    text-decoration: underline;
    padding-left: 0.7rem;
    cursor: pointer;
`