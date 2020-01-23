import React from 'react'
import { Global, css } from '@emotion/core'

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
            font-size: 18px;
            li {
                padding: 10px;
                color: white;
            }
        }
    }
        body {
            margin: 0px;
            background: linear-gradient(to bottom, #D5DEE7 0%, #E8EBF2 50%, #E2E7ED 100%), linear-gradient(to bottom, rgba(0,0,0,0.02) 50%, rgba(255,255,255,0.02) 61%, rgba(0,0,0,0.02) 73%), linear-gradient(33deg, rgba(255,255,255,0.20) 0%, rgba(0,0,0,0.20) 100%);
         background-blend-mode: normal,color-burn;
        }
      `}
    />
  )