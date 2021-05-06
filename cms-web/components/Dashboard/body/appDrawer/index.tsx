import React from "react";
import styled from "@emotion/styled";

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

const AppListItemDiv = styled.div`
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
    </AppDrawerDiv>
  );
};

const AppDrawerDiv = styled.div`
  width: 350px;
  height: 100%;
  padding: 16px 10px;
`;

export default AppDrawer;
