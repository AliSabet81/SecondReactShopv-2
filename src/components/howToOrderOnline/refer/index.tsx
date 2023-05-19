import Button from "../../button";
import "../index.css"
const Refer = () => {
    return ( 
        <div className="bg-05422C Refer flex gap-48 rounded-3xl py-24 px-32 items-center absolute -top-40">
                <div className="flex flex-col gap-8">
                    <h1 className="text-6xl font-semibold text-white">REFER A FRIENDS</h1>
                    <div>
                        <span className="text-3xl font-normal text-white">And Get</span>
                        <span className="text-3xl font-semibold text-F2BC1B">$30!</span>
                    </div>
                </div>
                <div>
                    <Button className="py-5 px-14 text-base">Refer Here</Button>
                </div>
            </div>
     );
}
 
export default Refer;