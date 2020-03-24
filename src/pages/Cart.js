import React, { useState, useContext } from "react"
import {Context} from '../Context'

import AddressForm from '../components/Checkout/AddressForm'
import PaymentForm from '../components/Checkout/PaymentForm'
import Review from '../components/Checkout/Review'


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
        country: "",
        cardName: "",
        cardNumber: "",
        expDate: "",
        cvv: ""
    })
    const {cartItems} = useContext(Context)

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

    const {firstName,lastName,address1,address2,city,state,zip,country,cardName,cardNumber,expDate,cvv} = inputData
    const values = {firstName,lastName,address1,address2,city,state,zip,country,cardName,cardNumber,expDate,cvv}
    
    switch(step){
        case 1:
            return (
                <AddressForm 
                    nextStep={nextStep}
                    handleTextFieldChange={handleTextFieldChange}
                    values={values}
                    cartItems={cartItems}
                    />
            )
        case 2:
            return (
                <PaymentForm 
                    nextStep={nextStep}
                    prevStep={prevStep}
                    handleTextFieldChange={handleTextFieldChange}
                    values={values}
                    cartItems={cartItems}
                    />
            )
        case 3:
            return (
                <Review 
                nextStep={nextStep}
                prevStep={prevStep}
                handleTextFieldChange={handleTextFieldChange}
                values={values}
                cartItems={cartItems}
                    />
            )
    }
}

export default Cart