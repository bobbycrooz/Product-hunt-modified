import React from 'react'
import Styled from 'styled-components'


const Container = Styled.div`
    width: 100%;
    height: 9vh;
    border-top:1px solid rgba(63, 63, 63, 0.466);
    padding: 2rem;
    color: ${({theme}) => theme.textColor };
    
    display: flex;
    justify-content:center;
    align-items:center;
`
const Logo = Styled.p`
    font-weight: 700;
    font-size: 15px;

`

const Footer = () => {
    return (
        <Container>
            <Logo>
                showCase 2021
            </Logo>
        </Container>
    )
}

export default Footer
