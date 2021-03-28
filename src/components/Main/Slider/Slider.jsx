import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styled from 'styled-components'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorial = [
    {
        text:'lets go hunting',
        color:'green',
        size: '50px'

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
    padding: 2px 0 ;
    width:800px;
    height: 290px;
    background-color: #ffffff;
    margin-left:10rem;
    margin-top:1rem;
    margin-bottom: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    
    
`
const SliderTitle = styled.h1`

    font-weight:700;
    font-size: ${props => props.size};
    color: ${props => props.color};
    margin-left: 1rem;

`

const BodyText = styled.h5`
        font-weight: 500;
        color: rgba(0, 0, 0, 0.589);
        margin-left: 1rem;
        font-size: 20px;

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
              <SlideItemm>
                  <SliderTitle size={step.size} color={step.color}>{step.text}</SliderTitle>
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