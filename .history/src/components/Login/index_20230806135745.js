import React from "react";
import { Row, Col, Button, Typography } from "antd";
import { auth } from "../../firebase/config";

const { Title } = Typography;

function Login() {
  const handleFbLogin = () => {
    auth.signInWithPopup();
  };
  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={3}>
            Fun Chat
          </Title>
          <Button style={{ width: "100%", marginBottom: 5 }}>
            Đăng nhập bằng Google
          </Button>
          <Button style={{ width: "100%" }}>Đăng nhập bằng Facebook</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
