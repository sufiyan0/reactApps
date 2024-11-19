import { useState } from "react";

const BasicForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);

  const [lastName, setLastName] = useState("");
  const [isLastNameValid, setIsLastNameValid] = useState(true);

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const setOnblur = (event) => {
    if (event.target.value.trim().length === 0) {
      setIsFirstNameValid(false);
    } else {
      setIsFirstNameValid(true);
    }
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName, lastName, email);

    if (firstName.trim().length === 0) {
      setIsFirstNameValid(false);
      return;
    }
    setFirstName("");
    
    setIsFirstNameValid(true);
    
  };

  const nameInputClasses = !isFirstNameValid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={handleSubmit}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            name="firstName"
            value={firstName}
            className={!isFirstNameValid && "form-control invalid"}
            onChange={(event) => setFirstName(event.target.value)}
            onBlur={setOnblur}
          />
          {!isFirstNameValid && (
            <p className="error-text">First name must not be empty.</p>
          )}
        </div>
        {/* <div className="form-control">
          F<label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </div> */}
      </div>
      {/* <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div> */}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
