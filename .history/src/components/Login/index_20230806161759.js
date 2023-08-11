import React from "react";
import { Row, Col, Button, Typography } from "antd";
import firebase, { auth } from "../../firebase/config";
const { Title } = Typography;
import {} from "react-router-dom";

const fbProvider = new firebase.auth.FacebookAuthProvider();

function Login() {
  const history = use;

  const handleFbLogin = () => {
    auth.signInWithPopup(fbProvider);
  };

  //   After login sucessfully
  auth.onAuthStateChanged((user) => {
    console.log({ user });
    if (user) {
      history.push("/");
    }
  });
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
          <Button style={{ width: "100%" }} onClick={handleFbLogin}>
            Đăng nhập bằng Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
