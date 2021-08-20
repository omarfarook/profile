import React from 'react'
import { Global, css } from '@emotion/core'
import { BG_GRADIENT  } from '../../constant/style'

export const GlobalStyle = () => (
    <Global
      styles={css`
      @media only screen and (min-width: 768px) {
        .links {
            align-self: flex-end;
        }
    }
    .fixed-bg:before {
        position: fixed;
        width: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: auto;
        content: " ";
        display: block;
        background: url(../../static/bg.jpg) top center no-repeat #bababa;
        background-size: cover;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: 400;
        line-height: 120%;
        margin: 0;
    }
    p {
		font-size: 1.25rem;
    	line-height: 175%;
	}
    h1 {
        font-size: 3rem;
    }
    header {
        background: grey;
        ul {
            list-style: none;
            display: flex;
            font-size: 16px;
            li {
                padding: 10px;
                color: white;
            }
        }
    }
        body {
            margin: 0px;
            font-family: Rubik,sans-serif;
            font-size: 16px;
            font-weight: 300;

        }
      `}
    />
  )