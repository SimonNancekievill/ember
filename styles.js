import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --primary-bg: #F8F2E8;
  --overlay-bg: hsl(0 0% 12% / 0.4);
  --primary-white: #FFF;
  --secondary-white: #f5f5f5;
  --tertinary-white: #FDFBF9;
  --primary-grey: #1E1E1E;
  --secondary-grey: #757575;
  --tertiary-grey: #B3B3B3;
  --another-grey: #D9D9D9;

  --primary-orange: #E27A48;
  --secondary-orange: #DD6B41;
  --tertiary-orange: #F4B8A0;

  --primary-button: #2C2C2C;


  --movement-yellow: #E0A560;
  --selfcare-mint: #2B9B7E;
  --home-indigo: #7BA3D1;
  --social-pink: #D97B88;
  --other-grey: #B8A899;



}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    text-transform: lowercase;
  }
h1, h2, h3, h4, h5, h6, p, label{
margin: 0;
text-transform: lowercase;
color: var(--primary-grey);
}


  body {
    margin: 0;
    font-family: Overused Grotesk, Arial, Helvetica, sans-serif;
    background-color: var(--primary-bg);
  } 
  ul {
    margin: 0;
    padding: 0; 
    list-style-type: none;
    width: 100%;

    & li{
      list-style-type: none;
      padding: 0;
      margin: 0;
     
    }

  }


  @font-face {
    font-family: "Overused Grotesk";
    src: url("/fonts/OverusedGrotesk-VF.ttf") format("truetype-variations");
    font-weight: 300 900;
}

`;
