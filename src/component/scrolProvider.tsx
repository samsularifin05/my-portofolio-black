/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useRef,
  ReactNode,
  RefObject,
  useState
} from "react";

interface ScrollContextProps {
  aboutMeRef: RefObject<HTMLDivElement>;
  skillsRef: RefObject<HTMLDivElement>;
  experienceRef: RefObject<HTMLDivElement>;
  projectRef: RefObject<HTMLDivElement>;
  contactMeRef: RefObject<HTMLDivElement>;
  testimoniRef: RefObject<HTMLDivElement>;
  scrollToPage: (page: string, yOffset?: number) => void;
  scrollToHome: () => void;
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactMeRef = useRef<HTMLDivElement>(null);
  const testimoniRef = useRef<HTMLDivElement>(null);

  const [lastPage, setLastPage] = useState<string | null>(null);

  const scrollToPage = (page: string, yOffset = -100) => {
    let ref: RefObject<HTMLDivElement> | null = null;
    switch (page) {
      case "aboutMe":
        ref = aboutMeRef;
        break;
      case "skills":
        ref = skillsRef;
        break;
      case "experience":
        ref = experienceRef;
        break;
      case "project":
        ref = projectRef;
        break;
      case "contactMe":
        ref = contactMeRef;
        break;
      case "testimoni":
        ref = testimoniRef;
        break;
      default:
        break;
    }

    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      if (page !== lastPage) {
        setLastPage(page);
        setLastPage(null);
      } else {
        const currentScrollY = window.scrollY;
        window.scrollBy({ top: currentScrollY - yOffset, behavior: "smooth" });
        setLastPage(null);
      }
    }
  };

  const scrollToHome = () => {
    if (document.body) {
      document.body.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setLastPage(null);
  };

  return (
    <ScrollContext.Provider
      value={{
        aboutMeRef,
        skillsRef,
        experienceRef,
        projectRef,
        contactMeRef,
        testimoniRef,
        scrollToPage,
        scrollToHome // Sertakan scrollToHome di dalam value provider
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = (): ScrollContextProps => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
