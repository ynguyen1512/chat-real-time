import React from "react";
import { Row, Col, Button } from "antd";
import Title from "antd/es/skeleton/Title";

function Login() {
  return (
    <div>
      <Row>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={3}>
            Fun Chat
          </Title>
          <Button style={{ width: "100%", marginBottom: 5 }}>
            Log In by Google
          </Button>
          <Button style={{ width: "100%", marginBottom: 5 }}>
            Log In by Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
