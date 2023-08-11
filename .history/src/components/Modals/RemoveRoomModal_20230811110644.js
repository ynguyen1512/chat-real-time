import React, { useContext } from "react";
import { Form, Modal, Input, Popconfirm } from "antd";
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
        visible={isAddRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Room name" name="name">
            <Input placeholder="Input room name" />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input.TextArea placeholder="Input room desc" />
          </Form.Item>
        </Form>
      </Modal>
      {/* <Popconfirm
        title="Delete Room"
        description="Are you sure to delete this room?"
        onConfirm={handleOk}
        onCancel={handleCancel}
        visible={isRemoveRoomVisible}
      >
        <Button danger>Delete</Button>
      </Popconfirm> */}
    </div>
  );
}

export default RemoveRoomModal;
