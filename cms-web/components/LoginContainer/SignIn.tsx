import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import styled from "@emotion/styled";
import SignupModal from "./SignupModal";
import SigninRepository from "../../api/rest/SigninRespository";
import { useRouter } from "next/router";
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
  const router = useRouter();
  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    // console.log(state);
  }

  const [showModal, setShowModal] = useState(false);
  const toggleShow = () => {
    setShowModal(prev => !prev);
  };
  const handleCreateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Hi");
    let contact = document.getElementsByName("contact");
    let pass = document.getElementsByName("password");
    let params = { email: contact, password: pass };
    SigninRepository.login(params)
      .then(() => {
        console.log("success");
        router.push("/dashboard");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <SignInBox>
        <Card>
          <Card.Body>
            <Form onSubmit={handleCreateClick}>
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
                  type="submit"
                  block
                >
                  로그인
                </Button>
              </Form.Group>
              <hr />
              <Button
                variant="success"
                className="btn btn-lg bg-fb-green"
                // onClick={handleCreateClick}
              >
                새 계정 만들기
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
