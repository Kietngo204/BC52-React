import React from "react";

// React:
// Truyền vào hàm: button onClick={handleClick}>Click</button> (Đúng)
// Gọi hàm: button onClick={handleClick()}>Click</button> (Sai)

export default function Events() {
  const handleClick = () => {
    alert("clicked");
  };

  const handleShowMessage = (name) => {
    alert(`Hello ${name}`);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>Events</h1>

      <button onClick={handleClick}>Click</button>
      <button
        onClick={() => {
          alert("clicked");
        }}
      >
        Click
      </button>

      <button
        onClick={() => {
          handleShowMessage("Jack");
        }}
      >
        Show Message
      </button>
      <br />
      <br />

      <input type="text" onChange={handleChange} />
    </div>
  );
}
