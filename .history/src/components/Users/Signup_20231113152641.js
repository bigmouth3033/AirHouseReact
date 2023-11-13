import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faTwitter } from "@fortawesome/fontawesome-svg-core";
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
          <div>
            <label>Password Confirm</label>
            <input type="password" name="passwordConfirm" />
          </div>
          <div>
            <button type="submit">Sign up</button>
            <button type="reset">Reset</button>
          </div>
        </form>
        <div>Or</div>
        <div>
          <FontAwesomeIcon icon={faTwitter} style={{ color: "#065df4" }} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
