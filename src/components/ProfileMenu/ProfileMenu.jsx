import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../features/slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';
function Dropdown() {
     
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    const navigate = useNavigate();
     
    const dipsatch = useDispatch();
 
 /** Handle for navigating to the profile data page */
 const handleProfile = () =>{
    navigate("/profile")
 }
/** Handle for navigating to the bookings data */
const handleBooking =()=>{
    navigate("/bookings")
}
    const handleLogout = () => {
        dipsatch(clearUser());
        navigate("/login");
    };

    return (
        <div className="relative inline-block">
            <button
                className="text-white px-6 py-2 border-2 border-[#2DA5F3] rounded-md"
                onClick={toggleDropdown}
            >
                Menu
            </button>

            {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                    <ul className="py-2 text-gray-700">
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-center font-medium"><button onClick={handleProfile}>Profile</button> </li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-center font-medium"><button onClick={handleBooking}>Bookings</button></li>
                        <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                            <button
                                className="px-6 py-2 border-2 border-[#2DA5F3] rounded-md w-full text-red-400"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
