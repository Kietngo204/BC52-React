import React from "react";

export default function Card({ heading, children }) {
  return (
    <div className="card">
      <div className="card-header">{heading}</div>
      <div className="card-body">{children}</div>
    </div>
  );
}
