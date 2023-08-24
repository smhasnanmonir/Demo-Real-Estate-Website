import SharedFrontPage from "../Shared/SharedFrontPage";
import cover from "../../../src/assets/Mission/cover1.jpg";
import cover2 from "../../../src/assets/Mission/cover.jpg";
import key1 from "../../../src/assets/Mission/key1.jpg";
import key2 from "../../../src/assets/Mission/key2.jpg";
import values from "../../../src/assets/Mission/values.jpg";
const MissionVision = () => {
  return (
    <div>
      <SharedFrontPage
        backgroundImg={cover}
        heading1="About us"
        heading2="Mission,Vision and Values"
      ></SharedFrontPage>
      <div className="bgColorGray2">
        <div className="grid lg:grid-cols-2 gap-x-[30px] place-items-center lg:p-[45px] bg-white">
          <div className="order-2 space-y-[13px] p-[30px]">
            <h1 className="text-2xl font-semibold">
              Our Vision, Mission & Values
            </h1>
            <p>
              At Universe Group, our vision, mission, and values serve as the
              constellations that guide us through the ever-expanding universe
              of real estate. Each element reflects our commitment to
              excellence, integrity, and creating extraordinary experiences for
              our clients and partners.
            </p>
          </div>
          <img className="w-full h-full object-cover" src={cover2} alt="" />
        </div>
        <div className="">
          <h1 className="text-center md:text-3xl text-2xl font-semibold underline underline-offset-[6px] pt-[13px]">
            Our Vision
          </h1>
          <div className="grid lg:grid-cols-2 gap-x-[30px] place-items-center lg:pt-[23px] lg:p-[45px]">
            <div className="p-[30px] space-y-[13px]">
              <h1 className="text-2xl font-semibold">
                Guiding Dreams, Shaping Spaces
              </h1>
              <p>
                Our vision is to be the guiding star that leads individuals and
                families to their dream homes. We aspire to shape spaces that
                resonate with the essence of our clients' aspirations, ensuring
                that their real estate journeys are seamless, satisfying, and
                transformative.
              </p>
            </div>
            <img className="w-full h-full object-cover" src={key1} alt="" />
          </div>
        </div>
        <div className=" bg-white">
          <h1 className="text-center md:text-3xl text-2xl font-semibold underline underline-offset-[6px] pb-[25px] pt-[13px]">
            Our Mission
          </h1>
          <div className="grid lg:grid-cols-2 gap-x-[30px] place-items-center lg:p-[45px]">
            <div className="order-2 space-y-[13px] p-[30px]">
              <h1 className="text-2xl font-semibold">
                Connecting Hearts and Homes
              </h1>
              <p>
                At Universe Group, our vision, mission, and values serve as the
                constellations that guide us through the ever-expanding universe
                of real estate. Each element reflects our commitment to
                excellence, integrity, and creating extraordinary experiences
                for our clients and partners.
              </p>
            </div>
            <img className="w-full h-full object-cover" src={key2} alt="" />
          </div>
        </div>
        <div className="">
          <h1 className="text-center md:text-3xl text-2xl font-semibold underline underline-offset-[6px] pt-[13px]">
            Our Values
          </h1>
          <div className="grid lg:grid-cols-2 gap-x-[30px] place-items-center lg:pt-[23px] lg:p-[45px]">
            <div className="p-[30px] space-y-[13px]">
              <h1 className="text-2xl font-semibold">
                Guiding Dreams, Shaping Spaces
              </h1>
              <p>
                <span className="font-semibold">Integrity:</span> We uphold the
                highest standards of ethics and honesty in every interaction.
                Our transparency and reliability build trust, fostering enduring
                relationships with clients, partners, and communities.
              </p>
              <p>
                <span className="font-semibold">Innovation:</span>
                Embracing technology and creative thinking, we pioneer
                innovative solutions that elevate the real estate experience.
                Our willingness to explore new horizons keeps us at the
                forefront of industry advancements.
              </p>
              <p>
                <span className="font-semibold">Collaboration:</span>
                We believe in the power of synergy. Our collaborative approach
                involves working closely with clients, agents, and partners to
                create harmonious outcomes that enrich lives and spaces.
              </p>
              <p>
                <span className="font-semibold">Empathy:</span>
                Understanding the emotional significance of a home, we approach
                every situation with empathy. We are not just in the business of
                property; we are in the business of turning spaces into
                sanctuaries.
              </p>
              <p>
                <span className="font-semibold">Excellence:</span>
                Striving for excellence is our compass. Our dedication to
                delivering top-tier services, exceptional properties, and
                memorable experiences is unwavering.
              </p>
              <p>
                <span className="font-semibold">Community:</span>
                We are not just a part of communities; we are stewards. Our
                commitment to social responsibility empowers us to give back,
                creating positive ripples in the larger universe we share.
              </p>
              <p>
                <span className="font-semibold">Adaptability:</span>
                In the dynamic world of real estate, adaptability is key. We
                embrace change, seize opportunities, and evolve to meet the
                evolving needs of our clients and the industry.
              </p>
              <p>
                <span className="font-semibold">Gratitude:</span>
                Every achievement is a constellation of effort and support. We
                express gratitude for the trust our clients place in us, the
                efforts of our team, and the universe of possibilities we
                explore together.
              </p>
            </div>
            <img className="w-full h-full object-cover" src={key1} alt="" />
          </div>
        </div>
        <div className="bg-white text-center lg:px-[250px] md:px-[150px] px-[45px] lg:py-[65px] md:py-[45px] py-[35px] space-y-[25px]">
          <h1 className=" md:text-3xl text-2xl">Join Our Universe of Values</h1>
          <p>
            Our values are the stars that illuminate our path. Whether you're
            looking to find your perfect home, partner with us as an investor,
            or collaborate as a community advocate, we invite you to join us in
            shaping a universe of excellence, empathy, and exceptional living.
          </p>
          <div className="w-3/4 h-[2px] bg-black mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
