import React from "react";
import { Link } from "react-router-dom";

const ListUser = () => {
  const data = [
    {
      id: 1,
      fullname: "Thiều Trần Cương",
      username: "cuongthieu",
      email: "nnheo@example.com",
      phone: "123456789",
      address: "Ha Nam",
      role: "1",
      status: "0",
    },
    {
      id: 2,
      fullname: "Thiều Trần Cương",
      username: "cuongthieu",
      email: "nnheo@example.com",
      phone: "123456789",
      address: "Ha Nam",
      role: "1",
      status: "0",
    },
    {
      id: 3,
      fullname: "Thiều Trần Cương",
      username: "cuongthieu",
      email: "nnheo@example.com",
      phone: "123456789",
      address: "Ha Nam",
      role: "1",
      status: "0",
    },
  ];
  return (
    <div class="container mx-auto px-4 sm:px-8">
      <div class="py-8">
        <div>
          <h2 class="text-[25px] font-semibold">List User</h2>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-2xl font-semibold text-gray-700 uppercase tracking-wider">
                    Fulname
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-2xl font-semibold text-gray-700 uppercase tracking-wider">
                    Username
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-2xl font-semibold text-gray-700 uppercase tracking-wider">
                    Email
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-2xl font-semibold text-gray-700 uppercase tracking-wider">
                    Phone
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-2xl font-semibold text-gray-700 uppercase tracking-wider">
                    Address
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-2xl font-semibold text-gray-700 uppercase tracking-wider">
                    Role
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-2xl font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">
                        Thiều Trần Cương
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">cuongthieu</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">
                        cuongthieu@gmail.com
                      </p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">0123456789</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">Hà Nam</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">1</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl">
                      <p class="text-gray-900 whitespace-no-wrap">0</p>
                    </td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-xl text-right">
                      <div class="dropdown dropdown-left dropdown-end">
                        <label tabindex="0" class="btn m-1 btn-outline">
                          ...
                        </label>
                        <ul
                          tabindex="0"
                          class="dropdown-content text-lg menu p-2 shadow bg-base-100 rounded-box w-52"
                          v-if="isOpen"
                        >
                          <li>
                            <Link to={`/admin/edituser/${item.id}`}>
                              <p>Sửa</p>
                            </Link>
                          </li>

                          <li>
                            <p>Xoá</p>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListUser;
