import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --color-aqua-blue: #12d2e6;
        --color-gold-yellow: #fabf37;
        --color-dark-yellow: #ff9c1e;
        --color-grass-green: #92bc5c;
        --color-green: #00ad6a;
        --color-gray: #7e7e7e;
        --color-light-pink: #f4c6d9;
        --color-light-purple: #d2c2de;

        font-size: 62.5%;
    }

    * {
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body, #root {
        min-height: 100vh;
    }

    body {
        font-size: 2.2rem;
        color: #fff;
    }
`;
