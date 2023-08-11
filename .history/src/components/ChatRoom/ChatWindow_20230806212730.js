import { Avatar, Button, Form, Tooltip, Input } from "antd";
import { styled } from "styled-components";
import { UserAddOutlined } from "@ant-design/icons";
import Message from "./Message";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__title {
      margin: 0;
      font-weight: bold;
    }

    &__desc {
      font-size: 12px;
    }
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperStyled = styled.div`
  height: 100vh;
`;

const ContentStyled = styled.div``;

const MessageListStyled = styled.div``;

function ChatWindow() {
  return (
    <WrapperStyled>
      <HeaderStyled>
        <div className="header__info">
          <p className="header__title">Room 1</p>
          <span className="header__desc">This is room 1</span>
        </div>
        <ButtonGroupStyled>
          <Button icon={<UserAddOutlined />} type="text">
            Invite
          </Button>
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
        </ButtonGroupStyled>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyled>
          <Message
            text="Test"
            photoURL={null}
            displayName="Tung"
            createAt={12321321}
          />
          <Message
            text="Test"
            photoURL={null}
            displayName="Tung"
            createAt={12321321}
          />
          <Message
            text="Test"
            photoURL={null}
            displayName="Tung"
            createAt={12321321}
          />
          <Message
            text="Test"
            photoURL={null}
            displayName="Tung"
            createAt={12321321}
          />
        </MessageListStyled>
        <Form>
          <Form.Item>
            <Input />
          </Form.Item>
          <Button>Send</Button>
        </Form>
      </ContentStyled>
    </WrapperStyled>
  );
}

export default ChatWindow;
