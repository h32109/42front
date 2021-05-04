import styled from "@emotion/styled";
import AppDrawer from "components/body/appDrawer";
import FriendDrawer from "components/body/friendDrawer";

const Body = () => {
  return (
    <BodyDiv>
      <AppDrawer />
      <BodyContent>This is real body</BodyContent>
      <FriendDrawer />
    </BodyDiv>
  );
};

const BodyDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 94%;
  width: 100%;

  background-color: rgb(240, 242, 245);
`;

const BodyContent = styled.div``;

export default Body;
