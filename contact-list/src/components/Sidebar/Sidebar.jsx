import { useMemo } from "react";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const contacts = useSelector(state => state.contacts)
  const searchTerm = useSelector(state => state.searchTerm)
  const contactStatuss = useSelector(state => state.contactStatuss)
  const filteredContacts = searchTerm ? contacts.filter(contact => `${contact.firstName} ${contact.lastName} ${contact.email} ${contact.phone}`.toLowerCase().includes(searchTerm.toLowerCase()) ) : contacts
  const totalContacts = filteredContacts.length
  
  const statusCounts = useMemo(() => {
    const counts = {...contactStatuss}
    Object.keys(counts).forEach(status => (counts[status].count = 0))
    filteredContacts.forEach(contact => {
      contactStatuss[contact.status].count++
    });
    return counts
  }, [contacts, contactStatuss, searchTerm])
  
  return(
    <aside className="container border-end position-sticky top-0">
      <div className="row">
        <div className="col-12">
          <div className="contacts-labels">
            <div className="fs-3 mb-5 mt-4 d-flex justify-content-between">
              <span>All contacts:</span><span>{totalContacts}</span>
            </div>
            <ul className="list-group mb-3">
              {
                Object.keys(statusCounts).map(status => (
                  <li key={status} className="list-group-item d-flex justify-content-between align-items-center list-group-item-action" style={{cursor: 'pointer'}}> 
                    {status.toUpperCase()}
                    <span style={{backgroundColor: statusCounts[status].bg}} className="badge rounded-pill">{statusCounts[status].count}</span>
                  </li>
                ))
              }

              {/* <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-action active">
                Work
                <span class="badge bg-primary rounded-pill">{statusCounts.work}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Family
                <span class="badge bg-primary rounded-pill">{statusCounts.family}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Friends
                <span class="badge bg-primary rounded-pill">{statusCounts.friends}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Private
                <span class="badge bg-primary rounded-pill">{statusCounts.private}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Others
                <span class="badge bg-primary rounded-pill">{statusCounts.others}</span>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  )
}