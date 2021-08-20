import styled from '@emotion/styled'
import { FORMAL_WHITE, LIGHT_RED } from '../../constant/style'

export const Body_Content = styled.section `
    display: flex;
	width: 77%;
	float: right;
	height: 100vh;
	justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 0 20px;
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
    @media only screen and (max-width:768px) {
        width: 100%
    }
`

export const Home_Container = styled.section `
	display: flex;
	flex-direction: column;
	max-width: 625px;
    align-items: flex-start;
	h1 {
		color: rgb(15,51,97);
	}
`
export const Links = styled.div `
	display: flex;
	margin-top: 20px;
    justify-content: space-between;
	@media only screen and (max-width: 768px) {
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