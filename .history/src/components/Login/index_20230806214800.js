import React from "react";
import { Row, Col, Button, Typography } from "antd";
import firebase, { auth, db } from "../../firebase/config";

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();

function Login() {
  const handleFbLogin = async () => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(fbProvider);
    if (additionalUserInfo?.isNewUser) {
      db.collection("users").add({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.displayName,
        providerId: additionalUserInfo.providerId,
      });
    }
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
