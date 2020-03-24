import React, { useState } from "react"

import AddressForm from '../components/Checkout/AddressForm'
import PaymentForm from '../components/Checkout/PaymentForm'
import Review from '../components/Checkout/Review'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import AppBar from '@material-ui/core/AppBar'


function Cart() {
    const [step,setStep] = useState(1)
    const [inputData, setInputData] = useState({
        firstName:"",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        country: ""
    })

    const nextStep = () => {
        setStep(step+1)
    }
    const prevStep = () => {
        setStep(step-1)
    }

    const handleTextFieldChange = (event) => {
        const { name, value } = event.target
        setInputData(prevInputValues => ({ ...prevInputValues, [name]: value }))
    }

    const submitForm = () => {
        console.log(inputData)
    }

    const {firstName,lastName,address1,address2,city,state,zip,country} = inputData
    const values = {firstName,lastName,address1,address2,city,state,zip,country}
    
    switch(step){
        case 1:
            return (
                <AddressForm 
                    nextStep={nextStep}
                    handleTextFieldChange={handleTextFieldChange}
                    values={values}
                    />
            )
        case 2:
            return (
                <PaymentForm 
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleTextFieldChange={handleTextFieldChange}
                    values={values}
                    />
            )
        case 3:
            return (
                <Review 
                nextStep={nextStep}
                prevStep={prevStep}
                handleTextFieldChange={handleTextFieldChange}
                values={values}
                    />
            )
    }
}

export default Cart