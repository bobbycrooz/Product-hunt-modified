import React from 'react'
import styled from 'styled-components'
import SidebarPostCard from '../components/Sidebar/SidebarPostCard'
import SoonToLunch from '../components/Sidebar/SoonToLunch'


const SideBar = styled.div`
    position: absolute;
    right: 0;
    top: 4.8rem;
    width: 30rem;
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
