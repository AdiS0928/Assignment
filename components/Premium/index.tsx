import Card from '../Premiumcard'

import { useEffect, useState } from 'react'

const Premium = (props:any) =>
{
    // const [User, setUser] = useState([]);
    // useEffect(()=>{
    //     l();
    //     console.log(User);

    // },[])

    // async function l() {
    //     const res= await fetch('https://fakestoreapi.com/products?limit=5')
    //     const data = res.json();
    //     data.then((value) => {
    //         setUser(value);
    //     })
    // } 
    // console.log(products)
return(
    <div className="bg-slate-100 absolute w-[2440px] h-[2000px] top-[965px]">
    <div className="Premium ml-[-10vh]">
        <p className="PremiumHead">{props.text}</p>
        <div className="premiumcat ml-[15vh]">
            <p className="T">T-Shirt</p>
            <p className="skirt">Skirt</p>
            <p className="short">Short</p>
            <p className="playsuit">Playsuit</p>
            <p className="dressed">Dressed</p>
            <p className="products">Products</p>
            <p className="coats ">Coats & Jackets</p>
        </div>
        <button className="Premiumbut">
            <p className="clickbut">Find out more</p>
        </button>
        <div>
        <div className='mt-[-75vh] ml-[5vh]'>
        
        
        <Card />
        </div>

        <div className='ml-[70vh] '>
        
        <Card />
        </div>

        <div className='ml-[135vh]'>
        
        <Card />
        </div>
        </div>

        <div className='mt-[100vh]'>

        <div className='ml-[5vh] mt-[-40vh]'>
        
        <Card />
        </div>

        <div className='ml-[70vh] '>
        
        <Card />
        </div>

        <div className='ml-[135vh]'>
        
        <Card />
        </div>
        </div>


    </div>
    </div>
)
}

export default Premium;