import { Row, Col } from "antd";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";
function ChatRoom() {
  return (
    <Row>
      {/* Total is 24 column */}
      <Col span={6}>
        <Sidebar />
      </Col>
      <Col span={18}>
        <ChatWindow />
      </Col>
    </Row>
  );
}

export default ChatRoom;
