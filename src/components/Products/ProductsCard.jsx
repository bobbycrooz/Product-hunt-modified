import React from "react";
import Styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import img1 from '../../assets/slideimage1.png'


const Product = Styled.div`
    background:#ffffff;
    height: 190px;
    width: 100%;
        display:flex;
    flex-direction:column;
    justify-content:space-between;
    

`;

const ProductMedia = Styled.div`
    height:50%;
    width: 100%;
    display:flex;
    justify-content:space-between;
    
`;
const ProductImage = Styled.img`
        width:25%;
        height:100%;
        border-radius:5px;

`;
const ProductInfo = Styled.div`
        width:70%;
        height:100%;


`;
const Productname = Styled.div`
        width:100%;
        p{
          color:${({theme}) => theme.titleColor };

            font-size:18px;
            font-weight: 700;
            font-family: 'Mulish', sans-serif;
           
        }
`;
const Dot = Styled.div`
        width:5px;
        height:5px;
        border-radius:50%;
        background:${({theme}) => theme.titleColor };
        
`;
const Productuser = Styled.div`
        width:100%;
        margin-top:5px;
       
        p{
            font-size:15px;
            font-weight: 500;
            display:flex;
            align-items: center;
            
            p{
            font-size:12px;

                margin-left:0.4rem;
            }
        }


`;
const Producticon = Styled.div`
        width:150px;
        /* height: 35px; */
        display:flex;
         align-items: center;
        justify-content:space-between;
        margin:5px;
        div{
            display: flex;
            align-items: center;
            justify-content:center;
            /* line-height: 1.4rem; */
                p{
                    margin-left:7px;
                    font-weight: 700;
                    font-size:12px;
                              color:${({theme}) => theme.numberColor };

                }
                span{
                    width:30px;
                    height:30px;
                    cursor:pointer;
                    background:#ffff;
                    display: flex;
                    align-items: center;
                    justify-content:center;
                    border-radius:8px;
                    padding:0;
                    box-shadow: rgba(43, 38, 71, 0.3) 0px 9px 38px;
                  
                    i{
                    color:${({theme}) => theme.secondary };
                    display: flex;
                    align-items: center;
                    justify-content:center;
                }
}


        }


`;

const ProductDetails = Styled.div`
        line-height:30px;
   
    background:transparent;
    height: 60%;
    width: 100%;
    padding: 0.5rem 0;

    p{  
          color:${({theme}) => theme.titleColor };

        font-size:14px;
        font-weight:500;

    }
`;

const ProductsCard = () => {
  return (
    <Grid item sm={12} md={6}>
      <Product>
        <ProductMedia>
          <ProductImage src={img1} />
          <ProductInfo>
            <Productname>
              <p>App module cruise</p>
            </Productname>
            <Productuser>
              <p>
                <Dot>.</Dot>
                <p>hot bobby</p>

              </p>
            </Productuser>
            <Producticon>
              <div>
                <span>
                  <i style={{fontSize:'30px',paddingTop:'10px'}}class="fas fa-sort-up"></i>
                </span>
                <p>231</p>
              </div>

              <div>
                <span>
                 <i class="fas fa-comment-alt"></i>
                </span>

                <p>231</p>
              </div>
            </Producticon>
          </ProductInfo>
        </ProductMedia>
        <ProductDetails>
          <p>
            ere is the detailss about the product it can be as many ast possu le
            and you can do what you wana di at lo ud
          </p>
        </ProductDetails>
      </Product>
    </Grid>
  );
};

export default ProductsCard;
