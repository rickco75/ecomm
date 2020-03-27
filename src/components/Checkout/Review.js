import React  from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from '../../utils/useStyles'
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';

import CartItem from '../CartItem'


export default function Review(props) {
  const classes = useStyles();
  const cartItemElements = props.cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ))
  const cost = cartItemElements.length*5.99
  const totalCost = cost.toLocaleString("en-US", { style: "currency", currency: "USD" })
  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Typography variant="h6" gutterBottom>
            Order summary
      </Typography>
          <Stepper activeStep={2} className={classes.stepper}>
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
          <List disablePadding>
            {cartItemElements}
            <ListItem className={classes.listItem}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" className={classes.total}>              
                {totalCost}
          </Typography>
            </ListItem>
          </List>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Shipping
            </Typography>
              <Typography gutterBottom>{props.values.firstName} {props.values.lastName}</Typography>
              {/* <Typography gutterBottom>{addresses.join(', ')}</Typography> */}
              <Typography gutterBottom>{props.values.address1}</Typography>
              <Typography gutterBottom>{props.values.address2}</Typography>
              <Typography gutterBottom>{props.values.city}, {props.values.state}, {props.values.zip} </Typography>
            </Grid>
            <Grid item container direction="column" xs={12} sm={6}>
              <Typography variant="h6" gutterBottom className={classes.title}>
                Payment details
          </Typography>
              <Grid container>
                  <React.Fragment>
                    <Grid item xs={6}>
                      <Typography gutterBottom>Card Holder {props.values.cardName}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography gutterBottom>Card Number {props.values.cardNumber}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography gutterBottom>Expiry Date {props.values.expDate}</Typography>
                    </Grid>                    
                  </React.Fragment>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={6}>
            <Button
                color="primary"
                onClick={props.prevStep}
                className={classes.button}
              > Previous </Button>
            </Grid>
            <Grid item xs={6} sm={6}>
            <Button
                color="primary"
                onClick={props.nextStep}
                className={classes.button}
              > Submit Payment! </Button>
            </Grid>            
          </Grid>
        </Paper>
      </main>
    </React.Fragment>
  );
}