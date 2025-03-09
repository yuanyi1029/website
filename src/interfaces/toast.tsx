type ToastType = "success" | "error"; 

interface ToastProps {
  type: ToastType; 
  title: string;
  description: string;
}

export default ToastProps;