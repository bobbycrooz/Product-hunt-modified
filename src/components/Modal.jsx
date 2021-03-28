import React from 'react'
import Styled from 'styled-components'

const ModalContainer = Styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    background:rgba(0, 0, 0, 0.705);
    display:flex;
    justify-content:center;
    align-items: center;
    z-index:10000;
    visibility:hidden;
    opacity:0;
    transition: all 0.3s ease-in-out;
`

const ModalCard = Styled.div`
    width: 700px;
    height:400px;
    background:#fff;
    border-radius:8px;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

`


function hideModal(){
    const modal = document.getElementById('modal')
        // modal.style.visibility = 'visible';
        modal.classList.toggle('active')
    }

const Modal = () => {
    return (
        <ModalContainer id='modal'>
            <ModalCard>
                login here
                <button onClick={hideModal}>
                    cancle
                </button>
            </ModalCard>
        </ModalContainer>
    )
}

export default Modal