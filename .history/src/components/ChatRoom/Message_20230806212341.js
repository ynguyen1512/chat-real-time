import { Avatar, Typography } from "antd";
import { styled } from "styled-components";

const WrapperStyled = styled.div`
  margin-bottom: 10px;
  .author {
    margin-left: 5px;
    font-weight: bold;
  }
`;

function Message({ text, displayName, createAt, photoURL }) {
  return (
    <WrapperStyled>
      <div>
        <Avatar src={photoURL}>A</Avatar>
        <Typography.Text className="author">{displayName}</Typography.Text>
        <Typography.Text>{createAt}</Typography.Text>
      </div>
      <div>
        <Typography.Text>{text}</Typography.Text>
      </div>
    </WrapperStyled>
  );
}

export default Message;
