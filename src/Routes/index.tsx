import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts";
import HomeScreen from "../screens/home";
import ShopAllScreen from "../screens/shop";
import CategoryPage from "../screens/category";
import RegisterScreen from "../screens/auth/register";
import LoginScreen from "../screens/auth/login";
import AuthScreen from "../screens/auth";
export type TChildren = {
    name : string,
    path  : string,
}

export type RouteType = {
    path: string;
    variant ?:string,
    name : string,
    children ?: TChildren[] | undefined
}

export const ROUTES = {
    Home:"/",

    Auth:"/auth",
    Login:"/auth/login",
    Register:"/auth/Register",

    ShopAll:"/shopAll",

    Flower:"/shopAll/flower",
    Indica:"/shopAll/flower/indica",
    Hybrid:"/shopAll/flower/hybrid",
    Sativa:"/shopAll/flower/sativa",
    Shake:"/shopAll/flower/shake",
    AAAAWeed:"/shopAll/flower/aaaaweed",

    Edible:"/shopAll/edible",

    Concentrates:"/shopAll/concentrates",
    Diamonds:"/shopAll/concentrates/diamonds",
    Shatter:"/shopAll/concentrates/shatter",
    Budder:"/shopAll/concentrates/budder",
    Hash:"/shopAll/concentrates/hash",

    Mushrooms:"/shopAll/mushrooms",

    Promotions:"/shopAll/promotions",
    Wholesale:"/shopAll/promotions/wholesale",

    Support:"/other/support",
    AboutUs:"/other/aboutUs",
    FAQs:"/other/FAQs",
    ContactUs:"/other/contactUs",

    Rewards:"/other/rewards",
    Blog:"/other/blog",
    Track:"/track",
    Shipping:"/shipping",
    Refunds:"/refunds"
}

