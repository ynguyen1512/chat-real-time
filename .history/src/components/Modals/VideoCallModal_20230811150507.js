import { useContext } from "react";
import { styled } from "styled-components";
import { AppContext } from "../../Context/AppProvider";
import { Modal } from "antd";
import ScreenVideoCall from "./ScreenVideoCall";

const ContentStyled = styled.div`
  height: 1000px;
  max-width: 1000px;
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
      <Modal
      style={{width: 1000px}}
        centered
        title="Video is calling"
        visible={isVideoCallVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ScreenVideoCall />
      </Modal>
  );
}

export default VideoCallModal;
