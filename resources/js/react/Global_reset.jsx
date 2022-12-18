
import { createGlobalStyle } from "styled-components";

const Global_reset = createGlobalStyle`
* {
    font-family: serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
  }
  
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
  
`
export default Global_reset;