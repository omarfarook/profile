import { pageStyles, containerStyles } from '../layout/style'
import styled from '@emotion/styled'
import { LIGHT_RED, MOBILE_BREAKPOINT, PAGE_BACKGROUND } from '../../constant/style'

export const Body_Content = styled.section `
    ${pageStyles};
    background:
        linear-gradient(120deg, rgba(15, 51, 97, .06), rgba(31, 122, 109, .06)),
        ${PAGE_BACKGROUND};
`

export const Home_Container = styled.section `
    ${containerStyles};
	color: #152033;
    z-index: 9998;
    display: block;
	h1 {
		color: ${LIGHT_RED};
		font-size: 4.25rem;
		font-weight: 500;
		line-height: 108%;
		margin-bottom: 1.25rem;
		max-width: 820px;
	}
	h2 {
		color: #26364d;
		font-size: 2rem;
		font-weight: 400;
		line-height: 140%;
		margin-bottom: 1.25rem;
		max-width: 760px;
	}
	p {
		color: #42526b;
		font-size: 1.2rem;
		line-height: 170%;
		max-width: 740px;
	}
	@media only screen and (max-width:${MOBILE_BREAKPOINT}) {
		h1 {
			font-size: 2.55rem;
			margin-bottom: 1rem;
		}
		h2 {
			font-size: 1.25rem;
			margin-bottom: 1rem;
		}
		p {
			font-size: 1rem;
			line-height: 160%;
		}
	}
`

export const Kicker = styled.span `
	display: block;
	color: #1f7a6d;
	font-size: .85rem;
	font-weight: 500;
	letter-spacing: 0;
	margin-bottom: 1rem;
	text-transform: uppercase;
`
export const Name = styled.span `
	text-transform: uppercase;
	font-size: 23px;
	margin: 5px 0;
`
export const Role = styled.span `
	font-size: 15px;
	text-transform: uppercase;
	margin: 5px 0;
`

export const Home_Links = styled.ul `
	list-style: none;
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding: 15px;
	width: 75%;
	margin: 0 auto;
	border-top: 1px solid grey;
	li {
		padding: 0 20px;
		a {
			color: inherit;
		}
	}
`

export const Btn_Group = styled.div `
	display: flex;
	flex-wrap: wrap;
	gap: .85rem;
	margin: 2.25rem 0 0;
	@media only screen and (max-width:${MOBILE_BREAKPOINT}) {
		margin-top: 1.6rem;
	}
`

export const AboutButton = styled.button `
	align-items: center;
	background: white;
	border: 1px solid rgba(15, 51, 97, .22);
	border-radius: 6px;
	box-shadow: 0 8px 18px rgba(15, 51, 97, .07);
	color: ${LIGHT_RED};
	display: block;
	cursor: pointer;
	font-weight: 500;
	font-size: 1rem;
	margin: 0;
	min-height: 48px;
	padding: 0 1.1rem;
	text-decoration: none;
	&.primary {
		background: ${LIGHT_RED};
		border-color: ${LIGHT_RED};
		color: white;
	}
	&.text {
		background: transparent;
		border-color: transparent;
		box-shadow: none;
		text-decoration: underline;
	}
	&:hover {
		border-color: ${LIGHT_RED};
		box-shadow: 0 10px 22px rgba(15, 51, 97, .12);
	}
	&:focus-visible {
		outline: 3px solid rgba(31, 122, 109, .35);
		outline-offset: 3px;
	}
`

export const ProofList = styled.ul `
	display: grid;
	gap: .8rem;
	margin: 2rem 0 0;
	padding: 0;
	list-style: none;
	max-width: 760px;
	li {
		border-left: 3px solid #1f7a6d;
		color: #26364d;
		font-size: 1rem;
		padding-left: .9rem;
		line-height: 150%;
	}
	@media only screen and (max-width:${MOBILE_BREAKPOINT}) {
		gap: .65rem;
		margin-top: 1.5rem;
		li {
			font-size: .95rem;
		}
	}
`

export const LatestWriting = styled.section`
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid #d8dfe8;
    max-width: 740px;
    h2 { color: #1f7a6d; font-size: .85rem; font-weight: 500; text-transform: uppercase; margin-bottom: .75rem; }
    h3 { font-size: 1.25rem; font-weight: 500; line-height: 1.45; }
    p { font-size: 1rem; line-height: 1.65; margin: .75rem 0; }
    a { color: ${LIGHT_RED}; text-underline-offset: .2em; }
    a:hover { color: #1f7a6d; }
    a:focus-visible { outline: 3px solid #1f7a6d; outline-offset: 4px; }
`
