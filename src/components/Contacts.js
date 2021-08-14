import { useState, useEffect } from "react";
// Import Components
import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Halil",
      phone_number: "123 456 789",
    },
    {
      fullname: "Ayşe",
      phone_number: "987 654 321",
    },
    {
      fullname: "Alaaddin",
      phone_number: "000 333 999",
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div>
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
