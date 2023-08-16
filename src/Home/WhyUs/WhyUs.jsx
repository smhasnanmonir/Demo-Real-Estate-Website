import "./WhyUs.css";
import bg from "../../../src/assets/SimpleShiny.svg";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useState } from "react";
import FormReuse from "../../Components/ContactForm/FormReuse/FormReuse";
const WhyUs = () => {
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
    <div className="bg-whyUS md:px-[250px] md:py-[110px] px-[50px] py-[90px] grid place-items-center space-y-3 mt-[50px]">
      <h1 className="text-center text-3xl font-bold text-white">
        Like What You See?
      </h1>
      <h1 className="text-center text-3xl font-bold text-white">
        {" "}
        Get us Now!
      </h1>
      <button className="button-contact" onClick={openModal}>
        Contact us
      </button>
      <Modal
        className=""
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button
          className="absolute md:left-[85%] btn-neutral"
          onClick={closeModal}
        >
          X
        </button>
        <form className="lg:w-[750px] h-[550px] grid place-items-center m-0 p-0 -z-10 relative overflow-hidden">
          <div className="w-full">
            <FormReuse></FormReuse>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default WhyUs;
