import qouteIcon from "../assets/quote.svg";
import audioImg from "../assets/Ellipse 12.svg";
export default function Tastimonials() {
  return (
    <div className="container testomonials-container my-5">
      <div className="w-100 p-4">
        <h6 className="mb-3">
          <img
            width="30"
            src={qouteIcon}
            alt="inverted qoutation"
            className="me-2"
          />
          <span className="fw-bold">Testimonios</span>
        </h6>
        <p className="text-secondary">
          In a fast growing and ever changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </p>
        <div className="d-flex flex-md-row flex-column-reverse justify-content-center align-items-center gap-5">
          <div className="testomonial-audio d-flex py-1 px-3 w-50">
            <audio controls>
              <source src="audio-file.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <img width="35" src={audioImg} alt="audio image" />
          </div>
          <div className="d-flex align-items-center">
            <img width="60" className="me-4" src={audioImg} alt="" />
            <div className="mt-3">
              <strong className="text-purple">Shubha Nagarajan</strong>
              <p className="text-primary fs-7">Classical Dancer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
