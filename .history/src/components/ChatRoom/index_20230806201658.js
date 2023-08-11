import { Row, Col } from "antd";
function ChatRoom() {
  return (
    <Row>
      {/* Total is 24 column */}
      <Col span={6}></Col>
      <Col span={18}></Col>
    </Row>
  );
}

export default ChatRoom;
