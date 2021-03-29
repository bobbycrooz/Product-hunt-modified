import React from 'react'
import Styled from 'styled-components'
import ProductCardSide from '../Products/ProductCardSide'



const Container = Styled.div`
    width: 300px;
    display: flex;
    flex-direction:column;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    margin-bottom: 3rem;
    margin-left:1rem;

`

const Title = Styled.div`
     width: 100%;
    margin-left:1rem;
font-size: 18px;
        letter-spacing:4px;
            font-family: 'Mulish', sans-serif;
            margin-bottom:1rem;

    background: transparent;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding:2px;
    p{
        font-size: 18px;
        font-weight: 700;
        color: black;

    }
    

`

const product = [1,1,1,1]


const SoonToLunch = () => {
    return (
        <>
            <Title>
                <p>Soon to Lunch</p>
            </Title>
        <Container>
            {
                product.map(e => <ProductCardSide/>)
            }
        </Container>

        </>
    )
}

export default SoonToLunch
