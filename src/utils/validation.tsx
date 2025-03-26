const validateEmptySpaces: (value: string) => boolean = (value) => {
  if (value.trim() === "") {
    return false; 
  }
  return true;
}

export { validateEmptySpaces }; 