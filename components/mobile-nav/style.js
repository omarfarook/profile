import styled from '@emotion/styled'
import { FORMAL_WHITE, LIGHT_RED_NAV, LIGHT_RED } from '../../constant/style'

export const Sidenav = styled.div `
	display: none;
	z-index: 9999;
	ul {
		padding: 0;
		margin: 0;
		li {
			list-style: none;
			padding: 0 10px;
			margin: 10px 0;
			cursor: pointer;
			a {
				font-size: 16px;
				color: rgba(255, 255, 255, 0.6);
				text-decoration: none;
				:hover {
					color: ${FORMAL_WHITE};
				}
			}
		}
	}
	@media only screen and (max-width: 768px) {
		display: block;
		height: 100%;
			width: 0;
			position: fixed;
			z-index: 9999;
			top: 0;
			left: 0;
			background-color: ${LIGHT_RED_NAV};
			overflow-x: hidden;
			transition: 0.5s;
			padding-top: 60px;
			a {
				padding: 8px 8px 8px 8px;
				text-decoration: none;
				font-size: 23px;
				color: ${FORMAL_WHITE};
				display: block;
				transition: 0.3s;
				:hover {
					color: #f1f1f1;
				}
			}
			button {
				position: absolute;
				top: 0;
				right: 5px;
				font-size: 25px;
				margin-left: 50px;
				background: transparent;
				border-color: transparent;
				color: ${FORMAL_WHITE};
				outline: transparent;
			}
	}
	@media screen and (max-height: 450px)  {
		padding-top: 15px;
		a {
			font-size: 16px;
		}
	}
`

export const Hamburger = styled.span `
	display: none;
	position: fixed;
	padding: 15px;
	font-size: 30px;
	cursor: pointer;
    color: ${LIGHT_RED};
	z-index: 9999;
    @media only screen and (max-width: 768px) {
        display: block;
    }
`