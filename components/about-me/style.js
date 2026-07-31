import styled from '@emotion/styled'
import { CONTENT_WIDTH, LIGHT_RED, MOBILE_BREAKPOINT, PAGE_BACKGROUND } from '../../constant/style'

export const Body_Content = styled.section `
    display: flex;
	width: ${CONTENT_WIDTH};
	float: right;
	min-height: 100vh;
	justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 4.75rem 20px;
	background: ${PAGE_BACKGROUND};
    @media only screen and (max-width:${MOBILE_BREAKPOINT}) {
        width: 100%;
		padding: 5rem 20px 3rem;
    }
`

export const About_Container = styled.section `
	display: flex;
	flex-direction: column;
	max-width: 980px;
    align-items: flex-start;
	h1 {
		color: ${LIGHT_RED};
		font-size: 3.35rem;
		font-weight: 500;
		line-height: 115%;
		margin-bottom: 1rem;
		max-width: 820px;
	}
	@media only screen and (max-width:${MOBILE_BREAKPOINT}) {
		h1 {
			font-size: 2.25rem;
		}
	}
`

export const Kicker = styled.span `
	color: #1f7a6d;
	display: block;
	font-size: .85rem;
	font-weight: 500;
	margin-bottom: .75rem;
	text-transform: uppercase;
`

export const Intro = styled.p `
	color: #42526b;
	font-size: 1.15rem;
	line-height: 175%;
	max-width: 820px;
	@media only screen and (max-width:${MOBILE_BREAKPOINT}) {
		font-size: 1rem;
	}
`

export const Section = styled.section `
	background: white;
	border: 1px solid rgba(15, 51, 97, .14);
	border-radius: 8px;
	box-shadow: 0 12px 30px rgba(15, 51, 97, .06);
	box-sizing: border-box;
	margin-top: 1rem;
	padding: 1.25rem;
	width: 100%;
	h2 {
		color: ${LIGHT_RED};
		font-size: 1.15rem;
		font-weight: 500;
		margin-bottom: 1rem;
	}
`

export const ExpertiseList = styled.ul `
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: .75rem 1rem;
	margin: 0;
	padding-left: 1.2rem;
	@media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
		grid-template-columns: 1fr;
	}
	li {
		color: #26364d;
		line-height: 150%;
	}
`

export const PrincipleGrid = styled.div `
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 1rem;
	margin-top: 1rem;
	width: 100%;
	@media only screen and (max-width: 980px) {
		grid-template-columns: 1fr;
	}
`

export const PrincipleCard = styled.article `
	background: white;
	border: 1px solid rgba(15, 51, 97, .14);
	border-radius: 8px;
	box-shadow: 0 12px 30px rgba(15, 51, 97, .06);
	box-sizing: border-box;
	padding: 1.25rem;
	h2 {
		color: ${LIGHT_RED};
		font-size: 1.1rem;
		font-weight: 500;
		margin-bottom: .6rem;
	}
	p {
		color: #42526b;
		font-size: .98rem;
		line-height: 165%;
		margin: 0;
	}
`

export const QualityList = styled.ul `
	display: grid;
	gap: .75rem;
	list-style: none;
	margin: 0;
	padding: 0;
	li {
		border-left: 3px solid #1f7a6d;
		color: #26364d;
		line-height: 155%;
		padding-left: .85rem;
	}
`

export const NextPanel = styled.section `
	background: rgba(31, 122, 109, .08);
	border-left: 3px solid #1f7a6d;
	border-radius: 0 8px 8px 0;
	box-sizing: border-box;
	margin-top: 1rem;
	padding: 1.25rem;
	width: 100%;
	h2 {
		color: #1f7a6d;
		font-size: 1.15rem;
		font-weight: 500;
		margin-bottom: .65rem;
	}
	p {
		color: #26364d;
		font-size: 1rem;
		line-height: 165%;
		margin: 0;
	}
`

export const Links = styled.div `
	display: flex;
	flex-wrap: wrap;
	gap: .75rem;
	margin-top: 1rem;
	a {
		align-items: center;
		background: white;
		border: 1px solid rgba(15, 51, 97, .14);
		border-radius: 6px;
		color: ${LIGHT_RED};
		display: flex;
		gap: .45rem;
		line-height: 1.2;
		min-height: 42px;
		padding: 0 .85rem;
		text-decoration: none;
		svg {
			display: block;
			flex: 0 0 auto;
		}
	}
`
