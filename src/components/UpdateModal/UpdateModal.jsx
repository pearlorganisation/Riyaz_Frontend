import React, { useRef, useEffect } from 'react';
 import { useDispatch } from 'react-redux';
import { getUserProfile, updateUserProfile } from '../../features/actions/userAction';
const UpdateModal = ({ email, mobileNumber, name, handleEdit }) => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const mobileNumberRef = useRef(null);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedName = nameRef.current.value;
        const updatedEmail = emailRef.current.value;
        const updatedMobileNumber = mobileNumberRef.current.value;

        // Dispatch the updateUserProfile action
        dispatch(updateUserProfile({
            name: updatedName,
            email: updatedEmail,
            mobileNumber: updatedMobileNumber,
        }))
            .then(() => {
               
                console.log('Profile updated successfully');
                dispatch(getUserProfile());
                handleEdit(); // Close the modal
            })
            .catch((error) => {
                console.error('Error while updating profile:', error);
            });
    };
    return (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-full max-w-md mx-auto p-8 rounded-md shadow-lg relative">
                <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            defaultValue={name}
                            ref={nameRef}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            defaultValue={email}
                            ref={emailRef}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
                            Mobile Number
                        </label>
                        <input
                            type="text"
                            id="mobileNumber"
                            defaultValue={mobileNumber}
                            ref={mobileNumberRef}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
                            required
                        />
                    </div>
                    <div className='flex felx-row justify-between gap-1'>
                        <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition-all duration-300"
                    >
                        Save Changes
                    </button>
                        <button
                            type="button"
                            onClick={handleEdit}
                            className="w-full bg-red-300 text-white py-3 rounded-md hover:bg-red-600 transition-all duration-300"
                        >
                            Cancel
                        </button></div>
                     
                </form>
            </div>
        </div>
    );
};

export default UpdateModal;
