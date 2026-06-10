import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
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
    background-color: #e6e6e6;
  } 
  ul {
    margin: 0;
    padding: 0; 
    list-style-type: none;

    &li{
      list-style-type: none;
      padding: 0;
      text-decoration:none;
    }

  }

`;
