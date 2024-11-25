import React from "react";
import "../Pages/SingIn.css";

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="signin-container">
      <h1>Welcome Back</h1>
      <p>Sign in to stay updated with the latest news</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="signin-button">
          Sign In
        </button>
      </form>
      <div className="extra-links">
        <a href="/forgot-password">Forgot your password?</a>
      </div>
    </div>
  );
};

export default SignIn;
