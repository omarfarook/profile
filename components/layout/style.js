import { css } from '@emotion/react'
import { CONTENT_WIDTH, MOBILE_BREAKPOINT, PAGE_BACKGROUND, PAGE_MAX_WIDTH } from '../../constant/style'

export const pageStyles = css`
    box-sizing: border-box;
    float: right;
    width: ${CONTENT_WIDTH};
    min-height: 100vh;
    padding: 4.75rem 20px;
    background: ${PAGE_BACKGROUND};
    @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
        width: 100%;
        padding: 5rem 20px 3rem;
    }
`

export const containerStyles = css`
    box-sizing: border-box;
    width: 100%;
    max-width: ${PAGE_MAX_WIDTH};
    min-width: 0;
    margin: 0 auto;
`
