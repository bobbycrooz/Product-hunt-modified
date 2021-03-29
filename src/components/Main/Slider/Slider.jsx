import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styled from 'styled-components'
import img1 from '../../../assets/slideimage1.png'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorial = [
    {
        text:'Meet Great ',
        span: ' Investors',
        color:'#fff',
        size: '45px'

    },{
        text:'Billions of products',
        color:'rgba(0, 12, 12, 0.842)',
        size: '40px'

    },{
        text:'Meet great investors',
        color:'rgba(192, 2, 65, 0.884)',
        size: '40px'

    }
]



const SlideItemm = styled.div`
    position: relative;
    padding: 2px 0;
    width:770px;
    height: 250px;
    background-color: #000000;
    background-image: url(${img1});
    background-position: right;
    background-repeat:no-repeat;
    background-size: 60% 100%;
    margin-left:8rem;
    margin-top:1rem;
    margin-bottom: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    &::before{
      position: absolute;
      content: '';
      display:block;
      top: 0;
      left: 0;
      width:100%;
      height:100%;
      background:linear-gradient(to right, rgba(2, 2, 2, 0.959),rgba(2, 2, 2, 0.959) 40%, rgba(9, 19, 155, 0.616) );
    }
    
`
const SliderTitle = styled.h1`
    position: relative;
    z-index:999;
    font-weight:600;
    font-size: ${props => props.size};
    color: ${props => props.color};
    margin: 2rem;

    .bold{

    }

`

const BodyText = styled.h5`
        font-weight: 500;
        color: rgba(255, 250, 250, 0.911);
    position: relative;

        margin-left:2rem;
        font-size: 0px;

`
const Span = styled.span`
        font-weight: 600;
        font-size: ${props => props.size};
        color: rgba(245, 209, 3, 0.911);
    

`

function Slider() {
  const [activeStep, setActiveStep] = useState(0);
  

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
     
      <AutoPlaySwipeableViews
        axis='x'
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorial.map((step, index) => (
          <div key={step.index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <SlideItemm >

                  <SliderTitle size={step.size} color={step.color}>
                    {step.text}
                    <Span size={step.size}>{step.span}</Span>
                  </SliderTitle>
                  <BodyText>
                      lorem ipsum dolor sit lorem ipsm dollorse dis lonnkndsjc hkj
                      <br/>
                      lorem dnkv  dshoijfjd do f jeimfoij f ij fdsf i
                  </BodyText>
                
              </SlideItemm>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
    </>
  );
}

export default Slider;