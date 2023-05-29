import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from "react";
import { useForm } from "react-hook-form";

export interface ILoginData{
    email:string,
    password:string
}

const useLogin = () => {
    const [passwordType,setPasswordType] = useState<'password' | 'text'>('password')
    const LoginSchema = yup.object({
        email: yup.string().required().email(),
        password : yup.string().required().min(8)
    })
    const {register, handleSubmit , formState:{errors}} = useForm<ILoginData>({
        resolver : yupResolver(LoginSchema),
        mode:"onSubmit"
    })
    const handleLoginSubmit = (data:ILoginData)=>{
        console.log(data)
    }
    return {
        handleLoginSubmit,
        register,
        handleSubmit,
        errors,
        passwordType,
        setPasswordType
    };
}
 
export default useLogin;