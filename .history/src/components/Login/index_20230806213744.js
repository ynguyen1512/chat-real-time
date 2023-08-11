import React from "react";
import { Row, Col, Button, Typography } from "antd";
import firebase, { auth } from "../../firebase/config";

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();

function Login() {
  const handleFbLogin = async () => {
    const data = await auth.signInWithPopup(fbProvider);
    console.log({ data });
  };

  return (
    <div>
      <Row justify="center" style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={3}>
            Fun Chat
          </Title>
          <Button style={{ width: "100%", marginBottom: 5 }}>
            Login by Google
          </Button>
          <Button style={{ width: "100%" }} onClick={handleFbLogin}>
            Login by Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
