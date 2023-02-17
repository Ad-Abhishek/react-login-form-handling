import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Profile(props) {
  const [status, setStatus] = useState("Login");

  const handleClick = (e) => {
    console.log(e)(status === "Login")
      ? setStatus("Logout")
      : setStatus("Login");
  };

  return (
    <div>
      <Card style={{ width: "18rem", margin: "300px" }}>
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=400"
        />
        <Card.Body>
          <Card.Title>
            {props.email} {props.psw}
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>

          <Button variant="primary" onClick={(e) => handleClick(e)}>
            {status}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
