import React, { useState } from 'react';
import Profile from "../../assets/images/profile/832.jpg";
import { GoPlus } from "react-icons/go";
import { AiTwotoneDelete } from "react-icons/ai";
import { useSelector } from 'react-redux';
import UpdateModal from '../UpdateModal/UpdateModal';
// import axios from 'axios';


const ProfileData = () => {

  const { userInfo } = useSelector(state=> state.user);
  const { name , email, mobileNumber } = userInfo
  

  // for updateProflie
  const [edit, setEdit] = useState(false)
  const handleEdit = ()=>{
    setEdit(!edit);
  }
 
  return (
  <>
  <div className='flex flex-col justify-center items-center z-10 relative'>
        <div className='flex flex-col justify-center items-center lg:h-max md:h-max h-auto'>
           <img src={Profile}
            width={200}
            height={180}
            className='' 
            /> 
          
          <h1 className='text-4xl font-light pr-3 pl-3'>{email}</h1>
          <p className='text-lg font-light pb-2 pt-3'>{email}</p>
       
        </div>
        <div className='flex flex-col lg:flex-row md:flex-col gap-2 justify-between w-[80%] mb-3'>
          <div className='w-full lg:w-1/2 mt-3'>
           <div className="bg-white p-8 rounded-lg shadow-2xl">
            <h2 className="text-xl font-semibold mb-2 w-full flex flex-row justify-between">Your Profile <span className="text-sm text-red-600">* required</span>
            </h2>
            <p className="text-sm text-gray-500 mb-6">This information is used to pre-fill your details and make it quicker for you to complete a booking.</p>

            <div>
               <div className="mb-4">
                <label for="given-name" className="block text-sm font-medium text-gray-700">Given Name *</label>
                <input type="text" value={name} id="given-name" name="given-name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12" 
                // onChange={(e)=>setUserName(e.target.value)}
                required />
              </div>

               <div className="mb-4">
                <label for="mobile-number" className="block text-sm font-medium text-gray-700">Mobile Number *</label>
                <div className="flex mt-1">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">🇮🇳</span>
                  <input type="text" value={mobileNumber} id="mobile-number" name="mobile-number" placeholder="081234 56789" className="block w-full px-3 py-2 border border-gray-300 rounded-r-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12" 
                  // onChange={(e)=>setMobile(e.target.value)}
                  required />
                </div>
              </div>

               <div className="mb-4">
                <label for="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                <input type="email" id="email" value={email} name="email" placeholder="example@domain.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-12"
                // onChange={(e)=>setUserEmail(e.target.value)}
                 required />
              </div>

                

               <div className='flex justify-between'>
                <button onClick={handleEdit} className="w-full bg-black hover:bg-blue-900 text-white h-14 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-2xl font-serif">
                  Edit Profile
                </button>
                
                
              </div>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2'> 
          <div className="bg-white p-8 rounded-lg shadow-lg mt-3">
            <h2 className="text-xl font-semibold mb-2 w-full flex flex-row justify-between">Saved Credit Cards<span className="text-sm text-red-600">* required</span></h2>
            <p className="text-sm text-gray-500 mb-6">No cards have been saved yet. Either tick “Save Card” on your next booking or click “Add New Card +” now</p>
              <button className='w-full p-3 bg-white border-2 border-black rounded-md font-semibold text-lg flex flex-row justify-center items-center'> <span>Add New Credit Card</span><span className="pl-1"><GoPlus size={24} /> </span> </button>
 
          </div>
            <div className="bg-white p-8 rounded-lg shadow-lg mt-3">
              <h2 className="text-xl font-semibold mb-2 w-full">Delete Account</h2>
              <div className='flex flex-row pt-6 items-center justify-between'>
                <p className="text-sm text-gray-500">Delete account for manishgupta@pearlorganisation.com</p>
                <button className='w-max bg-white border-2 border-red-100 rounded-md font-semibold text-lg'><AiTwotoneDelete size={30} /></button>
              </div>
            
 
            </div>
         </div>
        </div>
        {/* Modal */}
        {edit && (
          <UpdateModal email={email} mobileNumber={mobileNumber} name={name} handleEdit={handleEdit} /> 
          )}
  </div>
  </>
  )
}

export default ProfileData