import React from "react";
import Styled from "styled-components";
import ProductCardSide from "../Products/ProductCardSide";
import MainProduct from "./MainProduct";

const Container = Styled.div`
    background: transparent;

    width: 300px;
    display: flex;
    flex-direction:column;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    margin-bottom: 3rem;
    margin-left:1rem;

    /* border:1px solid red; */

`;
// const Body = Styled.div`
//     width:100%;
//     background:#fff;


// `;

const Title = Styled.div`
     width: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    margin-left:1rem;
    font-size: 18px;
        letter-spacing:4px;
            font-family: 'Mulish', sans-serif;
            margin-bottom:1rem;
    justify-content: flex-start;
    padding:2px;
    p{
        font-size: 18px;
        font-weight: 700;
        color: ${({theme}) => theme.textColor };

    }
    

`;
const product = [1, 1, 1, 1];

const SidebarPostCard = () => {
  return (
    <>
      <Title>
        <p>Trending</p>
      </Title>
      <Container>
        <MainProduct />

        {product.map((item) => (
          <ProductCardSide />
        ))}
      </Container>
    </>
  );
};

export default SidebarPostCard;
