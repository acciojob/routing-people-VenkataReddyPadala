import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function UserList() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUserList(data));
  }, []);
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            {<Link to={`/users/${user.id}`}>{user.name}</Link>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
