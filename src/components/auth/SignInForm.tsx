"use client";
import { useState } from "react";
import { login } from "../../../api/user";
import { useUser } from "../../../context/userContext";
import { getCookie } from "../../../api/user";
interface LoginCardProps {
  isSignIn: (state: boolean) => void;
  isLoginSuccess: (isSuccess: boolean) => void;
}

const SignInForm = ({ isSignIn, isLoginSuccess }: LoginCardProps) => {
  const { setUserToken } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleDisable = () => {
    if (username.length === 0 || password.length === 0) {
      return true;
    }
    return false;
  };
  const handleLogin = async () => {
    // Handle login logic here
    console.log("Login clicked");
    await login(username, password);
    const token = await getCookie();
    console.log("User token: ", token);
    if (token !== "") {
      console.log("Login successful");
      // Redirect to home page or do something else
      isLoginSuccess(true);
    }
  };
  return (
    <div className="w-96 flex flex-col justify-center px-6 lg:px-8 bg-transparent border-1 backdrop-blur-sm rounded-lg shadow-md">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 mt-10">
          Log in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-8"
          action="#"
          method="POST"
          onSubmit={async (e) => {
            e.preventDefault();
            await handleLogin();
          }}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                placeholder="Enter your email address"
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full rounded-lg bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500 text-center cursor-pointer"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full rounded-lg bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={`flex w-full justify-center rounded-md ${
                handleDisable() ? "bg-indigo-500" : "bg-indigo-600"
              } px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="my-5 text-center text-sm/6 text-gray-500">
          Don't have an account?{" "}
          <a
            onClick={() => isSignIn(false)}
            className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
