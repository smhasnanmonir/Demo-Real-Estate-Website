import { useParams } from "react-router-dom";

const BussinessDetailsPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default BussinessDetailsPage;
