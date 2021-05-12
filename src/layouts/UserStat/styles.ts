import React from 'react'
import styled from 'styled-components'

export const UserStatus = styled.div`
  
  width : 800px;
  height : 200px;
  margin : 0 auto;
  display : flex;
  justify-content : space-around;
  background-color : red;
`

export const User = styled.div`

  display : flex;
  align-items : center;

  
  & img {
    width: 100px;
    height : 100px;
  }

  & span {
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
    }
  }

`