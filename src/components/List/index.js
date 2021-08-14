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
      <ul>
        {filtered.map((contact, index) => (
          <li key={index}>{contact.fullname}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
