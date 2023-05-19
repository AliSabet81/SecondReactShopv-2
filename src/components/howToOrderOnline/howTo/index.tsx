import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HowToCard from "../../Cards/howto";
import Button from "../../button";

const HowTo = () => {
    return ( 
    <div className="container mt-72 gap-20 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-6 items-center">
            <h1 className="text-6xl text-center font-semibold w-2/3 text-white max">HOW TO ORDER WEED ONLINE FROM TOP SHELF BC - MAIL ORDER MARIJUANA</h1>
            <p className="w-1/2 text-center text-base font-normal text-9D9EA2">Ordering weed online from Top Shelf BC is easy. We are proud to have made the process accessible across multiple platforms and simple to understand, meaning that more people can come to us to buy their cannabis products online.</p>
        </div>
        <div className="grid grid-cols-2 gap-16 max-w-7xl m-auto">
            <HowToCard num={1} title="Register" icone={<LocalShippingIcon/>} desc="Sign up for an account with us. This is quick and simple. We don’t require any more details from you than the bare minimum needed for you to place an order and get your product delivered."/>
            <HowToCard num={2} title="Shop" icone={<LocalShippingIcon/>} desc="Decide on what you want to purchase. We stock a wide range of edibles,flowers , concentrates and mushrooms there is bound to be something for everyone."/>
            <HowToCard num={3} title="Male Payment" icone={<LocalShippingIcon/>} desc="Pay securely. Our site boasts sturdy protection certificates to keep your card details and related data safe."/>
            <HowToCard num={4} title="Relax" icone={<LocalShippingIcon/>} desc="Your product will be packaged discretely and shipped by Canada Post Xpresspost. We will provide you with a tracking number so then you can follow your mail order marijuana every step of the way."/>
        </div>
        <Button className="py-5 px-14 text-base">Choose your Weed</Button>
    </div> 
    );
}
 
export default HowTo;