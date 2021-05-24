/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";

import LinkButton from "components/Common/LinkButton";
import CommonButton from "components/Common/CommonButton";

import { useRouter } from "next/router";

import ProfileLinkSet from "core/ProfileLink";

import { FBsecondary } from "components/Common/CommonStyle";
import { css } from "@emotion/react";

const LNBWrapper = css`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${FBsecondary};

  > div {
    display: flex;
    align-items: center;
  }

  > div:last-of-type {
    > button:first-of-type {
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 1250px) {
    width: 100%;
  }
`;

const url = "/profile";

const LNB: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    const isNum = /[0-9]/;
    let path = router.asPath.split("/").pop();
    if (path !== "[...profile]") {
      // FIXME: 아래 path === "profile"은 id로 접근하는 로직 완성되면 지우기
      if (+path.match(isNum) || path === "profile") {
        path = "";
      }
      setCurrentPath(path);
    }
  }, [router.asPath]);

  const handleLinkButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(e.currentTarget.href);
  };

  const handleMakeStoryButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    console.log("스토리 만들기");
  };

  const handleProfileEditButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    console.log("프로필 편집");
  };

  return (
    <nav css={LNBWrapper}>
      <div>
        {ProfileLinkSet.map((link, idx) => (
          <LinkButton
            key={`${idx}-${link.href}`}
            href={`${url}/1/${link.href}`}
            onClick={handleLinkButtonClick}
            isFocus={currentPath === link.href && true}
          >
            {link.children}
          </LinkButton>
        ))}
      </div>
      <div>
        <CommonButton theme="main" onClick={handleMakeStoryButtonClick}>
          스토리 만들기
        </CommonButton>
        <CommonButton theme="secondary" onClick={handleProfileEditButtonClick}>
          프로필 편집
        </CommonButton>
      </div>
    </nav>
  );
};

export default LNB;
