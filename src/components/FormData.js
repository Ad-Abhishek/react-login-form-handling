import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Profile from "./Profile";

export default function FormData() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <>
      <Container className="col-3 mt-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <input
              name={"email"}
              value={user.email}
              onChange={(e) => handleChange(e)}
              type="email"
              placeholder="Enter email"
              className="form-control"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <input
              value={user.password}
              name={"password"}
              onChange={(e) => handleChange(e)}
              type="password"
              placeholder="Password"
              className="form-control"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <pre>
        {user.email}
        {user.password}
      </pre>
      <Profile email={user.email} psw={user.password} />
    </>
  );
}
