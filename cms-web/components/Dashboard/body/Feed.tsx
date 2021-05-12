/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

const feedCss = css`
  width: 100%;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  .feed-info {
    display: flex;
    width: 100%;
    height: 36px;
    padding: 12px 16px 0 16px;
    margin-bottom: 12px;

    .user-image {
      width: 40px;
      height: 40px;
      margin-right: 8px;

      border-radius: 100%;
      background-color: lightpink;
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      font-weight: bold;

      .name {
        font-size: 0.85rem;
      }

      .time {
        font-size: 0.7rem;
      }
    }
  }

  .feed-content {
    .text {
      padding: 4px 16px 16px 16px;
      font-size: 0.8rem;
    }

    .image {
      padding: 1px;
    }
  }
`;

const Feed = () => {
  return (
    <article css={feedCss}>
      <div className="feed-info">
        <div className="user-image"></div>
        <div className="wrapper">
          <div className="name">학지운</div>
          <div className="time">어제 오전 7:45</div>
        </div>
      </div>

      <div className="feed-content">
        <div className="text">
          Joel drew this panda onto a napkin, using my fountain pen. <br />
          We thought it was worth sharing.
        </div>
        <div className="image">
          <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/184371189_10101316236783417_2705178832038879361_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=BdghPhNSRVwAX8xnNxI&_nc_ht=scontent-ssn1-1.xx&oh=eb018054613da5fa8446808ee883af98&oe=60C0F2FB" />
        </div>
      </div>

      <div className="feed-actions">
        <div className="response"></div>

        <div className="buttons-wrapper">
          <div className="like-button"></div>
          <div className="reply-button"></div>
          <div className="share-button"></div>
        </div>
      </div>

      <div className="feed-replies"></div>
      <div className="write-reply">
        <div className="my-image"></div>
        <div className="input-box"></div>
      </div>
    </article>
  );
};

export default Feed;
