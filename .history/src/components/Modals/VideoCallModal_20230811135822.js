import { styled } from "styled-components";

const ContentStyled = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

function VideoCallModal() {
    const {
        
        setIsVideoCallVisible,
      } = useContext(AppContext);

    const handleVideoCall() => {

    }
  return (
    <div>
      <ContentStyled>
        <h1>Video Call</h1>
      </ContentStyled>
    </div>
  );
}

export default VideoCallModal;
