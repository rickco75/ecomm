import React from 'react';
import { Link } from "react-router-dom";

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from '../../utils/useStyles'
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';


export default function Purchased(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Typography variant="h6" gutterBottom>
            Thank you for your Order!
      </Typography>
          <Stepper activeStep={3} className={classes.stepper}>
            <Step>
              <StepLabel>Finished</StepLabel>
            </Step>
          </Stepper>                    
          <Grid container spacing={2}>
          <Grid item container direction="column" xs={12} sm={6}>
              <Typography variant="h7" gutterBottom className={classes.title}>
                <em>A confirmation has been sent to your email address!</em>
              </Typography>
          </Grid> 
          </Grid>
          <Grid container spacing={2}>          
            <Grid item container direction="column" xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Confirmation Number: 0153433
          </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Link to="/">
            <Button
                color="primary"
                className={classes.button}
              > Shop</Button>
            </Link>
            </Grid>
          </Grid>
        </Paper>
      </main>
    </React.Fragment>
  );
}