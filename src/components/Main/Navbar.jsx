import React from 'react'
import styled from 'styled-components'


const Nav = styled.div`
    width: 100%;
    height: 4.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 3rem;
    position: fixed;
    z-index: 1000;
    top:0;
    background-color: ${({theme}) => theme.primary } ;
    color:#08131F;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -5px;

`

const Logo = styled.div`
    padding: 1rem ;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items:center;
    font-size: 29px;
    font-weight: 700;


`

const NavContainer = styled.div`
    height:100%;
    display:flex;
    justify-content: space-between;
    align-items:center;

`

const NavUl = styled.ul`
    display: flex;
    justify-content:space-between;
    align-items: center;
    width: 200px;
    padding: 0;
     height:100%;
`

const NavLi = styled.a`
    list-style: none;
    text-decoration:none;
    color:black;
    height:100%;
    width:100%;
    display:flex;
    justify-content: center;
    align-items:center;
    cursor:pointer;
    &:hover{
         background-color: palevioletred;
     }
`

const SubscribeBtn = styled.button`
    border: 2px solid black;
    padding: 4px 8px;
    height: 100%;
    margin-left:6px;
    border-radius:8px;
    font-size: 16px;
    background-color:#fff;
    text-transform: capitalize;


`


function ShowModal(){
    const modal = document.getElementById('modal')
        // modal.style.visibility = 'visible';
        modal.classList.toggle('active')
    }


const Navbar = () => {
    return (
        <Nav>
            <Logo>ShowCase</Logo>
            <NavContainer>
                <NavUl className='nav'>
                    <NavLi href='#blog'>
                        Blog
                    </NavLi>
                    <NavLi  onClick={ShowModal}>
                        Sign in
                    </NavLi>
                </NavUl>
                <SubscribeBtn>
                    Sing up
                </SubscribeBtn>
            </NavContainer>
        </Nav>
    )
}

export default Navbar
