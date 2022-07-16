import Shopcard from "../Shopcard";
import Sidebar from "../Sidebar";
import News from "../News";
import { useEffect } from "react";
import { useState } from "react";
const Shopbottom = () =>
{
    const [User, setUser] = useState([{image:'',title:'',category:'',price:''},{image:'',title:'',category:'',price:''},{image:'',title:'',category:'',price:''},{image:'',title:'',category:'',price:''},{image:'',title:'',category:'',price:''},{image:'',title:'',category:'',price:''},{image:'',title:'',category:'',price:''},{image:'',title:'',category:'',price:''}]);
    useEffect(()=>{
        l();
        console.log(User[1]);

    },[])

    async function l() {
        const res= await fetch('https://fakestoreapi.com/products?limit=7')
        const data = res.json();
        data.then((value) => {
            console.log(value)
            setUser(value);
        })
    }
return(
    <div className="h-[2400px] w-[2440px] bg-slate-100">
            
            <Sidebar />
            <div className="ml-[70vh]">
                <Shopcard image={User[0].image} name={User[0].title.split(' ').slice(0, 3).join(' ')} price={User[0].price}/>
            </div>
            <div className="ml-[137vh]">
                <Shopcard image={User[1].image} name={User[1].title.split(' ').slice(0, 3).join(' ')} price={User[1].price}/>
            </div>
            <div className="ml-[70vh] mt-[-60vh]">
                <Shopcard image={User[2].image} name={User[2].title.split(' ').slice(0, 3).join(' ')} price={User[2].price}/>
            </div>

            <div className="ml-[137vh] mt-[-60vh]">
                <Shopcard image={User[3].image} name={User[3].title.split(' ').slice(0, 3).join(' ')} price={User[3].price}/>
            </div>

            <div className="ml-[70vh] mt-[-120vh]">
                <Shopcard image={User[4].image} name={User[4].title.split(' ').slice(0, 3).join(' ')} price={User[4].price}/>
            </div>

            <div className="ml-[137vh] mt-[-120vh]">
                <Shopcard image={User[5].image} name={User[5].title.split(' ').slice(0, 3).join(' ')} price={User[5].price}/>
            </div>

            <div className="ml-[70vh] mt-[-180vh]">
                <Shopcard image={User[6].image} name={User[6].title.split(' ').slice(0, 3).join(' ')} price={User[6].price}/>
            </div>

            <div className="ml-[137vh] mt-[-180vh]">
                <Shopcard image={User[6].image} name={User[6].title.split(' ').slice(0, 3).join(' ')} price={User[6].price}/>
            </div>

            <button className="shopbutcard mt-[250vh] ml-[127vh]">
                <p className="shopcardbuttext ml-[3.5vh] text-white">
                    See More
                </p>
            </button>
            <div className="mt-[270vh] ml-[15vh]">
                <News />
            </div>
            
            

    </div>
)
}

export default Shopbottom;