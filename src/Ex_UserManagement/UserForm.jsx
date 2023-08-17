import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserForm({ onSubmitSuccess, selectedUser }) {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    address: "",
    phone: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    setValues({ ...values, [name]: value });
  };
  const handleSubmit = async (event) => {
    // Ngăn chặn hành vi mặc định khi submit form là reload lại page và đưa các giá trị lên url
    event.preventDefault();

    const { id, ...payload } = values;

    const options = id
      ? {
          method: "PUT",
          url: `https://64a6ad13096b3f0fcc8042a4.mockapi.io/users/${id}`,
          data: payload,
        }
      : {
          method: "POST",
          url: `https://64a6ad13096b3f0fcc8042a4.mockapi.io/users/${id}`,
          data: payload,
        };

    try {
      await axios(options);
      // Sau khi thêm thành công
      onSubmitSuccess();
    } catch (error) {
      console.log(error);
    }
    resetForm();
  };
  // hàm ResetForm
  const resetForm = () => {
    setValues({
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: "",
      address: "",
      phone: "",
    });
  };
  useEffect(() => {
    // Kiểm tra nếu selectedUser là null => không làm gì hết
    if (!selectedUser) {
      return;
    }
    setValues({ ...selectedUser });
  }, [selectedUser]);
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="form-control"
          value={values.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="form-control"
          value={values.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="form-control"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dateOfBirth" className="form-label">
          Date of Birth
        </label>
        <input
          type="text"
          id="dateOfBirth"
          name="dateOfBirth"
          className="form-control"
          value={values.dateOfBirth}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          className="form-control"
          value={values.address}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          className="form-control"
          value={values.phone}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
