import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { useState } from 'react';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: 'John Doe',
                    },
                },
            });

            if (error) {
                console.error("Payment error:", error.message);
                setLoading(false);
                return;  // Exit if there’s a Stripe error
            }

            // Check if payment was successful
            if (paymentIntent && paymentIntent.status === 'succeeded') {
                try {
                    const response = await fetch('http://localhost:3000/api/v1/booking/book', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            paymentIntentId: paymentIntent.id,
                            // Add other booking data here if needed
                        }),
                    });

                    if (!response.ok) {
                        throw new Error('Failed to book');
                    }

                    const bookingData = await response.json();
                    console.log("Booking successful:", bookingData);
                    // Handle successful booking (e.g., show success message, redirect)
                } catch (apiError) {
                    console.error("Booking error:", apiError.message);
                    // Handle API error (e.g., show error message)
                }
            }

        } catch (stripeError) {
            console.error("Stripe error:", stripeError.message);
            // Handle general Stripe error
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe || loading}>
                {loading ? 'Processing...' : 'Pay'}
            </button>
        </form>
    );
};

export default PaymentForm;
