import React from 'react'
import Styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'


const Container = Styled.div`
    width: 390px;
    height: 100px;
    background:#ffff;
    padding: 0;
    display:flex;
    justify-content: space-between;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`

const Media = Styled.img`
    width:150px;
    height:100%;
    background: grey;
    margin:0;

`
const ContainerDetails = Styled.div`
    width: 229px;
    height:100%;
    background:#ffff;
    padding: 0;
    /* display:flex; */

`

const ContainerDetailsTitle = Styled.div`
   
    padding: 0;
    text-align:left;
    p{
        font-size:18px;
        font-weight:600px;
    padding: 0;
margin:0;
letter-spacing:-0.5px;

    }
`

const ContainerDetailsDate = Styled.div`
    margin-top:0.5rem;
     text-align:left;
    p{
        font-size:12px;
        font-weight:500px;
    padding: 0;
margin:0;
letter-spacing:-0.5px;

    }

`

const ReadmoreBtn = Styled.button`
    /* width: 120px; */
    color: #ffff;
    background:rgb(241, 56, 10);
    padding: 2px 6px;
    display:flex;
    justify-content:center;
    align-items:center;
    float:right;
    text-transform: toUpperCase;
    margin-top:0.5rem;
    border:none;
    cursor:pointer;
    margin-right: 1.2rem;
    border-radius: 4px;
    &:focus{
        outline: none;
    }
    &:hover{
        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }


`


const BlogCard = () => {
    return (

        <Grid item  sm={12} md={6} >
          <Container>
            <Media src='' alt='blogsMedai'/>
            <ContainerDetails>
                <ContainerDetailsTitle>
                    <p>
                        What hapend the everyone dies to the end of the world
                    </p>
                </ContainerDetailsTitle>
                <ContainerDetailsDate>
                    <p>
                        march 19,21 joe jude
                    </p>
                </ContainerDetailsDate>
                <ReadmoreBtn>
                    Read
                </ReadmoreBtn>

                
            </ContainerDetails>
        </Container>
        </Grid>
        
    )
}

export default BlogCard
