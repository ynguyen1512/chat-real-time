import { styled } from "styled-components";

const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

function VideoCallModal() {
  return (
    <div>
      <ContentStyled>Hello</ContentStyled>
    </div>
  );
}

export default VideoCallModal;
