import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { StartScreen } from "./components/StartScreen";
import { Profile } from "./components/Profile";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: StartScreen },
      { path: "profile", Component: Profile },
      { path: "skills", Component: Skills },
      { path: "projects", Component: Projects },
      { path: "experience", Component: Experience },
      { path: "certifications", Component: Certifications },
      { path: "contact", Component: Contact },
    ],
  },
]);
