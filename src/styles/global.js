import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #1c1e2e;
    -webkit-font-smoothing: antialiased;
    color: #fff;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root{
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  img{
    max-width: 100%;
  }
`
