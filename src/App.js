import React, { useEffect, useRef } from "react";
import { Grid } from '@material-ui/core'
import Details from "./components/Details/details";
import useStyles from './styles.js'
import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
import ExpenseTracker from "./components/Main/main";

function App() {
  const classes = useStyles()
  const { speechState } = useSpeechContext();
  const main = useRef(null)

  const executeScroll = () => main.current.scrollIntoView()    

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);
  return (
    <div className="App">
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height: '100vh'}}>
            <Grid items xs={12} sm={4} className={classes.mobile}>
              <Details title="income"/>
            </Grid>
            <Grid items xs={12} sm={3} className={classes.desktop}>
              <ExpenseTracker/>
            </Grid>
            <Grid items xs={12} sm={4} className={classes.desktop}>
              <Details title="income"/>
            </Grid>
            <Grid items xs={12} sm={4} className={classes.last}>
              <Details title="expense"/>
            </Grid>
            <PushToTalkButtonContainer>
              <PushToTalkButton />
              <ErrorPanel/>
            </PushToTalkButtonContainer>
      </Grid>
    </div>
  );
}

export default App;
