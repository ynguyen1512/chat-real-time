import { Collapse, Typography } from "antd";
import { styled } from "styled-components";

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }
  }
`;

function RoomList() {
  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header="Lists Of Room">
        <Typography.Link>Room 1</Typography.Link>
        <Typography.Link>Room 2</Typography.Link>
        <Typography.Link>Room 3</Typography.Link>
        <Typography.Link>Room 4</Typography.Link>
      </PanelStyled>
    </Collapse>
  );
}

export default RoomList;
