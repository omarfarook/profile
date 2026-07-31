import styled from '@emotion/styled'
import Link from 'next/link'
import { FORMAL_WHITE, LIGHT_RED } from '../../constant/style'

export const MobileHeader = styled.header `
	display: none;
	@media only screen and (max-width: 768px) {
		align-items: center;
		background: rgba(247, 249, 252, .94);
		border-bottom: 1px solid rgba(15, 51, 97, .1);
		box-sizing: border-box;
		display: flex;
		gap: 12px;
		height: 58px;
		left: 0;
		padding: 0 16px;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 9999;
	}
`

export const MobileBrand = styled(Link) `
	color: ${LIGHT_RED};
	display: flex;
	flex-direction: column;
	min-width: 0;
	text-decoration: none;
	span {
		font-size: .95rem;
		font-weight: 500;
		line-height: 120%;
		white-space: nowrap;
	}
	small {
		color: #536176;
		font-size: .72rem;
		line-height: 130%;
		white-space: nowrap;
	}
`

export const Sidenav = styled.div `
	display: none;
	z-index: 10001;
	ul {
		padding: 10px 18px 0;
		margin: 0;
		li {
			list-style: none;
			padding: 0;
			margin: 8px 0;
			cursor: pointer;
			a {
				border-radius: 6px;
				box-sizing: border-box;
				color: rgba(255, 255, 255, 0.76);
				display: block;
				font-size: 1rem;
				padding: 12px;
				text-decoration: none;
				&:hover,
				&.active {
					background: rgba(255, 255, 255, .1);
					color: white;
				}
			}
		}
	}
	@media only screen and (max-width: 768px) {
		display: block;
		height: 100%;
		width: 280px;
		position: fixed;
		z-index: 10001;
		top: 0;
		left: 0;
		background-color: #0f3361;
		box-shadow: 18px 0 42px rgba(15, 51, 97, .22);
		overflow-x: hidden;
		transition: transform .25s ease;
	}
	@media screen and (max-height: 450px)  {
		a {
			font-size: 16px;
		}
	}
`

export const Overlay = styled.div `
	display: none;
	@media only screen and (max-width: 768px) {
		background: rgba(15, 51, 97, .32);
		bottom: 0;
		display: block;
		left: 0;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 10000;
	}
`

export const DrawerHeader = styled.div `
	align-items: flex-start;
	border-bottom: 1px solid rgba(255, 255, 255, .12);
	display: flex;
	justify-content: space-between;
	margin: 0 18px;
	padding: 20px 0 18px;
	span {
		color: white;
		display: block;
		font-size: 1rem;
		font-weight: 500;
		line-height: 130%;
	}
	small {
		color: rgba(255, 255, 255, .7);
		display: block;
		font-size: .78rem;
		line-height: 140%;
		margin-top: 4px;
	}
	button {
		background: transparent;
		border: 0;
		color: ${FORMAL_WHITE};
		cursor: pointer;
		font-size: 1.8rem;
		line-height: 1;
		padding: 0;
	}
`

export const Hamburger = styled.button `
	display: none;
	background: transparent;
	border: 0;
	cursor: pointer;
	font-size: 26px;
	line-height: 1;
	padding: 0;
    color: ${LIGHT_RED};
    @media only screen and (max-width: 768px) {
        display: block;
    }
`
