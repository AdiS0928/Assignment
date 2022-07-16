import Featurecard from "../Featurecard";
import { useEffect } from "react";
import { useState } from "react";
const Sidebar = () =>
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
    <div className="w-[296px] h-[1312px]">
        <div className="shopbar mt-[20vh] ml-[15vh]">
            <p className="shoptext mt-[2.5vh] ml-[3vh]">Search products</p>
            <img src="/Vectorsearchlogo.png" alt="" className="ml-[36vh] mt-[2.5vh]"/>
        </div>

        <div className="w-[296px] h-[98px] ml-[15vh] absolute">
            <p className="pricetext mt-[40vh]">Price</p>
            <img src="Filter.png " alt="" className="mt-[40vh] ml-[45vh]" />
            <img src="Filters.png" alt="" className="mt-[5vh]"/>
            <p className="shopprice mt-[3vh] ml-[40vh]">$5-$20</p>

            <p className="range mt-[3vh]">Range</p>
        </div>

        <div className="shopcat ml-[15vh]">
            <div className="w-[296px] h-[19px] absolute mt-[65vh]">
            <p className="Barprodhead">Product Categories</p>
            </div>


        <div className="w-[296px] h-[19px] absolute mt-[75vh]">
            <p className="Barprod">Coat and Jackets</p>
            <img src="arr.png" alt="" className="ml-[45vh] hover:cursor-pointer"/>
        </div>

        <div className="w-[296px] h-[19px] absolute mt-[82vh]">
            <p className="Barprod">Dresses</p>
            <img src="arr.png" alt="" className="ml-[45vh] hover:cursor-pointer"/>
        </div>


        <div className="w-[296px] h-[19px] absolute mt-[89vh]">
            <p className="Barprod">Playsuit</p>
            <img src="arr.png" alt="" className="ml-[45vh] hover:cursor-pointer"/>
        </div>


        <div className="w-[296px] h-[19px] absolute mt-[96vh]">
            <p className="Barprod">Short</p>
            <img src="arr.png" alt="" className="ml-[45vh] hover:cursor-pointer"/>
        </div>

        <div className="w-[296px] h-[19px] absolute mt-[103vh]">
            <p className="Barprod">Top</p>
            <img src="arr.png" alt="" className="ml-[45vh] hover:cursor-pointer"/>
        </div>

        <div className="w-[296px] h-[19px] absolute mt-[110vh]">
            <p className="Barprod">Bottoms</p>
            <img src="arr.png" alt="" className="ml-[45vh] hover:cursor-pointer"/>
        </div> 


        <div className="w-[233px] h-[661px]">
                <div className="w-[296px] h-[19px] absolute mt-[125vh]">
                    <p className="Barprodhead">Feature Product</p>
                </div>

        </div>
                <div className="mt-[40vh]">
                <Featurecard image={User[0].image} name={User[0].title.split(' ').slice(0, 3).join(' ')} price={User[0].price}/>
                </div>
                <div className="mt-[5vh]">
                <Featurecard image={User[1].image} name={User[1].title.split(' ').slice(0, 3).join(' ')} price={User[1].price}/>
                </div>
                <div className="mt-[5vh]">
                <Featurecard image={User[2].image} name={User[2].title.split(' ').slice(0, 3).join(' ')} price={User[2].price}/>
                </div>
                <div className="mt-[5vh]">
                <Featurecard image={User[3].image} name={User[3].title.split(' ').slice(0, 3).join(' ')} price={User[3].price}/>
                </div>
                <div className="mt-[5vh]">
                <Featurecard image={User[4].image} name={User[4].title.split(' ').slice(0, 3).join(' ')} price={User[4].price}/>
                </div>
                <div className="mt-[5vh]" >
                <Featurecard image={User[5].image} name={User[5].title.split(' ').slice(0, 3).join(' ')} price={User[5].price}/>
                </div>
        </div>

    </div>
)
}
export default Sidebar;