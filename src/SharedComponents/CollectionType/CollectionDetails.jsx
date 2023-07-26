import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
const CollectionDetails = ({ building }) => {
  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      display: "block",
      zIndex: "99",
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "black";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <div className="bg-black text-white p-6">
        <div className="flex justify-between items-center max-w-5xl mx-auto ">
          <h1 className="md:text-2xl text-[14px] font-semibold md:w-full w-[120px]">
            {building[0]?.name} COLLECTION
          </h1>
          <div className="flex gap-3">
            {building[0]?.location.map((loc) => (
              <Link
                key={building[0].name}
                className="btn md:btn-md btn-sm btn-outline text-white"
              >
                {loc}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div onClick={openModal} className="relative overflow-hidden group">
        <img
          className="cursor-pointer transition-all ease-in-out duration-1000 hover:scale-105 hover:transition-all hover:transform hover:duration-1000 hover:overflow-hidden"
          src={building[0]?.photo}
        />
        <img
          className="md:w-[75px] w-[55px] absolute md:top-1/2 md:left-1/2 top-1/4 left-[40%] ease-in-out transition-all duration-2000 cursor-pointer group-hover:animate-spin"
          src="https://i.imgur.com/KWGDb0G.png"
          alt=""
        />
      </div>
      <Modal
        className=""
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button
          className="absolute md:left-[85%] btn md:btn-md btn-sm btn-neutral"
          onClick={closeModal}
        >
          Close
        </button>
        <form className="md:w-[700px] md:h-[500px] w-full h-[290px] grid place-items-center p-0 m-0 -z-10 relative">
          <iframe
            className="w-full h-[70%] "
            src="https://www.youtube.com/embed/7EHnQ0VM4KY"
            title="Cinematic Real estate video tour example 4K | Laowa 12mm &amp; Sony A7III"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </form>
      </Modal>
    </div>
  );
};

export default CollectionDetails;
