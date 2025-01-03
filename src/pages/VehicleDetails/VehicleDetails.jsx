// import { BsRecordCircle } from "react-icons/bs";
// import { RiRefund2Fill } from "react-icons/ri";
// import { CiLock } from "react-icons/ci";
// import {
//   MdKeyboardArrowLeft,
//   MdKeyboardArrowRight,
//   MdOutlineMailOutline,
// } from "react-icons/md";
// import { IoIosArrowDown } from "react-icons/io";
// import { AiOutlineInfoCircle } from "react-icons/ai";
// import { useLocation } from "react-router-dom";
// const VehicleDetails = () => {
//   const location = useLocation();
//   const { vehicle } = location.state; // Access the vehicle data from state
//   if (!vehicle) {
//     return <div>No vehicle details found!</div>; // Fallback if no data is passed
//   }
//   return (
//     <div>
//       <div className="flex justify-center mt-10">
//         {/* This is the card of car details */}
//         <div className="shadow-lg rounded-lg max-w-max md:w-[60%] flex">
//           {/* Left Section - Image and Details with gray background */}
//           <div className="flex flex-col items-center gap-4 bg-gray-100 rounded-l-lg p-4 relative">
//             <div className="flex flex-row">
//               <img
//                 src={vehicle.image}
//                 alt={vehicle.name}
//                 className="w-24 h-16 object-cover rounded-lg mt-9 pr-1"
//               />
//               <div className="flex flex-col">
//                 <h1 className="text-lg font-bold pt-6 pl-3 text-wrap pr-1">
//                   {vehicle.name}
//                 </h1>
//                 <div className="flex items-center gap-2 pl-3">
//                   <span className="text-yellow-500 text-lg">★★★★☆</span>
//                   <span className="text-gray-500">
//                     {vehicle.reviews} reviews
//                   </span>
//                 </div>
//               </div>
//             </div>
//             {/* Position the tags near the bottom, with some margin */}
//             <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
//               {vehicle.tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="bg-gray-200 text-sm rounded-md px-2 py-1"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//           {/* Right Section - Pricing and Learn More with black background */}
//           <div className="flex flex-col justify-between items-center bg-black p-4 rounded-r-lg">
//             <div>
//               <h3 className="text-blue-600 text-xs font-semibold text-center pt-2">
//                 ONE WAY
//               </h3>
//               <div className="flex items-baseline pt-3">
//                 <span className="text-2xl font-bold text-white text-center">
//                   ₹{vehicle.price}
//                 </span>
//                 <span className="text-xs text-gray-500 ml-1 text-center">
//                   .06
//                 </span>
//               </div>
//             </div>
//             <button className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-md flex items-center gap-2">
//               <MdKeyboardArrowRight size="20" />
//               Learn More
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* this is the div below the div which contains car details card */}
//       <div className="bg-gray-200 mt-4 ">
//         <div className="flex flex-col justify-center items-center">
//           <div className="bg-white rounded-lg shadow-lg w-5/12 mb-3 mt-12">
//             <div className="pl-2 pr-2 flex flex-col">
//               <h1 className="pt-4 text-3xl font-light pl-4">
//                 Transfer Details
//               </h1>
//               <div className="flex flex-row justify-between pl-5 pr-5">
//                 <div className="w-1/2 flex flex-col mb-2">
//                   <div className="mt-3">
//                     <h1 className="font-semibold">Pick-up</h1>
//                     <span>Dubai Airport (DXB), Terminal 1</span>
//                   </div>
//                   <div className="mt-3">
//                     <h1 className="font-semibold">Passengers</h1>
//                     <span>1</span>
//                   </div>
//                   <div className="mt-3">
//                     <h1 className="font-semibold">Date</h1>
//                     <span>Friday, 04 Oct, 2024</span>
//                   </div>
//                 </div>
//                 <div className="w-1/2 flex flex-col mb-2">
//                   <div className="mt-3">
//                     <h1 className="font-semibold">Drop-off</h1>
//                     <span>
//                       Burj Al Arab (Dubai - Umm Suqeim 3 - Dubai - United Arab
//                       Emirates)
//                     </span>
//                   </div>
//                   <div className="mt-3">
//                     <h1 className="font-semibold">Luggage</h1>
//                     <span>1 carry-on & 1 check-in bag included</span>
//                   </div>
//                   <div className="mt-3">
//                     <h1 className="font-semibold">Flight Arrival Time</h1>
//                     <span>17:10 (5:10 PM)</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full flex flex-row justify-center items-center mb-3">
//                 <MdKeyboardArrowLeft size={40} />{" "}
//                 <span className="text-xl">Cancel and Start Again</span>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg shadow-lg w-5/12 mt-3 mb-3">
//             <div className="pl-2 pr-2">
//               <h1 className="pt-4 text-3xl font-light pl-4">
//                 Would you like to meet and Greet added?
//               </h1>
//               <p className="text-justify pl-4 pt-2 text-wrap font-light">
//                 Meet and greet is available. Your driver will meet you in the
//                 terminal holding a sign and escort you to your ride.
//               </p>
//               <p className="pl-4 font-medium text-base pt-2">
//                 Would you like complimentary Meet & Greet added to your booking?
//               </p>
//               <p className="flex flex-row pl-4 pt-2 pb-3">
//                 <input type="checkbox" className="h-6 w-6"></input>
//                 <h1 className="ml-1">
//                   Yes, please advise the transport company I would like Meet &
//                   Greet.
//                 </h1>
//               </p>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg shadow-lg w-5/12 mt-3 mb-3">
//             <div className="flex flex-col">
//               <div>
//                 <h1 className="pt-4 text-3xl font-light pl-5">Extra Luggage</h1>
//               </div>
//               <div className="pt-5">
//                 <p className="pl-5 text-wrap text-justify pr-5 font-light">
//                   One suitcase and one carry-on bag per person is included. If
//                   you have more cases, wheelchairs, surfboards, golf clubs, baby
//                   seats, prams or anything else, let us know.
//                 </p>
//               </div>
//               <div className="flex justify-center items-center pb-3 pt-3">
//                 <div className="bg-cyan-100 w-[94%] rounded-lg flex flex-row pl-3 pt-3 pb-3 text-sm">
//                   <span className="pt-2">
//                     <AiOutlineInfoCircle size={24} />
//                   </span>{" "}
//                   <p className="pl-2">
//                     Extra luggage is subject to availability, and may incur
//                     additional charges. Costs should be paid directly to the
//                     transport company.
//                   </p>
//                 </div>
//               </div>
//               <div className="flex justify-center items-center pb-3 pt-3">
//                 <button className="bg-slate-200 rounded border-2 text-2xl flex flex-row border-slate-950">
//                   <span className="pl-2">Request Extras</span>
//                   <span className="pt-2 pb-2 pl-1">
//                     <IoIosArrowDown />
//                   </span>{" "}
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg shadow-lg w-5/12 mt-3 mb-3">
//             <div className="flex flex-col">
//               <h1 className="pt-4 text-3xl font-light pl-5">
//                 Inclusions and Extras
//               </h1>
//               <div className="pt-5 pl-5 pr-5">
//                 <h1 className="font-semibold">Meet & Greet</h1>
//                 <span>Requested</span>
//               </div>
//               <div className="pt-4 pl-5 pr-5 pb-4">
//                 <h1 className="font-semibold">Extra Items</h1>
//                 <span>No Extra Items</span>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-lg w-5/12 mt-3 mb-3">
//             <div className="flex flex-col pl-5 pr-5">
//               <h2 className="text-3xl font-light mb-4 pt-4">
//                 Passenger Details
//               </h2>
//               <h3 className="font-extralight text-xl mb-6">Lead Passenger</h3>
//               <div>
//                 <form>
//                   <div className="grid grid-cols-2 gap-4 mb-4 pl-2 pr-2">
//                     <div>
//                       <label htmlFor="given-name" className="block font-medium">
//                         Given Name *
//                       </label>
//                       <input
//                         type="text"
//                         id="given-name"
//                         className="mt-1 w-full border border-gray-300 rounded-md p-2"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="family-name"
//                         className="block font-medium"
//                       >
//                         Family Name *
//                       </label>
//                       <input
//                         type="text"
//                         id="family-name"
//                         className="mt-1 w-full border border-gray-300 rounded-md p-2"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4 mb-4 pl-2 pr-2">
//                     <div>
//                       <label
//                         htmlFor="mobile-number"
//                         className="block font-medium"
//                       >
//                         Mobile Number *
//                       </label>
//                       <div className="flex items-center mt-1 border border-gray-300 rounded-md p-2">
//                         <span className="mr-2">🇮🇳</span>
//                         <input
//                           type="tel"
//                           id="mobile-number"
//                           className="w-full focus:outline-none"
//                           placeholder="081234 56789"
//                           required
//                         />
//                       </div>
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="email-address"
//                         className="block font-medium"
//                       >
//                         Email Address *
//                       </label>
//                       <input
//                         type="email"
//                         id="email-address"
//                         className="mt-1 w-full border border-gray-300 rounded-md p-2"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4 mb-4 pl-2 pr-2">
//                     <div>
//                       <label
//                         htmlFor="flight-number"
//                         className="block font-medium"
//                       >
//                         Flight Number *
//                       </label>
//                       <input
//                         type="text"
//                         id="flight-number"
//                         className="mt-1 w-full border border-gray-300 rounded-md p-2"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="additional-notes"
//                         className="block font-medium"
//                       >
//                         Additional Notes
//                       </label>
//                       <textarea
//                         id="additional-notes"
//                         className="mt-1 w-full border border-gray-300 rounded-md p-2"
//                         rows="3"
//                         placeholder="List any additional information or requests..."
//                       ></textarea>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-lg w-5/12 mt-3 mb-3">
//             <div className="flex flex-col pl-5 pr-5">
//               <h1 className="text-3xl font-light mb-4 pt-4">Total</h1>
//               <div className="flex flex-row justify-between mb-2">
//                 <h1 className="font-semibold text-xl"> Your Currency </h1>
//                 <span className="pr-3 font-semibold text-xl">₹ 1763.98</span>
//               </div>
//               <hr width="98%" size="3" color="blue"></hr>
//               <div className="flex flex-row justify-between pt-3">
//                 <h1 className="font-semibold text-xl">
//                   Transfer Company's Currency
//                 </h1>
//                 <span className="font-semibold text-sm pr-3">US$ 21.00</span>
//               </div>
//               <div className="pt-3 pb-4">
//                 <p className="font-light w-[90%] text-sm">
//                   Prices displayed in Indian rupees are estimated based on
//                   today’s exchange rates.
//                   <br />
//                   Final payment will be settled in Rashid Hussain Passenger
//                   Transport's currency (USD).
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg shadow-lg w-5/12 mt-3 mb-3">
//             <div className="flex flex-col pb-4">
//               <div className="flex flex-row justify-between pl-5 pr-5 pb-3 pt-4">
//                 <h1>
//                   <span className="text-xl font-semibold">
//                     Change Of Plans?No Worries!
//                   </span>
//                 </h1>
//                 <h2 className="bg-cyan-400 text-white rounded-md text-center p-1 text-xs h-6">
//                   <span>HANDY TIP</span>
//                 </h2>
//               </div>
//               <p className="pl-5">
//                 You can cancel right up until Wednesday, 02 Oct, 2024 and still
//                 get a 100% refund, so it’s worth booking early.
//               </p>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg shadow-lg w-5/12 mt-3 mb-3">
//             <div className="flex flex-col pb-4">
//               <div className="flex flex-row justify-between pl-5 pr-5 pb-3 pt-4">
//                 <h1>
//                   <span className="text-xl font-semibold">
//                     Need help booking? Call to book.
//                   </span>
//                 </h1>
//                 <h2 className="bg-cyan-400 text-white rounded-md text-center p-1 text-xs h-6">
//                   <span>HANDY TIP</span>
//                 </h2>
//               </div>
//               <p className="pl-5">
//                 Call us on +1 646 4806835 and one of our support team members
//                 can make your booking over the phone.
//               </p>
//             </div>
//           </div>
//           <div className="bg-slate-100 rounded-lg shadow-lg w-5/12 mt-3 mb-3">
//             <div className="flex flex-col">
//               <h1 className="pt-4 text-3xl font-light pl-4">Secure Payment</h1>
//               <div className="bg-cyan-50 ml-5 mr-5 rounded-md border-2 border-cyan-400 mb-3 mt-3 hover:bg-white hover:border-slate-50 hover:delay-300 hover:ease-in-out">
//                 <div className="flex flex-row items-center pl-2 text-xl pb-3 pt-3">
//                   <BsRecordCircle color="cyan" />
//                   <h1 className="pl-1">Credit Card</h1>
//                 </div>
//               </div>
//               <div className="flex flex-row justify-between pl-5 pr-5">
//                 <h1>Credit Card Details</h1> <>*required</>
//               </div>

