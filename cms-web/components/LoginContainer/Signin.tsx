import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import styled from "@emotion/styled";
import SignupModal from "../SignupContainer";

export const Signinbox = styled.div`
  text-align: center;
`;

export const Signincard = styled(Card)`
  margin: 31% auto 20px auto;
  border-radius: 10px;
  color: yellow;
`;

export const Buttonlogin = styled(Button)`
  background-color: #2677f2;
`;

const Signin = () => {
  const [state, setState] = useState({ contact: "", password: "" });
  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    // eslint-disable-next-line no-console
    console.log(state);
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
      <Signinbox>
        <Card>
          <Card.Body>
            <Form>
              <Form.Group>
                <input
                  className="form-control"
                  type="text"
                  placeholder="이메일 또는 전화번호"
                  name="contact"
                  onChange={handleChange}
                  value={state.contact}
                />
              </Form.Group>
              <Form.Group>
                <input
                  className="form-control"
                  type="password"
                  placeholder="비밀번호"
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
                  로그인
                </Button>
              </Form.Group>
              <hr />
              <Button
                variant="success"
                className="btn btn-lg bg-fb-green"
                onClick={handleCreateClick}
              >
                새 계정 만들기
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Signinbox>
      <SignupModal show={showModal} toggleShow={toggleShow} />
    </>
  );
};

// Login.getInitialProps = async context => {
//   return { tag: context.query.tag };
// };

export default Signin;
