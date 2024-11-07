import React from "react";

const ModalAbout = ({ data }) => {
  return (
    <div className="flex flex-col">
      <span className="pt-2 font-light text-2xl">We are {data.name}</span>
      <p className="text-justify pt-3">
        We are a full service Transportation company serving throughout the
        United Arab Emirates Located in Dubai. Rashid Hussain Passenger
        Transport starting with few Buses has expanded to keep pace with the
        rising need in the transport industry evolving changing requirements of
        today’s market place. Our mission has become to be the best in corporate
        sector staff, Nurseries, School and college students Transportation
        providing reliable, safe and comfortable services. We invite you to
        discover the difference that true transportation professional can make
        it. Rashid Hussain Passenger Transport is founded by Transport
        professionals who have a track record experience of managing and
        providing hassle free services in transportation for corporate
        companies, schools and colleges. Less
      </p>
    </div>
  );
};

export default ModalAbout;
