import { loadStripe } from '@stripe/stripe-js';

const PaymentForm = (

) => {
    console.log(import.meta.env);

    console.log("---------------------", import.meta.env.VITE_APP_STRIPE_PUBLISHABLE_KEY)
 
    const makePayment = async () => {
        const stripe = await loadStripe(`${import.meta.env.VITE_APP_STRIPE_PUBLISHABLE_KEY}`)

        // body to pass 
        const body = {
            amount: 400
        };
        const headers = {
            "Content-Type": "application/json"
        }

        const response = await fetch(`http://localhost:3000/api/v1/booking/book`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        });

        //wait for the server res for the session
        const session = await response.json();

        // redirect to checkout
        const result = stripe.redirectToCheckout({
            sessionId: session.id
        })
        if (result.error) {
            console.log(result.error, "the error is")
        }
    }
    return (
        <div>
            <div className='flex justify-center items-center'>
                <button className='text-red-600' onClick={makePayment}>Pay</button>
            </div>
        </div>
    )
}

export default PaymentForm