import { Form, Input, Modal } from "antd";
import { AppContext } from "../../Context/AppProvider";
import { useContext, useState } from "react";

function AddRoomModal() {
  const [isAddRoomVisible, setIsAddRoomVisible] = useContext(AppContext);
  const [form] = Form.useForm();

  const handleOk = () => {
    //add new room to firestore

    setIsAddRoomVisible(false);
  };

  const handleCancel = () => {
    setIsAddRoomVisible(false);
  };

  return (
    <Modal
      title="Create Room"
      open={isAddRoomVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form}>
        <Form.Item label="Room name" name="name">
          <Input placeholder="Input room name" />
        </Form.Item>
        <Form.Item label="Description" name="description">
          <Input.TextArea placeholder="Input room desc" />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddRoomModal;
