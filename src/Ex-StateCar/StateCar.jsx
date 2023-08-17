import React, { useState } from "react";
import Icon from "./Icon";

export default function StateCar() {
  const [carColor, setCarColor] = useState("./img/black-car.jpg");
  const handleChangeCar = (type) => {
    switch (type) {
      case "black":
        setCarColor("./img/black-car.jpg");
        break;
      case "red":
        setCarColor("./img/red-car.jpg");
        break;
      case "silver":
        setCarColor("./img/silver-car.jpg");
        break;
      case "steel":
        setCarColor("./img/steel-car.jpg");
        break;
      default:
        break;
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <img src={carColor} alt="car" width="100%" />
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Color</div>
            <div className="card-body">
              <Icon onChangeCar={handleChangeCar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
