import React, { useContext } from "react";
import { Form, Modal, Input, Popconfirm, Button, Select } from "antd";
import { AppContext } from "../../Context/AppProvider";
import { addDocument } from "../../firebase/Services";
import { AuthContext } from "../../Context/AuthProvider";
import useFirestore from "../../hooks/useFirestore";

function RemoveRoomModal() {
  const { isRemoveRoomVisible, setIsRemoveRoomVisible } =
    useContext(AppContext);
  const {
    user: { uid },
  } = useContext(AuthContext);
  const [form] = Form.useForm();

  // const { removeDocument } = useFirestore("rooms");

  const handleOk = async () => {
    //add new room to firestore
    // addDocument("rooms", { ...form.getFieldsValue(), members: [uid] });

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
        {/* <Form form={form} layout="vertical">
          <Form.Item
            label="Input room name that you want to remove"
            name="name"
          >
            <Input placeholder="Input here..." />
          </Form.Item>
        </Form> */}
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "jack", label: "Jack" },
            { value: "lucy", label: "Lucy" },
            { value: "Yiminghe", label: "yiminghe" },
            { value: "disabled", label: "Disabled", disabled: true },
          ]}
        />
      </Modal>
    </div>
  );
}

export default RemoveRoomModal;
