const FloatingButton = () => {
  return (
    <div className="fixed z-40 md:mt-[55vh] mt-[65vh] flex flex-col gap-3 md:ml-[40px] ml-[20px]">
      <a href="tel:+8801799993555">
        <img
          className="md:w-[45px] w-[40px] cursor-pointer"
          src="https://i.ibb.co/C9g9Q4x/call.png"
          alt=""
        />
      </a>
      <img
        onClick={() =>
          window.open("https://wa.me/message/WIHZ4DQK2MGTO1", "_blank")
        }
        className="md:w-[45px] w-[40px] cursor-pointer "
        src="https://i.imgur.com/pVd9UVE.png"
        alt=""
      />
      <img
        onClick={() => window.open("http://m.me/673765092802261", "_blank")}
        className="md:w-[45px] w-[40px] cursor-pointer"
        src="https://i.imgur.com/E4rbV2f.png"
        alt=""
      />
    </div>
  );
};

export default FloatingButton;
