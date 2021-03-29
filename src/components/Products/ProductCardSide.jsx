import React from 'react'
import Styled from "styled-components";

const Cardcontainer = Styled.div`
    padding:1rem;
    background:#fff;
    display:flex;
    justify-content: center;
    align-items:center;
    margin-bottom:3px;

    
`;
const Card = Styled.div`
    width:298px;
    background:#b3b3b3;
    height:108px;
    
    color: ${({theme}) => theme.textColor };

`;
// const CardAction = Styled.div`
//     width: 140px;
//     text-align:center;
//     margin-top:1rem;
//     p{
//         text-transform: capitalize;
//         font-weight: 700;
//         margin:0;
        

//     }
//     display:flex;
//     flex-direction:column;
//     align-items:space-between;

// `;

// const IconContainer = Styled.div`
//     display:flex;
//     margin-top: 1rem;
//     justify-content:space-between;
// `;
// const CardDetails = Styled.div`
//     margin-top: 1rem;
//     text-align:center;
//     width:298px;
//     height:120;
    
//     line-height: 1.4rem;
//     p{
//         color: black
//         margin:0;
//     }
// `

const ProductCardSide = () => {
    return (
        <Cardcontainer>
            <Card>
                <p>product</p>
            </Card>
        </Cardcontainer>
    )
}

export default ProductCardSide
