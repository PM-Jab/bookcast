interface LoginCardProps {
  isSignIn: (state: boolean) => void;
}

const SignUpForm = ({ isSignIn }: LoginCardProps) => {
  return (
    <div className="w-96 flex flex-col justify-center px-6 lg:px-8 bg-transparent border-1 backdrop-blur-sm rounded-lg shadow-md">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 mt-10">
          Create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
        <form className="space-y-8" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium">
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
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <p className="my-5 text-center text-sm/6 text-gray-500">
          Already registered?{" "}
          <a
            onClick={() => isSignIn(true)}
            className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
