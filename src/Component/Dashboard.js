
import React, { useEffect, useState } from "react";
import { getUsers } from "../API/Users";
  
const Dashboard = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers()
      .then(users => {
        console.log(users.result)
        setUsers(users.result);
      })
      .catch(err => {
        console.error(err);
      });
  },[]);
 
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {users.map(user=>(
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
  
export default Dashboard;