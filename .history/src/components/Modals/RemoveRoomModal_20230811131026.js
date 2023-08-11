import React, { useContext } from "react";
import { Form, Modal, Input, Popconfirm, Button, Select } from "antd";
import { AppContext } from "../../Context/AppProvider";
import { addDocument } from "../../firebase/Services";
import { AuthContext } from "../../Context/AuthProvider";
import useFirestore from "../../hooks/useFirestore";
import { Button, Collapse, Typography } from "antd";
import { styled } from "styled-components";

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

function RemoveRoomModal() {
  const { isRemoveRoomVisible, setIsRemoveRoomVisible, rooms } =
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
          // onChange={handleChange}
          options={[
            // { value: "jack", label: "Jack" },
            // { value: "lucy", label: "Lucy" },
            // { value: "Yiminghe", label: "yiminghe" },
            // { value: "disabled", label: "Disabled", disabled: true },
            {rooms.map((room) => (
              <LinkStyled key={room.id} onClick={() => setSelectedRoomId(room.id)}>
                {room.name}
              </LinkStyled>
            ))}
          ]}
        />
      </Modal>
    </div>
  );
}

export default RemoveRoomModal;
