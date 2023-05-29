import { Box, Button, Container, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../Routes";
import useRegister from "./useRegister";

const RegisterScreen = () => {
    const {
        handleRegisterSubmit,
        register,
        handleSubmit,
        errors,
    } = useRegister()
    return (
        <div className="flex flex-col gap-12">
            <div>
                <h1 className="text-4xl mb-2 font-bold text-primary">Create Account</h1>
                <h2 className="text-xl  font-normal">Enter your details to sign-up.</h2>
            </div>
            <Box className="flex flex-col gap-6" onSubmit={handleSubmit(handleRegisterSubmit)} component="form">
                <div className="flex gap-4">
                    <TextField className="grow" error={Boolean(errors.firstName?.message)} helperText={errors.firstName?.message} {...register('firstName')} label="FirstName"></TextField>
                    <TextField className="grow" error={Boolean(errors.lastName?.message)} helperText={errors.lastName?.message} {...register('lastName')} label="LastName"></TextField>
                </div>
                <TextField error={Boolean(errors.email?.message)} helperText={errors.email?.message} {...register('email')} label="Email Address"></TextField>
                <TextField error={Boolean(errors.password?.message)} helperText={errors.password?.message} {...register('password')} label="Password"></TextField>
                <Button type="submit" variant="contained" className="!bg-primary !py-4 !text-xl !font-bold">Sign Up</Button>
            </Box>
            <div className="self-center text-sm flex gap-2 ">
                <h3 className="font-normal">Already have an account?</h3>
                <Link className="font-semibold " to={ROUTES.Login}>Sign In</Link>
            </div>
        </div>
    )
}
 
export default RegisterScreen;