export const Router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:ROUTES.Home,
                element:<HomeScreen/>,
            },
            {
                path:ROUTES.ShopAll,
                element:<ShopAllScreen/>,
                children:[
                    {
                        path:ROUTES.Flower,
                        element:<CategoryPage name={"Flower"} desc={"Here at WestCoastSupply’s “ cannabis section, we showcase the best Indica, Hybrid, and Sativa medical cannabis strain selections at the best prices online. You can be assured that all our strains go through a strict screening process to ensure that all your cannabis needs are top-quality. All of our flowers are sourced from reputable growers, based in British Columbia, Canada. We have hige grade selection comes from growers that produce AAAA+ quality cannabis flowers and have many years of experience in the cannabis industry. You are guaranteed to be receiving high-quality flowers at the best prices online with our unbeatable sales!"}/>
                    },
                    {
                        path:ROUTES.Edible,
                        element:<CategoryPage name={"Edible"} desc={"Here at WestCoastSupply’s “ cannabis section, we showcase the best Indica, Hybrid, and Sativa medical cannabis strain selections at the best prices online. You can be assured that all our strains go through a strict screening process to ensure that all your cannabis needs are top-quality. All of our flowers are sourced from reputable growers, based in British Columbia, Canada. We have hige grade selection comes from growers that produce AAAA+ quality cannabis flowers and have many years of experience in the cannabis industry. You are guaranteed to be receiving high-quality flowers at the best prices online with our unbeatable sales!"}/>
                    },
                    {
                        path:ROUTES.Concentrates,
                        element:<CategoryPage name={"Concentrates"} desc={"Here at WestCoastSupply’s “ cannabis section, we showcase the best Indica, Hybrid, and Sativa medical cannabis strain selections at the best prices online. You can be assured that all our strains go through a strict screening process to ensure that all your cannabis needs are top-quality. All of our flowers are sourced from reputable growers, based in British Columbia, Canada. We have hige grade selection comes from growers that produce AAAA+ quality cannabis flowers and have many years of experience in the cannabis industry. You are guaranteed to be receiving high-quality flowers at the best prices online with our unbeatable sales!"}/>

                    },
                    {
                        path:ROUTES.Mushrooms,
                        element:<CategoryPage name={"Mushrooms"} desc={"Here at WestCoastSupply’s “ cannabis section, we showcase the best Indica, Hybrid, and Sativa medical cannabis strain selections at the best prices online. You can be assured that all our strains go through a strict screening process to ensure that all your cannabis needs are top-quality. All of our flowers are sourced from reputable growers, based in British Columbia, Canada. We have hige grade selection comes from growers that produce AAAA+ quality cannabis flowers and have many years of experience in the cannabis industry. You are guaranteed to be receiving high-quality flowers at the best prices online with our unbeatable sales!"}/>

                    },
                    {
                        path:ROUTES.Promotions,
                        element:<CategoryPage name={"Promotions"} desc={"Here at WestCoastSupply’s “ cannabis section, we showcase the best Indica, Hybrid, and Sativa medical cannabis strain selections at the best prices online. You can be assured that all our strains go through a strict screening process to ensure that all your cannabis needs are top-quality. All of our flowers are sourced from reputable growers, based in British Columbia, Canada. We have hige grade selection comes from growers that produce AAAA+ quality cannabis flowers and have many years of experience in the cannabis industry. You are guaranteed to be receiving high-quality flowers at the best prices online with our unbeatable sales!"}/>

                    },
                    {
                        path:ROUTES.Indica,
                        element:<CategoryPage name={"Indica"} desc={"Here at WestCoastSupply’s “ cannabis section, we showcase the best Indica, Hybrid, and Sativa medical cannabis strain selections at the best prices online. You can be assured that all our strains go through a strict screening process to ensure that all your cannabis needs are top-quality. All of our flowers are sourced from reputable growers, based in British Columbia, Canada. We have hige grade selection comes from growers that produce AAAA+ quality cannabis flowers and have many years of experience in the cannabis industry. You are guaranteed to be receiving high-quality flowers at the best prices online with our unbeatable sales!"}/>

                    },
                    {
                        path:ROUTES.Hybrid,
                        element:<CategoryPage name={"Hybrid"} desc={"Here at WestCoastSupply’s “ cannabis section, we showcase the best Indica, Hybrid, and Sativa medical cannabis strain selections at the best prices online. You can be assured that all our strains go through a strict screening process to ensure that all your cannabis needs are top-quality. All of our flowers are sourced from reputable growers, based in British Columbia, Canada. We have hige grade selection comes from growers that produce AAAA+ quality cannabis flowers and have many years of experience in the cannabis industry. You are guaranteed to be receiving high-quality flowers at the best prices online with our unbeatable sales!"}/>

                    },
                    {
                        path:ROUTES.Sativa,
                        element:<CategoryPage name={"Sativa"} desc={"Here at WestCoastSupply’s “ cannabis section, we showcase the best Indica, Hybrid, and Sativa medical cannabis strain selections at the best prices online. You can be assured that all our strains go through a strict screening process to ensure that all your cannabis needs are top-quality. All of our flowers are sourced from reputable growers, based in British Columbia, Canada. We have hige grade selection comes from growers that produce AAAA+ quality cannabis flowers and have many years of experience in the cannabis industry. You are guaranteed to be receiving high-quality flowers at the best prices online with our unbeatable sales!"}/>

                    },
                    {
                        path:ROUTES.AAAAWeed,
                        element:<CategoryPage name={"AAAAWeed"} desc={"Here at WestCoastSupply’s “ cannabis section, we showcase the best Indica, Hybrid, and Sativa medical cannabis strain selections at the best prices online. You can be assured that all our strains go through a strict screening process to ensure that all your cannabis needs are top-quality. All of our flowers are sourced from reputable growers, based in British Columbia, Canada. We have hige grade selection comes from growers that produce AAAA+ quality cannabis flowers and have many years of experience in the cannabis industry. You are guaranteed to be receiving high-quality flowers at the best prices online with our unbeatable sales!"}/>

                    },
                    {
                        path:ROUTES.Shake,
                        element:<CategoryPage name={"Shake"} desc={"Here at WestCoastSupply’s “ cannabis section, we showcase the best Indica, Hybrid, and Sativa medical cannabis strain selections at the best prices online. You can be assured that all our strains go through a strict screening process to ensure that all your cannabis needs are top-quality. All of our flowers are sourced from reputable growers, based in British Columbia, Canada. We have hige grade selection comes from growers that produce AAAA+ quality cannabis flowers and have many years of experience in the cannabis industry. You are guaranteed to be receiving high-quality flowers at the best prices online with our unbeatable sales!"}/>

                    },
                    {
                        path:ROUTES.Diamonds,
                        element:<CategoryPage name={"Diamonds"} desc={"Here at WestCoastSupply’s “ cannabis section, we showcase the best Indica, Hybrid, and Sativa medical cannabis strain selections at the best prices online. You can be assured that all our strains go through a strict screening process to ensure that all your cannabis needs are top-quality. All of our flowers are sourced from reputable growers, based in British Columbia, Canada. We have hige grade selection comes from growers that produce AAAA+ quality cannabis flowers and have many years of experience in the cannabis industry. You are guaranteed to be receiving high-quality flowers at the best prices online with our unbeatable sales!"}/>

                    },
                    {
                        path:ROUTES.Shatter,
                        element:<CategoryPage name={"Shatter"} desc={"Here at WestCoastSupply’s “ cannabis section, we showcase the best Indica, Hybrid, and Sativa medical cannabis strain selections at the best prices online. You can be assured that all our strains go through a strict screening process to ensure that all your cannabis needs are top-quality. All of our flowers are sourced from reputable growers, based in British Columbia, Canada. We have hige grade selection comes from growers that produce AAAA+ quality cannabis flowers and have many years of experience in the cannabis industry. You are guaranteed to be receiving high-quality flowers at the best prices online with our unbeatable sales!"}/>

                    },
                    {
                        path:ROUTES.Budder,
                        element:<CategoryPage name={"Budder"} desc={"Here at WestCoastSupply’s “ cannabis section, we showcase the best Indica, Hybrid, and Sativa medical cannabis strain selections at the best prices online. You can be assured that all our strains go through a strict screening process to ensure that all your cannabis needs are top-quality. All of our flowers are sourced from reputable growers, based in British Columbia, Canada. We have hige grade selection comes from growers that produce AAAA+ quality cannabis flowers and have many years of experience in the cannabis industry. You are guaranteed to be receiving high-quality flowers at the best prices online with our unbeatable sales!"}/>

                    },
                    {
                        path:ROUTES.Hash,
                        element:<CategoryPage name={"Hash"} desc={"Here at WestCoastSupply’s “ cannabis section, we showcase the best Indica, Hybrid, and Sativa medical cannabis strain selections at the best prices online. You can be assured that all our strains go through a strict screening process to ensure that all your cannabis needs are top-quality. All of our flowers are sourced from reputable growers, based in British Columbia, Canada. We have hige grade selection comes from growers that produce AAAA+ quality cannabis flowers and have many years of experience in the cannabis industry. You are guaranteed to be receiving high-quality flowers at the best prices online with our unbeatable sales!"}/>

                    },
                    {
                        path:ROUTES.Wholesale,
                        element:<CategoryPage name={"Wholesale"} desc={"Here at WestCoastSupply’s “ cannabis section, we showcase the best Indica, Hybrid, and Sativa medical cannabis strain selections at the best prices online. You can be assured that all our strains go through a strict screening process to ensure that all your cannabis needs are top-quality. All of our flowers are sourced from reputable growers, based in British Columbia, Canada. We have hige grade selection comes from growers that produce AAAA+ quality cannabis flowers and have many years of experience in the cannabis industry. You are guaranteed to be receiving high-quality flowers at the best prices online with our unbeatable sales!"}/>

                    },
                    
                ]
            },
            {
                path:"/other",
                children:[
                    {
                        path:ROUTES.AboutUs
                    },
                    {
                        path:ROUTES.FAQs
                    },
                    {
                        path:ROUTES.ContactUs
                    },
                    {
                        path:ROUTES.Rewards
                    },
                    {
                        path:ROUTES.Blog
                    },
                ]
            },
            {
                path:ROUTES.Auth,
                element:<AuthScreen/>,
                children:[
                    {
                       path:ROUTES.Register,
                        element:<RegisterScreen/>
                    },
                    {
                        path:ROUTES.Login,
                        element:<LoginScreen/>
                    } 
                ]
            },
            
        ]
    },
])

