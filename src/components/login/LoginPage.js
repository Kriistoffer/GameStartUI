import React from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .get(`https://localhost:7024/api/users/login${username}/${password}`)
      .then((response) => {
        localStorage.setItem("loggedInStatus", JSON.stringify(response.data.loggedIn));
        localStorage.setItem("userId", JSON.stringify(response.data.userId));
        
        if ((response.data.loggedIn = true)) {
          setShow(true);
        }
      })
      .catch(() => {
        alert("You entered the wrong user information. Try again!");
      });
  };

  return (
    <Container className="login-container">
      <h1 className="login-label">Login</h1>
      <Form className="LoginForm">
        <FloatingLabel
          controlId="floatingInput"
          label="Username"
          className="mb-3"
        >
          <Form.Control
            type="string"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        >
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
      </Form>

      <Button
        className="submit-button mt-4"
        variant="outline-dark"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <Modal
        className="login-modal"
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Welcome to GameStart!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You successfully logged in! :)</Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-dark"
            onClick={() => {
              navigate("/");
            }}
          >
            Go To Main Page
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

//onHandleSubmit ska hämta data
//onClick i button för att hämta onHandleSubmit

export default LoginPage;
