import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminContacts = () => {
  const { authorizationToken } = useAuth();
  const [contacts, setContacts] = useState([]);

  const getAllContacts = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/admin/contacts",
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        setContacts(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  const deleteContact = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:3000/admin/contacts/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      }
    );

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      getAllContacts();
      toast.success("User Deleted Successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

 return (
  <section className="admin-contact-section">
    <h1 className="contact-heading">Contact Data</h1>
    <div className="container">

      <div className="contact-grid">
        {contacts.map((contact) => (
          <div className="contact-card" key={contact._id}>
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Message:</strong> {contact.massage || contact.message}</p>

            <button
              className="btn"
              onClick={() => deleteContact(contact._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);
};

export default AdminContacts;