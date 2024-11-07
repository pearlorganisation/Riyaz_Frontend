import React from 'react'
import Car from "../../assets/images/bookings/car.png";

// booking data 
const bookings = [
  {
    bookingId: 1,
    customerName: "John Doe",
    email: "john.doe@example.com",
    mobileNumber: "08123456789",
    vehicle: "Toyota Corolla",
    bookingDate: "2024-09-15",
    startDate: "2024-10-10",
    endDate: "2024-10-15",
    status: "Confirmed"
  },
  {
    bookingId: 2,
    customerName: "Jane Smith",
    email: "jane.smith@example.com",
    mobileNumber: "08123456788",
    vehicle: "Honda Accord",
    bookingDate: "2024-09-17",
    startDate: "2024-10-12",
    endDate: "2024-10-20",
    status: "Pending"
  },
  {
    bookingId: 3,
    customerName: "Alice Johnson",
    email: "alice.johnson@example.com",
    mobileNumber: "08123456787",
    vehicle: "BMW X5",
    bookingDate: "2024-09-18",
    startDate: "2024-10-14",
    endDate: "2024-10-18",
    status: "Cancelled"
  },
  {
    bookingId: 4,
    customerName: "Bob Brown",
    email: "bob.brown@example.com",
    mobileNumber: "08123456786",
    vehicle: "Tesla Model S",
    bookingDate: "2024-09-19",
    startDate: "2024-10-16",
    endDate: "2024-10-22",
    status: "Confirmed"
  },
  {
    bookingId: 5,
    customerName: "Charlie Green",
    email: "charlie.green@example.com",
    mobileNumber: "08123456785",
    vehicle: "Ford Mustang",
    bookingDate: "2024-09-20",
    startDate: "2024-10-18",
    endDate: "2024-10-25",
    status: "Pending"
  },
  {
    bookingId: 6,
    customerName: "Daniel White",
    email: "daniel.white@example.com",
    mobileNumber: "08123456784",
    vehicle: "Audi A4",
    bookingDate: "2024-09-22",
    startDate: "2024-10-20",
    endDate: "2024-10-26",
    status: "Confirmed"
  },
  {
    bookingId: 7,
    customerName: "Eve Black",
    email: "eve.black@example.com",
    mobileNumber: "08123456783",
    vehicle: "Mercedes Benz GLC",
    bookingDate: "2024-09-24",
    startDate: "2024-10-21",
    endDate: "2024-10-28",
    status: "Pending"
  },
  {
    bookingId: 8,
    customerName: "Frank Miller",
    email: "frank.miller@example.com",
    mobileNumber: "08123456782",
    vehicle: "Chevrolet Camaro",
    bookingDate: "2024-09-26",
    startDate: "2024-10-23",
    endDate: "2024-10-29",
    status: "Cancelled"
  },
  {
    bookingId: 9,
    customerName: "Grace Lee",
    email: "grace.lee@example.com",
    mobileNumber: "08123456781",
    vehicle: "Porsche 911",
    bookingDate: "2024-09-28",
    startDate: "2024-10-25",
    endDate: "2024-10-30",
    status: "Confirmed"
  },
  {
    bookingId: 10,
    customerName: "Henry Scott",
    email: "henry.scott@example.com",
    mobileNumber: "08123456780",
    vehicle: "Nissan Altima",
    bookingDate: "2024-09-30",
    startDate: "2024-10-27",
    endDate: "2024-11-02",
    status: "Pending"
  }
];

 


const BookingsData = () => {
  return (
    <> 
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center lg:h-max md:h-max h-auto mt-3'>
          <img src={Car}
            width={200}
            height={180}
            className='mt-2'
          />

          <h1 className='text-4xl font- pt-3'>Your Bookings</h1>
          <p className='text-lg font-light pb-2 pt-3'>manishgupta@pearlorganisation.com</p>
        </div>  
        <div className='flex flex-col flex-wrap p-6 lg:flex-row md:flex-col  items-center justify-center gap-1 w-full mb-3'>
          {bookings.map((booking) => (
            <div key={booking.bookingId} className="bg-white p-4 shadow-lg rounded-md w-full lg:w-1/4">
              <h3 className="font-semibold text-lg mb-2">{booking.customerName}</h3>
              <p className="text-gray-600">Vehicle: {booking.vehicle}</p>
              <p className="text-gray-600">Mobile: {booking.mobileNumber}</p>
              <p className="text-gray-600">Email: {booking.email}</p>
              <p className="text-gray-600">Booking Date: {booking.bookingDate}</p>
              <p className="text-gray-600">Start: {booking.startDate}</p>
              <p className="text-gray-600">End: {booking.endDate}</p>
              <p className={`font-semibold ${booking.status === 'Confirmed' ? 'text-green-500' : booking.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}>
                Status: {booking.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
 
     
  )
}

export default BookingsData