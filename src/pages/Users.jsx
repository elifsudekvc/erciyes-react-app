import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setusers] = useState([]);
  const [posts, setposts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setusers(res.data);
    });
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setposts(res.data);
    });
  }, []);

  return (
    <div>
      <select
        name="users"
        id="users"
        style={{ width: "300px" }}
        className="form-select m-5"
        aria-label="Default select example"
      >
        {users.map((item) => (
          <option value={item.id}>{item.name}</option>
        ))}
      </select>

      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">userId</th>
              <th scope="col">id</th>
              <th scope="col">title</th>
              <th scope="col">body</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item)=>(
              <tr>
              <th scope="row">{item.userId}</th>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
