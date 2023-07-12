// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";

const FormOrther = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const errors = {};
    if (firstName.trim() === "") {
      errors.firstName = "Please enter your first name";
    }
    if (lastName.trim() === "") {
      errors.lastName = "Please enter your last name";
    }
    if (address.trim() === "") {
      errors.address = "Please enter your address";
    }
    if (phone.trim() === "") {
      errors.phone = "Please enter a valid phone number";
    }
    setErrors(errors);
  }, [firstName, lastName, address, phone]);

  return (
    <div className="max-w-md mx-auto">
      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <label
            htmlFor="first-name"
            className="block text-gray-700 font-bold mb-2 text-sm"
          >
            First Name<span className="text-red-500">*</span>
          </label>
          <input
            id="first-name"
            type="text"
            className={`${
              errors.firstName ? "border-red-500" : ""
            } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-8 text-sm`}
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs italic">{errors.firstName}</p>
          )}
        </div>
        <div className="w-1/2 ml-2">
          <label
            htmlFor="last-name"
            className="block text-gray-700 font-bold mb-2 text-sm"
          >
            Last Name<span className="text-red-500">*</span>
          </label>
          <input
            id="last-name"
            type="text"
            className={`${
              errors.lastName ? "border-red-500" : ""
            } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-8 text-sm`}
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs italic">{errors.lastName}</p>
          )}
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="address"
          className="block text-gray-700 font-bold mb-2 text-sm"
        >
          Address<span className="text-red-500">*</span>
        </label>
        <textarea
          id="address"
          className={`${
            errors.address ? "border-red-500" : ""
          } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24 text-sm`}
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        ></textarea>
        {errors.address && (
          <p className="text-red-500 text-xs italic">{errors.address}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-gray-700 font-bold mb-2 text-sm"
        >
          Phone<span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="text"
          placeholder="000-000-000"
          className={`${
            errors.phone ? "border-red-500" : ""
          } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-8 text-sm`}
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs italic">{errors.phone}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="note"
          className="block text-gray-700 font-bold mb-2 text-sm"
        >
          Note
        </label>
        <textarea
          id="note"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24 text-sm"
          value={note}
          onChange={(event) => setNote(event.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default FormOrther;
