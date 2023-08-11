import { useContext } from "react";
import { styled } from "styled-components";
import { AppContext } from "../../Context/AppProvider";
import { Modal } from "antd";

const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

function VideoCallModal() {
  const { setIsVideoCallVisible } = useContext(AppContext);

  const handleVideoCall = () => {};
  return (
    <div>
      <Modal
        title="Delete Room"
        visible={isRemoveRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Select
          style={{ width: 200 }}
          // Set the selected room ID in state when an option is selected
          onChange={(value) => setSelectedRoomId(value)}
        >
          {rooms.map((room) => (
            <Select.Option key={room.id} value={room.id}>
              {room.name}
            </Select.Option>
          ))}
        </Select>
      </Modal>
    </div>
  );
}

export default VideoCallModal;
