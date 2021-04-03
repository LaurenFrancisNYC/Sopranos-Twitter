import React from "react";
import Nav from "../layouts/Nav";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <Nav currentUser={currentUser} handleLogout={handleLogout} />
      {props.children}
    </div>
  );
}
