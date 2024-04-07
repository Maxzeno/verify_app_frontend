import { Link } from "react-router-dom";

import avatar1 from "../assets/images/person1.jpg";
import avatar2 from "../assets/images/person2.jpg";
import avatar3 from "../assets/images/person3.jpg";

const Testimonial = () => {
  return (
    <section id="testimonials">
      {/* Container to heading and testm blocks */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          What's Different About BetaVerify?
        </h2>
        {/* Testimonials Container */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
            <img src={avatar2} className="w-16 -mt-14 rounded-full" alt="" />
            <h5 className="text-lg font-bold">Chinyere Okonkwo</h5>
            <p className="text-sm text-darkGrayishBlue">
              “Great service! BetaVerify helped me verify my National Identity
              Number quickly and affordably. The customer support team was also
              very helpful whenever I had questions.”
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img src={avatar1} className="w-16 -mt-14 rounded-full" alt="" />
            <h5 className="text-lg font-bold">Bisi Adeyemi</h5>
            <p className="text-sm text-darkGrayishBlue">
              “I highly recommend BetaVerify for anyone needing to verify their
              documents. The process was fast and easy, and the pricing was very
              reasonable.”
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
            <img src={avatar3} className="w-16 -mt-14 rounded-full" alt="" />
            <h5 className="text-lg font-bold">Adaobi Nwachukwu</h5>
            <p className="text-sm text-darkGrayishBlue">
              “I was impressed by how affordable BetaVerify's services are. They
              offer great value for the price, and their customer support team
              is top-notch.”
            </p>
          </div>
        </div>
        {/* Button */}
        <div className="my-16">
          <Link
            to="/register"
            className="p-3 px-6 pt-2 text-white bg-indigo-500 rounded-full baseline hover:bg-brightRedLight"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
