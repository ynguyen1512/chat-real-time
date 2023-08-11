import { Avatar, Typography } from "antd";

function Message({ text, displayName, createAt, photoURL }) {
  return (
    <div>
      <div>
        <Avatar src={photoURL}>A</Avatar>
        <Typography.Text>{displayName}</Typography.Text>
        <Typography.Text>{createAt}</Typography.Text>
      </div>
      <div>
        <Typography.Text>{text}</Typography.Text>
      </div>
    </div>
  );
}

export default Message;
