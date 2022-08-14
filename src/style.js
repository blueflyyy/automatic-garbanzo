import styled from "styled-components";



export const CenterWrapper = styled.div `
* {
    margin: 0%;
    padding: 0%;
}

 position: relative;
 top:55px;
 justify-content : center;

 a{
  color: inherit;
  text-decoration: none;
  display: block;
  height:39px;
  border: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0); 
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
}
a,a:hover,a:active,a:visited,a:link,a:focus{
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    outline:none;
    background: none;
    text-decoration: none;
}

::selection { 
    background: #FFF; 
    color: #333; 
} 
::-moz-selection { 
    background: #FFF; 
    color: #333; 
} 
::-webkit-selection { 
    background: #FFF; 
    color: #333; 
}
`