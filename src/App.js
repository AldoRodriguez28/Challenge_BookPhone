
import React, { useState } from "react";
import PhoneBookForm from "./components/PhoneBookFrom";
import InformationTable from "./components/InformationTable";

function App(props) {
  const usersObj = [];

  const [users, setUsers] = useState(usersObj);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  return (
    <section className="body-app">
      <PhoneBookForm addUser={addUser} />
      <InformationTable users={users} />
    </section>
  );
}
export default App;
// ReactDOM.render(<App />, document.getElementById("root"));
