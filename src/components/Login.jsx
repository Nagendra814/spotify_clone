import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      setError("Enter email & password");
      return;
    }
    if (!email) {
      setError("Enter email");
      return;
    }
    if (!password) {
      setError("Enter password");
      return;
    }

    setError(""); // clear error when valid
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-700">
      <div className="bg-black text-white p-8 rounded-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Spotify Clone</h2>

        <form onSubmit={handleSubmit} className="text-white flex flex-col gap-4">

          {error && (
            <p className="text-red-400 text-center font-semibold">{error}</p>
          )}

          <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="p-3 rounded-lg border"
          />

          <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="p-3 rounded-lg border"
          />

          <button
            type="submit"
            className="bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}
