import { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import FloatingButton from "../../Home/FloatingButton/FloatingButton";
import "./ContactForm.css";
import SharedFrontPage from "../Shared/SharedFrontPage";
import contactUS from "../../../src/assets/y0Xuk6j.jpg";
const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Send Email?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, send it!",
    }).then((result) => {
      if (result.isConfirmed) {
        emailjs
          .sendForm(
            `${import.meta.env.VITE_MY_SERVICE_ID}`,
            `${import.meta.env.VITE_MY_TEMPLATE_ID}`,
            form.current,
            `${import.meta.env.VITE_MY_PUBLIC_KEY}`
          )
          .then(
            (result) => {
              Swal.fire("Email Sent Successfully! We Will contact you soon");
              console.log(result);
            },
            (error) => {
              console.log(error.text);
            }
          );
      }
    });
  };
  return (
    <>
      <FloatingButton></FloatingButton>
      <SharedFrontPage
        backgroundImg="https://images.unsplash.com/photo-1542361345-89e58247f2d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        heading1="Contact"
        heading2="GET IN TOUCH"
      ></SharedFrontPage>
      <div className="grid md:grid-cols-2 grid-cols-1 bg-white text-black md:gap-[50px]">
        <div className="">
          <img className="w-full h-full object-cover" src={contactUS} alt="" />
        </div>
        <div className="flex flex-col gap-4 justify-center md:w-[310px] px-[35px] md:p-[35px] py-[45px]">
          <h1 className="md:text-2xl">Contact Us</h1>
          <p className="md:text-3xl text-xl font-semibold">Universe Group</p>
          <p>
            Orchid Plaza, Level- 4, Plot- 2, Road- 28 (15 New), Dhanmondi,
            Dhaka- 1209
          </p>
          <p>Hotlines: 01799993555, 01799993510, 01799993544</p>
          <p>Email: shah.migbd@gmail.com</p>
        </div>
      </div>
      <div className="bg-[#78909C] px-[25px] md:py-5 md:pl-[150px] py-[25px] text-white">
        <h1 className="text-[45px] py-[25px] ">Write to us</h1>
        <div className="md:px-0  mb-14 flex md:flex-row flex-col md:gap-[55px] gap-[35px] justify-center items-center">
          <div className="grid w-full">
            <form
              id="form"
              ref={form}
              onSubmit={sendEmail}
              className="md:w-1/2 w-3/4"
            >
              <div className="field mb-[12px]">
                <label className="text-white">Name</label>
                <input
                  placeholder="Your Name"
                  className="form-group w-full py-2 bg-transparent border-b-[1px] text-white focus:outline-none"
                  type="text"
                  name="from_name"
                  id="from_name"
                />
              </div>
              <div className="field mb-[12px]">
                <label>Number</label>
                <input
                  placeholder="Your Phone Number"
                  className="form-group w-full py-2 bg-transparent border-b-[1px] text-white focus:outline-none"
                  type="text"
                  name="number"
                  id="number"
                />
              </div>
              <div className="field mb-[12px]">
                <label>Email</label>
                <input
                  placeholder="Your Email Address"
                  className="form-group w-full py-2 bg-transparent border-b-[1px] text-white focus:outline-none"
                  type="text"
                  name="reply_to"
                  id="reply_to"
                />
              </div>
              <div className="field mb-[12px]">
                <label>Message</label>
                <input
                  placeholder="Your Message"
                  className="form-group w-full py-[35px] bg-transparent border-b-[1px] text-white focus:outline-none"
                  type="text"
                  name="message"
                  id="message"
                />
              </div>

              <input
                className="mt-3 btn bg-black text-white hover:bg-green-400 hover:text-black border-none"
                type="submit"
                id="button"
                value="Send Email"
              />
            </form>
          </div>
        </div>
      </div>
      <iframe
        className="w-full h-[350px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.768112786341!2d90.37282567521115!3d23.755647178666756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8acb764206b%3A0x862681db4ad9b91c!2sOrchid%20Plaza!5e0!3m2!1sen!2ssg!4v1691936673523!5m2!1sen!2ssg"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </>
  );
};

export default ContactForm;
