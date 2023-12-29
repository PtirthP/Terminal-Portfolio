import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Email: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");


  // send an email
  if (rerender && currentCommand[0] === "email" && currentCommand.length <= 1) {
    // Replace "tirthpatel7923@gmail.com", "Subject", and "Body" with appropriate values
    var to = encodeURIComponent("tirthpatel7923@gmail.com");
    var subject = encodeURIComponent("Subject");
    var body = encodeURIComponent("Body");
  
    // Construct the Gmail URL with the "to", "subject", and "body" parameters
    var gmailUrl = "https://mail.google.com/mail/?view=cm&to=" + to;
  
    // Open the Gmail URL in a new tab or window
    window.open(gmailUrl, "_blank");
  }
  
  

  return (
    <Wrapper>
      <span>tirthpatel7923@gmail.com</span>
    </Wrapper>
  );
};

export default Email;
