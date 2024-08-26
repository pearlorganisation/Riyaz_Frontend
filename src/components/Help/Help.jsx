/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

const FaqsCard = (props) => {
  const answerElRef = useRef();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer pb-5 flex mt-2 items-center justify-between text-lg text-gray-700 font-medium">
        {faqsList.q}
        {state ? (
          <div className="h-[30px] w-[30px] bg-white border-2 border-gray-400 rounded-full px-1  flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 12H4"
              />
            </svg>
          </div>
        ) : (
          <div className="h-[30px] w-[30px] bg-white border-2 border-gray-400 rounded-full px-1  flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500 mt-4">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};

const Help = () => {
  const faqsList = [
    {
      q: "What if my plans change?",
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
    },
    {
      q: "Do you include common questions?",
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    },
    {
      q: "Can I use this for 21 questions?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Are these questions for girls or for boys?",
      a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
    },
    {
      q: "What do you wish you had more talent doing?",
      a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
        <div className="flex-1">
          <div className="max-w-lg">
            <h3 className="bg-gradient-to-l text-4xl from-teal-400 to-lime-300 bg-clip-text text-transparent font-bold">
              Need Help ?
            </h3>
            <p className="mt-3 text-gray-800 text-xs  sm:text-xl">
              Manage My Booking
            </p>
            <p className="mt-3 text-gray-800 text-xs  sm:text-xl">
              Visit Help Center
            </p>

            <p className="mt-3 text-gray-800 text-xs sm:text-xl">
              Talk to our Team
            </p>

            <button
              className="mt-8 mb-2 uppercase bg-green-500 hover:bg-green-300 text-white text-md font-bold py-2 px-4  rounded-md"
              style={{
                boxShadow:
                  " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
              }}
            >
              BOOK NOW
            </button>
          </div>
        </div>
        <div className="flex-1 mt-12 md:mt-0 bg-white p-2 rounded-lg border-gray-300 border-2">
          <ul className="space-y-4 divide-y">
            {faqsList.map((item, idx) => (
              <FaqsCard idx={idx} faqsList={item} key={idx} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Help;
