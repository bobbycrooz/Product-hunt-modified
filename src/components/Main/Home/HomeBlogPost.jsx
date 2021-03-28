import React from 'react'
import Styled from 'styled-components'
import BlogCard from './BlogCard' 
import Grid from '@material-ui/core/Grid'


const Container = Styled.div`
    width: 800px;
    margin-left: 10rem;
    margin-top: 1rem;

`

const ContainerTitle = Styled.div`
    width: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding:2px;
    p{
        font-size: 20px;
        font-weight: 700;
        color: rgba(11, 7, 29, 0.897);

    }
    
`

const ContainerBody = Styled.div`
    width: 100%;
    color: black;
    background: #fff;
    padding:0;
    display: flex;
    flex-wrap:wrap;
    justify-content:space-around;
    padding:0.6rem;
    align-items:space-around;

`


const arr = [1,1,1,1,1,1,1,1,1,1,1,1]


const HomeBlogPost = () => {
    return (
        <Container id='blog'>
            <ContainerTitle>
                <p>
                    Blogs
                </p>
            </ContainerTitle>
            <ContainerBody>
<Grid container spacing={1}>
                    {arr.map(item => <BlogCard/> )}          
                </Grid>



                {/* <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
                <BlogCard/> */}
            </ContainerBody>
            
        </Container>
    )
}

export default HomeBlogPost
