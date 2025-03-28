type LanguageType = "Java" | "TypeScript" | "JavaScript" | "Python" | "C"; 
type FrontendType = "HTML" | "CSS" | "React" | "Tailwind CSS";
type BackendType = "SpringBoot" | "Django" | "NodeJS" | "MySQL" | "MongoDB" | "Postman";
type ToolType = "Git" | "Linux" | "VS Code" | "IntelliJ";

type StackType = LanguageType | FrontendType | BackendType | ToolType;

export type { StackType };