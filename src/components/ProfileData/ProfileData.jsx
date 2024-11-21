import React, { useState } from 'react';
import { GoPlus } from "react-icons/go";
import { AiTwotoneDelete } from "react-icons/ai";
import { useSelector } from 'react-redux';
import UpdateModal from "../../components/UpdateModal/UpdateModal"
import Profile from "../../assets/images/profile/832.jpg";
const ProfileData = () => {
  const { userInfo } = useSelector(state => state.user);
  const { name, email, mobileNumber } = userInfo;
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-white shadow-xl mx-auto">
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors">
              <GoPlus className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <h1 className="mt-4 text-3xl font-bold text-gray-900">{name}</h1>
          <p className="text-gray-500">{email}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Information */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-gray-900">Your Profile</h2>
                <span className="text-sm text-red-500">* required</span>
              </div>
              <p className="text-sm text-gray-500 mb-8">
                This information is used to pre-fill your details for faster booking.
              </p>

              <div className="space-y-6">
                <div>
                  <label htmlFor="given-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Given Name *
                  </label>
                  <input
                    type="text"
                    id="given-name"
                    value={name}
                    disabled
                    className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-75 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label htmlFor="mobile-number" className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number *
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
                      🇮🇳
                    </span>
                    <input
                      type="text"
                      id="mobile-number"
                      value={mobileNumber}
                      disabled
                      className="w-full h-12 px-4 rounded-r-lg border border-gray-300 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-75 disabled:cursor-not-allowed"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    disabled
                    className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-75 disabled:cursor-not-allowed"
                  />
                </div>

                <button
                  onClick={handleEdit}
                  className="w-full h-12 bg-black hover:bg-gray-800 text-white rounded-lg font-medium transition-colors duration-200 ease-in-out shadow-sm"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Credit Cards */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-gray-900">Saved Credit Cards</h2>
                <span className="text-sm text-red-500">* required</span>
              </div>
              <p className="text-sm text-gray-500 mb-8">
                No cards have been saved yet. Either tick "Save Card" on your next booking or click "Add New Card +" now
              </p>
              <button className="w-full h-12 border-2 border-black rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-gray-50 transition-colors duration-200 ease-in-out">
                <span>Add New Credit Card</span>
                <GoPlus className="w-5 h-5" />
              </button>
            </div>

            {/* Delete Account */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Delete Account</h2>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Delete account for {email}
                </p>
                <button className="p-2 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg border border-red-100 transition-colors duration-200 ease-in-out">
                  <AiTwotoneDelete className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {edit && (
          <UpdateModal email={email} mobileNumber={mobileNumber} name={name} handleEdit={handleEdit} />
        )}
      </div>
    </div>
  );
};

export default ProfileData;