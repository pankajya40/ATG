import { useState } from "react";

import SignIn from "./SignIn.jsx";

export default function SignInPage() {
  const [signIn, setSignIn] = useState("sign");
  function handleSignIn(value) {
    setSignIn(value);
  }
  return (
    <div className="signIn col-12 col-md-4 px-md-0 px-4 " id="signin">
      <div className="mb-2">
        <button
          onClick={() => handleSignIn("sign")}
          className="btn position-relative fw-bold fs-5"
        >
          <span className={signIn === "sign" ? "active" : undefined}>
            Sign In
          </span>
        </button>
        <button
          onClick={() => handleSignIn("join")}
          className="btn position-relative fw-bold fs-5"
        >
          <span className={signIn === "join" ? "active" : undefined}>
            Join In
          </span>
        </button>
      </div>
      <SignIn show={signIn} />
    </div>
  );
}
