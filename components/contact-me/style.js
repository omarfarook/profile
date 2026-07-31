import styled from '@emotion/styled'
import { CONTENT_WIDTH, LIGHT_RED, MOBILE_BREAKPOINT, PAGE_BACKGROUND } from '../../constant/style'

export const Contact_Container = styled.section `
	width: ${CONTENT_WIDTH};
	box-sizing: border-box;
	min-height: 100vh;
	float: right;
	padding: 4.75rem 20px;
	background: ${PAGE_BACKGROUND};
	@media only screen and (max-width:${MOBILE_BREAKPOINT}) {
		width: 100%;
		padding: 5rem 20px 3rem;
	}
`

export const Content = styled.div `
	max-width: 920px;
	margin: 0 auto;
	h1 {
		color: ${LIGHT_RED};
		font-size: 3.35rem;
		font-weight: 500;
		line-height: 115%;
		margin-bottom: 1rem;
		max-width: 820px;
	}
	> p {
		color: #42526b;
		font-size: 1.15rem;
		line-height: 175%;
		max-width: 720px;
	}
	@media only screen and (max-width:${MOBILE_BREAKPOINT}) {
		h1 {
			font-size: 2.25rem;
		}
		> p {
			font-size: 1rem;
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

export const ActionRow = styled.div `
	display: flex;
	flex-wrap: wrap;
	gap: .75rem;
	margin: 1.75rem 0 2rem;
	a,
	button {
		align-items: center;
		background: white;
		border: 1px solid rgba(15, 51, 97, .22);
		border-radius: 6px;
		box-shadow: 0 8px 18px rgba(15, 51, 97, .07);
		color: ${LIGHT_RED};
		cursor: pointer;
		display: flex;
		font-size: .98rem;
		font-weight: 500;
		min-height: 46px;
		padding: 0 1rem;
		text-decoration: none;
	}
	a:first-of-type {
		background: ${LIGHT_RED};
		border-color: ${LIGHT_RED};
		color: white;
	}
`

export const ContactGrid = styled.div `
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 1rem;
	@media only screen and (max-width: 760px) {
		grid-template-columns: 1fr;
	}
`

export const ContactCard = styled.a `
	align-items: flex-start;
	background: white;
	border: 1px solid rgba(15, 51, 97, .14);
	border-radius: 8px;
	box-shadow: 0 12px 30px rgba(15, 51, 97, .06);
	color: inherit;
	display: flex;
	gap: 1rem;
	padding: 1.25rem;
	text-decoration: none;
	> span {
		align-items: center;
		background: rgba(15, 51, 97, .08);
		border-radius: 8px;
		color: ${LIGHT_RED};
		display: flex;
		flex: 0 0 auto;
		height: 42px;
		justify-content: center;
		line-height: 1;
		width: 42px;
		svg {
			display: block;
		}
	}
	strong {
		color: ${LIGHT_RED};
		display: block;
		font-size: 1rem;
		margin-bottom: .35rem;
	}
	p {
		color: #42526b;
		font-size: .98rem;
		line-height: 145%;
		margin: 0;
		overflow-wrap: anywhere;
	}
	&:hover {
		border-color: rgba(15, 51, 97, .28);
		box-shadow: 0 14px 32px rgba(15, 51, 97, .1);
	}
`