export const menuRoutes : RouteType[]=[
    {
        path: ROUTES.Home,
        name:"home",
        variant : "nav"
    },
    {
        path : ROUTES.ShopAll,
        variant : "nav",
        name : "ShopAll"
    },
    {
        path : ROUTES.Flower,
        variant : "navCategory",
        name : "Flower",
        children : [
            {
                name : "Indica",
                path : ROUTES.Indica,
            },
            {
                name : "Hybrica",
                path : ROUTES.Hybrid,
            },{
                name : "Sativa",
                path : ROUTES.Sativa,
            },
            {
                name : "AAAA Weed",
                path : ROUTES.AAAAWeed,
            },{
                name : "Shake/Trim",
                path : ROUTES.Shake,
            },
        ]
        
    },{
        path : ROUTES.Edible,
        variant : "navCategory",
        name : "Edibles"
    },
    {
        path : ROUTES.Concentrates,
        variant : "navCategory",
        name : "Concentrates",
        children : [
            {
                name : "Diamonds",
                path : ROUTES.Diamonds,
            },
            {
                name : "Shatter",
                path : ROUTES.Shatter,
            },
            {
                name : "Budder",
                path : ROUTES.Budder,
            },
            {
                name : "Hash",
                path : ROUTES.Hash,
            },
        ]
    },{
        path : ROUTES.Mushrooms,
        variant : "navCategory",
        name : "Mushrooms"
    },
    {
        path : ROUTES.Promotions,
        variant : "navCategory",
        name : "Promotions/Bundles",
        children : [
            {
                name : "Wholesale",
                path : ROUTES.Wholesale,
            }
        ]
    },
    {
        path : ROUTES.Support,
        variant : "nav",
        name : "Support",
        children : [
            {
                name : "AboutUs",
                path : ROUTES.AboutUs,
            },
            {
                name : "FAQs",
                path : ROUTES.FAQs,
            },
            {
                name : "ContactUs",
                path : ROUTES.ContactUs,
            },
        ]
    },
    {
        path : ROUTES.Rewards,
        variant : "nav",
        name : "Rewards"
    },
    {
        path : ROUTES.Blog,
        variant : "nav",
        name : "Blog"
    },
    {
        path : ROUTES.Track,
        name : "Track Your Order"
    },
    {
        path : ROUTES.Refunds,
        name : "Refunds"
    },{
        path : ROUTES.Shipping,
        name : "Shipping"
    },
]

