import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography } from "antd";
import { styled } from "styled-components";
import useFirestore from "../../hooks/useFirestore";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const { Panel } = Collapse;

// Style component
const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }

    .ant-collapse-content-box {
      padding: 0 40px;
    }

    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

function RoomList() {
  const {
    user: { uid },
  } = useContext(AuthContext);
  const rooms = useFirestore("rooms", {
    fieldName: "members",
    operator: "array-contains",
    compareValue: "current uid",
  });
  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header="Lists Of Room">
        <LinkStyled>Room 1</LinkStyled>
        <LinkStyled>Room 2</LinkStyled>
        <LinkStyled>Room 3</LinkStyled>
        <LinkStyled>Room 4</LinkStyled>
        <Button type="text" icon={<PlusSquareOutlined />} className="add-room">
          Add Room
        </Button>
      </PanelStyled>
    </Collapse>
  );
}

export default RoomList;
