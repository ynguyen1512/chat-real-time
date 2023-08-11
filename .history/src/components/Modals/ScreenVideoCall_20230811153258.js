import {
  AudioMutedOutlined,
  CloseCircleFilled,
  VideoCameraFilled,
} from "@ant-design/icons";
import { styled } from "styled-components";

const ContentStyled = styled.div`
  .screen__display-img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    width: 50%;
    width: 900px;
    height: 500px;
    margin-bottom: 10px;
  }
  .screen__button-wrapper {
    display: flex;
    justify-content: center;
    .feature-btn {
      border-radius: 5px;
      width: 40px;
      height: 40px;
      background-color: #1677ff;
      color: #fff;
      border: none;
      margin-left: 2px;
    }
    .endCall-btn {
      border-radius: 5px;
      width: 40px;
      height: 40px;
      color: #ff3b2f;
      border: 2px solid #ccc;
    }
  }
`;

function ScreenVideoCall() {
  return (
    <ContentStyled>
      <div className="screen__display">
        <img
          className="screen__display-img"
          src="https://greenwich.edu.vn/wp-content/uploads/2020/07/greenwich-lot-top-8-truong-dai-hoc-hang-dau-the-gioi.jpg"
        />
      </div>
      <div className="screen__button-wrapper">
        <button className="feature-btn">
          <VideoCameraFilled />
        </button>
        <button className="feature-btn">
          <AudioMutedOutlined />
        </button>
        <button className="endCall-btn">
          <CloseCircleFilled />
        </button>
      </div>
    </ContentStyled>
  );
}

export default ScreenVideoCall;
