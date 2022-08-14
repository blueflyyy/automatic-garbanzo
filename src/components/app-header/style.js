import styled from "styled-components";



export const HeaderWrapper = styled.div `
position: absolute;
margin:0 auto;
 top:0; 
left:0;
right:0; 


height: 61px;
width: 1519.2px;
border-bottom:1px solid #f0ebeb;


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
.active {
   color:#1e80ff;
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
img {
    vertical-align:top;
    border:none
}
.spam {
   color:darksalmon;
}
.juejin {
   display:inline;
   margin-left: 58px;
   margin-top: 15px;
   background-size: 105px 32px;
	width:105px;
	height:32px;
   cursor: pointer;
}
ul {
   display:inline;
   list-style:none;
   padding-left: 30px;
}
ul li {
   display: inline-block;
   height:39px;
   margin-right:24px;
   padding-top:22px;
   font-size: 14px;
   color:#515767;
   
}
ul .lis:hover{
   border-bottom:2px solid #1e80ff;
   }
ul,li:hover{
   cursor: pointer;

   color:#2c2a2a;
}

`

export const HeaderRight = styled.div `

   top:0;
   left:0;
   right:0;
   float:right;
   width:754px;
.search {
   
   float:left;
   height: 35px;
   width: 360px;
   border: 1px solid #c2c8d1;
   margin-top: 12px;
   border-radius: 3px;
}
.search:hover{
   border: 1px solid #515767;
}
.search input {
   height: 31px;
   width: 311px;
   border: 1px ;
   padding-left: 15px;
   padding-top:3px;
   outline:none;
}
.search input::-webkit-input-placeholder {

color: #c0c4cb;

}
 .search div {
   margin-top: 1.6px;
   height: 31px;
   width: 47px;
   display: inline-block;
   background-color: #f2f3f5;
   border-radius: 2px;
   
 }

 .sicon {
  display: inline-block;
  margin-left: 18px;
  margin-top:8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
 }
 .creater ,.createricon {
  float: left;
  height:29px;
  background-color: #1e80ff;
  margin-top: 10px;
  color: #f2f3f5;
 }

 .createricon i{
   display: inline-block;
   margin-top: 13px;
   font-size: 13px;
   margin-left: 2px;
 }
 .createrall{
   cursor: pointer;
 }
.creater {
  width:85px;
  margin-left: 24px;
  padding-top: 10px;
  padding-left: 10px;
  border-radius: 4px 0px 0px 4px;
  font-size: 14px;
}
.createricon {
   height:39px;
   width:18px;
   border-radius: 0px 4px 4px 0px;
   border-left: 1px solid #358dff;
}
.creater:hover ,.createricon:hover{
   background-color: #1171ee;
}

`
export const HeaderRRight = styled.div `
         display: flex;
         .vip img:hover{
            cursor: pointer;
         }
         .vip img {
         margin-left: 25px;
         margin-top: 18px;
         height: 24px;
         }
         .vip span {
            display: inline-block;
            margin-top: 20px;
            margin-left: 5px;
            font-size: 14px;
            color: #8a919f;
            cursor: pointer;
         }
         .icon {
            width: 40px;
            height: 43px;
            padding-top: 18px;
            padding-left:25px;
            cursor: pointer;
         }
         .icons {
            display: inline-block;
            text-align: center;
            font-size: 22px;
            color:#8a919f;
         }
         .icons:hover{
            color:#515767;
         }
         .img {
            height: 61px;
            width: 61px;
            cursor: pointer;
         }
         .img img{
            margin-top: 10px;
            margin-left: 6px;
            height: 36px;
            border-radius: 50%;
            
         }
`