//               <div className="ml-5 mr-5 rounded-md mb-3 mt-3 p-1">
//                 <form>
//                   <div className="mb-4">
//                     <label htmlFor="card-number" className="block font-medium">
//                       Card Number *
//                     </label>
//                     <div className="relative mt-1">
//                       <input
//                         type="text"
//                         id="card-number"
//                         className="w-full border border-red-500 rounded-md p-2"
//                         placeholder="Enter card number"
//                         required
//                       />
//                       <div className="absolute top-0 right-0 mt-2 mr-2">
//                         <img
//                           src="https://img.icons8.com/color/48/000000/visa.png"
//                           alt="Visa"
//                           className="inline-block w-8"
//                         />
//                         <img
//                           src="https://img.icons8.com/color/48/000000/mastercard.png"
//                           alt="MasterCard"
//                           className="inline-block w-8"
//                         />
//                       </div>
//                     </div>
//                     <p className="text-red-600 text-sm mt-1">
//                       Please enter a card number (Visa, Mastercard or American
//                       Express)
//                     </p>
//                   </div>

//                   <div className="grid grid-cols-2 gap-4 mb-4">
//                     <div>
//                       <label
//                         htmlFor="expiry-month"
//                         className="block font-medium"
//                       >
//                         Expiry Month *
//                       </label>
//                       <select
//                         id="expiry-month"
//                         className="w-full border border-gray-300 rounded-md p-2"
//                         required
//                       >
//                         <option value="" disabled selected>
//                           Select month
//                         </option>

