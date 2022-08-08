import { useParams } from "react-router-dom";

function Details() {
  const {productId} = useParams();

  return (
    <h1>Details page {productId}</h1>
  );
}

export default Details;
