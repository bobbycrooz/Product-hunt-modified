import React from "react";
import Styled from "styled-components";

const Logo = Styled.span`
  position: absolute;
  margin-top:1.3rem;
  left: 55%;
  transform: translateX(-40%);
  border: 1px solid;
  background: black;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;


const Hr = Styled.hr`
  margin-left: 8rem;
  margin-top: 2rem;
  width:800px;
`




const Horizontal = ({click}) => {
  return (
    <>
      <Logo onClick={click}>icon</Logo>
      <Hr/>
    </>
  );
};

export default Horizontal;
