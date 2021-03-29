import React from 'react'
import Styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import ProductsCard from '../../Products/ProductsCard'

const PostCardContainer = Styled.div`
    
    width: 800px;
    margin-left: 8rem;
    margin-top: 1rem;
    /* margin-bottom: 1rem;  */
    

`
const PostCardTitle = Styled.div`
    width: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding:2px;
    p{
        font-size: 20px;
        font-weight: 700;
        color: ${({theme}) => theme.textColor };

    }
    
`

const PostCardBody = Styled.div`
    width: 100%;
    color: ${({theme}) => theme.textColor };
    background: #fff;
    padding:1rem;
`
const Nav = Styled.div`
    width:100%;
    display:flex;
    align-items:center;
    padding:0;
    position: relative;
    margin:;

`

const NavUl = Styled.ul`
    width:800px;
    display:flex;
    align-items:center;
    padding:0;
     overflow-x: ${props => props.scroll ? 'scroll' : 'hidden'};
`

const Navli = Styled.li`
    list-style:none;
    position: relative;
    font-weight:600;
    height:100%;
    padding:0.5rem 1rem;
    margin-left:2px;
   

    &:hover{
        color: blue;
         &::after{
        content: '';
        position:absolute;
        bottom: 0;
        left:50%;
        width:30px;
        transform: translateX(-50%);
        border-bottom: 2.5px solid blue;

    }}
`


const arr = [1,1,1,1,1,1,1,1,1,1,1,1]

const CategoriesArr = ['Healthcare','Agriculture','Transportion','E-commerce','Fintech', 'Gaming']
const PostCardNav = () => {

    return (
        <Nav>
            <NavUl scroll={ CategoriesArr.length > 7 ? true : false }>
                {
                    CategoriesArr.map(item => <Navli>{item}</Navli>)
                }
            </NavUl>
        </Nav>
    )
}



const HomePostCard = (props) => {
    return (

        <PostCardContainer>
            <PostCardTitle>
                <p>{props.title}</p>
            </PostCardTitle>


            {
                props.nav && <PostCardNav />
            }

            <PostCardBody>
                <Grid container spacing={1}>
                    {arr.map(ietem => <ProductsCard/> )}          
                </Grid>
            </PostCardBody>

        </PostCardContainer>
        
    )
}

export default HomePostCard
