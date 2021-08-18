import styled from '@emotion/styled'
import { FORMAL_WHITE } from '../../constant/style'

export const Body_Content = styled.section `
    display: flex;
	width: 80%;
	float: right;
	height: 100vh;
	justify-content: center;
    align-items: center;
    
    @media only screen and (max-width:768px) {
        width: 100%
    }
`

export const Home_Container = styled.section `
	display: flex;
	align-items: center;
	flex-direction: column;
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