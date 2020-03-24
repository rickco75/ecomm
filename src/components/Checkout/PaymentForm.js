import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import useStyles from '../../utils/useStyles'
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';


export default function PaymentForm(props) {
  const classes = useStyles();

  function Continue(e) {
    e.preventDefault()
    props.nextStep()
  }

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Typography variant="h6" gutterBottom>
            Payment method
      </Typography>
          <Stepper activeStep={1} className={classes.stepper}>
            <Step>
              <StepLabel>Payment Method</StepLabel>
            </Step>
            <Step>
              <StepLabel>Payment Details</StepLabel>
            </Step>
            <Step>
              <StepLabel>Review Your Order</StepLabel>
            </Step>
          </Stepper>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                onChange={props.handleTextFieldChange}
                defaultValue={props.values.cardName}
                required
                id="cardName"
                name="cardName"
                label="Name on card"
                fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                onChange={props.handleTextFieldChange}
                defaultValue={props.values.cardNumber}
                required
                id="cardNumber"
                name="cardNumber"
                label="Card number"
                fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                onChange={props.handleTextFieldChange}
                defaultValue={props.values.expDate}
                required
                id="expDate"
                name="expDate"
                label="Expiry date"
                fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                onChange={props.handleTextFieldChange}
                defaultValue={props.values.cvv}
                required
                id="cvv"
                name="cvv"
                label="CVV"
                helperText="Last three digits on signature strip"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                label="Remember credit card details for next time"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                color="primary"
                onClick={props.prevStep}
                className={classes.button}
              > Previous </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                color="primary"
                onClick={Continue}
                className={classes.button}
              > Next </Button>
            </Grid>
          </Grid>
        </Paper>
      </main>
    </React.Fragment>
  );
}