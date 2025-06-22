type LanguageType = "Java" | "TypeScript" | "JavaScript" | "Python" | "C"; 
type FrontendType = "HTML" | "CSS" | "ReactJS" | "Tailwind CSS" | "Streamlit";
type BackendType = "SpringBoot" | "Django" | "NodeJS" | "MySQL" | "MongoDB" | "Postman";
type AiType = "PyTorch" | "TensorFlow";
type ToolType = "Git" | "Linux" | "VS Code" | "IntelliJ";

type StackType = LanguageType | FrontendType | BackendType | AiType | ToolType;

export type { StackType };