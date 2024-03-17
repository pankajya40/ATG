import logo from "../../assets/logo.svg";
import Dropdown from "./Dropdown.jsx";
import exploreIcon from "../../assets/Explore.svg";
import hobbiesIcon from "../../assets/Hobbies.svg";
export default function Header() {
  const doropdownItems = [
    "People - Community",
    "Place - Venues",
    "Program - Events",
    "Products - Store",
    "Blogs",
  ];
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <a className="navbar-brand m-0" href="../index.html">
          <img className="w-100" src={logo} alt="Logo" />
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex m-auto" role="search">
            <input
              className="form-control input rounded-end-0"
              type="search"
              placeholder="Search here..."
              aria-label="Search"
            />
            <button
              className="btn m-0 rounded-start-0 btn-purple"
              type="submit"
            >
              <i className="bi bi-search"></i>
            </button>
          </form>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Dropdown dropdownItmes={doropdownItems} dropIcon={exploreIcon}>
              Explore
            </Dropdown>

            <Dropdown dropdownItmes={doropdownItems} dropIcon={hobbiesIcon}>
              Hobbies
            </Dropdown>
          </ul>
        </div>
        <div className="navbarIcons ms-auto me-3">
          <i className="bi bi-bookmark-fill d-none d-md-inline-block"></i>
          <i className="bi bi-bell-fill"></i>
          <i className="bi bi-cart-fill d-none d-md-inline-block"></i>
        </div>
        <button className="btn btn-outline-purple me-3">Sign In</button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}
