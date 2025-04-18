interface ContactForm {
  // Enables the casting of ContactForm to Record<string, string>
  [key: string]: string;
  name: string; 
  email: string; 
  message: string; 
}

export type { ContactForm };