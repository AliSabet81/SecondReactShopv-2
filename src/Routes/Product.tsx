export interface IProductCard {
    img : string
    category : string
    title : string 
    score : number
    reviews : number
    price : number
    discount ?: number 
    variant : "standard" | "outOfStock" | "discount",
    index ?: number,
    color ?: string,
}

export const Products : IProductCard[] = [
    {
        index : 1 ,
        img: "product1.png",
        category : "Flower",
        title : "2 Oz Deal Watermelon Zkittles + Purple Gushers",
        score : 4.6,
        reviews : 135,
        price : 80,
        variant : "standard"
    },
    {
        index : 2 ,
        img: "product2.png",
        category : "Flower",
        title : "Mix And Match Shatter/Budder 28g (4 X 7G)",
        score : 4.6,
        reviews : 135,
        price : 200,
        discount: 20,
        variant : "discount"
    },{
        index : 3 ,
        img: "product3.png",
        category : "Flower",
        title : "2 Oz Deal Ahi Tuna + Master Tuna (2 x 9G)",
        score : 4.6,
        reviews : 135,
        price : 200,
        discount : 30,
        variant : "outOfStock"
    },{
        index : 4 ,
        img: "product4.png",
        category : "Flower",
        title : "2 Oz Deal Watermelon Zkittles + Purple Gushers",
        score : 4.6,
        reviews : 135,
        price : 200,
        discount: 20,
        variant : "discount"
    },{
        index : 5 ,
        img: "product5.png",
        category : "Flower",
        title : "Mix And Match Shatter/Budder 28g (4 X 7G)",
        score : 4.6,
        reviews : 135,
        price : 200,
        discount : 30,
        variant : "outOfStock"
    },{
        index : 6 ,
        img: "product6.png",
        category : "Flower",
        title : "2 Oz Deal Ahi Tuna + Master Tuna (2 x 9G)",
        score : 4.6,
        reviews : 135,
        price : 80,
        variant : "standard"
    },{
        index : 7 ,
        img: "product7.png",
        category : "Flower",
        title : "2 Oz Deal Watermelon Zkittles + Purple Gushers",
        score : 4.6,
        reviews : 135,
        price : 80,
        variant : "standard"
    },
    {
        index : 8 ,
        img: "product1.png",
        category : "Flower",
        title : "2 Oz Deal Watermelon Zkittles + Purple Gushers",
        score : 4.6,
        reviews : 135,
        price : 80,
        variant : "standard"
    },
    {
        index : 9 ,
        img: "product6.png",
        category : "Flower",
        title : "2 Oz Deal Ahi Tuna + Master Tuna (2 x 9G)",
        score : 4.6,
        reviews : 135,
        price : 80,
        variant : "standard"
    },




    {
        index : 10 ,
        img: "product4.png",
        category : "Flower",
        title : "2 Oz Deal Watermelon Zkittles + Purple Gushers",
        score : 4.6,
        reviews : 200,
        price : 80,
        variant : "standard"
    },
    {
        index : 11 ,
        img: "product6.png",
        category : "Flower",
        title : "Mix And Match Shatter/Budder 28g (4 X 7G)",
        score : 4.6,
        reviews : 200,
        price : 200,
        discount: 20,
        variant : "discount"
    },{
        index : 12 ,
        img: "product1.png",
        category : "Flower",
        title : "2 Oz Deal Ahi Tuna + Master Tuna (2 x 9G)",
        score : 4.6,
        reviews : 200,
        price : 200,
        discount : 30,
        variant : "outOfStock"
    },{
        index : 13 ,
        img: "product2.png",
        category : "Flower",
        title : "2 Oz Deal Watermelon Zkittles + Purple Gushers",
        score : 4.6,
        reviews : 200,
        price : 200,
        discount: 20,
        variant : "discount"
    },{
        index : 14 ,
        img: "product5.png",
        category : "Flower",
        title : "Mix And Match Shatter/Budder 28g (4 X 7G)",
        score : 4.6,
        reviews : 200,
        price : 200,
        discount : 30,
        variant : "outOfStock"
    },{
        index : 15 ,
        img: "product7.png",
        category : "Flower",
        title : "2 Oz Deal Ahi Tuna + Master Tuna (2 x 9G)",
        score : 4.6,
        reviews : 200,
        price : 80,
        variant : "standard"
    },{
        index : 16 ,
        img: "product1.png",
        category : "Flower",
        title : "2 Oz Deal Watermelon Zkittles + Purple Gushers",
        score : 4.6,
        reviews : 200,
        price : 80,
        variant : "standard"
    },
    {
        index : 17 ,
        img: "product3.png",
        category : "Flower",
        title : "2 Oz Deal Watermelon Zkittles + Purple Gushers",
        score : 4.6,
        reviews : 200,
        price : 80,
        variant : "standard"
    },
    {
        index : 18 ,
        img: "product2.png",
        category : "Flower",
        title : "2 Oz Deal Ahi Tuna + Master Tuna (2 x 9G)",
        score : 4.6,
        reviews : 200,
        price : 80,
        variant : "standard"
    },




    {
        index : 19 ,
        img: "product7.png",
        category : "Flower",
        title : "2 Oz Deal Watermelon Zkittles + Purple Gushers",
        score : 4.6,
        reviews : 260,
        price : 80,
        variant : "standard"
    },
    {
        index : 20 ,
        img: "product6.png",
        category : "Flower",
        title : "Mix And Match Shatter/Budder 28g (4 X 7G)",
        score : 4.6,
        reviews : 260,
        price : 200,
        discount: 20,
        variant : "discount"
    },{
        index : 21 ,
        img: "product5.png",
        category : "Flower",
        title : "2 Oz Deal Ahi Tuna + Master Tuna (2 x 9G)",
        score : 4.6,
        reviews : 260,
        price : 200,
        discount : 30,
        variant : "outOfStock"
    },{
        index : 22 ,
        img: "product4.png",
        category : "Flower",
        title : "2 Oz Deal Watermelon Zkittles + Purple Gushers",
        score : 4.6,
        reviews : 260,
        price : 200,
        discount: 20,
        variant : "discount"
    },{
        index : 23 ,
        img: "product3.png",
        category : "Flower",
        title : "Mix And Match Shatter/Budder 28g (4 X 7G)",
        score : 4.6,
        reviews : 260,
        price : 200,
        discount : 30,
        variant : "outOfStock"
    },{
        index : 24 ,
        img: "product2.png",
        category : "Flower",
        title : "2 Oz Deal Ahi Tuna + Master Tuna (2 x 9G)",
        score : 4.6,
        reviews : 260,
        price : 80,
        variant : "standard"
    },{
        index : 25 ,
        img: "product1.png",
        category : "Flower",
        title : "2 Oz Deal Watermelon Zkittles + Purple Gushers",
        score : 4.6,
        reviews : 260,
        price : 80,
        variant : "standard"
    },
    {
        index : 26 ,
        img: "product7.png",
        category : "Flower",
        title : "2 Oz Deal Watermelon Zkittles + Purple Gushers",
        score : 4.6,
        reviews : 260,
        price : 80,
        variant : "standard"
    },
    {
        index : 27 ,
        img: "product6.png",
        category : "Flower",
        title : "2 Oz Deal Ahi Tuna + Master Tuna (2 x 9G)",
        score : 4.6,
        reviews : 260,
        price : 80,
        variant : "standard"
    },
]