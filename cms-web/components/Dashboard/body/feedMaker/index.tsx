/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

import Icon from "@mdi/react";
import { mdiVideo, mdiImageMultiple, mdiEmoticonOutline } from "@mdi/js";

const feedMaker = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 123px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  margin-bottom: 16px;

  padding: 12px 16px 10px 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  .make-feed {
    display: flex;
    width: 100%;
    height: 40px;

    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      margin-right: 8px;

      background-color: lightpink;
    }

    .input-box {
      width: 100%;
      height: 100%;
      padding: 8px 12px;
      background-color: rgb(240, 242, 245);
      border-radius: 20px;
      cursor: pointer;
      transition: 0.12s all ease-in-out;
      font-size: 0.95rem;
      color: rgb(101, 103, 107);

      &:hover {
        background-color: rgb(228, 230, 232);
      }
    }
  }

  .feed-options {
    display: flex;
    margin-top: 12px;
    border-top: 1px solid #e5e5e5;
    height: 48px;
    padding-top: 8px;

    .option {
      width: 33.3%;
      height: 100%;
      padding: 8px 0;
      text-align: center;
      font-size: 0.9rem;
      font-weight: bold;
      color: rgb(101, 103, 107);

      cursor: pointer;
      border-radius: 8px;
      transition: 0.12s all ease-in-out;

      &:hover {
        background-color: rgb(242, 242, 242);
      }

      .icon {
        margin-right: 8px;
      }
    }
  }
`;

const FeedMaker = () => {
  return (
    <article css={feedMaker}>
      <div className="make-feed">
        <div className="user-avatar"></div>
        <div className="input-box">유저님, 무슨 생각을 하고 계신가요?</div>
      </div>
      <div className="feed-options">
        <div className="option">
          <Icon
            className="icon"
            path={mdiVideo}
            color="rgb(228, 38, 69)"
            size={1}
          />
          라이브 방송
        </div>
        <div className="option">
          <Icon
            className="icon"
            path={mdiImageMultiple}
            color="rgb(69, 189, 98)"
            size={1}
          />
          사진/동영상
        </div>
        <div className="option">
          <Icon
            className="icon"
            path={mdiEmoticonOutline}
            color="rgb(247, 185, 40)"
            size={1}
          />
          기분/활동
        </div>
      </div>
    </article>
  );
};

export default FeedMaker;
