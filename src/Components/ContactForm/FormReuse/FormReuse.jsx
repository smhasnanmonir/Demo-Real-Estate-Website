import { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
const FormReuse = () => {
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
  );
};

export default FormReuse;
