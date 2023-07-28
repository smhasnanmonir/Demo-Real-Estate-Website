import { FaHouse, FaSearchengin } from "react-icons/fa6";
import ReactReadMoreReadLess from "react-read-more-read-less";
import quote from "../../../src/assets/quote.png";
import dream from "../../../src/assets/penguin.png";
const IntroDuction = () => {
  return (
    <div className="mb-5 md:max-w-5xl sm:max-w-full md:px-0 px-[25px] mx-auto mt-[35px] bg-[#28282B] text-white">
      {/* Dream with us */}
      <div className="flex md:flex-row flex-col mt-[50px] mx-auto items-center justify-center md:max-w-5xl">
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
                <p className="text-[18px] italic mb-3">
                  “We are all constructed out of our self-dialogue.” — BRYANT
                  MCGILL Claritas est etiam processus dynamicus, qui sequitur
                  mutationem consuetudium lectorum. Mirum est notare quam
                  littera gothica, quam nunc putamus parum claram, anteposuerit
                  litterarum formas humanitatis per seacula quarta decima et
                  quinta decima. Eodem modo typi, qui nunc nobis videntur parum
                  clari, fiant sollemnes in futurum.
                </p>
                <h1>Harunur Rashid, Doctor</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:flex hidden justify-end">
          {/* Image div */}
          <img
            className="w-3/4 rounded-lg"
            src="https://i.imgur.com/tg7uNgu.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default IntroDuction;
