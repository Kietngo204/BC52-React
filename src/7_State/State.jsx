import React, { useState } from "react";

// hooks: useState

export default function State() {
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState("");
  const handleIncrease = () => {
    setCount(count + 1);
  };

  // State là Array
  const [colors, setColor] = useState(["red", "green", "blue"]);
  const handleAddColor = () => {
    const color = prompt("Nhập màu muốn thêm:");
    setColor([...colors, color]);
  };
  const handleRemoveColor = () => {
    const color = prompt("Nhập màu muốn xoá:");
    const newColors = colors.filter((item) => item !== color);
    setColor(newColors);
  };

  // State là Object
  const [user, setUser] = useState({ username: "", email: "" });
  const handleChangeUsername = () => {
    const username = prompt("Nhập username muốn đổi:");
    setUser({ ...user, username });
  };
  const handleChangeEmail = () => {
    const email = prompt("Nhập email muốn đổi:");
    setUser({ ...user, email });
  };
  return (
    <div>
      <h1>State</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>

      <hr />

      <p>Message: {message}</p>
      <button
        onClick={() => {
          const msg = prompt("Nhập vào message:");
          setMessage(msg);
        }}
      >
        Set Message
      </button>

      <hr />

      <p>Color: {colors.join(", ")}</p>
      <button onClick={handleAddColor}>Add color</button>
      <button onClick={handleRemoveColor}>Remove color</button>

      <hr />
      <p>
        Username: {user.username} - Email: {user.email}
      </p>
      <button onClick={handleChangeUsername}>Change Username</button>
      <button onClick={handleChangeEmail}>Change Email</button>
    </div>
  );
}
