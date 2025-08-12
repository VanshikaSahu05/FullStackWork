import React, { useState } from "react";

export default function App() {
  const [dob, setDob] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!dob) {
      setMessage("Please select your date of birth.");
      return;
    }

    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age >= 18) {
      setMessage(` You are ${age} years old. You can use our service!`);
    } else {
      setMessage(` You are ${age} years old. You must be at least 18.`);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-yellow-100">
      <div className="bg-white p-6 rounded-lg shadow-lg border border-yellow-300 text-center w-96">
        <h1 className="text-3xl font-bold text-orange-500 mb-4">Age Validator</h1>
        <p className="text-gray-700 mb-4">
          Find out if you are eligible to use our service!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-orange-300 hover:bg-orange-400 text-white py-2 px-4 rounded w-full"
          >
            Submit
          </button>
        </form>
        {message && (
          <div className="mt-4 p-2 border border-gray-300 rounded bg-gray-50">
            {message}
          </div>
        )}
        <p className="mt-3 text-xs text-gray-500">
          Your date of birth determines if you can use our platform. You must be at least 18 years old to use our services.
        </p>
      </div>
    </div>
  );
}
