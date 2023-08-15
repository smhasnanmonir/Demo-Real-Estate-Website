import SharedFrontPage from "../Shared/SharedFrontPage";
import clientCover from "../../../src/assets/clients/clientcover.jpg";
import img1 from "../../../src/assets/clients/1609499174.DPE-Logo-01.jpg";
import img2 from "../../../src/assets/clients/bangladesh-krishi-bank-logo--01.jpg";
import img3 from "../../../src/assets/clients/global.1547536613-01.jpg";
import img4 from "../../../src/assets/clients/Islami-Bank-01.jpg";
import img5 from "../../../src/assets/clients/mercantile_bank-01.jpg";
import img6 from "../../../src/assets/clients/parliament-01.jpg";
import img7 from "../../../src/assets/clients/radiant-pharmaceuticals-01.jpg";
const OurClient = () => {
  return (
    <div className="">
      <SharedFrontPage
        backgroundImg={clientCover}
        heading1="AboutUs"
        heading2="Our Clients"
      ></SharedFrontPage>
      <div className="lg:px-[250px] text-black md:px-[120px] px-[75px] lg:py-[120px] md:py-[80px] py-[65px] text-center bg-white">
        <h1 className="md:text-3xl">A FOOTPRINT OF RENOWNED NAMES</h1>
        <p className="md:mt-[30px] mt-[20px]">
          We pride ourselves in creating spaces where leading corporates choose
          to establish their place of business. At Shanta, you become part of an
          elite community of renowned local and global names.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 px-4 py-4 bg-[#e9ecef]">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
      </div>
    </div>
  );
};

export default OurClient;
