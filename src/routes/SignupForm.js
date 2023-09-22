import React from "react";
import "../components/SignupForm.css";

function SignupForm() {
  return (
    <div className="signup-form">
      <h2>Sing Up here</h2>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email Id" />
        <input placeholder="Password" />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
