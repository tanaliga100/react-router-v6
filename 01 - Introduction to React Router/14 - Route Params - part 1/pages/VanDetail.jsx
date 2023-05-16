import React from "react";
import { useParams } from "react-router-dom";

const VanDetail = () => {
  const params = useParams();
  console.log({ params });
  return <div>VanDetail</div>;
};

export default VanDetail;
