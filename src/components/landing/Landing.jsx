import LandingPageText from "./LandingPageText.jsx";

import SignInPage from "../signIn/SignInPage.jsx";
export default function Landing() {
  return (
    <div className="landing">
      <div className="container pt-5">
        <div className="row">
          <LandingPageText />
          <SignInPage />
        </div>
      </div>
    </div>
  );
}
