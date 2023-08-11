import { Avatar, Button, Typography } from "antd";
import { styled } from "styled-components";

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83) .username {
    color: white;
    margin-left: 5px;
  }
`;

function UserInfo() {
  return (
    <WrapperStyled>
      <div>
        <div>
          <Avatar>A</Avatar>
          <Typography.Text className="username">ABC</Typography.Text>
        </div>
        <Button>Log out</Button>
      </div>
    </WrapperStyled>
  );
}

export default UserInfo;
