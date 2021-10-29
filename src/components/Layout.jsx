import React from "react";

const Layout = (props) => {
  return (
    <div className="layout">
      <h1 className="titulo">PhoneBook Challenge</h1>
      {props.children}
    </div>
  );
};

export default Layout;
