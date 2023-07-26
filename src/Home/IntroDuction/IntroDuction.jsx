import { FaHouse, FaSearchengin } from "react-icons/fa6";
import ReactReadMoreReadLess from "react-read-more-read-less";
import quote from "../../../src/assets/quote.png";
import dream from "../../../src/assets/penguin.png";
const IntroDuction = () => {
  return (
    <div className="mb-5 md:max-w-5xl sm:max-w-full md:px-0 px-[25px] mx-auto mt-[35px]">
      <div className="flex md:flex-row flex-col md:gap-[30px] gap-4 w-full items-center justify-center mt-7 md:max-w-5xl sm:w-full mx-auto">
        <div className="md:w-1/2">
          <h1 className="text-xl font-semibold mb-2">WHO WE ARE?</h1>
          <ReactReadMoreReadLess
            className=""
            charLimit={400}
            readMoreText={"Read more ▼"}
            readLessText={"Read less ▲"}
          >
            A powerful portfolio of the country’s most distinctive and selective
            developments, with an excellent reputation in the Real Estate
            market, and enviable relationships that give our clients exclusive
            access to the ultimate in luxury apartments and exquisite commercial
            spaces, all in prime locations of Dhaka city. Our promise remains to
            develop a portfolio of luxury spaces and offer investors as well as
            buyers an unparalleled quality of service, inimitable by
            competitors. It is the commitment to both impeccably high standards
            and attention to detail that drive us to our success. Besides
            building beyond expectation, SHL moreover sets standards for itself,
            for you and for others, which is why we proudly declare our driving
            philosophy to be “Setting Standards”.
          </ReactReadMoreReadLess>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 md:w-1/2 gap-3">
          <button
            onClick={() => window.my_modal_3.showModal()}
            className="btn btn-outline"
          >
            TRUSTWORTHY AND RELIABLE
          </button>
          <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <h3 className="font-bold text-lg">Trustworthy and Reliable</h3>
              <p className="py-4">
                We keep our word. Always. We hand over your investment within
                the agreed timeframe and sometimes even before. We proudly boast
                of having the best customer service in the country! Read about
                the experience of our highly satisfied customers.
              </p>
            </form>
          </dialog>
          <button
            onClick={() => window.my_modal_4.showModal()}
            className="btn btn-outline"
          >
            HIGH-GRADE CONSTRUCTION
          </button>
          <dialog id="my_modal_4" className="modal">
            <form method="dialog" className="modal-box">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <h3 className="font-bold text-lg">High-Grade Construction</h3>
              <p className="py-4">
                For nearly four decades we have delivered excellence in
                construction quality by maintaining a non-compromising policy
                towards rules and regulations of building codes, paying extra
                attention to structural and engineering features and using high
                grade building materials.
              </p>
            </form>
          </dialog>
          <button
            onClick={() => window.my_modal_5.showModal()}
            className="btn btn-outline"
          >
            {" "}
            MODERN DESIGN
          </button>
          <dialog id="my_modal_5" className="modal">
            <form method="dialog" className="modal-box">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <h3 className="font-bold text-lg">Modern Design</h3>
              <p className="py-4">
                'Form follows function' is our mantra for the architecture in
                each of our buildings. We incorporate modern trends while
                ensuring practicality in all spaces, be it residential or
                commercial.
              </p>
            </form>
          </dialog>
          <button
            onClick={() => window.my_modal_6.showModal()}
            className="btn btn-outline"
          >
            RANGE OF CHOICES
          </button>
          <dialog id="my_modal_6" className="modal">
            <form method="dialog" className="modal-box">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <h3 className="font-bold text-lg">Range of choices</h3>
              <p className="py-4">
                At bti, we know that each customer is unique. We have
                specialized separate teams for our Classic Collection, Luxury
                Collection, Wellness Communities and Commercial Collection. You
                will not only have a wide range of choices when you decide to
                buy from us, you will also get a customised customer experience
                well matched to your lifestyle choice.
              </p>
            </form>
          </dialog>
          <button
            onClick={() => window.my_modal_7.showModal()}
            className="btn btn-outline"
          >
            UNCOMPROMISED SAFETY
          </button>
          <dialog id="my_modal_7" className="modal">
            <form method="dialog" className="modal-box">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <h3 className="font-bold text-lg">Uncompromised Safety</h3>
              <p className="py-4">
                We believe there is absolutely no space for compromise when it
                comes to your safety and security. We implement maximum safety
                measures and always work towards better fire-resistant and
                earthquake-resistant features than the building rules require.
              </p>
            </form>
          </dialog>
          <button
            onClick={() => window.my_modal_8.showModal()}
            className="btn btn-outline"
          >
            AFTER-SALES SERVICES
          </button>
          <dialog id="my_modal_8" className="modal">
            <form method="dialog" className="modal-box">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <h3 className="font-bold text-lg">After-Sales Services</h3>
              <p className="py-4">
                We pride ourselves on offering exemplary after-sale services to
                all bti customers. Our maintenance services include property
                maintenance and management at a minimal cost for the first year
                after handover. These services are extended based on our
                performance and your satisfaction.
              </p>
            </form>
          </dialog>
          <button
            onClick={() => window.my_modal_9.showModal()}
            className="btn btn-outline"
          >
            GOING THE EXTRA MILE
          </button>
          <dialog id="my_modal_9" className="modal">
            <form method="dialog" className="modal-box">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <h3 className="font-bold text-lg">Going the extra mile</h3>
              <p className="py-4">
                With friendly payment terms, registration support and a full
                team of in-house architects and engineers unlike most real
                estate developers, we can help you deal with any concerns
                related to your property. This support continues even after you
                take possession of your property.
              </p>
            </form>
          </dialog>
          <button
            onClick={() => window.my_modal_10.showModal()}
            className="btn btn-outline"
          >
            {" "}
            OUR CREDENTIALS
          </button>
          <dialog id="my_modal_10" className="modal">
            <form method="dialog" className="modal-box">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <h3 className="font-bold text-lg">Our Credentials</h3>
              <p className="py-4"></p>
            </form>
          </dialog>
          <button
            onClick={() => window.my_modal_11.showModal()}
            className="btn btn-outline"
          >
            AND MORE!
          </button>
          <dialog id="my_modal_11" className="modal">
            <form method="dialog" className="modal-box">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <h3 className="font-bold text-lg">And More!</h3>
              <p className="py-4">
                We have multiple businesses to assist you in renting,
                re-selling, designing and constructing any property. These
                businesses include architectural services, interior design and
                decoration solutions, construction management, home automation
                services and professional landscaping too.
              </p>
            </form>
          </dialog>
        </div>
      </div>
      {/* Dream with us */}
      <div className="flex md:flex-row flex-col mt-[50px] mx-auto">
        <div className="md:w-1/2">
          {/* Quote div */}
          <h1 className="text-xl font-semibold mb-2">
            Dream with us, partner with us
          </h1>
          <p>
            Relax and reap the benefits of owning property in Bangladesh. See
            your property transform as per your dreams, sooner than you
            anticipated!
          </p>
          {/* Quote Div */}
          <div className="flex">
            <div className="border-l-[5px] border-blue-300 mt-[35px]">
              <div className="ml-5">
                <img className="w-[64px]" src={quote} alt="" />
                <p className="text-xl italic mb-3">
                  In all of my years, I have rarely come across a company as
                  professional as bti. bti is truly a trustworthy name in the
                  real estate sector of Bangladesh.
                </p>
                <h1>Dr. Kabirul Islam</h1>
                <p>Landowner, My Forte</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 md:flex hidden justify-end">
          {/* Image div */}
          <img className="w-[296px]" src={dream} alt="" />
        </div>
      </div>
    </div>
  );
};

export default IntroDuction;
