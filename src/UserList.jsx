import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setListOfUsers(res.data))
        .catch(err => console.log(err));
    };
    fetchData();
  }, []);
  console.log(listOfUsers);

  return (
    <div className="class">
      <h1>List Of Users</h1>
      <ul className="ul">
        {listOfUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
