const AboutUs = () => {
  return (
    <div className="h-full carousel carousel-vertical rounded-box">
      <div className="carousel-item h-[100vh]">
        <div className="aboutUSDIV bg-[#fd7e14]" id="sec1">
          <h1 className="aboutUSH">Mission</h1>
          <p className="aboutUSP">
            Start a new era of Screen Marketing. Establish immersive
            Experiential Events and activations. Integrate and create holistic
            Creative & Strategies.
          </p>
          {/* <img
            className="md:w-[65px] w-[45px] md:ml-[275px] ml-[155px] mt-10 cursor-pointer"
            onClick={() => {
              const anchor = document.querySelector("#sec2");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            src="https://i.ibb.co/hyCKJD3/down-arrow.png"
            alt=""
          /> */}
        </div>
      </div>
      <div className="carousel-item h-full">
        <div className="aboutUSDIV bg-[#fd7e14]" id="sec1">
          <h1 className="aboutUSH">Mission</h1>
          <p className="aboutUSP">
            Start a new era of Screen Marketing. Establish immersive
            Experiential Events and activations. Integrate and create holistic
            Creative & Strategies.
          </p>
          {/* <img
            className="md:w-[65px] w-[45px] md:ml-[275px] ml-[155px] mt-10 cursor-pointer"
            onClick={() => {
              const anchor = document.querySelector("#sec2");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            src="https://i.ibb.co/hyCKJD3/down-arrow.png"
            alt=""
          /> */}
        </div>
      </div>
      <div className="carousel-item h-full">
        <div className="aboutUSDIV bg-[#fd7e14]" id="sec1">
          <h1 className="aboutUSH">Mission</h1>
          <p className="aboutUSP">
            Start a new era of Screen Marketing. Establish immersive
            Experiential Events and activations. Integrate and create holistic
            Creative & Strategies.
          </p>
          {/* <img
            className="md:w-[65px] w-[45px] md:ml-[275px] ml-[155px] mt-10 cursor-pointer"
            onClick={() => {
              const anchor = document.querySelector("#sec2");
              anchor.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            src="https://i.ibb.co/hyCKJD3/down-arrow.png"
            alt=""
          /> */}
        </div>
      </div>
      <div className="carousel-item h-full">
        <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" />
      </div>
      <div className="carousel-item h-full">
        <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
      </div>
      <div className="carousel-item h-full">
        <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" />
      </div>
      <div className="carousel-item h-full">
        <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
      </div>
    </div>
  );
};

export default AboutUs;
