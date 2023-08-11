import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography } from "antd";
import { styled } from "styled-components";
import AppContext from "antd/es/app/context";
import { useContext, useMemo } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import useFirestore from "../../hooks/useFirestore";

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
  const { rooms } = useContext(AppContext);
  // const {
  //   user: { uid },
  // } = useContext(AuthContext);

  // const roomsCondition = useMemo(() => {
  //   return {
  //     fieldName: "members",
  //     operator: "array-contains",
  //     compareValue: uid,
  //   };
  // }, [uid]);

  // const rooms = useFirestore("rooms", roomsCondition);
  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header="Lists Of Room" key="1">
        {rooms.map((room) => (
          <LinkStyled key={room.id}>{room.name}</LinkStyled>
        ))}
        <Button type="text" icon={<PlusSquareOutlined />} className="add-room">
          Add Room
        </Button>
      </PanelStyled>
    </Collapse>
  );
}

export default RoomList;
