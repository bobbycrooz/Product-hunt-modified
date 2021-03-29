import React from 'react'
import Styled from 'styled-components'
import BlogCard from './BlogCard' 
import Grid from '@material-ui/core/Grid'


const Container = Styled.div`
    width: 800px;
    margin-left: 8rem;
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
        font-size: 18px;
        letter-spacing:4px;
            font-family: 'Mulish', sans-serif;

        font-weight: 700;
        color: ${({theme}) => theme.textColor };

    }
    
`

const ContainerBody = Styled.div`
    width: 100%;
    color: ${({theme}) => theme.textColor };
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



            </ContainerBody>
            
        </Container>
    )
}

export default HomeBlogPost
