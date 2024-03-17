import FooterItems, { Social } from "./FooterItems.jsx";

export default function Footer() {
  const footerFirstQueue = [
    "About Us",
    "Our Services",
    "Work with Us",
    "FAQ",
    "Contact Us",
  ];
  const footerSecondQueue = [
    "Sign Up",
    "Add a Listing",
    "Claim Listing",
    "Post a Query",
    "Add a Blog Post",
    "Other Queries",
  ];
  const footerThirdQueue = [
    "Listing",
    "Blog Posts",
    "Shoo/Store",
    "Commuinity",
  ];
  const socialIcons = [
    "bi bi-facebook",
    "bi bi-twitter",
    "bi bi-instagram",
    "bi bi-pinterest",
    "bi bi-youtube",
    "bi bi-telegram",
    "bi bi-envelope-fill",
  ];
  return (
    <div>
      <footer className="container px-4">
        <div className="row mt-5 mb-3">
          <FooterItems footerItems={footerFirstQueue} heading="Hobbycue" />
          <FooterItems footerItems={footerSecondQueue} heading="How Do I" />
          <FooterItems footerItems={footerThirdQueue} heading="Quick  Links" />

          <div className="col-md-5 offset-md-1 my-3">
            <form>
              <h6 className="fw-bold">Social Media</h6>
              <Social socials={socialIcons} />
              <div className="mt-5">
                <label htmlFor="newsletter1" className="fw-bold mb-2">
                  Invie Friends
                </label>
                <form className="d-flex m-auto" role="search">
                  <input
                    className="form-control input rounded-end-0 shadow-none"
                    type="email"
                    placeholder="Email ID"
                    aria-label="email"
                  />
                  <button
                    className="btn btn-purple m-0 rounded-start-0"
                    type="submit"
                  >
                    Invite
                  </button>
                </form>
              </div>
            </form>
          </div>
        </div>
      </footer>
      <div className=" footerEnd">
        <p className="text-center p-3">© Purple Cues Private Limited</p>
      </div>
    </div>
  );
}
