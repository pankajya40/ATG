import addIcon from "../assets/Add (Landing Page).svg";
export default function AddCard() {
  return (
    <div className="addCard my-4">
      <div className="container py-5 px-0">
        <div className="border border-1 rounded bg-white py-4 px-5">
          <h6>
            <img width="30" src={addIcon} alt="add  icon" className="me-2" />
            <span className="fw-bold">Add Your own</span>
          </h6>
          <p className="mb-3">
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page
          </p>
          <button className="btn btn-outline-purple">Add New</button>
        </div>
      </div>
    </div>
  );
}
