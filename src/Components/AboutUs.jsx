import SharedFrontPage from "./Shared/SharedFrontPage";

const AboutUs = () => {
  return (
    <div className="">
      <SharedFrontPage
        backgroundImg="https://drive.google.com/uc?export=download&id=15C3u8Mru95OQPN-cX5Mzc0J3RBJAjWgP"
        heading1="About Us"
        heading2="Our Story"
      ></SharedFrontPage>
      <div>
        <img src="https://drive.google.com/uc?export=download&id=1Q-mfApRVlEmFdUSAgeFrVVBSA5XiBmVM" />
        <div>
          <h1>Background</h1>
          <div>
            <h1 className="text-xl font-semibold">2016 - The Genesis</h1>
            <p>
              In a small office space, a group of passionate individuals united
              by their love for real estate embarked on a mission to create a
              company that redefines the way people experience property
              solutions. Our first transactions were humble, but the seeds of
              our ambition were sown.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold">
              2017 - Shaping Constellations
            </h1>
            <p>
              As we expanded our horizons, we were driven by a desire to connect
              people with their dream homes. Our team of experts, armed with
              deep industry knowledge, began crafting constellations of
              properties that spanned a spectrum of lifestyles, from cozy
              residences to opulent estates.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold">2019 - Guiding Stars</h1>
            <p>
              The Universe Group's guiding stars are our clients. We embraced a
              client-centric approach, knowing that each journey is unique. We
              witnessed dreams taking shape as keys were handed over and spaces
              transformed into homes. These moments have been our guiding light,
              igniting our passion to create stellar experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
