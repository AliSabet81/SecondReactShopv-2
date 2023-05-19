import NumberOneDispensaryCard from "../Cards/NumberOneDispensaryCard";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const NumberOneDispensary = () => {
    return ( 
        <div className="container m-auto p-9 md:p-28">
            <h1 className="md:text-6xl text-3xl max-w-3xl font-semibold">WHAT MAKES US THE <span className="text-F2BC1B">#1</span> ONLINE MARIJUANA DISPENSARY IN CANADA?</h1>
            <p className="text-base mt-4 mb-8 md:mt-6 md:mb-16 font-normal max-w-3xl">When it comes to what makes us the foremost online marijuana dispensary in Canada, we could wax lyrical about our positive qualities. Instead, to make this information clearer, we’ve highlighted the six prioritized features that we feel makes us a cut above the rest.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-16">
                <NumberOneDispensaryCard svg={<MonetizationOnIcon/>} title={"CUSTOMER SERVICE"} desc={"Whether it is answering any questions you have before making a purchase, helping out with the buying process itself or taking your feedback under consideration, we are proud to provide high quality customer service that makes you – the customer – the most important person in the transaction."}/>
                <NumberOneDispensaryCard svg={<MonetizationOnIcon/>} title={"SECURITY"} desc={"When it comes to security, we only keep what details are necessary for you to have an account with us and make an order. When it comes to shipping your mail order marijuana out, we use only tamper-proof and discrete packaging so then what you’ve purchased is your business only."}/>
                <NumberOneDispensaryCard svg={<MonetizationOnIcon/>} title={"BEST VALUE"} desc={"We are continually adjusting what we supply and our prices to ensure that we maintain an optimal balance of affordable and quality for our products. We invest in the best quality strains that we can find and are always on the lookout for new, affordable and high quality weed products."}/>
                <NumberOneDispensaryCard svg={<MonetizationOnIcon/>} title={"DELIVERY INSURANCE"} desc={"If your mail order marijuana becomes lost, stolen, or damaged during transit, we will send you a replacement completely free of charge. Free Canada Post Xpress shipping on all orders over $120"}/>
                <NumberOneDispensaryCard svg={<MonetizationOnIcon/>} title={"HIGHEST QUALITY"} desc={"All of our cannabis products are tested to ensure that they are the highest quality possible. We work with expert suppliers and are always revising what makes a quality cannabis product to ensure that we have only the best available."}/>
                <NumberOneDispensaryCard svg={<MonetizationOnIcon/>} title={"TRUST"} desc={"With over 15 years in the weed business, you can rest assured that you will be taken care of. You can guarantee that we have your best interests in mind. Feel free to check out our reviews."}/>
            </div>
        </div>
     );
}
 
export default NumberOneDispensary;