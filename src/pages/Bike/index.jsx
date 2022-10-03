import { useParams } from "react-router-dom";

const Bike = () => {
  const params = useParams();

  return <h1>{params.id}</h1>;
};

export default Bike;
