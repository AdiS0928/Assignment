import { useEffect } from "react";
import { useState } from "react";
import Card from "../Flashcard";
const Flash = () =>
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
    <div className="Flash">

        <p className="flashHead ml-[80vh] mt-[20vh]">Top Items</p>
        <p className="flashdesc ml-[70vh] mt-[35vh]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
<div className="ml-[250vh] mt-[50vh]">
        <Card image={User[0].image} name={User[0].title.split(' ').slice(0, 3).join(' ')} price={User[0].price}/>
        </div>

<div className="ml-[185vh] mt-[50vh]">
        <Card image={User[1].image} name={User[1].title.split(' ').slice(0, 3).join(' ')} price={User[1].price}/>
        </div>
<div className="ml-[120vh] mt-[50vh]">
        <Card image={User[2].image} name={User[2].title.split(' ').slice(0, 3).join(' ')} price={User[2].price}/>
        </div>
<div className="ml-[55vh] mt-[50vh]">
        <Card image={User[3].image} name={User[3].title.split(' ').slice(0, 3).join(' ')} price={User[3].price}/>
        </div>
        <div className="ml-[-10vh] mt-[50vh]">
        <Card image={User[4].image} name={User[4].title.split(' ').slice(0, 3).join(' ')} price={User[4].price}/>
        </div>

        <div className="mt-[130vh] flex flex-wrap flex-row ml-[-40vh]">
            <img className="ml-[145vh] hover:cursor-pointer" src="/Ellipse.png" alt="" />
            <img className="ml-[2.2rem] hover:cursor-pointer" src="/Ellipse.png" alt="" />
            <img className="ml-[2.2rem] hover:cursor-pointer" src="/Ellipse2.png" alt="" />
            <img className="ml-[2.2rem] hover:cursor-pointer" src="/Ellipse.png" alt="" />
            <img className="ml-[2.2rem] hover:cursor-pointer" src="/Ellipse.png" alt="" />
        </div>
    </div>
    )

}

export default Flash;