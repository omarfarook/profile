'use client'

import styled from '@emotion/styled'
import { CONTENT_WIDTH, LIGHT_RED, MOBILE_BREAKPOINT, PAGE_BACKGROUND } from '../../constant/style'

export const Page = styled.main`
  box-sizing: border-box;
  float: right;
  width: ${CONTENT_WIDTH};
  min-height: 100vh;
  padding: 4.75rem 20px;
  background: ${PAGE_BACKGROUND};
  color: #26364d;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    padding: 5.5rem 20px 3rem;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 980px;
  min-width: 0;
  margin: 0 auto;
  overflow-wrap: anywhere;
  a { color: ${LIGHT_RED}; text-underline-offset: .2em; }
  a:hover { color: #1f7a6d; }
  a:focus-visible { outline: 3px solid #1f7a6d; outline-offset: 4px; }
  h1 { font-size: clamp(2rem, 3.5vw, 3.25rem); font-weight: 500; line-height: 1.2; color: ${LIGHT_RED}; margin: 1.25rem 0; }
`

export const PostMeta = styled.p`
  && { font-size: .9rem; line-height: 1.6; color: #536176; margin: .75rem 0 1.5rem; }
`

export const Preview = styled.article`
  border-top: 1px solid #d8dfe8;
  margin-top: 2rem;
  padding-top: 1.75rem;
  h2 { font-size: 1.55rem; line-height: 1.35; font-weight: 500; }
  p { font-size: 1rem; line-height: 1.7; }
`

export const Prose = styled.div`
  font-size: 1.0625rem;
  line-height: 1.85;
  p, li { font-size: inherit; line-height: inherit; }
  p { margin: 1.35rem 0; }
  h2, h3 { color: ${LIGHT_RED}; font-weight: 500; line-height: 1.35; scroll-margin-top: 80px; }
  h2 { font-size: 1.7rem; margin: 3rem 0 1.1rem; }
  h3 { font-size: 1.3rem; margin: 2rem 0 1rem; }
  strong { font-weight: 500; }
  li { margin: .5rem 0; }
  blockquote { margin: 1.5rem 0; padding: .1rem 1.25rem; border-left: 3px solid #1f7a6d; }
  code { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: .88em; background: #e8edf4; border-radius: 3px; padding: .15em .3em; }
  pre { max-width: 100%; box-sizing: border-box; overflow-x: auto; padding: 1.25rem; margin: 1.75rem 0; border: 1px solid #d8dfe8; border-radius: 8px; background: #eef2f7; color: #25344b; line-height: 1.65; font-size: .875rem; tab-size: 2; }
  pre code { display: block; width: max-content; min-width: 100%; background: none; padding: 0; font-size: inherit; white-space: pre; overflow-wrap: normal; }
  pre:focus-visible { outline: 3px solid #1f7a6d; outline-offset: 3px; }
  .hljs-keyword, .hljs-selector-tag, .hljs-literal { color: #7937a0; }
  .hljs-string, .hljs-regexp { color: #176447; }
  .hljs-title, .hljs-built_in { color: #0758a3; }
  .hljs-number, .hljs-attr { color: #9b3e18; }
  .hljs-comment { color: #536176; font-style: italic; }
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 1rem;
    h2 { font-size: 1.45rem; }
    pre { padding: 1rem; font-size: .8rem; }
  }
`
