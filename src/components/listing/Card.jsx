export default function Card({ icon, title, description, buttonContent }) {
  return (
    <div
      id={title}
      className="col-md-5 col-12 p-4 border border-1 rounded cardItem"
    >
      <h6>
        <i className={icon}></i>
        <span className="fw-bold ms-2">{title}</span>
      </h6>
      <p className="fs-7">{description}</p>
      <button type="button" className="btn btn-outline-purple">
        {buttonContent}
      </button>
    </div>
  );
}
