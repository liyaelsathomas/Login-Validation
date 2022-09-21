import { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // console.log(Object.keys(formError));

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormError(validate(values));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const emailRegex =
      /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    let error = {};
    if (!values.name) {
      error.username = "Please enter username";
    }
    if (!values.email) {
      error.email = "Please enter email";
    }
    if (!values.password) {
      error.password = "Please enter password";
    } else if (values.password.length < 4) {
      error.password = "Please enter more than 4 characters";
    } else if (values.password.length > 7) {
      error.password = "Please enter less than 7 characters";
    }

    return error;
  };

  return (
    <div className="app">
      <div className="signupform">
        {(Object.keys(formError).length === 0) & isSubmit ? (
          <div className="alert alert-success" role="alert">
            Signup Sucessfully!
          </div>
        ) : (
          "wrong"
        )}
        <h1>SignUp form</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="input-box"
            autoComplete="off"
            placeholder="Enter Name"
            value={values.name}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formError.username}</p>

          <input
            type="email"
            name="email"
            className="input-box"
            autoComplete="off"
            placeholder="Enter Email"
            value={values.email}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formError.email}</p>
          <input
            type="password"
            name="password"
            className="input-box"
            placeholder="Enter Password"
            value={values.password}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formError.password}</p>

          <button type="submit" id="btn">
            Sign Up Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
