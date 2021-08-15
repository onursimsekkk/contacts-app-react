import { useState, useEffect } from "react";
import phoneValidation from "../../utils/phoneValidation";

function Form({ addContact, contacts }) {
  const [form, setForm] = useState({ fullname: "", phone_number: "" });

  useEffect(() => {
    setForm({ fullname: "", phone_number: "" });
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContact([...contacts, form]);
  };

  return (
    <div>
      <div>
        <h3>Add Person</h3>
        <input
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>
      <div className="btn-box">
        <button onClick={onSubmit}>Add</button>
      </div>
    </div>
  );
}

export default Form;
