import { useContext } from "react";
import { styled } from "styled-components";
import { AppContext } from "../../Context/AppProvider";
import { Modal } from "antd";
import ScreenVideoCall from "./ScreenVideoCall";

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
        title="Video is calling"
        visible={isVideoCallVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ScreenVideoCall />
      </Modal>
    </div>
  );
}

export default VideoCallModal;
