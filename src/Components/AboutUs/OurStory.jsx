import SharedFrontPage from "../Shared/SharedFrontPage";
import backimg from "../../../src/assets/aboutus.jpg";
import milestone from "../../../src/assets/milestone.jpg";
import teamwork from "../../../src/assets/teamwork.jpg";
import sold from "../../../src/assets/sold.jpg";
import presentDay from "../../../src/assets/presentDay.jpg";
import logo from "../../../src/assets/Universe__group__logo-01.png";

const OurStory = () => {
  return (
    <div className="">
      <SharedFrontPage
        backgroundImg={backimg}
        heading1="About us"
        heading2="Our Story"
      ></SharedFrontPage>
      <div className="bg-[#e9ecef] text-black">
        <div className=" text-black lg:px-[280px] md:px-[150px] px-[50px] lg:py-[75px] md:py-[55px] py-[35px] ">
          <p className="text-[18px]">
            At <span className="font-semibold">Universe Group</span>, our
            journey began with a simple vision: to make the process of finding a
            home as magical and awe-inspiring as the cosmos itself. Established
            in 2016, our commitment to excellence, integrity, and personalized
            service has propelled us to the forefront of the real estate
            industry.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-6 place-items-center md:pb-[65px]">
          <div className="w-full h-full object-cover">
            <img
              className="w-full h-full object-cover"
              src={milestone}
              alt=""
            />
          </div>
          <div className="space-y-4 lg:pr-[35px] lg:px-0 px-[35px] lg:py-0 py-[35px]">
            <h1 className="abouth1">2016 - The Genesis</h1>
            <p>
              In a small office space, a group of passionate individuals united
              by their love for real estate embarked on a mission to create a
              company that redefines the way people experience property
              solutions. Our first transactions were humble, but the seeds of
              our ambition were sown.
            </p>
            <div className="border-l-[4px] h-[45px] border-black"></div>
            <h1 className="abouth1">2017 - Shaping Constellations</h1>
            <p>
              As we expanded our horizons, we were driven by a desire to connect
              people with their dream homes. Our team of experts, armed with
              deep industry knowledge, began crafting constellations of
              properties that spanned a spectrum of lifestyles, from cozy
              residences to opulent estates.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 place-items-center md:pb-[65px]">
          <div className="md:order-2 w-full h-full object-cover">
            <img className="w-full h-full object-cover" src={teamwork} alt="" />
          </div>
          <div className="space-y-4 lg:pl-[35px] lg:px-0 px-[35px] lg:py-0 py-[35px]">
            <h1 className="abouth1">2019 - Guiding Stars</h1>
            <p className="">
              The Universe Group's guiding stars are our clients. We embraced a
              client-centric approach, knowing that each journey is unique. We
              witnessed dreams taking shape as keys were handed over and spaces
              transformed into homes. These moments have been our guiding light,
              igniting our passion to create stellar experiences.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 place-items-center">
          <div className="w-full h-full">
            <img className="w-full h-full object-cover" src={sold} alt="" />
          </div>
          <div className="space-y-4 lg:pr-[35px] lg:px-0 px-[35px] lg:py-0 py-[35px]">
            <h1 className="abouth1">2021 - Expanding Horizons</h1>
            <p className="">
              Our journey continues with an ever-growing team of dedicated
              professionals, each a star in their own right. We've extended our
              reach across the country, making our mark in both urban landscapes
              and serene countryside settings. Our commitment to quality,
              innovation, and ethical practices remains unwavering.
            </p>
            <div className="border-l-[4px] h-[45px] border-black"></div>
            <h1 className="abouth1">2022 - Celestial Bonds</h1>
            <p>
              The Universe Group family expanded to include not only clients but
              also the communities we serve. Our commitment to corporate social
              responsibility propelled initiatives that impact lives beyond the
              property market. We believe in giving back to the universe that
              has supported us.
            </p>
          </div>
        </div>
        <div className="relative w-full">
          <img
            className="w-full md:h-full h-[350px] object-cover brightness-[30%]"
            src={presentDay}
            alt=""
          />
          <div className="absolute md:top-1/2 top-1/4 text-center text-white space-y-2 lg:px-0 px-[45px]">
            <h1 className="lg:text-2xl font-semibold">
              Present Day - A Shining Legacy
            </h1>
            <p
              className="lg:w-1/2 mx-auto
            "
            >
              Today, the Universe Group stands as a beacon of trust,
              reliability, and aspiration in the real estate cosmos. Our story
              is one of growth, learning, and making dreams come true. With the
              cosmos as our inspiration, we continue to explore, innovate, and
              illuminate the path to extraordinary living.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 place-items-center lg:px-[250px] lg:py-[165px] px-[45px] py-[45px]">
          <div className="">
            <img className="w-3/4" src={logo} alt="" />
          </div>
          <div className="space-y-4 ">
            <h1 className="text-xl font-semibold">Join Our Journey</h1>
            <p>
              As we move forward, we invite you to join us in crafting the next
              chapters of the Universe Group story. Whether you're a home
              seeker, an investor, or a community partner, together we'll create
              a universe of possibilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
