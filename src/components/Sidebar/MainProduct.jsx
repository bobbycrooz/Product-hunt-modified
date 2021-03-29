import React from "react";
import Styled from "styled-components";

const MainCard = Styled.div`
    padding:1rem;
    background:#fff;
    border-bottom: ${({theme}) => theme.textColor };
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:2px;
        color: ${({theme}) => theme.textColor };

    
`;
const Mainvideo = Styled.iframe`
border: 1px solid rgba(0, 0, 0, 0.1);
    width:100%;
    background:#b3b3b3;
    height:180px;
    /* width="800" height="450" */

`;
const CardAction = Styled.div`
    width: 140px;
    text-align:center;
    margin-top:1rem;
    p{
        text-transform: capitalize;
        font-weight: 700;
        margin:0;
        

    }
    display:flex;
    flex-direction:column;
    align-items:space-between;

`;

const IconContainer = Styled.div`
    display:flex;
    margin-top: 1rem;
    justify-content:space-between; 
    div{
            display: flex;
            align-items: center;
            justify-content:center;
            /* line-height: 1.4rem; */
                p{
                    margin-left:7px;
            font-weight: 700;

                    font-size:14px;
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
                  box-shadow: rgba(43, 38, 71, 0.3) 0px 9px 38px,
                                    rgba(38, 34, 56, 0.22) 0px 10px 12px;
                    /* box-shadow: black 0 10px 15px -10px ; */
                     /* rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; */
                    i{
                    /* padding-top:10px; */
                    
                    color:orange;
                    display: flex;
                    align-items: center;
                    justify-content:center;
                }
}


            /* font-weight: 500; */
        }   


`;
const CardDetails = Styled.div`
    margin-top: 1rem;
    text-align:center;
    width:268px;
    height:120;
    
    line-height: 1.4rem;
    p{
        margin:0;
    }
`

const MainProduct = () => {
  return (
    <MainCard>
      <Mainvideo src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FzsKEwA9JqWXDaUuvcCECuB%2FI4G-Hackathon%3Fnode-id%3D0%253A1" />
     

      <CardAction>
        <p>
          our UI/UX
        </p>
        <IconContainer>
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
        </IconContainer>
      </CardAction>

      <CardDetails>
        <p>
          this us th describtionn od the prioftujf jyoiufssar hldhfa and also
          yjere ys s;djnner onth afsk aldo yufgo wy fyg giuf e fhpuig'a rih
          giuhr r;gh;igh
        </p>
      </CardDetails>

    </MainCard>
  );
};

export default MainProduct;
