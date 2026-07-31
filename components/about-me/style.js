import styled from '@emotion/styled'
import { CONTENT_WIDTH, LIGHT_RED, MOBILE_BREAKPOINT } from '../../constant/style'

export const Body_Content = styled.section `
    display: flex;
	width: ${CONTENT_WIDTH};
	float: right;
	min-height: 100vh;
	justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 4rem 20px;
    @media only screen and (max-width:${MOBILE_BREAKPOINT}) {
        width: 100%
    }
`

export const Home_Container = styled.section `
	display: flex;
	flex-direction: column;
	max-width: 760px;
    align-items: flex-start;
	h1 {
		color: rgb(15,51,97);
	}
`

export const SectionTitle = styled.h2 `
	color: rgb(15,51,97);
	font-size: 1.45rem;
	margin-top: 1.75rem;
`

export const ExpertiseList = styled.ul `
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: .75rem 1rem;
	padding-left: 1.2rem;
	@media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
		grid-template-columns: 1fr;
	}
	li {
		line-height: 150%;
	}
`
export const Links = styled.div `
	display: flex;
	margin-top: 20px;
    justify-content: space-between;
	@media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
		flex-direction: column;
		div {
			padding-right: 0 !important;
		}
	}
	div {
		padding-right: 10px;
	}
	address {
		padding: 0 0 10px;
		display: flex;
		align-items: center;
		a {
			margin-left: 2px;
			position: relative;
			top: -4px;
			text-decoration: unset;
			color: ${LIGHT_RED};
			font-weight: 400;
			font-style: initial;
			span {
				position: relative;
				top: 6px;
				margin: 0 5px;
			}
			&:visited {
				color: ${LIGHT_RED};
			}
		}
	}
`
