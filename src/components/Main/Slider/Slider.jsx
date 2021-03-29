import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styled from 'styled-components'
import img1 from '../../../assets/slideimage1.png'
import img2 from '../../../assets/sliderimage2.png'
import img3 from '../../../assets/sliderimage3.png'


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorial = [
    {
        text:'Let\'s go ',
        span: ' Hunting',
        color:'#fff',
        size: '45px',
        url: img1,
        btn: 'Get started',
        body: 'our great investors are ready to buy what your willin to offer',
        body2: 'our great investors are ready to buy what your willin to offer'


    },{
        text:'Meet great ',
        span: 'Investors',
        color:'rgb(255, 255, 255)',
        size: '40px',
        url: img2,
        btn: 'Sign up now',
        body: 'our great investors are ready to buy what your willin to offer',
        body2: 'our great investors are ready to buy what your willin to offer'


    },{
        text:'Discover new ',
        span: 'Product',
        color:'rgb(255, 254, 254)',
        size: '40px',
        url: img3,
        btn: 'Discover',
        body: 'our great investors are ready to buy what your willin to offer',
        body2: 'our great investors are ready to buy what your willin to offer'


    }
]



const SlideItemm = styled.div`
    position: relative;
    padding: 2px 0;
    width:770px;
    height: 240px;
    background-color: #000000;
    background-image: url(${props => props.bgImg});
    background-position: right;
    background-repeat:no-repeat;
    background-size: 60% 100%;
    margin-left:8rem;
    margin-top:1rem;
    margin-bottom: 0.5rem;
    box-shadow:   rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

    &::before{
      position: absolute;
      content: '';
      display:block;
      top: 0;
      left: 0;
      width:100%;
      height:100%;
      background:${
      (props) => {
        if(props.index === 0){
          return 'linear-gradient(to right, rgba(2, 2, 2, 0.959),rgba(2, 2, 2, 0.959) 40%, rgba(54, 61, 163, 0.516) )'
        }else if(props.index === 1){
          return 'linear-gradient(to right, rgba(24, 20, 224, 0.959),rgba(24, 20, 224, 1) 40%, rgba(24, 20, 224, 0.3) )'
        }else if(props.index === 2){
          return 'linear-gradient(to right, rgba(10, 10, 10, 0.726),rgba(10, 10, 10, 0.726) 40%, rgba(10, 10, 10, 0.2) )'
        }
      }
    };
      
    }
    
`

const SliderContent = styled.h1`
    position: relative;
    z-index:999;
    font-weight:600;
    margin: 2rem;

`


const SliderTitle = styled.h1`
    font-size: ${props => props.size};
    color: ${props => props.color};
    padding:0;

`

const BodyText = styled.h5`
        color:#fff;
        font-size:20px;
        margin-top:1rem;

`
const Span = styled.span`
        font-weight: 600;
        font-size: ${props => props.size};
        color: rgba(245, 209, 3, 0.911);

    

`

const RegBtn = styled.button`
        font-weight: 500;
        background-color:${({theme}) => theme.secondary};
        color: rgba(255, 254, 254);
        padding:0.5rem 1rem;
        text-transform:capitalize;
        font-size:19px;
        border:none;
        border-radius:8px;
        margin-top:1rem;
        line-height:36px;
            font-family: 'Mulish', sans-serif;
            display:flex;
         align-items: center;
        justify-content:space-between;
        i{
          color:#ffff;
          margin-left:1rem;
        }





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
              <SlideItemm bgImg={step.url} index={index} key={step.index}>
                  <SliderContent>

                  <SliderTitle size={step.size} color={step.color}>
                    {step.text}
                    <Span size={step.size}>{step.span}</Span>
                  </SliderTitle>

                  <BodyText>
                    {step.body}
                      <br/>
                      {step.body2}
                  </BodyText>
                

                  <RegBtn>
                    {step.btn}
                    <i class="fas fa-long-arrow-alt-right"></i>
                  </RegBtn>
                  </SliderContent>
              </SlideItemm>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      
    </>
  );
}

export default Slider;