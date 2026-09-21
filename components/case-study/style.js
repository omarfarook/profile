import { pageStyles, containerStyles } from '../layout/style'
import styled from '@emotion/styled'
import Link from 'next/link'
import { LIGHT_RED, MOBILE_BREAKPOINT } from '../../constant/style'

export const Page = styled.section`
    ${pageStyles};
`

export const Container = styled.article`
    ${containerStyles};
`

export const BackLink = styled(Link)`
    color: ${LIGHT_RED};
    display: inline-flex;
    font-weight: 500;
    margin-bottom: 1.5rem;
    text-decoration: none;
`

export const Header = styled.header`
    background: transparent;
    h1 {
        color: ${LIGHT_RED};
        font-size: 3.35rem;
        font-weight: 500;
        line-height: 115%;
        margin-bottom: 1rem;
    }
    p {
        color: #42526b;
        font-size: 1.15rem;
        line-height: 175%;
        max-width: 780px;
    }
    @media only screen and (max-width:${MOBILE_BREAKPOINT}) {
        h1 {
            font-size: 2.25rem;
        }
        p {
            font-size: 1rem;
        }
    }
`

export const Kicker = styled.span`
    color: #1f7a6d;
    display: block;
    font-size: .85rem;
    font-weight: 500;
    margin-bottom: .75rem;
    text-transform: uppercase;
`

export const Overview = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    margin: 2rem 0 1rem;
    section {
        background: white;
        border: 1px solid rgba(15, 51, 97, .14);
        border-radius: 8px;
        box-shadow: 0 12px 30px rgba(15, 51, 97, .06);
        padding: 1.25rem;
    }
    h2 {
        color: ${LIGHT_RED};
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: .65rem;
        text-transform: uppercase;
    }
    p {
        color: #26364d;
        font-size: 1rem;
        line-height: 165%;
        margin: 0;
    }
    @media only screen and (max-width: 820px) {
        grid-template-columns: 1fr;
    }
`

export const SectionGrid = styled.div`
    display: grid;
    gap: 1rem;
`

export const DetailSection = styled.section`
    background: white;
    border: 1px solid rgba(15, 51, 97, .14);
    border-radius: 8px;
    box-shadow: 0 12px 30px rgba(15, 51, 97, .06);
    padding: 1.25rem;
    h2 {
        color: ${LIGHT_RED};
        font-size: 1.1rem;
        font-weight: 500;
        margin-bottom: .8rem;
    }
    ul {
        margin: 0;
        padding-left: 1.1rem;
    }
    li {
        color: #1f2937;
        line-height: 160%;
        margin-bottom: .5rem;
    }
`

export const StackList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    list-style: none;
    margin: 1.25rem 0 0;
    padding: 0;
    li {
        background: rgba(15, 51, 97, .08);
        border: 1px solid rgba(15, 51, 97, .12);
        border-radius: 999px;
        color: ${LIGHT_RED};
        font-size: .85rem;
        font-weight: 500;
        padding: .48rem .65rem;
    }
`

export const FooterCta = styled.section`
    align-items: center;
    background: rgba(31, 122, 109, .08);
    border-left: 3px solid #1f7a6d;
    border-radius: 0 8px 8px 0;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    margin-top: 1.5rem;
    padding: 1rem 1.25rem;
    p {
        color: #26364d;
        margin: 0;
    }
    a {
        color: ${LIGHT_RED};
        font-weight: 500;
        text-decoration: none;
        white-space: nowrap;
    }
    @media only screen and (max-width: 640px) {
        align-items: flex-start;
        flex-direction: column;
    }
`
