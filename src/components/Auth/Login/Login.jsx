import React, { useState } from "react";
import { Link } from "react-router-dom";

const DefaultFormData = {
  username: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(DefaultFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="w-11/12 m-auto bg-gray-100 mt-8 mb-6 rounded-xl p-6">
      <div>
        <h1 className="text-center text-[20px] font-bold mb-6">Đăng nhập</h1>
        <hr />
      </div>
      <form onSubmit={handleSubmit} className="w-1/2 m-auto mt-10">
        <div className="grid grid-cols-1 gap-10">
          <div>
            <label
              htmlFor="username"
              className="block mb-2 font-medium text-gray-600"
            >
              Username
            </label>
            <input
              onChange={handleChange}
              value={formData.username}
              name="username"
              type="text"
              id="username"
              placeholder="Type here..."
              className="input input-bordered input-lg w-full py-3 px-4 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300 focus:shadow-outline-blue"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 font-medium text-gray-600"
            >
              Password
            </label>
            <input
              onChange={handleChange}
              value={formData.password}
              type="password"
              id="password"
              name="password"
              placeholder="Type here..."
              className="input input-bordered input-lg w-full py-3 px-4 rounded-md border-gray-300 focus:border-blue-500 focus:outline-none transition-colors duration-300 focus:shadow-outline-blue"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 mt-10 mb-10">
          <button class="rounded-lg px-4 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">
            Đăng nhập
          </button>
        </div>
        <div className="flex justify-between text-xl text-blue-500">
          <div className="cursor-pointer">
            Quên mật khẩu ? <hr />
          </div>
          <div className="cursor-pointer">
            <Link to={"/register"}>
              <p className="text-blue-500">
                Đăng ký tài khoản ở đây... <hr />
              </p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
