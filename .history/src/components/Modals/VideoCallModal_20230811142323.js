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
  const { isVideoCallVisible, setIsVideoCallVisible } = useContext(AppContext);

  const handleVideoCall = () => {};
  const handleOk = async () => {
    //add new room to firestore
    // addDocument("rooms", { ...form.getFieldsValue(), members: [uid] });

    setIsVideoCallVisible(false);
  };

  const handleCancel = () => {
    setIsVideoCallVisible(false);
  };
  return (
    <div>
      <Modal
        title="Video Call"
        visible={isVideoCallVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </div>
  );
}

export default VideoCallModal;
