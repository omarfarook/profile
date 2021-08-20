import styled from '@emotion/styled'
import { FORMAL_WHITE, LIGHT_RED } from '../../constant/style'

export const Body_Content = styled.section `
    display: flex;
	width: 77%;
	float: right;
	height: 100vh;
	ustify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 0 20px;
    @media only screen and (max-width:768px) {
        width: 100%
    }
`

export const Home_Container = styled.section `
	display: flex;
	flex-direction: column;
	max-width: 625px;
    align-items: flex-start;
	color: ${FORMAL_WHITE};
    z-index: 9998;
	padding-top: 8rem;
    display: block;
    padding-left: 3rem;
	p {
		font-size: 1.5rem;
	}
	div {
		height: 125px;
		width: 125px;
		background: black;
		color: ${FORMAL_WHITE};
		display: flex;
		border-radius: 50%;
		text-align: center;
		vertical-align: bottom;
		justify-content: center;
		align-items: center;
		font-size: 45px;
		img {
			display: none;
		}
		span {
			display: none;
		}
		@media only screen and (max-width:768px) {
			img {
				display: block;
				width: 100%;
				height: 100%;
				border-radius: 50%;
				object-fit: cover;
        		object-position: center right;
			}
		}
		@media only screen and (min-width:768px) {
			span {
				display: block;
			}
		}
		
	}
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

export const AboutButton = styled.button `
	padding: 15px 20px;
	background: transparent;
	cursor: pointer	;
	color: white;
	border: 1px solid ${FORMAL_WHITE};
	text-transform: uppercase;
	font-weight: 500;
	text-decoration: none;
	opacity: .8;
	box-shadow: 1px 1px 2px rgb(0 0 0 / 47%);
	margin: 5rem 0;
	font-size: 1rem;
    &:hover {
		opacity: 1;
   }
//   @media only screen and (max-width:768px) {
//     display: flex;
//     input {
//       margin: 0 auto;
//     }
//   }
`