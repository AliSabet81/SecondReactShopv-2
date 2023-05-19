import { ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{

}
const Button = (props:IButton) => {
    return(
        <button {...props} className={`${props.className} bg-primary rounded-full text-white font-medium flex items-center justify-center`}>{props.children}</button>
    )
}
 
export default Button;