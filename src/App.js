import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import EditUserForm from "./forms/EditUserForm";
import NavBar from "./components/navBar/NavBar";

const App = () => {
  const usersData = [
    { id: 1, name: "Tania", username: "floppydisk",age:45,email:"test@gmail.com" },
   
  ];
  const initialFormState = { id: null, name: "", username: "",age:"",email:""};
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);

  };
 
  

  const deleteUser = id => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));

  };

  const editRow = user => {
     setEditing(true);

    setCurrentUser(user);

  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <NavBar />
     
      <div className="flex-row">
        <div className="flex-large">
          <div>
            <h2>{editing ? "Edit user" : "Add user"}</h2>
            <EditUserForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              updateUser={updateUser}
              addUser={addUser}
            />
          </div>
        </div>
        <div className="flex-large">
          <h2>Users list</h2>

          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
