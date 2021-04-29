import React from 'react';
import { css } from "@emotion/react";
import styled from "@emotion/styled"

export const Intro = styled.div`
  width: 40%;
  margin-left: 10%;
  & > h1 {
    font-size: 4em;
    font-weight: 700;
  }
  & > h4 {
    font-size: 1.7em;
  }
`;

export const Blue = styled.h1`
  color: #2677f2;
  margin-bottom: 0.2em;
`;

export const Explanation = styled.h4`
  margin-bottom: 0px;
  margin-top: 0px;
`;

// export const Signinform = css`
//   margin: 31% auto 20px auto;
//   border-radius: 10px;
// `;

const Introfacebook = () => {
  return (
    <Intro>
      <Blue>facebook</Blue>
      <Explanation>Connect with friends and the</Explanation>
      <Explanation>world around you on Facebook.</Explanation>
    </Intro>
  );
};

export default Introfacebook;
