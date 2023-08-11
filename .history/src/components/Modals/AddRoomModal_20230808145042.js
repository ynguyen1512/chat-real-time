import { Form, Input, Modal } from "antd";

function AddRoomModal() {
  const handleOk = () => {};

  const handleOk = () => {};

  return (
    <Modal
      title="Create Room"
      visible={false}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form>
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
