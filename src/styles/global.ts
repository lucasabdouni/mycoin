import { createGlobalStyle } from 'styled-components'
import background from '../assets/background.png'

export default createGlobalStyle `

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body {
    background: #f6f6f6 url(${background}) no-repeat;
    max-width: 960px;
    -webkit-font-smoothing: antialised;
    font-family: 'Roboto', sans-serif;
}

#root {
    max-width: 100%;
    margin: 0 auto;
    padding: 40px 20px;
}
`