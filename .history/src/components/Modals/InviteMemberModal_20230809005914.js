import React, { useContext } from "react";
import { Form, Modal, Input } from "antd";
import { AppContext } from "../../Context/AppProvider";
import { addDocument } from "../../firebase/Services";
import { AuthContext } from "../../Context/AuthProvider";

function InviteMemberModal() {
  const { isInviteMemberVisible, setIsInviteMemberVisible } =
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

    setIsAddRoomVisible(false);
  };

  const handleCancel = () => {
    // reset data of form
    form.resetFields();
    setIsAddRoomVisible(false);
  };

  return (
    <div>
      <Modal
        title="Invite members"
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
    </div>
  );
}

export default InviteMemberModal;
