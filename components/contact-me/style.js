import styled from '@emotion/styled'
import { FORMAL_WHITE, LIGHT_RED } from '../../constant/style'

export const Contact_Container = styled.section `
	width: 77%;
	box-sizing: border-box;
	height: 100vh;
	float: right;
	padding: 60px;
	box-sizing: border-box;
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
			background: url(../../static/bg.jpg) top center no-repeat #bababa;
			background-size: cover;
		}
	}
	h2 {
		font-size: 3rem;
		margin: 15px 0;
	}
    @media only screen and (max-width:768px) {
        width: 100%;
		padding: 60px 20px;
    }
`

export const Content = styled.div `
	max-width: 625px;
	margin: 0 auto;
	h2 {
		color: ${LIGHT_RED};
	}
	a {
		color: ${LIGHT_RED};
		font-weight: 400;
		text-decoration: unset;
		&:visited {
			color: ${LIGHT_RED};
		}
	}
`
