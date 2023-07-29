import { Link } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container1 overflow-hidden">
      <div className="aboutUSDIV bg-[#fd7e14]" id="sec1">
        <h1 className="aboutUSH">Mission</h1>
        <p className="aboutUSP">
          Start a new era of Screen Marketing. Establish immersive Experiential
          Events and activations. Integrate and create holistic Creative &
          Strategies.
        </p>
        <img
          className="md:w-[65px] w-[45px] md:ml-[275px] ml-[155px] mt-10 cursor-pointer"
          onClick={() => {
            const anchor = document.querySelector("#sec2");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          src="https://i.ibb.co/hyCKJD3/down-arrow.png"
          alt=""
        />
      </div>
      <div className="aboutUSDIV bg-[#e24d33]" id="sec2">
        <h1 className="aboutUSH">Vision</h1>
        <p className="aboutUSP">
          An Integrated Holistic Marketing Solution, becoming the most trusted
          and reliable entity in the media and communication industry.
        </p>{" "}
        <img
          className="md:w-[65px] w-[45px] md:ml-[275px] ml-[155px] mt-10 cursor-pointer"
          onClick={() => {
            const anchor = document.querySelector("#sec3");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          src="https://i.ibb.co/hyCKJD3/down-arrow.png"
          alt=""
        />
      </div>

      <div className="aboutUSDIV bg-[#208ab4]" id="sec3">
        <h1 className="aboutUSH">Values</h1>
        <p className="aboutUSP">
          We create unique journeys perfect for our audience so they can
          Experience stories that mesmerizes them, take them to places and
          excites the imagination.
        </p>{" "}
        <img
          className="md:w-[65px] w-[45px] md:ml-[275px] ml-[155px] mt-10 cursor-pointer"
          onClick={() => {
            const anchor = document.querySelector("#sec4");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          src="https://i.ibb.co/hyCKJD3/down-arrow.png"
          alt=""
        />
      </div>
      <div
        className="aboutUSDIV bg-[#fd7e14] grid place-content-center"
        id="sec4"
      >
        <h1 className="aboutUSH">Page 4</h1>
        <p className="aboutUSP">Page 4 content will be placed here</p>
        <img
          className="md:w-[65px] w-[45px] md:ml-[275px] ml-[155px] mt-10 rotate-180 cursor-pointer"
          onClick={() => {
            const anchor = document.querySelector("#sec1");
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
          }}
          src="https://i.ibb.co/hyCKJD3/down-arrow.png"
          alt=""
        />
        <Link className="btn btn-outline w-[128px]" to="/">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
