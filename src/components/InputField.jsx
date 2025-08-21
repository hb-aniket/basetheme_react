import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function InputField({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  autoComplete,
  required = false,
  inputClass = "",
  disableDefaultClass = false,
  showPasswordToggle = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const effectiveType =
    isPassword && showPasswordToggle
      ? showPassword
        ? "text"
        : "password"
      : type;

  const defaultInputClass =
    "block w-full rounded-md bg-white-100 px-3 py-1.5 text-base text-gray-200 outline outline-2 outline-grey-600 outline-offset-2 placeholder:text-gray-400 focus:outline-indigo-600 focus:outline-2 focus:outline-offset-2 sm:text-sm/6";

  const inputElement = (
    <input
      id={id}
      name={name}
      type={effectiveType}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
      required={required}
      placeholder={placeholder}
      className={
        disableDefaultClass ? inputClass : `${defaultInputClass} ${inputClass}`
      }
    />
  );

  return (
    <>
      {isPassword && showPasswordToggle ? (
        <div className="relative">
          {inputElement}
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-5 w-5" />
            ) : (
              <EyeIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      ) : (
        inputElement
      )}
    </>
  );
}

// <InputField
//                 id="email"
//                 name="email"
//                 type="email"
//                 label="Email"
//                 value={""}
//                 onChange={(value) => console.log(value)}
//                 placeholder="Enter email"
//                 inputClass=""
//                 disableDefaultClass={false}
//               />
