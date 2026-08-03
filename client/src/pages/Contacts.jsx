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
    <section className="admin-user-section">
      <div className="container">
        <h1>Admin Contact Data</h1>
      </div>

      <div className="container admin-user">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
                <td>
                <button onClick={() => deleteContact(contact._id)}>
                Delete
                </button>
                </td>

                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminContacts;