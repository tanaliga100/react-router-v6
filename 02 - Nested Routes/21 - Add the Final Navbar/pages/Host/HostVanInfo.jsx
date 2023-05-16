import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const { currentVan } = useOutletContext();
  return (
    <section>
      <h3>{currentVan.name}</h3>
      <h4>{currentVan.type}</h4>
      <h4>{currentVan.description}</h4>
      <h4>Visibility: public</h4>
    </section>
  );
}
