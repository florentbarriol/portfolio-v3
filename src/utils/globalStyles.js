import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    --bg: #323330;
    --text: #FCFCFC;
    --textTitle: #FCFCFC;
    --textLink: #F0DB4F;
    --hr: #F0DB4F;

    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    margin: 0;
    background-color: var(--bg);
    color: var(--text);
  }
  
`;
