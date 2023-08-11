import React, { useContext, useMemo, useState } from "react";
import { Avatar, Form, Modal, Select, Spin } from "antd";
import { AppContext } from "../../Context/AppProvider";
import { addDocument } from "../../firebase/Services";
import { AuthContext } from "../../Context/AuthProvider";
import { debounce } from "lodash";

function DebounceSelect({ fetchOptions, debounceTimeout = 300, ...props }) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then((newOptions) => {
        setOptions(newOptions);
        setFetching(false);
      });
    };
    return debounce(loadOptions, debounceTimeout);
  }, [debounceTimeout, fetchOptions]);

  return (
    <Select
      labelInValue
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
    >
      {options.map((opt) => (
        <Select.Option>
          <Avatar size="small" src={opt.photoURL}>
            {opt.photoURL ? "" : opt.label?.charAt(0)?.toUpperCase()}
          </Avatar>
          {` ${opt.label}`}
        </Select.Option>
      ))}
    </Select>
  );
}

async function fetchUserList() {}

function InviteMemberModal() {
  const { isInviteMemberVisible, setIsInviteMemberVisible } =
    useContext(AppContext);
  const {
    user: { uid },
  } = useContext(AuthContext);
  const [value, setValue] = useState([]);
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
          <DebounceSelect
            mode="multiple"
            label="Members Name"
            value={value}
            placeholder="Input member name"
            fetchOptions={fetchUserList}
            onChange={(newValue) => setValue(newValue)}
            style={{ width: "100%" }}
          />
        </Form>
      </Modal>
    </div>
  );
}

export default InviteMemberModal;
