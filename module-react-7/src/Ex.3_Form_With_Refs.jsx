import React, { useRef } from "react";

const SimpleForm = () => {
  const usernameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    alert(`Username submitted: ${username}`);
  };

  React.useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" ref={usernameRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
