import styled from '@emotion/styled'
import { FORMAL_WHITE, LIGHT_RED } from '../../constant/style'

export const Contact_Container = styled.section `
	width: 80%;
	height: 100vh;
	float: right;
	padding: 60px;
	box-sizing: border-box;
	h2 {
		font-size: 36px;
		font-weight: 500;
		margin: 15px 0;
	}
	span {
		font-size: 15px;
	}
	address ul {
		list-style: none;
		padding: 0;
		font-style: normal;
		li {
			padding: 10px 0;
			& > span {
				width: 20%;
				display: inline-block;
				margin-right: 30px;
			}
			a {
				position: relative;
				span {
					position: absolute;
					left: -25px;
				
				}
			}
		}
    }
    @media only screen and (max-width:768px) {
        width: 100%;
		padding: 60px 20px;
    }
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
`
