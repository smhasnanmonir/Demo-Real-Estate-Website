import mediaPhoto from "../../assets/Media/media.jpg";
const CoverPhoto = ({ datas }) => {
  return (
    <div className="relative">
      <img
        className="w-full h-[450px] object-cover brightness-50"
        src={mediaPhoto}
        alt=""
      />
      {datas ? (
        <p className="absolute inset-0 flex items-center justify-center text-4xl text-white">
          {datas}
        </p>
      ) : (
        <p className="absolute inset-0 flex items-center justify-center text-4xl text-white">
          Media
        </p>
      )}
    </div>
  );
};

export default CoverPhoto;
