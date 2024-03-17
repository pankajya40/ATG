import landingImg from "../../assets/Group 27.svg";
export default function LandingPageText() {
  return (
    <div className="landingPage-text col-12 col-md-8 pe-md-5 px-4 mb-5">
      <h2 className="mb-5">
        Explore your <span className="text-primary">hobby</span> or{" "}
        <span className="text-purple">passion</span>
      </h2>
      <p className="mb-3">
        Sign-in to interact with a community of fellow hobbyists and an
        eco-system of experts, teachers, suppliers, classes, workshops, and
        places to practice, participate or perform. Your hobby may be about
        visual or performing arts, sports, games, gardening, model making,
        cooking, indoor or outdoor activities…
      </p>
      <p className="mb-4">
        If you are an expert or a seller, you can Add your Listing and promote
        yourself, your students, products, services or events. Hop on your
        hobbyhorse and enjoy the ride.
      </p>
      <div>
        <img className="img-fluid" src={landingImg} alt="" />
      </div>
    </div>
  );
}
