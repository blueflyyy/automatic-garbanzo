import styled from "styled-components";



export const Centrestyle = styled.div `
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
export const Centreleftstyle = styled.div `
  .header-list {
    padding-left: 12px ;
    padding-right:12px;
    border-bottom: 2px solid #f4f5f5;
  }
  .list {
     display:inline-block;
     position:relative;
     width: 56.88px;
     height: 42.24px;
     font-size: 14px;
     color: #7f8284;
   
  }
  .list a {
    position: absolute;
    top:18px;
    width: 55.88px;
    height: 14.04px;
    text-align: center;
   
    line-height: 14.04px;
    border-right:2px solid #f4f5f5;
  }
  ul li.list:last-child a {
    border-right:none;
  }
  .list a:hover{
   cursor: pointer;
   color:#1e80ff;
}
.active {
    color:#1e80ff;
}

`