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
    padding: 4.75rem 20px;
	background: #f7f9fc;
    @media only screen and (max-width:768px) {
        width: 100%;
		padding: 5rem 20px 3rem;
    }
`

export const Work_Container = styled.section `
	display: flex;
	flex-direction: column;
	max-width: 1040px;
    align-items: flex-start;
	h1 {
		color: ${LIGHT_RED};
		font-size: 3.35rem;
		font-weight: 500;
		line-height: 115%;
		margin-bottom: 1rem;
	}
	> p {
		color: #42526b;
		font-size: 1.15rem;
		line-height: 175%;
		max-width: 820px;
	}
	@media only screen and (max-width:768px) {
		h1 {
			font-size: 2.25rem;
		}
		> p {
			font-size: 1rem;
			line-height: 165%;
		}
	}
`

export const Kicker = styled.span `
	color: #1f7a6d;
	display: block;
	font-size: .85rem;
	font-weight: 500;
	letter-spacing: 0;
	margin-bottom: .75rem;
	text-transform: uppercase;
`

export const CaseStudyGrid = styled.div `
	display: grid;
	gap: 1rem;
	margin-top: 2rem;
	width: 100%;
	@media only screen and (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`

export const CaseStudyCard = styled.article `
	border: 1px solid rgba(15, 51, 97, .16);
	border-radius: 8px;
	box-sizing: border-box;
	display: grid;
	grid-template-columns: minmax(240px, .72fr) minmax(0, 1.7fr);
	gap: 1.5rem;
	padding: 1.5rem;
	background: white;
	box-shadow: 0 12px 30px rgba(15, 51, 97, .06);
	p {
		font-size: 1rem;
		line-height: 165%;
		margin: 0;
	}
	ul {
		margin: 0;
		padding-left: 1.05rem;
	}
	li {
		line-height: 155%;
		margin-bottom: .45rem;
	}
	@media only screen and (max-width: 1020px) {
		grid-template-columns: 1fr;
	}
	@media only screen and (max-width: 768px) {
		gap: 1.1rem;
		padding: 1.15rem;
	}
`

export const CardHeader = styled.div `
	h2 {
		color: ${LIGHT_RED};
		font-size: 1.6rem;
		font-weight: 500;
		line-height: 125%;
		margin: .45rem 0 0;
	}
`

export const Domain = styled.span `
	color: ${LIGHT_RED_NAV};
	font-size: .85rem;
	font-weight: 500;
	text-transform: uppercase;
`

export const CaseSection = styled.section `
	h3 {
		color: ${LIGHT_RED};
		font-size: .85rem;
		font-weight: 500;
		margin: 0 0 .45rem;
		text-transform: uppercase;
	}
	& + & {
		margin-top: 1rem;
	}
`

export const Impact = styled.section `
	background: rgba(31, 122, 109, .08);
	border-left: 3px solid #1f7a6d;
	border-radius: 0 6px 6px 0;
	box-sizing: border-box;
	grid-column: 2;
	padding: .9rem 1rem;
	h3 {
		color: #1f7a6d;
		font-size: .85rem;
		font-weight: 500;
		margin: 0 0 .45rem;
		text-transform: uppercase;
	}
	p {
		color: #26364d;
	}
	@media only screen and (max-width: 1020px) {
		grid-column: 1;
	}
`

export const StackList = styled.ul `
	align-content: flex-start;
	display: flex;
	flex-wrap: wrap;
	gap: .5rem;
	grid-column: 2;
	list-style: none;
	padding: 0 !important;
	margin-top: .25rem !important;
	li {
		background: rgba(15, 51, 97, .08);
		border: 1px solid rgba(15, 51, 97, .12);
		border-radius: 999px;
		color: ${LIGHT_RED};
		font-size: .85rem;
		font-weight: 500;
		line-height: 1 !important;
		margin: 0 !important;
		padding: .48rem .65rem;
	}
	@media only screen and (max-width: 1020px) {
		grid-column: 1;
	}
`
