import styled from 'styled-components'

import btn from "../../assets/site.png";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  width : 100vw;
  height : 400px;
  padding : 50px 0px;
  display : flex;
  flex-direction : column;
  align-items : center;
  background-color : #5383e8;


  .logo {
    cursor : pointer;
    width: 490px;
    height: 200px;

    img{
      width: 100%;
      height: 100%;
    }
  }

`

export const Form = styled.form`
  position: relative;
  margin-top: 50px;

  .input-text{
    outline-style: none;
    width: 600px;
    padding: 15px;
    height: 50px;
    border-radius : 5px;
    border : 0;
  }

  .btn-search{
    all: unset;
    position: absolute;
    top: 10px;
    right: 20px;
    width: 50px;
    height: 30px;
    background : none;
    border : none;

    .search-icon {
      display : inline-block;
      width: 50px;
      height: 30px;
      background : url(${btn});
      background-position: -90px -797px;
      cursor : pointer;
    }

  }
`

