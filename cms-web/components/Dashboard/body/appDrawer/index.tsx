import React from "react";
import styled from "@emotion/styled";
import Icon from "@mdi/react";

import { mdiChevronDown } from "@mdi/js";

const appData = [
  {
    id: 1,
    logoImg: "1",
    appName: "User",
  },
  {
    id: 2,
    logoImg: "2",
    appName: "코로나19 정보 센터",
  },
  {
    id: 3,
    logoImg: "3",
    appName: "친구",
  },
  {
    id: 4,
    logoImg: "4",
    appName: "그룹",
  },
  {
    id: 5,
    logoImg: "5",
    appName: "Watch",
  },
  {
    id: 6,
    logoImg: "6",
    appName: "이벤트",
  },
  {
    id: 7,
    logoImg: "7",
    appName: "과거의 오늘",
  },
  {
    id: 8,
    logoImg: "8",
    appName: "저장됨",
  },
  {
    id: 9,
    logoImg: "9",
    appName: "페이지",
  },
  {
    id: 10,
    logoImg: "10",
    appName: "채용 정보",
  },
];

const AppListItem = (props: { appLogoImg: string; appName: string }) => {
  const { appLogoImg, appName } = props;

  return (
    <AppListItemDiv>
      <AppListItemLogo>{appLogoImg}</AppListItemLogo>
      <AppListItemName>{appName}</AppListItemName>
    </AppListItemDiv>
  );
};

const AppListItemDiv = styled.section`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 52px;
  border-radius: 8px 0 0 8px;
  padding-left: 8px;
  transition: 0.12s all ease-in-out;

  &:hover {
    background-color: rgb(228, 230, 232);
  }
`;
const AppListItemLogo = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: skyblue;
  text-align: center;
  line-height: 32px;

  margin-right: 10px;
`;
const AppListItemName = styled.div`
  font-size: 0.85rem;
`;

const AppDrawer = () => {
  return (
    <AppDrawerDiv>
      {appData.map(appItem => (
        <AppListItem
          appLogoImg={appItem.logoImg}
          appName={appItem.appName}
          key={appItem.id}
        />
      ))}
      <SeeMoreAppDiv>
        <SeeMoreAppLogo>
          <Icon path={mdiChevronDown} color="rgb(101, 103, 107)" size={1} />
        </SeeMoreAppLogo>
        <SeeMoreAppName>더 보기</SeeMoreAppName>
      </SeeMoreAppDiv>

      <hr />
    </AppDrawerDiv>
  );
};

const AppDrawerDiv = styled.div`
  width: 350px;
  height: 100%;
  padding: 16px 10px;
`;

const SeeMoreAppDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 52px;
  border-radius: 8px 0 0 8px;
  padding-left: 8px;

  &:hover {
    background-color: rgb(228, 230, 232);
  }
`;

const SeeMoreAppLogo = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: rgb(228, 230, 235);
  text-align: center;
  line-height: 34px;

  margin-right: 10px;
`;

const SeeMoreAppName = styled.div`
  font-size: 0.85rem;
`;

export default AppDrawer;
