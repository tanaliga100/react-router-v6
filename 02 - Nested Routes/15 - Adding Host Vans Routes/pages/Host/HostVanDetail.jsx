import React from "react";
import { useParams } from "react-router-dom";

const HostVanDetail = () => {
  const params = useParams();
  console.log(params);

  return <h1>HostVanDetail</h1>;
};

export default HostVanDetail;
