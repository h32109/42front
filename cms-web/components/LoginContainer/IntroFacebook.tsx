import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

export const Intro = styled.div`
  width: 40%;
  margin-left: 10%;
  & > h4 {
    font-size: 1.7em;
  }

  & > img {
    margin: -28px;
  }
`;

export const Explanation = styled.h4`
  margin-bottom: 0;
  margin-top: 0;
`;

const Introfacebook = () => {
  return (
    <Intro>
      <Image
        src={"/images/fbLogo.svg"}
        height={"106px"}
        width={"400px"}
        layout={"intrinsic"}
      />
      <Explanation>Facebook에서 전세계에 있는 친구, 가</Explanation>
      <Explanation>족, 지인들과 함께 이야기를 나눠보세요</Explanation>
    </Intro>
  );
};

export default Introfacebook;
