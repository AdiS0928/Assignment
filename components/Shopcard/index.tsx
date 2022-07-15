const Shopcard = () =>
{
return(
    <div className="w-[424px] h-[375px] bg-white rounded-[6px] absolute">
        
            <p className="shopcardhead mt-[33vh] ml-[19vh]">
            Urbano Jacket
            </p>

   


        <p className="shopsell mt-[45vh] ml-[25vh]">
        watchmenow
        </p>

        <p className="shopcardprice mt-[50vh] ml-[29vh]">
        $99
        </p>
        <div className="flex mt-[40vh] ml-[24vh]">
        <img src="/Star.png" className="w-[16px] h-[16px]">

        </img>
        <img  src="/Star.png" className="w-[16px] h-[16px] ml-[0.5vh]">

        </img>
        <img src="/Star.png" className="w-[16px] h-[16px] ml-[0.5vh]">

        </img>
        <img src="/Star.png" className="w-[16px] h-[16px] ml-[0.5vh]">
 
        </img>
        <img src="/Star.png" className="w-[16px] h-[16px] ml-[0.5vh]">

        </img>
        </div>
        <button>
        <img src="Background.png" className="ml-[59vh] mt-[-43vh]" />
        <img src="heart.png" alt="" className="ml-[60vh] mt-[-2.7vh]" />
        </button>

    </div>
)
}
export default Shopcard;