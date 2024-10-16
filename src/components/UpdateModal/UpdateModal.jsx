 



import React, { useRef } from 'react';

const UpdateModal = ({ email, mobileNumber, name, handleEdit }) => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const mobileNumberRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedName = nameRef.current.value;
        const updatedEmail = emailRef.current.value;
        const updatedMobileNumber = mobileNumberRef.current.value;
 
        console.log("Updated Values: ", { updatedName, updatedEmail, updatedMobileNumber });

        // Optionally, call the handleEdit function
        // handleEdit({ updatedName, updatedEmail, updatedMobileNumber });
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

// const UpdateModal = ({email, mobileNumber, name, handleEdit}) => {
  
//     const [userName, setUserName] = useState(name)
//     const [userEmail, setUserEmail] = useState(email);
//     const [userMobileNumber, setUserMobileNumber] = useState(mobileNumber)
//   return (
//        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white w-full max-w-md mx-auto p-8 rounded-md shadow-lg relative">
//               <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
//               <form>
//                   <div className="mb-4">
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                           Name
//                       </label>
//                       <input
//                           type="text"
//                           id="name"
//                           value={userName}
//                           onChange={(e) => setUserName(e.target.value)}
//                           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
//                           required
//                       />
//                   </div>

//                   <div className="mb-4">
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                           Email
//                       </label>
//                       <input
//                           type="email"
//                           id="email"
//                           value={userEmail}
//                           onChange={(e) => setUserEmail(e.target.value)}
//                           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
//                           required
//                       />
//                   </div>

//                   <div className="mb-4">
//                       <label htmlFor="mobile-number" className="block text-sm font-medium text-gray-700">
//                           Mobile Number
//                       </label>
//                       <input
//                           type="text"
//                           id="mobile-number"
//                           value={userMobileNumber}
//                           onChange={(e) => setUserMobileNumber(e.target.value)}
//                           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
//                           required
//                       />
//                   </div>

//                   <div className="flex justify-between">
//                       <button
//                           type="button"
//                           onClick={handleEdit}
//                           className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md mr-2 w-1/2"
//                       >
//                           Cancel
//                       </button>
//                       <button
//                           type="submit"
                         
//                           className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-1/2"
//                       >
//                           Save
//                       </button>
//                   </div>
//               </form>
//           </div>
//       </div>  
//   )
// }

// export default UpdateModal