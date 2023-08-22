import React, { forwardRef, useState } from "react";

function SampleForm({ onSubmit }, ref) {
  const [values, setValues] = useState({ email: "", password: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <div>
      <h1>SampleForm</h1>
      <form
        ref={ref}
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(values);
        }}
      >
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            value={values.email}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            value={values.password}
            name="password"
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default forwardRef(SampleForm);
