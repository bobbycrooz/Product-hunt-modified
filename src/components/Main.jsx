import React from 'react'
import  styled from 'styled-components'
import Homehead from './Main/Home/Homehead'
import HomePostCard from './Main/Home/HomePostCard'
import Horizontal from './Main/Horizontal'
import BlogPost from './Main/Home/HomeBlogPost'


const MainBar = styled.div`
    position: absolute;
    left:0;
    top: 4.8rem;
    right:30rem;
    

`
// const MainC = styled.div`
//     position: relative;
//     border:0.5px solid;
    

   


const Main = () => {
    return (
        <MainBar>

            
            <Homehead />  
            <Horizontal />       
            <HomePostCard title='Trending today'/>
            <Horizontal/>
            <HomePostCard title='Trending by category' nav/>
            <Horizontal/>
            <BlogPost/>   
            

            
        </MainBar>
    )
}

export default Main
