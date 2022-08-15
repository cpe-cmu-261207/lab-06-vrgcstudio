import React, { useState } from "react";
import axios from "axios";
import UserTemplate from "./components/usertemplate";

export default function Home() {
  const [usersize, setUserSize] = useState(1);
  const [users, setUsers] = useState([]);

  const genUsers = async () => {
    if (usersize <= 0) {
      alert("Invalid number of user");
      return;
    }
    const resp = await axios.get(
      `https://randomuser.me/api/?results=${usersize}`
    );

    const importedUsers = [];
    for (const user of resp.data.results) {
      importedUsers.push({
        img: user.picture.large,
        name: user.name.first + " " + user.name.last,
        email: user.email,
        address:
          user.location.city +
          " " +
          user.location.state +
          " " +
          user.location.country +
          " " +
          user.location.postcode,
      });
    }
    setUsers(importedUsers);
    console.log(users);
  };

  return (
    <div style={{ maxWidth: "700px" }} className="mx-auto">
      {/* App Header */}
      <p className="display-4 text-center fst-italic m-4">
        Multiple Users Generator
      </p>

      {/* Input Section */}
      <div className="d-flex justify-content-center align-items-center fs-5 gap-2">
        Number of User(s)
        <input
          className="form-control text-center"
          style={{ maxWidth: "100px" }}
          type="number"
          onChange={(e) => setUserSize(e.target.value)}
        />
        <button className="btn btn-dark" onClick={() => genUsers()}>
          Generate
        </button>
      </div>

      <div>
        {users.map((user) => (
          <UserTemplate
            img={user.img}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>

      {/* made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Rapepol Nanan 640610664
      </p>
    </div>
  );
}
