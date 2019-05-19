import { createGlobalStyle } from 'styled-components';

// Colos came from https://github.com/dracula/visual-studio-code

export const GlobalStyles = createGlobalStyle`
  body {
    --bg: #282A36;
    --text: #F8F8F2;
    --textTitle: #fff;
    --textLink: #FFB86C;
    --hr: #6272A4;

    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    margin: 0;
    background-color: var(--bg);
    color: var(--text);
  }
`;
