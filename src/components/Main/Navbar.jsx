import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo1.png'



const Nav = styled.div`
    width: 100%;
    height: 4.5rem;
    opacity:1;
    visibility:visible;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 3rem;
    position: fixed;
    z-index: 1000;
    top:0;
    color: ${({theme}) => theme.textColor };
    background-color: #fff ;
   
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -5px;

    &.active{
        opacity:0;
        visibility:hidden;
    }

`

const LogoText = styled.div`
    /* padding: 1rem ;
    height: 100%; */
    display:flex;
    justify-content: center;
    align-items:center;
    font-size: 29px;
    font-weight: 700;
   



`
const LogoContainer = styled.a`
    padding: 1rem ;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items:center;
    margin-left:20px;
    
    


`

const NavContainer = styled.div`
    height:100%;
    display:flex;
    justify-content: space-between;
    align-items:center;

`
const Logo = styled.img`
  /* position: absolute;

  left:20px;
  top:9px; */
  width:44px;
  height:44px;
  /* border:1px solid ; */

  

`;

const NavUl = styled.ul`
    display: flex;
    justify-content:space-between;
    align-items: center;
    width: 300px;
    padding: 0;
     height:100%;
`

const NavLi = styled.a`
    font-weight: 500;
    font-size: 18px;
    text-decoration:none;
    color: ${({theme}) => theme.textColor };
    &:hover{
        border-bottom:3px solid ${({theme}) => theme.secondary };
    }
    &:visited{
    color: black;
        
    }
    height:100%;
    width:100%;
    display:flex;
    justify-content: center;
    align-items:center;
    cursor:pointer;
    
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
        const navbar = document.getElementById('navbar');
        if(window.scrollY > 100){
            navbar.classList.toggle('active')
        }

    return (
        <Nav id='navbar'>
            <LogoContainer>
                <Logo src={logo}></Logo>
                <LogoText>ShowCase</LogoText>
            </LogoContainer>
            <NavContainer>
                <NavUl className='nav'>

                    <NavLi href='https://www.figma.com/file/zsKEwA9JqWXDaUuvcCECuB?node-id=90:2574'>
                        Figma
                    </NavLi>

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
