import React from "react";
import Styled from "styled-components";
import logo from '../../assets/logo.png'

const Logo = Styled.img`
  position: absolute;
  width:40px;
  height:40px;
  margin-top:1.3rem;
  left: 55%;
  transform: translateX(-40%);
`;


const Hr = Styled.hr`
  margin-left: 8rem;
  margin-top: 2rem;
  width:800px;
  border-color:${({theme}) => theme.horizontal};
`




const Horizontal = ({click}) => {
  return (
    <>
      <Logo onClick={click} src={logo}></Logo>
      <Hr/>
    </>
  );
};

export default Horizontal;
