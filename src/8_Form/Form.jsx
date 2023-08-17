import React, { useState } from "react";

export default function Form() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    address: "",
    favoriteColor: "",
  });

  const handleSubmit = (event) => {
    // Ngăn chặn hành vi mặc định khi submit form là reload lại page và đưa các giá trị lên url
    event.preventDefault();
    console.log(values);
  };
  const handleChange = (event) => {
    // Cần đặt thuộc tính năm của input nó khớp với tên thuộc tính trong object values
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleReset = (event) => {
    setValues({ username: "", email: "", address: "", favoriteColor: "" });
  };
  return (
    <div>
      <h1>Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            className="form-control"
            name="username"
            value={values.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            className="form-control"
            name="address"
            value={values.address}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Favorite Color</label>
          <select
            className="form-control"
            name="favoriteColor"
            value={values.favoriteColor}
            onChange={handleChange}
          >
            <option value="">---</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleReset}
        >
          Reset
        </button>
      </form>
    </div>
  );
}
