import { Row, Col } from "antd";
import UserInfo from "./UserInfo";
import RoomList from "./RoomList";

function Sidebar() {
  return (
    <Row>
      <Col span={24}>
        <UserInfo />
      </Col>
      <Col span={24}>
        <RoomList />
      </Col>
    </Row>
  );
}

export default Sidebar;
