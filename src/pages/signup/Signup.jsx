import React from 'react'
import InputField from '../../components/InputField';

const Signup = () => {
  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <InputField
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  // value={""}
                  // onChange={(value) => console.log(value)}
                  placeholder=""
                  inputClass=""
                  disableDefaultClass={false}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <InputField
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  // value={""}
                  // onChange={(value) => console.log(value)}
                  placeholder=""
                  inputClass=""
                  disableDefaultClass={false}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
              <div className="mt-2">
                <InputField
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  // value={""}
                  // onChange={(value) => console.log(value)}
                  placeholder=""
                  inputClass=""
                  disableDefaultClass={false}
                  showPasswordToggle={true}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Confirm Password
              </label>
              <div className="mt-2">
                <InputField
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  // value={""}
                  // onChange={(value) => console.log(value)}
                  placeholder=""
                  inputClass=""
                  disableDefaultClass={false}
                  showPasswordToggle={true}
                />

              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account?{" "}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup