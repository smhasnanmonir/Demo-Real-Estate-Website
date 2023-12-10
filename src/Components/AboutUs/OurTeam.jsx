import SharedFrontPage from "../Shared/SharedFrontPage";
import meeting from "../../../src/assets/team/meeting.jpg";
import team from "../../../src/assets/team/team.jpg";
import ceo from "../../../src/assets/team/ceo.jpg";
const OurTeam = () => {
  return (
    <div className="">
      <SharedFrontPage
        backgroundImg={meeting}
        heading1="About us"
        heading2="Our Team"
      ></SharedFrontPage>
      <div className="bgColorGray2 lg:px-[65px] md:px-[45px] px-[25px] lg:py-[50px]">
        <div className="">
          <h1 className="font-thin text-2xl py-[40px]">Managing Director</h1>
          <div className="">
            <div className="flex flex-col">
              <div className="mb-[25px] md:py-0 py-[15px]">
                <h1 className="md:text-2xl font-semibold">Asif Iqbal</h1>
                <p className="font-thin opacity-40">Managing Director</p>
                <div className="bg-slate-500 opacity-40 h-[1px] w-full"></div>
              </div>
              <p>
                Dear respected customers, first of all I would like to thank you
                for visiting our website/office and showing an interest in our
                company. I sincerely hope we are able to provide you with
                whatever information you seek. Your support gives us courage to
                deliver more quality land projects which will meet one’s doing
                and aspiration. From the very commencement we have been
                succeeded by placing our clients’ needs first. Their success has
                been our success, and our commitment to their needs, now and in
                the future, spans all levels of our organization. I had the
                pleasure of establishing this organization with the vision of
                execution the highest quality products and services to our dear
                clients. I proudly would like to say that; this organization
                takes great pride in everything that we do. The one’s who will
                select our project, will be blessed with serene natural view in
                accordance with a full-fledged modern city. Actually we are
                committed to provide you all kinds facilities that you need.
                Attention to detail, superior quality, maximization of resources
                and elegant aesthetics are just some of the standards we demand
                throughout our projects – from residential to commercial. When
                we build, the entire process from design to execution to its
                final delivery – we try to ensure that experience of living and
                working with Universe Group. truly which is incomparable. So,
                investment in this project will be trustworthy, full of
                possibilities and future secured. Therefore, I will expect you
                to be the pioneer to take hold of the golden opportunity. We
                maintain ownership and management of the projects we construct
                and acquire, because we consider real estate to be a long-term
                investment in the communities we serve. I am enough confident
                that investment in Universe Group. will give you a
                pollution-free, traffic jam free and joyful environment. Every
                professional at Universe Group is thoroughly trained and
                committed to brilliance. We aren’t just committed to excellence
                — we practice it every day and work hard to ensure that your
                experience is a pleasant and rewarding one. I cordially invite
                you to learn more about our company, our projects and our
                business philosophy throughout our website and by visiting our
                office. Best wishes.
              </p>
            </div>
          </div>
        </div>
        <div className="pb-[30px]">
          <h1 className="text-left md:py-[65px] py-[35px] md:text-3xl text-xl font-semibold">
            Team
          </h1>
          <img className="w-full h-full object-cover" src={team} alt="" />

          <h1 className="md:py-[35px] py-[35px] md:text-2xl text-xl font-semibold">
            Meet Stellar Team
          </h1>
          <p>
            At the heart of the Universe Group's success is our extraordinary
            team of dedicated professionals. With diverse expertise and a shared
            passion for real estate, we're more than just agents – we're the
            constellation that guides you through your property journey. What
            unites our team is a shared passion for delivering exceptional
            experiences. We celebrate the diversity of our talents and
            perspectives, recognizing that it's our collaborative spirit that
            propels us to new heights. Together, we are not just a group of
            individuals – we are a cohesive force dedicated to shaping the
            universe of real estate. When you choose the{" "}
            <span>Universe Group</span>, you're not just working with a company;
            you're partnering with a team that values your dreams, understands
            your needs, and navigates the complex terrain of real estate with
            finesse. From the initial consultation to the final signature, we're
            by your side, ensuring that your journey is smooth, informed, and
            rewarding.
          </p>
          <h1 className="md:py-[35px] py-[25px] md:text-2xl text-xl font-semibold">
            Connect with Our Universe
          </h1>
          <p>
            We invite you to get to know our team personally and experience the
            Universe Group difference. Whether you're seeking your dream home,
            exploring investment opportunities, or simply want to learn more
            about the world of real estate, we're here to guide you with
            expertise, empathy, and enthusiasm.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
