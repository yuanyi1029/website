import { MdCheckCircle, MdCancel } from "react-icons/md";
import Alert from "../interfaces/alert"; 

const Toast: React.FC<Alert> = ({ type, title, description }) => { 
  return (
    <div className="flex gap-4 items-center bg-white">
      {
        type === "success" ? 
        <MdCheckCircle className="text-[2rem] text-green-500 bg-white"/> :
        <MdCancel  className="text-[2rem] text-red-500 bg-white"/>
      }
      <div className="bg-white">
        <h4 className="text-black bg-white">{ title }</h4>
        <p className="text-black bg-white">{ description }</p>
      </div>
    </div>
  )
}

export default Toast;