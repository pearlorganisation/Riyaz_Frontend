import Star from "../../assets/images/star.png";
import Marquee from "react-fast-marquee";

const testimonials1 = [
  {
    id: 1,
    title: "Power of Productivity in Business",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    name: "Ray S.",
    position: "Warehouse Supervisor",
    extraDetails: "Small business (50 or less emp.)",
  },

  {
    id: 2,
    title: "Your Personal Stage Director for Stellar Videos",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo ",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "Max Fuller",
    position: "System Administrator",
    extraDetails: "Small business (40 or less emp.)",
  },

  {
    id: 3,
    title: "Power of Productivity in Business",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos r",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    name: "Archie Morgan",
    position: "CEO",
    extraDetails: "JZ Morgan",
  },
  {
    id: 4,
    title: "Power of Productivity in Business",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Ray S.",
    position: "Warehouse Supervisor",
    extraDetails: "Small business (50 or less emp.)",
  },
  {
    id: 5,
    title: "5 sdflkj",
    description:
      "Lorem ipsum dolor sit amet  adipisicing elit. Illum aliquid quo eum quae quos illo",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "Carbon P",
    position: "Warehouse Supervisor",
    extraDetails: "Small business (50 or less emp.)",
  },
];

const testimonials2 = [
  {
    id: 6,
    title: "6 fkdfl",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
    name: "Vijay D.",
    position: "Full Stack AI Developer",
    extraDetails: "Large business (500 or more emp.)",
  },
  {
    id: 7,
    title: "7 sdasd",
    description:
      "Lorem ipsum dolor sit amet  adipisicing elit. Illum aliquid quo eum quae quos illo",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    name: "Andrew J.",
    position: "Warehouse Supervisor",
    extraDetails: "Small business (50 or less emp.)",
  },
  {
    id: 8,
    title: "8 ASasdfasd",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    name: "Adamses Lite",
    position: "Full Stack AI Developer",
    extraDetails: "Large business (500 or more emp.)",
  },
  {
    id: 9,
    title: "9 ADSSD",
    description:
      "Lorem ipsum dolor sit amet  adipisicing elit. Illum aliquid quo eum quae quos illo",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    name: "Rizvan Khan",
    position: "Warehouse Supervisor",
    extraDetails: "Small business (50 or less emp.)",
  },
  {
    id: 10,
    title: "10 Aasd",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quo eum quae quos illo earum ipsa doloribus nostrum minus libero aspernatur",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
    name: "Alice Sendree",
    position: "Full Stack AI Developer",
    extraDetails: "Large business (500 or more emp.)",
  },
];

const Feedback = () => {
  return (
    <div className="bg-white w-full bg-opacity-50 py-6 ">
      <div className="text-center">
        <div className="">
          <span
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="bg-gradient-to-l from-teal-200 to-lime-400 bg-clip-text text-transparent font-bold uppercase text-2xl tracking-widest"
          >
            Our Clients Feedback
          </span>
        </div>
      </div>

      <div className="text-gray-600 pt-8" id="reviews">
        <Marquee speed={400} direction="right" pauseOnClick={true}>
          <label htmlFor=""></label>
          <div className="px-6 md:px-12 xl:px-6 w-[50%] p-4">
            <div className="flex flex-row gap-4 space-y-8 ">
              {testimonials2.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="aspect-auto -tr p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10"
                  style={{
                    boxShadow:
                      " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                  }}
                >
                  <p className="font-bold text-lg">"{testimonial.title}"</p>

                  <p className="mt-8">{testimonial.description}</p>

                  <div className="flex space-x-1 mt-4">
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                  </div>
                  <div className="flex gap-4 mt-4">
                    <img
                      className="w-[20%] h-[20%] rounded-full"
                      src={testimonial.image}
                      alt="user avatar"
                      width="400"
                      height="400"
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-md font-medium text-gray-700 dark:text-white">
                        {testimonial.name}
                      </h6>
                      <p className="text-sm text-gray-500 ">
                        {testimonial.position}
                      </p>
                      <p className="text-sm">{testimonial.extraDetails}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Marquee>
      </div>
      <div className="text-gray-600 pt-8" id="reviews">
        <Marquee speed={400} direction="left" pauseOnClick={true}>
          <label htmlFor=""></label>
          <div className="px-6 md:px-12 xl:px-6 w-[50%] p-4">
            <div className="flex flex-row gap-4 space-y-8 ">
              {testimonials2.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="aspect-auto -tr p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10"
                  style={{
                    boxShadow:
                      " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                  }}
                >
                  <p className="font-bold text-lg">"{testimonial.title}"</p>

                  <p className="mt-8">{testimonial.description}</p>

                  <div className="flex space-x-1 mt-4">
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                  </div>
                  <div className="flex gap-4 mt-4">
                    <img
                      className="w-[20%] h-[20%] rounded-full"
                      src={testimonial.image}
                      alt="user avatar"
                      width="400"
                      height="400"
                      loading="lazy"
                    />
                    <div>
                      <h6 className="text-md font-medium text-gray-700 dark:text-white">
                        {testimonial.name}
                      </h6>
                      <p className="text-sm text-gray-500 ">
                        {testimonial.position}
                      </p>
                      <p className="text-sm">{testimonial.extraDetails}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Feedback;
