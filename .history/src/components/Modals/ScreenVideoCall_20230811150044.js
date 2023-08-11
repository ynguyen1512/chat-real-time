import {
  AudioMutedOutlined,
  CloseCircleFilled,
  VideoCameraFilled,
} from "@ant-design/icons";
import { styled } from "styled-components";

const ContentStyled = styled.div`
  max-width: 700px;
  height: 400px
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
  .screen__display-img {
    width: 500px;
    height: 300px;
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
        <button className="record-btn">
          <VideoCameraFilled />
        </button>
        <button className="mute-btn">
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
