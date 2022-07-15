import Featurecard from "../Featurecard";
const Sidebar = () =>
{
return(
    <div className="w-[296px] h-[1312px]">
        <div className="shopbar mt-[20vh] ml-[15vh]">
            <p className="shoptext mt-[2.5vh] ml-[3vh]">Search products</p>
            <img src="/Vectorsearchlogo.png" alt="" className="ml-[40vh] mt-[2.5vh]"/>
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
                <div className="mt-[35vh]">
                <Featurecard />
                </div>
                <div className="mt-[5vh]">
                <Featurecard />
                </div>
                <div className="mt-[5vh]">
                <Featurecard />
                </div>
                <div className="mt-[5vh]">
                <Featurecard />
                </div>
                <div className="mt-[5vh]">
                <Featurecard />
                </div>
                <div className="mt-[5vh]">
                <Featurecard />
                </div>
        </div>

    </div>
)
}
export default Sidebar;