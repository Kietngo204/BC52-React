import axios from "axios";
import React from "react";

export default function UserList({ users, onDeleteSuccess, onSelectUser }) {
  // delete user
  const handleDelete = async (userId) => {
    try {
      await axios({
        method: "DELETE",
        url: `https://64a6ad13096b3f0fcc8042a4.mockapi.io/users/${userId}`,
      });
      onDeleteSuccess();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-3">
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.dateOfBirth}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
                <td>
                  <button
                    className="btn btn-success me-2"
                    onClick={() => {
                      onSelectUser(user.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(user.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
