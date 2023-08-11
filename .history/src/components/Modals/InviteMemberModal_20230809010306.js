import React, { useContext, useState } from "react";
import { Form, Modal, Select } from "antd";
import { AppContext } from "../../Context/AppProvider";
import { addDocument } from "../../firebase/Services";
import { AuthContext } from "../../Context/AuthProvider";

function DebounceSelect({fetchOptions, debounceTimeout = 300, ...props}) {

    const [fetchine, setFetchine] = useState(false);
    const [options, setOptions] = useState([])

}

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
          <
        </Form>
      </Modal>
    </div>
  );
}

export default InviteMemberModal;
