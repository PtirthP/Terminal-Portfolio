import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>terminal.tirthpatel.space</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
