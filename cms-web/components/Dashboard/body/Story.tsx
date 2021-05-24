/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const storyCss = css`
  width: 107px;
  height: 190px;

  .story {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: rgb(228, 230, 235);

    .story-img {
      width: 64px;
      height: 64px;
      padding: 12px;

      > div {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: rgb(216, 218, 223);
      }
    }
  }
`;

const Story = () => {
  return (
    <div css={storyCss}>
      <div className="story">
        <div className="story-img">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Story;
