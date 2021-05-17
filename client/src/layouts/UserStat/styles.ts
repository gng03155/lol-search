import React from 'react'
import styled from 'styled-components'
import frame from "../../assets/user-frame.png";


console.log(frame);

export const UserStatus = styled.div`
  
  width : 800px;
  height : 200px;
  margin : 0 auto;
  padding : 0 100px;
  display : flex;
  justify-content : space-around;
  background : url(${frame}) no-repeat ;
  background-size : 100% 100%;
`

export const User = styled.div`

  display : flex;
  align-items : center;

  
  img {
    width: 100px;
    height : 100px;
    border-image-outset : 1px solid black;
  }

  span {
    margin-top : 10px;
    margin-left : 10px;
    display: block;
    font-size: 25px;
  }


`

export const Tier = styled.div`

  display : flex;
  align-items : center;


  img {
    width: 104px;
    height: 104px;
  }

  .tierinfo{
    p {
      text-align : center;
      margin-bottom : 3px;
    }

    p.tier {
      color : #1f8ecd;
      font-size : 20px;
      font-weight : bold;
    }
  }

`