import React, { useState } from "react";

function PhoneBookForm(props) {
  const initContact = {
    id: null,
    userFirstname: "Coder",
    userLastname: "Byte",
    userPhone: "8885559999",
  };

  const [userState, setUserState] = useState(initContact);

  const handleUserChange = (e) => {
    setUserState({
      ...userState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !userState.userFirstname ||
      !userState.userLastname ||
      !userState.userPhone
    )
      return;
    props.addUser(userState);
    setUserState(initContact);
  };

  return (
    <form
      onSubmit={handleSubmit}
      /*  style={style.form.container} */
    >
      <label className="label">First name:</label>
      <br />
      <input
        className="userFirstname"
        name="userFirstname"
        type="text"
        placeholder={userState.userFirstname}
        onChange={handleUserChange}
      ></input>
      <br />
      <label className="label">Last name:</label>
      <br />
      <input
        /*</form>style={style.form.inputs}*/
        className="userFirstname"
        name="userLastname"
        type="text"
        placeholder={userState.userLastname}
        onChange={handleUserChange}
      ></input>
      <br />
      <label className="label">Phone:</label>
      <br />
      <input
        /* style={style.form.inputs}*/
        className="userFirstname"
        name="userPhone"
        type="text"
        placeholder={userState.userPhone}
        onChange={handleUserChange}
      ></input>
      <br />
      <input
        /*style={style.form.submitBtn}*/
        className="submitBtn"
        type="submit"
        value="Add User"
      />
    </form>
  );
}

export default PhoneBookForm;
