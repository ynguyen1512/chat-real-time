import { Form, Input, Modal } from "antd";

function AddRoomModal() {
  return (
    <Modal>
      <Form>
        <Form.Item label="Room name" name="name">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default AddRoomModal;
