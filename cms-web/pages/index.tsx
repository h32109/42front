import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import IntroFacebook from "../components/LoginContainer/IntroFacebook";
import SignIn from "../components/LoginContainer/SignIn";
import styled from "@emotion/styled";

const LoginLayout = styled.div`
  width: 100vw;
  min-height: 100vh;
  // background-color: #f0f2f5;
  padding-top: 15%;

  & > div {
    display: flex;
    margin: 0 auto;
  }
`;

export default function Home() {
  //TODO
  //Log In Check and route to different pages
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/dashboard");
    }
  }, []);

  return (
    <LoginLayout>
      <div>
        <IntroFacebook />
        <SignIn />
      </div>
    </LoginLayout>
  );
}
