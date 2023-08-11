import { Avatar, Button, Tooltip } from "antd";
import { styled } from "styled-components";
import { UserAddOutlined } from "@ant-design/icons";

const HeaderStyled = styled.div``;

const ContentStyled = styled.div``;

function ChatWindow() {
  return (
    <div>
      <HeaderStyled>
        <div>
          <p>Room 1</p>
          <span>This is room 1</span>
        </div>
        <div>
          <Button icon={<UserAddOutlined />}>Invite</Button>
          <Avatar.Group>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>
            <Tooltip title="B">
              <Avatar>B</Avatar>
            </Tooltip>
            <Tooltip title="C">
              <Avatar>C</Avatar>
            </Tooltip>
          </Avatar.Group>
        </div>
      </HeaderStyled>
      <ContentStyled></ContentStyled>
    </div>
  );
}

export default ChatWindow;
