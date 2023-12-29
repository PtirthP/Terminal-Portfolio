import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
      <br />Here are some projects I have worked on.<br /> And many more to go...<br />
      ----------------------------------------------------
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Notification App - PowerApps",
    desc: "-- ACME Hospital Notification App: Empowering physicians with real-time patient visit alerts through a Microsoft Power Platform solution. 🚀",
    url: "https://github.com/PtirthP/ACME-Hospital-PowerApps",
  },
  {
    id: 2,
    title: "Meeting Schedular App - PowerApps",
    desc: "-- Comprehensive Meeting Scheduler 📅👥: Enables scheduling, submission, and editing of meetings with distinct user roles and an intuitive calendar display for efficient management.",
    url: "",
  },
  
  {
    id: 3,
    title: "🥖🥤 Wawa Food Ordering Screen Clone 📲✨",
    desc: "-- C# project mimicking Wawa's touch-screen interface with screens for hoagies, soups, drinks, and order management, including pricing, receipt display, and a dedicated finalization screen. Simplifying the ordering process with a user-friendly clone!",
    url: "https://github.com/PtirthP/Food-Ordering-System",
  },
];

export default Projects;
