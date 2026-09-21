import { pageStyles, containerStyles } from '../layout/style'
import styled from '@emotion/styled'
import { LIGHT_RED, MOBILE_BREAKPOINT } from '../../constant/style'

export const Cv_Content = styled.section`
    ${pageStyles};
`

export const ResumeHeader = styled.header`
    ${containerStyles};
    background: transparent;
    margin-bottom: 2rem;
    h1 {
        color: ${LIGHT_RED};
        font-size: 3.6rem;
        font-weight: 500;
        line-height: 110%;
        margin-bottom: .9rem;
    }
    h2 {
        color: #26364d;
        font-size: 1.65rem;
        font-weight: 400;
        line-height: 140%;
        max-width: 820px;
    }
    p {
        color: #42526b;
        font-size: 1.1rem;
        max-width: 760px;
    }
    @media only screen and (max-width:${MOBILE_BREAKPOINT}) {
        h1 {
            font-size: 2.55rem;
        }
        h2 {
            font-size: 1.25rem;
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

export const ActionRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: .75rem;
    margin-top: 1.5rem;
    button,
    a {
        align-items: center;
        background: white;
        border: 1px solid rgba(15, 51, 97, .22);
        border-radius: 6px;
        box-shadow: 0 8px 18px rgba(15, 51, 97, .07);
        color: ${LIGHT_RED};
        cursor: pointer;
        display: flex;
        font-size: .95rem;
        font-weight: 500;
        min-height: 44px;
        padding: 0 1rem;
        text-decoration: none;
    }
    button:first-of-type {
        background: ${LIGHT_RED};
        border-color: ${LIGHT_RED};
        color: white;
    }
`

export const ResumeGrid = styled.div`
    ${containerStyles};
    display: grid;
    grid-template-columns: minmax(250px, .45fr) minmax(0, 1fr);
    gap: 1.25rem;
    @media only screen and (max-width: 920px) {
        grid-template-columns: 1fr;
    }
`

export const SidePanel = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const Section = styled.section`
    background: white;
    border: 1px solid rgba(15, 51, 97, .14);
    border-radius: 8px;
    box-shadow: 0 12px 30px rgba(15, 51, 97, .06);
    padding: 1.25rem;
    h2 {
        color: ${LIGHT_RED};
        font-size: 1.15rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }
    p {
        color: #26364d;
        font-size: .98rem;
        line-height: 160%;
        margin: 0 0 .5rem;
    }
    a {
        color: ${LIGHT_RED};
        font-weight: 500;
        text-decoration: none;
    }
`

export const ContactList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    li {
        display: grid;
        gap: .25rem;
        margin-bottom: .8rem;
    }
    span {
        color: #66758c;
        font-size: .8rem;
        text-transform: uppercase;
    }
    a {
        overflow-wrap: anywhere;
    }
`

export const SkillList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
        background: rgba(15, 51, 97, .08);
        border: 1px solid rgba(15, 51, 97, .12);
        border-radius: 999px;
        color: ${LIGHT_RED};
        font-size: .82rem;
        font-weight: 500;
        padding: .45rem .6rem;
    }
`

export const HighlightList = styled.ul`
    display: grid;
    gap: .7rem;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
        border-left: 3px solid #1f7a6d;
        color: #26364d;
        line-height: 155%;
        padding-left: .85rem;
    }
`

export const ExperienceList = styled.div`
    display: grid;
    gap: 1rem;
`

export const ExperienceCard = styled.article`
    border-top: 1px solid rgba(15, 51, 97, .12);
    padding-top: 1rem;
    &:first-of-type {
        border-top: 0;
        padding-top: 0;
    }
    p {
        color: #26364d;
        margin: .75rem 0;
    }
    ul {
        margin: 0;
        padding-left: 1.1rem;
    }
    li {
        color: #1f2937;
        line-height: 155%;
        margin-bottom: .45rem;
    }
`

export const ExperienceHeader = styled.div`
    align-items: flex-start;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    h3 {
        color: ${LIGHT_RED};
        font-size: 1.1rem;
        font-weight: 500;
        margin-bottom: .25rem;
    }
    strong {
        color: #26364d;
        font-weight: 500;
    }
    span {
        color: #66758c;
        flex: 0 0 auto;
        font-size: .9rem;
    }
    @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
        flex-direction: column;
        gap: .35rem;
    }
`

export const Location = styled.span`
    color: #66758c;
    display: block;
    font-size: .9rem;
    margin-top: .35rem;
`
