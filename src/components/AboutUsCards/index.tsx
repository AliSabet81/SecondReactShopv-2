import AboutUsCard from "../Cards/AboutUS";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HouseIcon from '@mui/icons-material/House';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
const AboutUsCards = ({variant}:{variant:"shop"|"home"}) => {
    const Cards = ()=>{
        switch (variant) {
            case "home":
                return(
                    <div className="container m-auto py-20 px-16 grid grid-cols-1 items-center justify-center md:grid-cols-3">
                        <AboutUsCard icone={<LocalShippingIcon fontSize="large"/>} title="Reliable Shipping" desc="Green Society provides Canada Post Xpress Shipping right to your doorstep! You can also opt in for shipping insurance. For orders over $149, shipping is free!"/>
                        <AboutUsCard icone={<HouseIcon fontSize="large"/>} title="You’re Safe With Us" desc="Our secure payment system accepts the most common forms of payments making the checkout process quicker! The payments we accept are debit, all major credit cards, and cryptocurrency."/>
                        <AboutUsCard icone={<MonetizationOnIcon fontSize="large"/>} title="Best Quality & Pricing" desc="Here at Green Society, we take pride in the quality of our products and service. Our prices are set to ensure you receive your medication at a reasonable price and safely"/>
                    </div>
                )
            case "shop":
                return(
                    <div className="container m-auto py-6 px-16 grid grid-cols-1 items-center justify-center md:grid-cols-3">
                        <AboutUsCard icone={<LocalShippingIcon fontSize="large"/>} title="Reliable Shipping" />
                        <AboutUsCard icone={<HouseIcon fontSize="large"/>} title="You’re Safe With Us" />
                        <AboutUsCard icone={<MonetizationOnIcon fontSize="large"/>} title="Best Quality & Pricing" />
                    </div>
                )
        }
    }
    return ( 
        <div className=" bg-F2F6F4">
            {Cards()}
        </div>
     );
}
 
export default AboutUsCards;