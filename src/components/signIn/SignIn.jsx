import googleIcon from "../../assets/Google.svg";
import facebookIcon from "../../assets/Facebook.svg";
import SocialBtn from "./SocialBtn.jsx";
export default function signIn({ show }) {
  return (
    <div className="text-center">
      <SocialBtn socialIcon={googleIcon} socialName="Google" />
      <SocialBtn socialIcon={facebookIcon} socialName="Facebook" />

      <div className="position-relative">
        <h6 className="d-inline-block connect-with-text mb-3">
          or connect with
        </h6>
      </div>
      <form>
        <input
          className="form-control mb-3 shadow-none"
          type="text"
          placeholder="Email"
        />
        <input
          className="form-control mb-3 shadow-none"
          type="password"
          placeholder="Password"
        />
        <div className="mb-3 form-check text-start">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label ">Check me out</label>
        </div>
        {show === "sign" ? (
          <button className="btn btn-outline-purple w-100">Continue</button>
        ) : (
          <div>
            <p className="fs-7">
              By continuing, you agree to our Terms of Service and Privacy
              Policy.
            </p>
            <button className="btn btn-purple w-100">Agree And Continue</button>
          </div>
        )}
      </form>
    </div>
  );
}
