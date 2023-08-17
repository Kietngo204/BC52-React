/* eslint-disable no-unused-vars */
import React from "react";

function UserGreeting() {
  let unreadMessage = 5;

  return (
    <>
      <div>Welcome back</div>
      {unreadMessage > 0 && <p>You have {unreadMessage} unread message</p>}
    </>
  );
}

function GuestGreeting() {
  return <div>Please Login</div>;
}

export default function ConditionalRendering() {
  let isLoggedIn = true;
  let shouldDisplay = true;
  let unreadMessage = 5;

  if (!shouldDisplay) {
    return undefined;
  }

  let greeting;

  if (isLoggedIn) {
    greeting = <div>Welcome back</div>;
  } else {
    greeting = <div>Please login</div>;
  }
  return (
    <div>
      <h1>ConditionalRendering</h1>

      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
    </div>
  );
}
