import { IProductCard } from "../../../Routes/Product";
import Button from "../../button"



const ProductCard = (props : IProductCard) => {
    const Price = () =>{
        switch (props.variant) {
            case "standard":
                return (
                    <div>
                        <span className="text-base font-normal text-EB2606">{`$${props.price}`}</span>
                        <span className="text-sm font-light text-C8C9CB">/gram</span>
                    </div>
                )
            default:
                return (
                    <div>
                        <span className="text-sm line-through font-light text-C8C9CB">{props.price}</span>
                        <span className="text-base font-normal text-EB2606">{props.price}</span>
                    </div>
                );
        }
    }
    const Color = () =>{
        switch (props.color) {
            case "white":
                return "bg-white"
            default:
                return "bg-F4F4F4"
        }
    }
    return ( 
        <div className=" flex flex-col gap-6 hover:shadow">
            <div className={` h-60  ${Color()} flex justify-center items-center`}>
                <img className="w-40 z-20 rounded-full" src={props.img} alt="" />
            </div>
            <div className="flex flex-col gap-5 text-center items-center">
                <div className="flex flex-col gap-2">
                    <span className="text-sm font-light text-9D9EA2">{props.category}</span>
                    <h3 className="text-lg font-normal text-opacity-90">{props.title}</h3>
                    <div>
                        <span className="text-sm  font-normal">{`${props.score}/5`}</span>
                        <span className="text-sm font-normal">{props.reviews}</span>
                        <span className="text-sm font-normal text-C8C9CB">Reviews</span>
                    </div>
                </div>
                <div>
                    {Price()}
                </div>
                <div>
                    <input className="w-6" type="radio" value="28g" name="weight" placeholder="10" id="asds" />
                    <input type="radio" value="1/2lb" name="weight" id="" />
                    <input type="radio" value="1/4lb" name="weight" id="" />
                </div>
                {/* <Button className="">Add to Cart</Button> */}
                <Button className="px-6 py-3">Add to Cart</Button>
            </div>
        </div>
     );
}
 
export default ProductCard;