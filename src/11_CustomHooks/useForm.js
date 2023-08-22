import { useState } from "react";

export default function useForm(defaultValues) {
  const [values, setValues] = useState(defaultValues);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  return { values, handleChange };
}
