import { Collapse, Typography } from "antd";

const { Panel } = Collapse;

function RoomList() {
  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <Panel header="Lists Of Room">
        <Typography.Link>Room 1</Typography.Link>
        <Typography.Link>Room 2</Typography.Link>
        <Typography.Link>Room 3</Typography.Link>
        <Typography.Link>Room 4</Typography.Link>
      </Panel>
    </Collapse>
  );
}

export default RoomList;
