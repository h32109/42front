import React from "react";
import styled from "@emotion/styled";

import Header from "components/Dashboard/header";
import Body from "components/Dashboard/body";

const dashboard = () => {
  return (
    <DashboardDiv>
      <Header />
      <Body />
    </DashboardDiv>
  );
};

const DashboardDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export default dashboard;
