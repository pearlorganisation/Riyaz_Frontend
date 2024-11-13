import { loadStripe } from '@stripe/stripe-js';

const PaymentForm = ({ data }) => {
    const { price } = data;
    const makePayment = async () => {
        const stripe = await loadStripe(`${import.meta.env.VITE_APP_STRIPE_PUBLISHABLE_KEY}`)
         
        console.log("---------------------------",price)
        // body to pass 
        const body = {
            amount: Math.floor(price)
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