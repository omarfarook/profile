import styled from '@emotion/styled'
import { FORMAL_WHITE, LIGHT_RED } from '../../constant/style'

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
			height: 150px;
			width: 150px;
			background: black;
			color: white;
			display: flex;
			border-radius: 50%;
			text-align: center;
			vertical-align: bottom;
			justify-content: center;
			align-items: center;
			font-size: 50px;
		}
`
export const Name = styled.span `
font-size: 30px;
			margin: 5px 0;
`
export const Role = styled.span `
font-size: 18px;
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