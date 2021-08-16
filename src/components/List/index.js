import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((k) => 
      item[k].toString().toLowerCase().includes(filterText.toLowerCase())
    )
  })

  console.log(filtered);

  return (
    <div>
      <input
        type="text"
        placeholder="Filter Contacts"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, index) => (
          <li key={index}>
            <span className="name-info">{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>
      <p className="info-text">(Total Person {filtered.length})</p>
    </div>
  );
}

export default List;
