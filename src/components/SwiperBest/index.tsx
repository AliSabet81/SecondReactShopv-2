import { useState } from "react";
import { SwiperComponent } from "../swiper/homeBest";
import SwiperTitleCard from "../Cards/swiperTitleCard";

// const BestSwiper = () =>{
//     switch (BestButton) {
//         case "best":
//             return Products.filter((product)=>product.)
//         case "bundle":
//             return
//         case "sale":
//             return 
//     }
// }

const BestSwiperProduct = () => {
    const [BestButton , setBestButton] = useState("best")
    const TitleCard = () =>{
        switch (BestButton) {
            case "best":
                return <SwiperTitleCard title={"Shop our Best Sellers"} img={"product4.png"}/>
            case "bundle":
                return <SwiperTitleCard title={"Shop our Bundles & Promotions"} img={"product5.png"}/>
            case "sale":
                return <SwiperTitleCard title={"Shop our On Sales"} img={"product6.png"}/>
          }
    }
    return ( 
        <div className="container flex flex-col items-center gap-16 justify-center m-auto p-6 md:p-28">
            <h1 className="text-6xl text-center font-semibold max-w-4xl">BEST DISPENSARY TO BUY WEED ONLINE IN CANADA</h1>
            <div className="text-base font-normal w-full justify-between flex">
                <button onClick={()=>setBestButton("best")} className={`${BestButton==="best" ? "border-secondery bg-F2F6F4 text-secondery font-semibold": "text-46494F font-normal border-C8C9CB" } w-96 border text-base h-12 rounded-3xl`}>Best Sellers</button>
                <button onClick={()=>setBestButton("bundle")} className={`${BestButton==="bundle" ? "border-secondery bg-F2F6F4 text-secondery font-semibold": "text-46494F font-normal border-C8C9CB" } w-96 border text-base h-12 rounded-3xl`}>Bundles & Promotions</button>
                <button onClick={()=>setBestButton("sale")} className={`${BestButton==="sale" ? "border-secondery bg-F2F6F4 text-secondery font-semibold": "text-46494F font-normal border-C8C9CB" } w-96 border text-base h-12 rounded-3xl`}>On Sale</button>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-row gap-8">
                {TitleCard()}
                <div className="max-w-4xl">
                    <SwiperComponent variant={BestButton}></SwiperComponent>
                </div>
            </div>
        </div>
     );
}
 
export default BestSwiperProduct;