//                         <option value="01">01</option>
//                         <option value="02">02</option>
//                         <option value="03">03</option>
//                         <option value="04">04</option>
//                         <option value="05">05</option>
//                         <option value="06">06</option>
//                         <option value="07">07</option>
//                         <option value="08">08</option>
//                         <option value="09">09</option>
//                         <option value="10">10</option>
//                         <option value="11">11</option>
//                         <option value="12">12</option>
//                       </select>
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="expiry-year"
//                         className="block font-medium"
//                       >
//                         Expiry Year *
//                       </label>
//                       <select
//                         id="expiry-year"
//                         className="w-full border border-gray-300 rounded-md p-2"
//                         required
//                       >
//                         <option value="" disabled selected>
//                           Select year
//                         </option>
//                         <option value="2024">24</option>
//                         <option value="2025">25</option>
//                         <option value="2026">26</option>
//                         <option value="2027">27</option>
//                         <option value="2028">28</option>
//                         <option value="2029">29</option>
//                         <option value="2030">30</option>
//                         <option value="2031">31</option>
//                         <option value="2032">32</option>
//                         <option value="2033">33</option>
//                         <option value="2034">34</option>
//                         <option value="2035">35</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4 mb-4">
//                     <div>
//                       <label htmlFor="cvv" className="block font-medium">
//                         CVV *
//                       </label>
//                       <input
//                         type="text"
//                         id="cvv"
//                         className="w-full border border-red-500 rounded-md p-2"
//                         placeholder="Enter CVV"
//                         required
//                       />
//                       <p className="text-red-600 text-sm mt-1">
//                         Please enter the CVV for your card. (Look for it on the
//                         back of your card)
//                       </p>
//                     </div>
//                     <div>
//                       <label
//                         htmlFor="name-on-card"
//                         className="block font-medium"
//                       >
//                         Name on Card *
//                       </label>
//                       <input
//                         type="text"
//                         id="name-on-card"
//                         className="w-full border border-red-500 rounded-md p-2"
//                         placeholder="Enter name"
//                         required
//                       />
//                       <p className="text-red-600 text-sm mt-1">
//                         Please enter the name printed on your card
//                       </p>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg shadow-lg w-5/12 mb-3 mt-3">
//             <div className="flex flex-col pb-6">
//               <h1 className="pt-4 text-3xl font-light pl-4">Confirm Payment</h1>
//               <div className="flex flex-row mb-3">
//                 <div className="w-1/2 pl-4 pb-3 pt-3">
//                   <p className="text-left text-wrap">
//                     By clicking ‘confirm payment’ your booking will be confirmed
//                     and you will be charged the total amount: ₹ 1763.98.
//                   </p>
//                 </div>
//                 <div className="w-1/2 pl-4 pt-3">
//                   <p>
//                     You also indicate that you agree to Jayride’s: <br />
//                     <span>
//                       -{" "}
//                       <a href="#" className="text-blue-500 underline">
//                         Cancellation and refund policy;
//                       </a>{" "}
//                     </span>
//                     <br />
//                     <span>
//                       -{" "}
//                       <a href="#" className="text-blue-500 underline">
//                         Privacy policy;
//                       </a>{" "}
//                     </span>
//                     <br />
//                     <span>
//                       -{" "}
//                       <a href="#" className="text-blue-500 underline">
//                         Terms and conditions.
//                       </a>
//                     </span>
//                   </p>
//                 </div>
//               </div>
//               <div className="flex justify-center items-center">
//                 <button
//                   className={`text-3xl font-sans text-center border-2 border-cyan-200 rounded-md pl-3 pr-3 pb-3 pt-3 bg-black text-white w-80 hover:bg-blue-900 delay-150 ease-in-out transition`}
//                 >
//                   Confirm Payment
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg shadow-lg w-5/12 mb-3 mt-3 h-24 p-8">
//             <div className="flex flex-row justify-center items-center ">
//               <p>What happens after ‘clicking confirm payment’?</p>
//               <p>How are payments made secure?</p>
//             </div>
//           </div>
//           <div className="flex justify-between items-center w-5/12 flex-row text-white mb-3">
//             <div className="flex flex-col items-center justify-center w-1/3">
//               <RiRefund2Fill size={100} color="black" />
//               <h1 className="text-xl font-medium text-black pt-5">
//                 Easy refund
//               </h1>
//               <p className="pl-10 text-black pt-2">
//                 100% refund if you cancel up to 48 hours before the booking
//               </p>
//             </div>
//             <div className="w-1/3 flex flex-col items-center justify-center">
//               <CiLock size={100} color="black" />
//               <h1 className="text-xl font-medium text-black pt-5">Safe</h1>
//               <p className="pl-10 text-black pt-2">
//                 All your data is encrypted and payment is 100% PCI compliant
//               </p>
//             </div>
//             <div className="w-1/3 flex flex-col items-center justify-center">
//               <MdOutlineMailOutline size={100} color="black" />
//               <h1 className="text-xl font-medium text-black pt-5">Safe</h1>
//               <p className="pl-10 text-black pt-2">
//                 Confirmation and contact details emailed immediatelyt
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default VehicleDetails;
