const validateEmptyField: (
  name: string
) => { 
  required: boolean | string,
  validate: (value: string) => boolean | string 
} = (name) => {
  return {
    required: `${name} is required!`,
    validate: (value) => { 
      if (value.trim() === "") { 
        return `${name} is required!`;
      }
      return true;
    }
  }
}

export { validateEmptyField }; 