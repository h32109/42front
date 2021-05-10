/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import AppDrawer from "components/Dashboard/body/appDrawer";
import FriendDrawer from "components/Dashboard/body/friendDrawer";
import PostMaker from "components/Dashboard/body/postMaker";
import Story from "./Story";

const bodyCss = css`
  display: flex;
  justify-content: space-between;
  height: 94%;
  width: 100%;

  background-color: rgb(240, 242, 245);

  .body-content {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    width: 680px;

    .stories {
      display: flex;
      justify-content: space-between;
      margin-top: 8px;
      height: 221px;
    }
  }
`;

const Body = () => {
  return (
    <section css={bodyCss}>
      <AppDrawer />
      <div className="body-content">
        <div className="stories">
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
          <Story />
        </div>
        <PostMaker />
      </div>
      <FriendDrawer />
    </section>
  );
};

export default Body;
