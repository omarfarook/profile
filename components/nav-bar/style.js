import styled from '@emotion/styled'
import Link from 'next/link'
import { FORMAL_WHITE } from '../../constant/style'

export const navContainer = styled.div`
    width: 23%;
    padding: 42px 28px 28px;
	position: fixed;
	display: flex;
	flex-direction: column;
	height: 100vh;
    background: #0f3361;
    box-sizing: border-box; 
    z-index: 9999;
    border-right: 1px solid rgba(255, 255, 255, .08);
    & ul li {
		position: relative;
		list-style: none;
		padding: 0;
		margin: 8px 0;
		cursor: pointer;
		a {
            border-radius: 6px;
            box-sizing: border-box;
            display: block;
			font-size: 15px;
            font-weight: 400;
			color: rgba(255, 255, 255, 0.72);
            padding: 11px 12px;
			text-decoration: none;
			&:hover {
				color: ${FORMAL_WHITE};
                background: rgba(255, 255, 255, .08);
			}
		}
        .active {
            color: ${FORMAL_WHITE};
            background: rgba(255, 255, 255, .12);
            box-shadow: inset 3px 0 0 #1f7a6d;
        }
    }
	
    @media only screen and (max-width: 768px) {
            display: none;
        }
`

export const Brand = styled(Link) `
    border-bottom: 1px solid rgba(255, 255, 255, .12);
    color: ${FORMAL_WHITE};
    display: block;
    margin-bottom: 28px;
    padding-bottom: 28px;
    text-decoration: none;
`

export const links = styled.ul `
    padding: 0;
    margin: 0;
`
export const name_role = styled.section `
    margin-top: 25px;
    text-align: center;
    display: flex;
    flex-direction: column;
`
export const name = styled.h2 `
    font-size: 1.35rem;
    color: white;
    line-height: 125%;
    margin-bottom: 8px;
`
export const role = styled.p `
    color: rgba(255, 255, 255, .72);
    margin: 0;
    font-size: .92rem;
    line-height: 145%;
`
export const get_in_touch = styled.section `
    position: absolute;
    bottom: 26px;
    width: calc(100% - 56px);
    left: 28px;
    span {
        color: rgba(255, 255, 255, 0.62);
        display: block;
        font-size: 12px;
        line-height: 1;
        margin-bottom: 10px;
    }
    ul {
        list-style: none;
        display: flex;
        justify-content: flex-start;
        gap: 8px;
        padding-left: 0;
        margin-top: 0;
        li {
            margin: 0;
            padding: 0;
        }
        a {
            align-items: center;
            border: 1px solid rgba(255, 255, 255, .14);
            border-radius: 6px;
            color: rgba(255, 255, 255, .76);
            display: flex;
            height: 34px;
            justify-content: center;
            width: 34px;
            &:hover {
                background: rgba(255, 255, 255, .08);
                color: white;
            }
        }
    }
`
export const download_link = styled.p `
    border: 1px solid rgba(255, 255, 255, .18);
    border-radius: 6px;
    color: ${FORMAL_WHITE};
    cursor: pointer;
    font-size: .95rem;
    margin-top: 18px;
    padding: 12px;
    text-align: center;
    &:hover {
        background: rgba(255, 255, 255, .08);
    }
`
