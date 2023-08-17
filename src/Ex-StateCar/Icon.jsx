import React from "react";

export default function Icon({ onChangeCar }) {
  const icons = [
    {
      type: "black",
      name: "Crystal Black",
      desc: "Pearl",
      url: "./img/icon-black.jpg",
    },
    {
      type: "red",
      name: "Rallye Red",
      desc: "Metallic",
      url: "./img/icon-red.jpg",
    },
    {
      type: "silver",
      name: "Lunar Silver",
      desc: "Metallic",
      url: "./img/icon-silver.jpg",
    },
    {
      type: "steel",
      name: "Modern Steel",
      desc: "Metallic",
      url: "./img/icon-steel.jpg",
    },
  ];
  return icons.map((icon) => {
    return (
      <div className="card" onClick={() => onChangeCar(icon.type)}>
        <div className="card-body d-flex">
          <img src={icon.url} alt={icon.type} width="80px" />
          <div className="ms-3">
            <h3>{icon.name}</h3>
            <p>{icon.desc}</p>
          </div>
        </div>
      </div>
    );
  });
}
