import React from "react";

export default function UserProfile({
  name = "unknown",
  age = 0,
  isAdmin = false,
}) {
  return (
    <div>
      <h3>
        Name: {name}
        {isAdmin && <span>(Admin)</span>}
      </h3>
      <p>Age: {age}</p>
    </div>
  );
}
