import Hero from "../../components/Hero/Hero";
import BookAirportDetails from "../../components/BookAirportDetails/BookAirportDetails";
import WhyBookUs from "../../components/WhyBookUs/WhyBookUs";
import AirportCoverage from "../../components/AirportCoverage/AirportCoverage";
import FeaturedDestinations from "../../components/FeaturedDestinations/FeaturedDestinations";
import Banner from "../../components/Banner/Banner";
import Partners from "../../components/Partners/Partners";
import Help from "../../components/Help/Help";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import Feedback from "../../components/Feedback/Feedback";
import { useSelector } from "react-redux";

const Home = () => {
  const authState = useSelector((state) => state.auth);

  console.log("Home Page", authState);
  return (
    <div>
      <div
        className="bg-cover bg-center"
        style={{
          background:
            "url('https://images.pexels.com/photos/2707756/pexels-photo-2707756.jpeg')",
        }}
      >
        <Hero />
      </div>
      <BookAirportDetails />
      <WhyBookUs />
      <AirportCoverage />
      <FeaturedDestinations />
      <Banner />
      <Partners />
      <Help />
      <GetInTouch />
      <Feedback />
    </div>
  );
};

export default Home;
