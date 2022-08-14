import { useParams } from "react-router-dom";

function EditAd() {
  const {productId} = useParams();

  return (
  <h1>Edit ad</h1>
  );
}

export default EditAd;
