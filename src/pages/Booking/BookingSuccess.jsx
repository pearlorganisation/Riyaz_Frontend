import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const BookingSuccess = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [status, setStatus] = useState('verifying');
    const [bookingDetails, setBookingDetails] = useState(null);

    useEffect(() => {
        const verifyPayment = async () => {
            try {
                // Get the session_id and booking_id from URL
                const sessionId = searchParams.get('session_id');
                const bookingId = searchParams.get('booking_id');

                console.log('Session ID:', sessionId);
                console.log('Booking ID:', bookingId);

                if (!sessionId || !bookingId) {
                    console.error('Missing required parameters');
                    setStatus('error');
                    return;
                }

                // Make the verification request
                const response = await fetch(
                    `http://localhost:3000/api/v1/booking/verify?sessionId=${sessionId}&bookingId=${bookingId}`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    }
                );

                console.log('Verification Response Status:', response.status);
                const data = await response.json();
                console.log('Verification Response Data:', data);

                if (data.success) {
                    setBookingDetails(data.booking);
                    setStatus('success');
                } else {
                    setStatus('failed');
                }
            } catch (error) {
                console.error('Verification error:', error);
                setStatus('error');
            }
        };

        // Only verify if we're in the verifying state
        if (status === 'verifying') {
            verifyPayment();
        }
    }, [searchParams, status]);

    const renderContent = () => {
        switch (status) {
            case 'verifying':
                return (
                    <div className="text-center">
                        <h2 className="text-xl font-semibold mb-4">Verifying your payment...</h2>
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    </div>
                );

            case 'success':
                return (
                    <div className="text-center">
                        <div className="mb-4">
                            <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-green-600 mb-4">
                            Booking Confirmed!
                        </h2>
                        <div className="text-gray-600 mb-6">
                            <p className="mb-2">Your payment has been processed successfully.</p>
                            {bookingDetails && (
                                <div className="text-left bg-gray-50 p-4 rounded-lg mt-4">
                                    <p><strong>Booking ID:</strong> {bookingDetails.bookingId}</p>
                                    <p><strong>Amount Paid:</strong> ${bookingDetails.totalPrice}</p>
                                    <p><strong>Status:</strong> {bookingDetails.bookingStatus}</p>
                                </div>
                            )}
                        </div>
                        <button
                            onClick={() => navigate('/bookings')}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                        >
                            View My Bookings
                        </button>
                    </div>
                );

            case 'failed':
                return (
                    <div className="text-center">
                        <div className="mb-4">
                            <svg className="w-16 h-16 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-red-600 mb-4">
                            Payment Verification Failed
                        </h2>
                        <p className="text-gray-600 mb-6">
                            There was an issue verifying your payment. Please contact support.
                        </p>
                        <div className="space-x-4">
                            <button
                                onClick={() => setStatus('verifying')}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                            >
                                Try Again
                            </button>
                            <button
                                onClick={() => navigate('/')}
                                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
                            >
                                Return Home
                            </button>
                        </div>
                    </div>
                );

            case 'error':
                return (
                    <div className="text-center">
                        <div className="mb-4">
                            <svg className="w-16 h-16 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-red-600 mb-4">
                            Something Went Wrong
                        </h2>
                        <p className="text-gray-600 mb-6">
                            We couldn't process your verification. Please try again or contact support.
                        </p>
                        <div className="space-x-4">
                            <button
                                onClick={() => setStatus('verifying')}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                            >
                                Try Again
                            </button>
                            <button
                                onClick={() => navigate('/')}
                                className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
                            >
                                Return Home
                            </button>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                {renderContent()}
            </div>
        </div>
    );
};

export default BookingSuccess;