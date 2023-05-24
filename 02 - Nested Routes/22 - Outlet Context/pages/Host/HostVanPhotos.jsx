import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const data = useOutletContext();
  return (
    <>
      Type: <h3>{data.type}</h3>
      Name: <h5> {data.name}</h5>
      <h1>Photos</h1>
      <img src={data.imageUrl} alt="photos" width={400} height={200} />
    </>
  );
}
