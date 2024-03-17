import commuinityImg from "../assets/Group 99.svg";
export default function Commuinity() {
  return (
    <div className="commuinity px-md-0 px-4 mt-5">
      <div className="container px-0 py-4">
        <h2 className="mb-4 fst-italic fw-bold mt-3">
          Your <span className="text-purple">Hobby,</span> Your
          <span className="text-primary"> Community...</span>
        </h2>
        <button className="btn btn-purple mb-4">Get Started</button>
        <img className="img-fluid" src={commuinityImg} alt="" />
      </div>
    </div>
  );
}
