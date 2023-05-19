interface ISwiperTitle{
    title:string,
    img:string
}

const SwiperTitleCard = (i:ISwiperTitle) => {
    return ( 
        <div className="bg-05422C w-80 md:w-96 px-14 flex flex-col items-center md:px-20 py-7 md:py-20 rounded-2xl">
            <img className="md:w-52 w-40" src={i.img} alt="" />
            <h2 className="text-xl mt-6 mb-2 font-medium text-white">{i.title}</h2>
            <p className="text-sm font-normal text-white">Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius lorem blandit lectus magnis feugiat. </p>
        </div>
     );
}
 
export default SwiperTitleCard;