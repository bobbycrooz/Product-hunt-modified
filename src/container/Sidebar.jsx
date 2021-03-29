import React from 'react'
import styled from 'styled-components'
import SidebarPostCard from '../components/Sidebar/SidebarPostCard'
import SoonToLunch from '../components/Sidebar/SoonToLunch'


const SideBar = styled.div`
    position: absolute;
    right: 0;
    top: 4.8rem;
    width: 25rem;
    background: transparent;
    padding-left:1rem;
    @media only screen and (max-width:800px){
        &{
            width: 20rem;
            
        }
    }
    @media only screen and (max-width:700px){
        &{
            width: 19rem;
            
        }
    }
`

const Sidebar = () => {
    return (
        <SideBar>
            <SidebarPostCard/>
            <SoonToLunch/>
        </SideBar>
    )
}





export default Sidebar
