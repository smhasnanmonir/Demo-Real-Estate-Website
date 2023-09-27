import FloatingButton from "../../Home/FloatingButton/FloatingButton";
import "./ContactForm.css";
import SharedFrontPage from "../Shared/SharedFrontPage";
import contactUS from "../../../src/assets/y0Xuk6j.jpg";
import FormReuse from "./FormReuse/FormReuse";
const ContactForm = () => {
  return (
    <>
      <FloatingButton></FloatingButton>
      <SharedFrontPage
        backgroundImg="https://firebasestorage.googleapis.com/v0/b/sm-realestate-project.appspot.com/o/grant-ritchie-FBkrQhnLQoY-unsplash.jpg?alt=media&token=edceb7c5-d050-4a20-8bc8-52af29220f5c"
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
      <FormReuse></FormReuse>
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
