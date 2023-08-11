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
      <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        visible={isRemoveRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Button danger>Delete</Button>
      </Popconfirm>
    </div>
  );
}

export default RemoveRoomModal;
