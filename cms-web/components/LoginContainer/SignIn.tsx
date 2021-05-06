import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import styled from "@emotion/styled";
import SignupModal from "./SignupModal";

export const SignInBox = styled.div`
  text-align: center;
`;

export const SignInCard = styled(Card)`
  margin: 31% auto 20px auto;
  border-radius: 10px;
  color: yellow;
`;

export const ButtonLogin = styled(Button)`
  background-color: #2677f2;
`;

const SignIn = () => {
  const [state, setState] = useState({ contact: "", password: "" });
  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  const [showModal, setShowModal] = useState(false);
  const toggleShow = () => {
    setShowModal(prev => !prev);
  };
  const handleCreateClick = (e: React.MouseEvent) => {
    setShowModal(true);
  };

  return (
    <>
      <SignInBox>
        <Card>
          <Card.Body>
            <Form>
              <Form.Group>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email or Phone Number"
                  name="contact"
                  onChange={handleChange}
                  value={state.contact}
                />
              </Form.Group>
              <Form.Group>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={state.password}
                />
              </Form.Group>
              <Form.Group>
                <Button
                  variant="primary"
                  className="bg-fb-blue"
                  size="lg"
                  block
                >
                  Log In
                </Button>
              </Form.Group>
              <hr />
              <Button
                variant="success"
                className="btn btn-lg bg-fb-green"
                onClick={handleCreateClick}
              >
                Create New Account
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </SignInBox>
      <SignupModal show={showModal} toggleShow={toggleShow} />
    </>
  );
};

// Login.getInitialProps = async context => {
//   return { tag: context.query.tag };
// };

export default SignIn;
