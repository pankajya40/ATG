export default function FooterItems({ footerItems, heading }) {
  return (
    <div className="col-sm-4 col-lg-2 mb-3">
      <h6 className="fw-bold">{heading}</h6>
      <ul className="nav flex-column">
        {footerItems.map((item, index) => (
          <li className="nav-item mb-2 fs-7" key={index}>
            <a href="#" className="nav-link p-0 text-body-secondary">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Social({ socials }) {
  return (
    <ul className="list-unstyled d-flex">
      {socials.map((social, index) => (
        <li className="ms-3" key={index}>
          <a className="link-body-emphasis" href="#">
            <i className={social}></i>
          </a>
        </li>
      ))}
    </ul>
  );
}
