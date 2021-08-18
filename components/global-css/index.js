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