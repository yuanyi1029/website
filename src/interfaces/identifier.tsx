type IdentifierType = "Personal" | "Academic" | "Collaborative" | "Client Work"; 

interface Identifier { 
  type: IdentifierType;
  colour: string; 
}

export default Identifier;