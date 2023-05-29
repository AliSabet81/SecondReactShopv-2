import { Box, Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../Routes";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useLogin from "./useLogin";


const LoginScreen = () => {
    const {
        handleLoginSubmit,
        register,
        handleSubmit,
        errors,
        passwordType,
        setPasswordType
    } = useLogin()
    return (
        <div className="flex flex-col gap-12">
            <div>
                <h1 className="text-4xl mb-2 font-bold text-primary">Welcome</h1>
                <h2 className="text-xl font-normal">Enter your email and password to sign-in.</h2>
            </div>
            <Box className="flex flex-col gap-6" onSubmit={handleSubmit(handleLoginSubmit)} component="form">
                <TextField error={Boolean(errors.email?.message)} helperText={errors.email?.message} {...register('email')} label="Email Address"></TextField>
                <TextField type={passwordType} error={Boolean(errors.password?.message)} helperText={errors.password?.message} {...register('password')}  label="Password" InputProps={{
                    endAdornment:( 
                        <InputAdornment position="start">
                            <IconButton onClick={()=>{
                                setPasswordType((prev)=>{
                                    if (prev === 'password') return 'text'
                                    return 'password'
                                })
                                }}>
                                {passwordType === "text" ?<VisibilityIcon/> : <VisibilityOffIcon/>}
                            </IconButton>
                        </InputAdornment>),
                }}></TextField>
                <Button type="submit" variant="contained" className="!bg-primary !py-4 !text-xl !font-bold">Sign in</Button>
            </Box>
            <div className="self-center text-sm flex gap-2 ">
                <h3 className="font-normal">Don’t have an account?</h3>
                <Link className="font-semibold " to={ROUTES.Register}>Sign Up</Link>
            </div>
        </div>
    )
}
 
export default LoginScreen;