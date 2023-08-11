import { Avatar, Button, Tooltip } from "antd";
import { styled } from "styled-components";
import { UserAddOutlined } from "@ant-design/icons";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);
`;

const ContentStyled = styled.div``;

function ChatWindow() {
  return (
    <div>
      <HeaderStyled>
        <div className="header__info">
          <p className="header__title">Room 1</p>
          <span className="header__desc">This is room 1</span>
        </div>
        <div>
          <Button icon={<UserAddOutlined />}>Invite</Button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="B">
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip title="C">
              <Avatar>C</Avatar>
            </Tooltip>
            <Tooltip title="D">
              <Avatar>D</Avatar>
            </Tooltip>
          </Avatar.Group>
        </div>
      </HeaderStyled>
      <ContentStyled></ContentStyled>
    </div>
  );
}

export default ChatWindow;
