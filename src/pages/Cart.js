import React, { useState, useContext } from "react"
import { Context } from '../Context'

import AddressForm from '../components/Checkout/AddressForm'
import PaymentForm from '../components/Checkout/PaymentForm'
import Review from '../components/Checkout/Review'
import Purchased from '../components/Checkout/Purchased'


function Cart() {
    const [step, setStep] = useState(1)
    const [inputData, setInputData] = useState({
        firstName: "",
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
    const { cartItems } = useContext(Context)

    const nextStep = () => {
        setStep(step + 1)
    }
    const prevStep = () => {
        setStep(step - 1)
    }

    const handleTextFieldChange = (event) => {
        const { name, value } = event.target
        setInputData(prevInputValues => ({ ...prevInputValues, [name]: value }))
    }


    //const { firstName, lastName, address1, address2, city, state, zip, country, cardName, cardNumber, expDate, cvv } = inputData
    const values = {...inputData}
    //const values = { firstName, lastName, address1, address2, city, state, zip, country, cardName, cardNumber, expDate, cvv }
    // const submitForm = () => {
    //     console.log(inputData)
    // }

    switch (step) {
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
        case 4:
            return (
                <Purchased
                    nextStep={nextStep}
                    prevStep={prevStep}
                    values={values}
                    cartItems={cartItems}
                />
            )
        default: return (
            <AddressForm
            nextStep={nextStep}
            handleTextFieldChange={handleTextFieldChange}
            values={values}
            cartItems={cartItems}
        />
        )
    }
}

export default Cart