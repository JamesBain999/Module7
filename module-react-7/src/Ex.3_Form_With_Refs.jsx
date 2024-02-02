import React, { useRef } from "react";
import { useUserContext } from "./UserContext";

const SimpleForm = () => {

  const { currentUser } = useUserContext();

  const usernameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    console.log("enter")
    alert(`Username submitted: ${username}`);
  };

  React.useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" ref={usernameRef} placeholder={currentUser.email}/>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;