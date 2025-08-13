import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const addUser = () => {
    fetch(`/api/users?name=${encodeURIComponent(name)}`, { method: "POST" })
      .then(res => res.json())
      .then(data => setUsers(data));
    setName("");
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((u, i) => <li key={i}>{u}</li>)}
      </ul>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={addUser}>Add User</button>
    </div>
  );
}

export default App;