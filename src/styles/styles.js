import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK_800};
  }

  body, textarea, input, button {
    font-family: Roboto slab, sans-serif;
  }

  button, a {
    text-decoration: none;
    cursor: pointer;
  }

`
