import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';



const MobileV = styled.div`
width:100%;
height:100vh;
display:flex;
justify-content:center;


`

const MobileC = styled.div`
width:400px;
height:200px;
display:flex;
text-align:center;
flex-direction:column;
justify-content:center;
align-items:center;
    h1{
        font-weight:600;
        color:#dd0202;

    }
`

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const MobileView = () => {

const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);


    return (
        <MobileV>
            <MobileC>
                <h1>
                    Please switch to a desktop view
                </h1>
                
                <div className={classes.root}>
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} color='secondary' />
    </div>
            </MobileC>
        </MobileV>
    )
}






export default MobileView
