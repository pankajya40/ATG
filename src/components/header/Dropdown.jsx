export default function Dropdown({ dropdownItmes, children, dropIcon }) {
  return (
    <li className="nav-item dropdown d-flex me-3">
      <img className="me-md-0 me-2" src={dropIcon} alt={children} />
      <a
        className="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {children}
      </a>
      <ul className="dropdown-menu">
        {dropdownItmes.map((item, index) => (
          <li key={index}>
            <a className="dropdown-item" href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
