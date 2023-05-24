import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const data = useOutletContext();
  return (
    <>
      Type: <h3>{data.type}</h3>
      Name: <h5> {data.name}</h5>
      Description: <h5> {data.description}</h5>
    </>
  );
}
