import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingCancel = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
                <h2 className="text-2xl font-bold text-red-600 mb-4">
                    Booking Cancelled
                </h2>
                <p className="text-gray-600 mb-6">
                    Your booking has been cancelled. No payment has been processed.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default BookingCancel;