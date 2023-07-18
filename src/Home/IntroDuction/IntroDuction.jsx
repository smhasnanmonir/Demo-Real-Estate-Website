import { FaHouse, FaSearchengin } from "react-icons/fa6";
import ReactReadMoreReadLess from "react-read-more-read-less";
const IntroDuction = () => {
  return (
    <div className="mb-5">
      <div className="md:max-w-5xl sm:max-w-full md:px-0 px-[25px] mx-auto flex justify-between py-4">
        <div className="flex items-center gap-2">
          <FaHouse size={50}></FaHouse>
          <p className="text-3xl font-bold">Find a property</p>
        </div>
        <div className="flex gap-3">
          <div>
            <select className="select select-info w-full max-w-xs">
              <option disabled selected>
                Select Location
              </option>
              <option>Adabor</option>
              <option>Aftabnagar</option>
              <option>Bashundhara</option>
            </select>
          </div>
          <div>
            <button className="btn btn-outline">
              <FaSearchengin></FaSearchengin>
              Search Property
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-[30px] w-full items-center justify-center mt-7 md:max-w-5xl sm:max-w-full mx-auto">
        <div className="w-1/2">
          <ReactReadMoreReadLess
            charLimit={400}
            readMoreText={"Read more ▼"}
            readLessText={"Read less ▲"}
          >
            "Having designed, built, and delivered residential and commercial
            addresses for almost 4 decades, bti is a well-known and highly
            reputed real estate company in Bangladesh. Our success is based on
            our track record of reliability and customer-centricity. Till date,
            we have completed and handed over more than 400 projects across
            Dhaka and Chattogram. Check out our impressive portfolio of over
            7000 happy customers. Click here to learn about our successful
            journey through the years. Choose which collection suits your
            lifestyle from our Classic Collection, Wellness Communities, Luxury
            Collection & Commercial Collection. Buy from us or let us be
            partners in developing your land! "
          </ReactReadMoreReadLess>
        </div>
        <div className="grid grid-cols-3 w-1/2 gap-3">
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
    </div>
  );
};

export default IntroDuction;
