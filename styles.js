import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --primary-bg: #FAF9F7;
  --overlay-bg: hsl(0 0% 12% / 0.4);
  --primary-white: #FFF;
  --secondary-white: #f5f5f5;
  --primary-grey: #1E1E1E;
  --secondary-grey: #757575;
  --tertiary-grey: #B3B3B3;

  --primary-button: #2C2C2C;


  --movement-yellow: #FEBC2F;
  --selfcare-mint: #00C8B3;
  --home-indigo: #6155F5;




}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
h1, h2, h3, h4, h5, h6, p{
margin: 0;
}
  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--primary-bg);
  } 
  ul {
    margin: 0;
    padding: 0; 
    list-style-type: none;

    & li{
      list-style-type: none;
      padding: 0;
     
    }

  }

`;
