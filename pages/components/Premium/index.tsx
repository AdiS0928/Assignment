import Card from '../Premiumcard'
const Premium = () =>
{
return(
    <div className="bg-slate-100 absolute w-[1440px] h-[2000px] top-[965px]">
    <div className="Premium">
        <p className="PremiumHead">Our Premium Collection</p>
        <div className="premiumcat">
            <p className="T">T-Shirt</p>
            <p className="skirt">Skirt</p>
            <p className="short">Short</p>
            <p className="playsuit">Playsuit</p>
            <p className="dressed">Dressed</p>
            <p className="products">Products</p>
            <p className="coats">Coats & Jackets</p>
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