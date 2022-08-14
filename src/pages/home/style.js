import styled from "styled-components";



export const Nav = styled.div`
display: flex;
justify-content : center;
border-bottom: 1px solid #f0ebeb;
 .lis {
    display: inline-block;
    margin-right: 25px;
    height: 100%;
    font-size: 13.5px;
    color:#515767;
}
.lis a {
    display:block;
    height: 100%;
    text-align: center;
    line-height:44.99px;
}
.lis a:hover{
   cursor: pointer;
   color:#1e80ff;
}
.active {
    color:#1e80ff;
}
.nav {
    width: 960px;
    height: 45.99px;
}
.last {
    margin-right: 0px;
    margin-left:279px ;
}

`
export const Centrestyle = styled.div`
    * {
        margin: 0;
        padding: 0;
    }
    background-color: #f4f5f5;
    display: flex;
    justify-content : center;
     .centre {
        display: flex;
        height: auto;
        justify-content : center;
        width: 960px; 
        height: auto;
        margin-top: 14px;
     }
     .centreleft{ 
        width: 700px;
        background-color: #fff;
      
        margin-right:20px;
     }
     .centreright {
        width: 240px;
        background-color: #fff;
      
     }
   
`