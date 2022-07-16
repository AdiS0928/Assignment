import Cartcard from "../CartCard";
import Checkout from "../Checkout/Checkout";
import Flash from "../Flash";
import News from "../News";
import Footer from "../Footer";
import { useEffect } from "react";
import { useState } from "react";

const Cartbottom = () =>
{
    const [User, setUser] = useState([{image:'',title:'',category:'',price:''},{image:'',title:'',category:'',price:''},{image:'',title:'',category:'',price:''},{image:'',title:'',category:'',price:''},{image:'',title:'',category:'',price:''},{image:'',title:'',category:'',price:''}]);
    useEffect(()=>{
        l();
        console.log(User[1]);

    },[])

    async function l() {
        const res= await fetch('https://fakestoreapi.com/products?limit=6')
        const data = res.json();
        data.then((value) => {
            console.log(value)
            setUser(value);
        })
    }
    return(
        <div className="h-[1400px] w-[2440] mt-[1000px] bg-slate-100 ">
            <div className="w-[1236px] h-[1151px]  ml-[15vh] mt-[20vh] absolute">
            <p className="sc">1. Shopping Cart</p>
            <p className="check ml-[30vh]">2. Checkout</p>
            <p className="check  ml-[60vh]">3. Order Succesed</p>
            <p className="cartheadd  mt-[15vh]">My Cart</p>
            <div className="mt-[30vh]"> 
            <Cartcard image={User[0].image} name={User[0].title.split(' ').slice(0, 3).join(' ')} price={User[0].price}/>
            </div>

            <div className="mt-[10vh]"> 
            <Cartcard image={User[2].image} name={User[2].title.split(' ').slice(0, 3).join(' ')} price={User[2].price}/>
            </div>

            <div className="mt-[10vh]"> 
            <Cartcard image={User[3].image} name={User[3].title.split(' ').slice(0, 3).join(' ')} price={User[3].price}/>
            </div>

            <div className="mt-[10vh]"> 
            <Cartcard image={User[4].image} name={User[4].title.split(' ').slice(0, 3).join(' ')} price={User[4].price}/>
            </div>

            <div className="mt-[-152vh] ml-[110vh]">
                <Checkout />
            </div>

            <div className="absolute mt-[170vh] ml-[-25vh]">
            <Flash />
            </div>

            <div className="absolute w-[2440px] h-[680px] bg-slate-100 mt-[320vh] ml-[-20vh]">
                <div className="absolute mt-[20vh] ml-[20vh]">
                <News />
                </div>
            </div>

            <div className="absolute   mt-[440vh]">
                <Footer />
            </div>
            </div>
        </div>
    )
}

export default Cartbottom;