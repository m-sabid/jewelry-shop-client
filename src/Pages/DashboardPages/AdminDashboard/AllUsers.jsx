import { useQuery } from "@tanstack/react-query";
import React, { useState, useEffect, createContext, useContext } from "react";
import { FaUserShield, FaChalkboardTeacher } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { base_url } from "../../../Components/Shared/urls";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get(`/users`);
    return res.data;
  });

  const updateRole = (userId, role, userName) => {
    fetch(`${base_url}/user/role/${userId}`, {
      method: "PATCH",
      body: JSON.stringify({ role }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `${role}`,
            text: `${userName} is now an ${role}.`,
          });
        }
      });
  };

  const makeAdmin = (userId, userName) => {
    updateRole(userId, "admin", userName);
  };

  const makeClint = (userId, userName) => {
    updateRole(userId, "clint", userName);
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <div>
      <h2 className="my-10 text-center text-3xl font-bold border-b-2 pb-3">
        All Users - {users.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-3/5 mx-auto font-bold">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="flex gap-2 justify-center items-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover">
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className="flex gap-2 justify-center items-center">
                  {user.role === "admin" ? (
                    <span className="text-green-600">Admin</span>
                  ) : (
                    <button
                      onClick={() => makeAdmin(user._id, user?.name)}
                      title="Make Admin"
                      className="text-green-600 bg-gray-200 text-2xl p-2 rounded-full cursor-pointer"
                    >
                      <FaUserShield />
                    </button>
                  )}
                  {user.role === "clint" ? (
                    <span className="text-green-600">Clint</span>
                  ) : (
                    <div className="flex gap-4 justify-center items-center">
                      <button
                        onClick={() => makeClint(user._id, user?.name)}
                        title="Make Clint"
                        className="text-green-600 bg-gray-200 text-2xl p-2 rounded-full cursor-pointer"
                      >
                        <FaChalkboardTeacher />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;