import { Avatar } from "antd";

function Message({ text, displayName, createAt, photoURL }) {
  return (
    <div>
      <Avatar src={photoURL}>A</Avatar>
    </div>
  );
}

export default Message;
