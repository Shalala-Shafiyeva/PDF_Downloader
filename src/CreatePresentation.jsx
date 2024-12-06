import React, { useEffect, useState } from "react";

function CreatePresentation() {
  const [users, setUsers] = useState([]);
  const [values, setValues] = useState({
    reciever: null,
    sender: null,
    title: "",
    description: "",
  });
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      setUsers(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const response = await fetch(
        "http://localhost:8000/api/presentation/store",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="form">
      <h2>Create new Presentation</h2>
      <form
        action=""
        method="POST"
        onSubmit={(e) => {
          handleFormSubmit(e);
        }}
      >
        <div className="form-item">
          <label htmlFor="reciever">Reciever</label>
          <select
            name="reciever"
            id="reciever"
            onChange={(e) => setValues({ ...values, reciever: e.target.value })}
          >
            <option value="">Choose reciever</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name} {user.surname}
              </option>
            ))}
          </select>
        </div>
        <div className="form-item">
          <label htmlFor="sender">Sender</label>
          <select
            name="sender"
            id="sender"
            onChange={(e) => setValues({ ...values, sender: e.target.value })}
          >
            <option value="">Choose reciever</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name} {user.surname}
              </option>
            ))}
          </select>
        </div>
        <div className="form-item">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setValues({ ...values, title: e.target.value })}
          />
        </div>
        <div className="form-item">
          <label htmlFor="content">Content</label>
          <input
            type="text"
            name="description"
            id="content"
            onChange={(e) =>
              setValues({ ...values, description: e.target.value })
            }
          />
        </div>
        <div className="form-item">
          <button className="submit" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePresentation;
