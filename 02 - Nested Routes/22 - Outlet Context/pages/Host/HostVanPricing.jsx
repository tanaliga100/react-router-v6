import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const data = useOutletContext();
  console.log(data);
  return (
    <>
      Type: <h3>{data.type}</h3>
      Name: <h5> {data.name}</h5>
      Pricing: <h5> {data.price}.00</h5>
    </>
  );
}
