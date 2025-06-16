import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { deleteStatus } from "../../redux/actions";


export default function ContactStatuss(){
    const contactStatuss = useSelector(state => state.contactStatuss)
    const contacts = useSelector(state => state.contacts)
    const dispatch = useDispatch()

    const statusCounts = useMemo(() => {
        const counts = {...contactStatuss}
        Object.keys(counts).forEach(status => (counts[status].count = 0))
        contacts.forEach(contact => {
          contactStatuss[contact.status].count++
        });
        return counts
      }, [contacts, contactStatuss])

    const handleDeleteStatus = (status) =>{
        dispatch(deleteStatus(status))
    }

    return(
        <main className="container rounded bg-white shadow-lg">
            <div className="row">
                <div className="col-12">
                    <Link type="button" className="btn btn-success btn-lg m-2" to={'/contact-statuss/add-contact-status'}>Add +</Link>
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Status name</th>
                                <th scope="col">Color</th>
                                <th scope="col">Contact count</th>
                                <th scope="col">Edit/Del</th>
                            </tr>
                        </thead>
                        <tbody>
                        {Object.keys(statusCounts).map((status, index) => (
                            <tr key={index}>
                                <th scope="row">{++index}</th>
                                <td className="fs-4 fw-bold">{status.toUpperCase()}</td>
                                <td className="fs-4 fw-bold" style={{backgroundColor: statusCounts[status].bg}}>{statusCounts[status].bg}</td>
                                <td className="fs-4 fw-bold">{statusCounts[status].count}</td>
                                <td>
                                <Link to={`/edit-contact`}><FaRegEdit size={'50px'} color="yellow"/></Link>
                                <MdDeleteForever style={{cursor: 'pointer'}} size={'50px'} color="red" onClick={() => {handleDeleteStatus(status)}}/>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}