import "./ContactItem.scss";
import { Link } from "react-router";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact, toggleFavorite } from "../../redux/actions";

export default function ContactItem() {
  const contacts = useSelector((state) => state.contacts);
  const searchTerm = useSelector((state) => state.searchTerm);
  const activeFilter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts
    .filter((contact) => (activeFilter === "all" ? true : contact.status === activeFilter))
    .filter((contact) =>
      searchTerm
        ? `${contact.firstName} ${contact.lastName} ${contact.email} ${contact.phone}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        : true,
    );

  return (
    <div>
      <table className="table">
        <thead>
          <tr className="align-middle text-center fs-5 position-sticky top-0">
            <th className="text-primary" scope="col">
              icon
            </th>
            <th className="text-primary" scope="col">
              Name
            </th>
            <th className="text-primary" scope="col">
              Phone/Email
            </th>
            <th className="text-primary" scope="col">
              Status
            </th>
            <th className="text-primary" scope="col">
              Gender
            </th>
            <th className="text-primary" scope="col">
              Edit/Del
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((contact) => (
            <tr key={contact.id} className="align-middle text-center">
              <td className="position-relative" scope="row">
                <img
                  className={`rounded-circle border border-3 ${contact.gender === "women" ? "border-danger" : "border-primary"}`}
                  src={`https://randomuser.me/api/portraits/${contact.gender}/${contact.avatar}.jpg`}
                  alt=""
                />
                <button className="favoriteBtn" onClick={() => dispatch(toggleFavorite(contact.id))}>
                  {contact.favorite ? "♥" : "♡"}
                </button>
              </td>
              <td className="fs-4">
                {contact.firstName}
                <br />
                {contact.lastName}
              </td>
              <td className="fs-5">
                {contact.phone}
                <br />
                {contact.email}
              </td>
              <td className="fs-5 text-uppercase fw-bold">{contact.status}</td>
              <td className="fs-5 text-uppercase fw-bold">{contact.gender}</td>
              <td>
                <Link to={`/edit-contact/${contact.id}`}>
                  <FaRegEdit size={"50px"} color="yellow" />
                </Link>
                <MdDeleteForever
                  style={{ cursor: "pointer" }}
                  size={"50px"}
                  color="red"
                  onClick={() => dispatch(deleteContact(contact.id))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
