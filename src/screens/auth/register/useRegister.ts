import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IRegisterData{
    email:string,
    password:string,
    firstName:string,
    lastName:string
}

const useRegister = () => {
    const LoginSchema = yup.object({
        email: yup.string().required().email(),
        password : yup.string().required().min(8),
        firstName : yup.string().required(),
        lastName : yup.string().required()
    })
    const {register, handleSubmit , formState:{errors}} = useForm<IRegisterData>({
        resolver : yupResolver(LoginSchema),
        mode:"onSubmit"
    })
    const handleRegisterSubmit = (data:IRegisterData)=>{
        console.log(data)
    }
    return {
        handleRegisterSubmit,
        register,
        handleSubmit,
        errors,
    };
}
 
export default useRegister;