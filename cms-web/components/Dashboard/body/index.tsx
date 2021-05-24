/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import AppDrawer from "components/Dashboard/body/appDrawer";
import FriendDrawer from "components/Dashboard/body/friendDrawer";
import FeedMaker from "components/Dashboard/body/feedMaker";
import Story from "components/Dashboard/body/Story";
import Feed from "components/Dashboard/body/Feed";

const bodyCss = css`
  display: flex;
  justify-content: space-between;
  height: 94%;
  width: 100%;
  overflow: auto;

  background-color: rgb(240, 242, 245);

  .body-content {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    width: 680px;

    .stories {
      display: flex;
      justify-content: space-between;
      height: 221px;
      padding: 8px 0 24px 0;
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
        <FeedMaker />
        <Feed />
      </div>
      <FriendDrawer />
    </section>
  );
};

export default Body;
