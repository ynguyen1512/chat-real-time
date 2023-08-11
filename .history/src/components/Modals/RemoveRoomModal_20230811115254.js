import React, { useContext } from "react";
import { Form, Modal, Input, Popconfirm, Button } from "antd";
import { AppContext } from "../../Context/AppProvider";
import { addDocument } from "../../firebase/Services";
import { AuthContext } from "../../Context/AuthProvider";

function RemoveRoomModal() {
  const { isRemoveRoomVisible, setIsRemoveRoomVisible } =
    useContext(AppContext);
  const {
    user: { uid },
  } = useContext(AuthContext);
  const [form] = Form.useForm();

  const handleOk = () => {
    //add new room to firestore
    addDocument("rooms", { ...form.getFieldsValue(), members: [uid] });

    // reset data of form
    form.resetFields();

    setIsRemoveRoomVisible(false);
  };

  const handleCancel = () => {
    // reset data of form
    form.resetFields();
    setIsRemoveRoomVisible(false);
  };

  return (
    <div>
      <Modal
        title="Delete Room"
        visible={isRemoveRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Room name" name="name">
            <Input placeholder="Input room name that you want to remove" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default RemoveRoomModal;
