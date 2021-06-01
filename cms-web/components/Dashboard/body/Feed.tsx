/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

import Icon from "@mdi/react";
import {
  mdiThumbUpOutline,
  mdiMessageOutline,
  mdiShareOutline,
  mdiEmoticonHappyOutline,
  mdiCameraEnhanceOutline,
  mdiGif,
  mdiStickerEmoji,
} from "@mdi/js";

const feedCss = css`
  width: 100%;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  margin-bottom: 400px;

  .feed-info {
    display: flex;
    width: 100%;
    height: 48px;
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

  .feed-actions {
    .buttons-wrapper {
      display: flex;
      border-top: 1px solid grey;
      border-bottom: 1px solid grey;
      margin: 0 12px;
      padding: 4px;

      > div {
        display: flex;
        justify-content: center;
        flex: auto;
        padding: 6px 2px;
        font-size: 0.85rem;
        cursor: pointer;
        transition: 0.15s all ease-in-out;
        border-radius: 10px;

        &:hover {
          background-color: rgb(242, 242, 242);
        }

        .icon {
          margin-right: 8px;
        }
      }
    }
  }

  .write-reply {
    display: flex;
    padding: 10px;
    align-items: center;

    .my-image {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 10px;

      background-color: lightpink;
    }

    .input-box {
      display: flex;
      align-items: center;
      flex: auto;
      height: 36px;
      background-color: rgb(240, 242, 245);
      border-radius: 20px;
      padding: 0 12px;

      input {
        width: 100%;
        border: none;
        background-color: rgba(255, 255, 255, 0);
        height: 100%;
        outline: none;

        font-size: 0.9rem;
      }

      .reply-btns {
        display: flex;

        > div {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 35px;
          height: 35px;
          cursor: pointer;
          border-radius: 50%;

          &:hover {
            background-color: rgb(228, 230, 232);
          }
        }
      }
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
          <div className="like-button">
            <Icon
              className="icon"
              path={mdiThumbUpOutline}
              color="rgb(101, 103, 107)"
              size={1}
            />
            좋아요
          </div>
          <div className="reply-button">
            <Icon
              className="icon"
              path={mdiMessageOutline}
              color="rgb(101, 103, 107)"
              size={1}
            />
            댓글 달기
          </div>
          <div className="share-button">
            <Icon
              className="icon"
              path={mdiShareOutline}
              color="rgb(101, 103, 107)"
              size={1}
            />
            공유 하기
          </div>
        </div>
      </div>

      <div className="write-reply">
        <div className="my-image"></div>
        <div className="input-box">
          <input type="text" placeholder="댓글을 입력하세요..." />
          <div className="reply-btns">
            <div className="add-emoji">
              <Icon
                className="icon"
                path={mdiEmoticonHappyOutline}
                color="rgb(101, 103, 107)"
                size={0.8}
              />
            </div>

            <div className="add-image">
              <Icon
                className="icon"
                path={mdiCameraEnhanceOutline}
                color="rgb(101, 103, 107)"
                size={0.8}
              />
            </div>

            <div className="add-gif">
              <Icon
                className="icon"
                path={mdiGif}
                color="rgb(101, 103, 107)"
                size={0.8}
              />
            </div>

            <div className="add-sticker">
              <Icon
                className="icon"
                path={mdiStickerEmoji}
                color="rgb(101, 103, 107)"
                size={0.8}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="feed-replies"></div>
    </article>
  );
};

export default Feed;
