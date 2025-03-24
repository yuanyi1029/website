type AlertType = "success" | "error"; 

interface Alert {
  type: AlertType; 
  title: string;
  description: string;
}

export default Alert;