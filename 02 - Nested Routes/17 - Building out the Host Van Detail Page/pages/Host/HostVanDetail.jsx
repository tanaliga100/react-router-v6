import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function HostVanDetail() {
  const [currentVan, setCurrentVan] = useState(null);
  const params = useParams();
  console.log(currentVan);

  React.useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans[0]));
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <img src={currentVan.imageUrl} alt="image" width={150} />
      <h2>{currentVan.name}</h2>
      <p>${currentVan.price}</p>
      <p>{currentVan.type}</p>
      <small>{currentVan.description}</small>
    </div>
  );
}
