import { useState } from "react";

const CreatePost = () => {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    setUser({
      id: Date.now(),
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(user),
    })
    .then(res => res)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor=""></label>
      <input type="text" name="name" onChange={handleChange} />
      <button type="submit">submit</button>
    </form>
  );
};
export default CreatePost;
