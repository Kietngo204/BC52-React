import React, { useEffect, useRef, useState } from "react";
import SampleForm from "./SampleForm";

export default function Ref() {
  const inputRef = useRef();
  const inputFileRef = useRef();
  const formRef = useRef();
  const timer = useRef();

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleChangeSearchTerm = (event) => {
    setSearchTerm(event.target.value);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      alert(event.target.value);
    }, 300);

    clearTimeout(timer);
  };
  return (
    <div>
      <h1>Ref</h1>

      <hr />

      <input type="text" placeholder="Message" ref={inputRef} />

      <hr />

      <input type="file" hidden ref={inputFileRef} />
      <button
        onClick={() => {
          inputFileRef.current.click();
        }}
      >
        Upload file
      </button>

      <hr />

      <SampleForm ref={formRef} onSubmit={handleSubmit} />

      <button
        className="btn btn-primary"
        onClick={() => {
          formRef.current.requestSubmit();
        }}
      >
        Submit
      </button>

      <hr />

      <div className="mb-3">
        <label className="form-label">Demo debounce</label>
        <input
          type="text"
          className="form-control"
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      </div>
    </div>
  );
}
