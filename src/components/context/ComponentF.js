import React from "react";
import { UserConsumer } from "../../context/userContext";

export default function ComponentF() {
  return (
    <UserConsumer>
      {(username) => (
        <div>
          <h2>Component F</h2>
          <p>Hello {username}</p>
        </div>
      )}
    </UserConsumer>
  );
}
