import { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

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
    <div className="bgColorGray2 py-5">
      <h1 className="text-[45px] text-center py-[25px]">Contact Us</h1>
      <div className="md:px-0 px-[25px] mb-14 flex md:flex-row flex-col md:gap-[55px] gap-[35px] justify-center items-center">
        <div className="grid place-items-center w-full">
          <form
            id="form"
            ref={form}
            onSubmit={sendEmail}
            className="md:w-1/2 w-3/4"
          >
            <div className="field w-full">
              <label>Name</label>
              <input
                placeholder="Your Name"
                className="form-group w-full p-2"
                type="text"
                name="from_name"
                id="from_name"
              />
            </div>
            <div className="field">
              <label>Number</label>
              <input
                placeholder="Your Phone Number"
                className="form-group w-full p-2"
                type="text"
                name="number"
                id="number"
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                placeholder="Your Email Address"
                className="form-group w-full p-2"
                type="text"
                name="reply_to"
                id="reply_to"
              />
            </div>
            <div className="field">
              <label>Message</label>
              <input
                placeholder="Your Message"
                className="form-group w-full py-[35px] px-2"
                type="text"
                name="message"
                id="message"
              />
            </div>

            <input
              className="mt-3 btn bg-black text-white hover:bg-slate-400 hover:text-black"
              type="submit"
              id="button"
              value="Send Email"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
