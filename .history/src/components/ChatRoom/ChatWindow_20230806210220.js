import { Button } from "antd";
import { styled } from "styled-components";

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
        </div>
      </HeaderStyled>
      <ContentStyled></ContentStyled>
    </div>
  );
}

export default ChatWindow;
