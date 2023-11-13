import React from "react";

const Signup = () => {
  return (
    <div>
      <div>
        <h2>Log in or sign up</h2>
        <h1>Welcome to Airbnb</h1>
        <form>
          <div>
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
