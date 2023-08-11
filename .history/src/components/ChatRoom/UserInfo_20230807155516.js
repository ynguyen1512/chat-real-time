import { Avatar, Button, Typography } from "antd";
import { styled } from "styled-components";

import { auth, db } from "../../firebase/config";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(82, 38, 83) .username {
    color: white;
    margin-left: 5px;
  }
`;

function UserInfo() {
  // useEffect(() => {
  //   // When there is a change in this collection --> callback of onSnapshot is executed
  //   db.collection("users").onSnapshot((snapshot) => {
  //     // Convert data from firebase to javascript
  //     const data = snapshot.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     console.log({ data, snapshot, docs: snapshot.docs });
  //   });
  // }, []);

  // Get data from AuthContext through props value
  const data = useContext(AuthContext);
  console.log("data here: " + data);

  return (
    <WrapperStyled>
      <div>
        <Avatar>A</Avatar>
        <Typography.Text className="username">ABC</Typography.Text>
      </div>
      <Button ghost onClick={() => auth.signOut()}>
        Log out
      </Button>
    </WrapperStyled>
  );
}

export default UserInfo;
