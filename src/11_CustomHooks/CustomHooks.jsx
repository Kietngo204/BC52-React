import useCount from "./useCount";
import useForm from "./useForm";

export default function CustomHooks() {
  const { count, handleIncrease, handleDecrease } = useCount();
  const { values, handleChange } = useForm({ email: "", password: "" });
  return (
    <div>
      <h1>CustomHooks</h1>
      <hr />
      <p>Count:{count}</p>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <hr />
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(values);
        }}
      >
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            value={values.email}
            name="email"
            className="form-control"
            onChange={handleChange}
          />
          <label className="form-label">Password</label>
          <input
            type="password"
            value={values.password}
            name="password"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}
