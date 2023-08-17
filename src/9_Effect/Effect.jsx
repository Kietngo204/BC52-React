import React, { useEffect, useState } from "react";
import axios from "axios";
import Children from "./Children";
export default function Effect() {
  const [user, setUser] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    // axios({
    //   method: "Get",
    //   url: "https://64a6ad14096b3f0fcc8042cd.mockapi.io/users",
    //   params: {
    //     name: searchTerm || undefined,
    //   },
    // })
    //   .then((response) => {
    //     setUser(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    const getUsers = async () => {
      try {
        const response = await axios({
          method: "Get",
          url: "https://64a6ad14096b3f0fcc8042cd.mockapi.io/users",
          params: {
            name: searchTerm || undefined,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, [searchTerm]);

  const handleSetUsername = () => {
    const value = prompt("Input username");
    setUsername(value);
  };
  return (
    <div>
      <h1>Effect</h1>

      <input
        placeholder="Search user"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <ul>
        {user.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>

      <button onClick={handleSetUsername}>Set Username</button>
      {username && <Children username={username} />}
    </div>
  );
}
