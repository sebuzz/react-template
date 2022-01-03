import React, { useCallback } from "react";

const Form = ({ children, onSubmit, ...props }) => {
  const handleSubmit = useCallback(
    (event_) => {
      event_.preventDefault();
      const formData = new FormData(event_.target);
      const values = Object.fromEntries(formData);
      onSubmit(values);
    },
    [onSubmit]
  );
  return (
    <form {...props} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
