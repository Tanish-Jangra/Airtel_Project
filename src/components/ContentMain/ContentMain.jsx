import React, { useState } from "react";
import "./ContentMain.css";

const ContentMain = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="main-content-holder">
      <h1>MRM PROCOM</h1>
      {showForm && (
        <div className="form-container">
          {/* Your form elements here */}
          <form>
            {/* Form fields */}
            <input type="text" />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContentMain;
