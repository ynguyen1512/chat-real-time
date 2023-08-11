import React, { useContext } from "react";
import {
  Form,
  Modal,
  Input,
  Popconfirm,
  Button,
  Select,
  Typography,
} from "antd";
import { AppContext } from "../../Context/AppProvider";
import { addDocument } from "../../firebase/Services";
import { AuthContext } from "../../Context/AuthProvider";
import useFirestore from "../../hooks/useFirestore";
import { styled } from "styled-components";

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

function RemoveRoomModal() {
  const {
    isRemoveRoomVisible,
    setIsRemoveRoomVisible,
    rooms,
    setSelectedRoomId,
  } = useContext(AppContext);
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
      console.log(rooms);
      <Modal
        title="Delete Room"
        visible={isRemoveRoomVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* <Form form={form} layout="vertical">
          <Form.Item
            label="Input room name that you want to remove"
            name="namea"
          >
            <Input placeholder="Input here..." />
          </Form.Item>
        </Form> */}
        <Select
          defaultActiveKey={["1"]}
          // defaultValue={rooms.name}
          style={{ width: 120 }}
          // onChange={handleChange}
          options={rooms.map((room) => (
            <LinkStyled
              key={room.id}
              onClick={() => setSelectedRoomId(room.id)}
            >
              {room.name}
            </LinkStyled>
          ))}
        />
      </Modal>
    </div>
  );
}

export default RemoveRoomModal;
