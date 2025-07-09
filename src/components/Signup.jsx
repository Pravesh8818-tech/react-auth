import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";
import apiClient from "../../services/apiClient";

/**
 * Signup form component
 *
 * This component renders a form with fields for name, email address, and
 * password. The form has a single button with the text "Signup". When the
 * button is clicked, the component will be in a "loading" state until the
 * signup request has been processed.
 *
 * @returns {JSX.Element} The signup form component
 */
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Make an API call to backend with data
      const data = await apiClient.Signup(name, email, password);
      // get reponse from backend
      console.log(data);
      if (data.success) {
        navigate("/login");
      }
      // take action based on response
    } catch (error) {
      console.log(`API Error : ${error}`);
      // handle error
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <form onClick={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputname1">Name</label>
          <input
            type="name"
            className="form-control"
            id="exampleInputname1"
            name="name"
            value={name}
            aria-describedby="nameHelp"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <small id="nameHelp" className="form-text text-muted">
            Enter your name
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {isLoading ? "Signing up..." : "Signup"}
        </button>
      </form>
    </>
  );
}

export default Signup;
