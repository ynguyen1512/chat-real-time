import { MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography } from "antd";
import { styled } from "styled-components";
import { AppContext } from "../../Context/AppProvider";
import React, { useContext, useMemo } from "react";
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

    .button-wrapper {
      .add-room {
        display: block;
      }
      .add-room,
      .remove-room {
        color: white;
        padding: 0;
      }
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
    rooms,
    setIsAddRoomVisible,
    setIsRemoveRoomVisible,
    setSelectedRoomId,
  } = useContext(AppContext);

  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };

  const handleRemoveRoom = () => {
    setIsRemoveRoomVisible(true);
  };

  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <PanelStyled header="Lists Of Room" key="1">
        {rooms.map((room) => (
          <LinkStyled key={room.id} onClick={() => setSelectedRoomId(room.id)}>
            {room.name}
          </LinkStyled>
        ))}
        <div className="button-wrapper">
          <Button
            type="text"
            icon={<PlusSquareOutlined />}
            className="add-room"
            onClick={handleAddRoom}
          >
            Add Room
          </Button>
          <Button
            type="text"
            icon={<MinusSquareOutlined />}
            className="remove-room"
            onClick={handleAddRoom}
          >
            Remove Room
          </Button>
        </div>
      </PanelStyled>
    </Collapse>
  );
}

export default RoomList;
