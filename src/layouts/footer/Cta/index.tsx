import TextField from "../../../components/textField";

const Cta = () => {
    return ( 
        <div className="bg-05422C rounded-3xl p-16 gap-8 flex flex-col items-start absolute -top-52">
                <div className="flex flex-col gap-6 items-start">
                    <h1 className="font-semibold text-6xl text-white w-2/3">UNLOCK 20% OFF YOUR FIRST ORDER</h1>
                    <h2 className="font-normal text-xl text-C3D2CC">Reveal coupon code by entering your email</h2>
                </div>
                    <hr className="w-full text-white"/>
                    <TextField variant="email"/>
            </div>
     );
}
 
export default Cta;