import React, { useEffect, useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import axios from "axios";

export default function UserManagement() {
  // state danh sách người dùng từ API
  const [users, setUsers] = useState([]);

  // state quản lý người dùng đang được chọn
  const [selectedUser, setSelectedUser] = useState(null);

  // Hàm call API
  const getUser = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "https://64a6ad13096b3f0fcc8042a4.mockapi.io/users",
      });
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Hàm nhận userId và tìm user tương ứng
  const getUserById = async (userId) => {
    try {
      const response = await axios({
        method: "GET",
        url: `https://64a6ad13096b3f0fcc8042a4.mockapi.io/users/${userId}`,
      });
      setSelectedUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // call getAPI
    getUser();
  }, []);
  return (
    <div className="container">
      <h1 className="text-center text-primary">UserManagement</h1>

      <UserForm onSubmitSuccess={getUser} selectedUser={selectedUser} />

      <UserList
        users={users}
        onDeleteSuccess={getUser}
        onSelectUser={getUserById}
      />
    </div>
  );
}
