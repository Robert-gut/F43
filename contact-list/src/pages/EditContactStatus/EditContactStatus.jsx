import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { editStatus } from "../../redux/actions";

export default function EditContactStatus() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const param = useParams();
  const status = useSelector((state) => state.contactStatuss[param.status]);
  const [statusName, setStatusName] = useState(param.status);
  const [color, setColor] = useState(status.bg);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editStatus(param.status, statusName, color));
    navigate("/contact-statuss");
  };
  return (
    <div className="container">
      <form
        style={{
          backgroundColor: "#f8f8f8",
          width: "600px",
          padding: "40px 30px",
          margin: "10px auto",
        }}
        onSubmit={handleSubmit}
        className="modal-content rounded shadow">
        <h1 className="text-center">Edit contact status</h1>
        <hr />
        <div className="mb-3">
          <label htmlFor="statusName">Status name</label>
          <input
            type="text"
            className="form-control fs-5"
            id="statusName"
            value={statusName}
            onChange={(e) => setStatusName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 d-flex align-items-center">
          <label htmlFor="color">Color</label>
          <input
            type="color"
            className="ms-3 mt-1 fs-5"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg form-control">
          Save
        </button>
      </form>
    </div>
  );
}
