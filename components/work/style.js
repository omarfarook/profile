import styled from '@emotion/styled'
import { LIGHT_RED, LIGHT_RED_NAV } from '../../constant/style'

export const Body_Content = styled.section `
    display: flex;
	width: 77%;
	float: right;
	min-height: 100vh;
	justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 4rem 20px;
	@media only screen and (min-width:769px) {
		&::before {
			position: fixed;
			width: 23%;
			top: 0;
			bottom: 0;
			left: 0;
			right: auto;
			content: " ";
			display: block;
			background: url(/bg.jpg) top center no-repeat #bababa;
			background-size: cover;
		}
	}
    @media only screen and (max-width:768px) {
        width: 100%;
		padding: 5rem 20px 3rem;
    }
`

export const Work_Container = styled.section `
	display: flex;
	flex-direction: column;
	max-width: 960px;
    align-items: flex-start;
	h1 {
		color: ${LIGHT_RED};
		margin-bottom: 1rem;
	}
	> p {
		max-width: 800px;
	}
	@media only screen and (max-width:768px) {
		h1 {
			font-size: 2.35rem;
		}
	}
`

export const Kicker = styled.span `
	color: ${LIGHT_RED};
	display: block;
	font-size: .85rem;
	letter-spacing: 0;
	margin-bottom: .75rem;
	text-transform: uppercase;
`

export const CaseStudyGrid = styled.div `
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 1.25rem;
	margin-top: 1.5rem;
	@media only screen and (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`

export const CaseStudyCard = styled.article `
	border: 1px solid rgba(15, 51, 97, .16);
	border-radius: 8px;
	box-sizing: border-box;
	padding: 1.25rem;
	background: rgba(255, 255, 255, .84);
	box-shadow: 0 12px 28px rgba(15, 51, 97, .08);
	h2 {
		color: ${LIGHT_RED};
		font-size: 1.35rem;
		margin: .35rem 0 .75rem;
	}
	p {
		font-size: 1rem;
		line-height: 165%;
	}
	ul {
		padding-left: 1.1rem;
	}
	li {
		line-height: 155%;
		margin-bottom: .45rem;
	}
`

export const Domain = styled.span `
	color: ${LIGHT_RED_NAV};
	font-size: .85rem;
	font-weight: 500;
	text-transform: uppercase;
`

export const Stack = styled.p `
	border-top: 1px solid rgba(15, 51, 97, .14);
	color: ${LIGHT_RED};
	font-size: .9rem !important;
	font-weight: 500;
	margin: 1rem 0 0;
	padding-top: .85rem;
`
