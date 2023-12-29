import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p><br />
        Hi, my name is <HighlightSpan>Tirth Patel</HighlightSpan>!
      </p>
      <br />
      <p>
        I'm <HighlightAlt>student at PennState University</HighlightAlt> located in Abington, Pennsylvania.
      </p><br />
      <p>
      I have a keen interest in learning about modern technology and a natural curiosity that drives me to constantly explore and learn deeply about technology, coding and much more.
      </p><br />
    </AboutWrapper>
  );
};

export default About;
