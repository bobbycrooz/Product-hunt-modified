import React from "react";
import Styled from "styled-components";

const MainCard = Styled.div`
    padding:1rem;
    background:#fff;
    border-bottom: black;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:2px;
    color: #000000;
    
`;
const Mainvideo = Styled.div`
    width:100%;
    background:#b3b3b3;
    height:180px;

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
      <Mainvideo />

      <CardAction>
        <p>product name</p>
        <IconContainer>
          <span>icon</span>
          <span>icon</span>
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
