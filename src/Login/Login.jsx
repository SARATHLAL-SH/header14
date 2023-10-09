import React from "react";
import "../Login/Login.css";

function Login() {
  return (
    <div>
      <div className="loginContainer">
        <div className="signupHeadContainer">
          <h2 className="signupHead">
            <b>Sign Up Now</b>
          </h2>
        </div>
        <div className="emailpasswordContainer">
          <input type="text" placeholder="Your Email" className="email" />
          <input type="text" placeholder="Your Password" className="password" />
        </div>
        <div className="termsContainer">
          <label className="myCheckbox">
            <input type="checkbox" className="checkbox" />I agree to the Terms
            of Service.
          </label>
        </div>
        <div className="signupBtnContainer">
          <button className="signupBtn">Sign In</button>
          <div className="underline">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="145"
                height="3"
                viewBox="0 0 145 3"
                fill="none"
              >
                <path
                  d="M1.93182 1.5H143.502"
                  stroke="#EBEAED"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>{" "}
              or
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="145"
                height="3"
                viewBox="0 0 145 3"
                fill="none"
              >
                <path
                  d="M1.93182 1.5H143.502"
                  stroke="#EBEAED"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </p>
          </div>
          <button className="loginTwiter">Login via Twitter</button>
        </div>
        <div className="signinContainer">
          <p className="newAccountlabel">Do you have an Account</p>
          <p className="signin">Sign In</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
