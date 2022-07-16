import Card from '../Premiumcard'

import { useEffect, useState } from 'react'

const Premium =  (props:any) =>
{
    const [User, setUser] = useState([{image:'',title:'',category:''},{image:'',title:'',category:''},{image:'',title:'',category:''},{image:'',title:'',category:''},{image:'',title:'',category:''},{image:'',title:'',category:''}]);
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
        
        
        <Card image={User[0].image} name={User[0].title.split(' ').slice(0, 3).join(' ')} cat={User[0].category}/>
        </div>

        <div className='ml-[70vh] '>
        
        <Card image={User[1].image} name={User[1].title.split(' ').slice(0, 3).join(' ')} cat={User[1].category}/>
        </div>

        <div className='ml-[135vh]'>
        
        <Card image={User[2].image} name={User[2].title.split(' ').slice(0, 3).join(' ')} cat={User[2].category}/>
        </div>
        </div>

        <div className='mt-[100vh]'>

        <div className='ml-[5vh] mt-[-40vh]'>
        
        <Card image={User[3].image} name={User[3].title.split(' ').slice(0, 3).join(' ')} cat={User[3].category}/>
        </div>

        <div className='ml-[70vh] '>
        
        <Card image={User[4].image} name={User[4].title.split(' ').slice(0, 3).join(' ')} cat={User[4].category}/>
        </div>

        <div className='ml-[135vh]'>
        
        <Card image={User[5].image} name={User[5].title.split(' ').slice(0, 3).join(' ')} cat={User[5].category}/>
        </div>
        </div>


    </div>
    </div>
)
}

export default Premium;