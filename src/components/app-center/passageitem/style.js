import styled from "styled-components";



export const Passageitemstyle = styled.div `
* {
    padding: 0;
    margin: 0;
}

.container{
 cursor: pointer;
 width: 660px;
 height: 129px;
 padding:12px 20px 0px ;
}
.line{
    border-bottom:1px solid #f4f5f5;
}
.meta {
    position: relative;
    width: 660px;
    height: 22px;
   
}
.title { 
    height: 24px;
    width: 660px;

}
.content {
    height: 22px;
    width: 656px;
    color: #86909c;
    font-size: 13px;
    line-height: 22px;
    overflow: hidden;
    display:block; 
    white-space:nowrap; 
    text-overflow:ellipsis;
}

.do {
    position: relative;
    height: 22px;
    width: 660px;
  
}
.i {
  margin-bottom: 10px;
}
ul {
    display: inline-block;
    margin:0;
    padding:0;
    list-style:none;
}
li{
    display: inline;
    position: relative;
}
.labal li a{
    display: inline;
    padding: 0px 8px;
    font-size: 13px;
    line-height: 22px;
    color: #86909c;
}
.labal li a:hover{
    color: #1e80ff;
}
.labal li a::after{
    right: -1px;
    top:50%;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    content: '';
    background-color: #4e5969;
    position: absolute;
}

.labal li:last-child a::after{
    content: none;
}
.name {
 display: inline-block;
 color: #4e5969;
 padding-right:8px;
 font-size: 13px;
}
.name:hover{
    color: #1e80ff;
}
.time {
    display: inline-block;
    position: relative;
    padding:0px 10px;
    line-height: 22px;
    text-align: center;
   
    font-size: 13px;
    color:#86909c;
}
.time::before{
    top:20%;
    position: absolute;
    display: block;
    height: 14px;
    width: 1px;
    left: 1px;
    content: '';
    background-color: #f2ebeb; 
}
.time::after{
    top:20%;
    position: absolute;
    display: block;
    height: 14px;
    width: 1px;
    right: 1px;
    content: '';
    background-color: #f2ebeb; 
}
.title-a{
    font-size: 16px;
    line-height: 24px;
    color:#1d2129;
    font-weight: 700;
}
.do li{
    margin: 0px 20px 0px 0px;
}
 .item {
    color: #9aa1a9;
    font-size: 16px;
 }

 i{
    
    top:2px;
 };
 span{

    padding-left:4px ;
    padding-top: 0px;
    font-size: 12.5px;
    line-height: 16.8px;
 }

.item2:hover{
    color: #1d7dfb;
}
.icon-dianzan1{
    color: #1d7dfa;
}
.likespans {
    color: #1d7dfa;
}
`