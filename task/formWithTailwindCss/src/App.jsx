import { useState } from "react";

function FormPage() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [showData, setShowData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (validation()) {
      setShowData({ userName, email, password });
      setEmail("");
      setUserName("");
      setPassword("");
    }
  }

  function validation() {
    let obj = {};
    let valid = true;

    if (!userName.trim()) {
      obj.userName = "Please enter your username.";
      valid = false;
    }
    if (!email.trim()) {
      obj.email = "Please enter your email.";
      valid = false;
    }
    if (!password.trim()) {
      obj.password = "Please enter your password.";
      valid = false;
    }
    setError(obj);
    return valid;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>

        <div className="mb-4">
          <label className="block font-medium text-gray-700" htmlFor="userName">
            User Name
          </label>
          <input
            id="userName"
            type="text"
            placeholder="Enter your username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {error.userName && (
            <p className="text-red-500 text-sm">{error.userName}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
          {error.password && (
            <p className="text-red-500 text-sm">{error.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>

        {showData && (
          <div className="mt-4 p-4 bg-gray-50 rounded shadow-md">
            <p>
              <strong>Username:</strong> {showData.userName}
            </p>
            <p>
              <strong>Email:</strong> {showData.email}
            </p>
            <p>
              <strong>Password:</strong> {showData.password}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

export default FormPage;
