import React  from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import ThemeProvider from '@material-ui/styles/ThemeProvider'

import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';
import useStyles from '../../utils/useStyles'

export default function AddressForm(props) {
  const classes = useStyles();
  
  function Continue(e) {
    e.preventDefault()
    props.nextStep()
  }
  const {value} = props

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>        
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Stepper activeStep="1" className={classes.stepper}>
              <Step>
                <StepLabel>Shipping Address</StepLabel>
              </Step>
              <Step>
                <StepLabel>Payment Details</StepLabel>
              </Step>  
              <Step>
                <StepLabel>Review Your Order</StepLabel>
              </Step>                 
          </Stepper>      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            onChange={props.handleTextFieldChange}
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
          />
         </Grid>
       <Grid item xs={12} sm={6}>
          <TextField
            onChange={props.handleTextFieldChange}
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={props.handleTextFieldChange}
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            onChange={props.handleTextFieldChange}
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={props.handleTextFieldChange}
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            onChange={props.handleTextFieldChange}
            id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={props.handleTextFieldChange}
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={props.handleTextFieldChange}
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.buttons}>
          <Button
            color="primary"            
            onClick={props.nextStep}
          > Next </Button> 
        </Grid>
      </Grid>
      </Paper>
      </main>
    </React.Fragment>
  );
}